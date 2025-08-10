'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { BillingDetailsForm, BillingFormData } from './billing-details-form';
import { CheckoutProduct, CreateOrderInput, Currency } from './types';
import { createOrder } from '@/lib/payload/orders';
import { getLocalStorageReferralCode } from '@/lib/services/affiliate';
import { getCountryByCode } from '@/constants/countries';

// utils (existing)
import {
  loadRazorpayScript,
  formatProductPricing,
  createPriceFormatter,
  calculateTotals,
  DISCOUNT_CODE,
} from './utils';

// new pricing helpers (as requested)
import {
  getPricingContext,
  calculatePlanPrice,
  calculateSetupPrice,
} from '@/lib/services/getPricing';
import { OrderSummary } from './order-summary';

/**
 * Note:
 * - subscriptionPlans in CheckoutProduct is an array of SubscriptionPlan
 *   (per your types). This file treats it as an array and finds the chosen
 *   plan + billing option by id or planName (or falls back to the first).
 *
 * - We build the billing option with `billingCycle` (required by the pricing helpers)
 *   and a setup option with setupCostUSD/setupCostINR where available.
 */

export default function CheckoutPage({
  product,
  countryCode,
}: {
  product: CheckoutProduct;
  countryCode: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') ?? undefined;
  const billingCycle = (searchParams.get('billingcycle') ?? undefined) as
    | 'monthly'
    | 'yearly'
    | 'one-time'
    | undefined;

  const [isSubmitting, setIsSubmitting] = useState(false);

  // pricing state (computed async so we can use getPricingContext)
  const [unitPrice, setUnitPrice] = useState<number | undefined>(undefined);
  const [setupCost, setSetupCost] = useState<number>(0);
  const [currencyCode, setCurrencyCode] = useState<Currency>('USD');
  const [discountReferralCode, setDiscountReferralCode] = useState<string | undefined>(undefined);

  // synchronous fallback using existing util so UI doesn't break while async resolves
  const fallback = useMemo(
    () => formatProductPricing(product, countryCode, plan, billingCycle),
    [product, countryCode, plan, billingCycle]
  );

  useEffect(() => {
    let mounted = true;

    async function computePricing() {
      try {
        // get purchasing power + (optionally) country from context
        const pricingCtx = await getPricingContext();
        // prefer the explicit countryCode prop when provided
        const country = countryCode || pricingCtx.country || 'US';
        const ppp = pricingCtx.ppp ?? 1;

        // Build billing option shape expected by calculatePlanPrice
        // We'll try to locate a matching SubscriptionPlan and BillingOption entry
        type BillingCycleUnion = 'monthly' | 'yearly' | 'one-time';

        const billingOption = {
          billingCycle: (billingCycle ?? 'monthly') as BillingCycleUnion,
          priceUSD: 0,
          priceINR: 0,
        };

        const setupOption = {
          setupCostUSD: 0,
          setupCostINR: 0,
        };

        // Try to find the subscription plan (match by id or planName). Fallback to first plan.
        const plans = Array.isArray(product.subscriptionPlans)
          ? product.subscriptionPlans
          : [];

        const matchedPlan =
          (plan &&
            plans.find(
              (p) => p.id === plan || (p.planName && p.planName === plan)
            )) ||
          plans[0];

        if (matchedPlan) {
          // billingOptions exists on the matched plan
          const billingEntry =
            (billingCycle &&
              matchedPlan.billingOptions.find(
                (b) => b.billingCycle === billingCycle
              )) ||
            matchedPlan.billingOptions[0];

          if (billingEntry) {
            billingOption.priceUSD = Number(billingEntry.priceUSD ?? 0);
            billingOption.priceINR = Number(
              billingEntry.priceINR ?? billingEntry.priceUSD ?? 0
            );
            billingOption.billingCycle = billingEntry.billingCycle as BillingCycleUnion;

            // If the billing entry contains setup-like fields (some shapes include them),
            // prefer them. We guard-safely with optional chaining.
            // (your SubscriptionPlan.billingOptions may or may not include setup fields)
            const maybeSetupUSD = (billingEntry as unknown as { setupCostUSD?: number })?.setupCostUSD;
            const maybeSetupINR = (billingEntry as unknown as { setupCostINR?: number })?.setupCostINR;

            if (typeof maybeSetupUSD === 'number') {
              setupOption.setupCostUSD = Number(maybeSetupUSD);
              setupOption.setupCostINR = Number(maybeSetupINR ?? maybeSetupUSD);
            }
          }
        }

        // fallback: product-level setup cost fields (if present)
        if (
          (!setupOption.setupCostUSD && !setupOption.setupCostINR) &&
          (typeof product.setupCostUSD === 'number' || typeof product.setupCostINR === 'number')
        ) {
          setupOption.setupCostUSD = Number(product.setupCostUSD ?? 0);
          setupOption.setupCostINR = Number(
            product.setupCostINR ?? setupOption.setupCostUSD ?? 0
          );
        }

        // If we still have zero prices (no plan shape matched), fall back to the synchronous fallback values
        if (!billingOption.priceUSD && !billingOption.priceINR) {
          billingOption.priceUSD = fallback.unitPrice ?? 0;
          billingOption.priceINR = fallback.unitPrice ?? 0;
        }

        if (!setupOption.setupCostUSD && !setupOption.setupCostINR) {
          setupOption.setupCostUSD = fallback.setupCost ?? 0;
          setupOption.setupCostINR = fallback.setupCost ?? 0;
        }

        const planPrice = calculatePlanPrice(billingOption, country, ppp);
        const setupPrice = calculateSetupPrice(setupOption, country, ppp);

        if (!mounted) return;

        setUnitPrice(Number(planPrice.amount ?? 0));
        setSetupCost(Number(setupPrice.amount ?? 0));
        setCurrencyCode(
          (planPrice.currencyCode ?? setupPrice.currencyCode ?? 'USD') as Currency
        );
      } catch (err) {
        console.error(
          'Failed to compute pricing using calculatePlanPrice/calculateSetupPrice',
          err
        );
        // fallback: keep synchronous values
        setUnitPrice(fallback.unitPrice);
        setSetupCost(fallback.setupCost ?? 0);
        setCurrencyCode((fallback.currency ?? 'USD') as Currency);
      }
    }

    computePricing();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, countryCode, plan, billingCycle, fallback]);

  // if unitPrice still undefined, show loading or fallback values
  const effectiveUnitPrice =
    typeof unitPrice === 'number' ? unitPrice : fallback.unitPrice;
  const effectiveSetupCost =
    typeof setupCost === 'number' ? setupCost : fallback.setupCost ?? 0;

  if (effectiveUnitPrice === undefined) throw new Error('Invalid plan/billing cycle.');

  // Price formatter
  const formatPrice = useMemo(() => createPriceFormatter(currencyCode), [currencyCode]);

  /** Submit billing details & handle payment */
  const onBillingSubmit = async (data: BillingFormData, isDiscountApplied: boolean) => {
    setIsSubmitting(true);
    const localStorageReferralCode = getLocalStorageReferralCode();
    const { originalPrice, discountedUnitPrice, subtotal, taxes, total } =
      calculateTotals(effectiveUnitPrice, effectiveSetupCost, isDiscountApplied);

    const orderInput: CreateOrderInput = {
      productTitle: product.title,
      productThumbnail: product.thumbnail?.id || undefined,
      currency: currencyCode,
      originalPrice,
      discountedPrice: discountedUnitPrice,
      subtotal,
      taxes,
      total,
      setupCost: effectiveSetupCost > 0 ? effectiveSetupCost : undefined,
      paymentMethod: 'razorpay',
      paymentStatus: 'pending',
      countryCode,
      billingDetails: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        postalCode: data.zip,
        country: data.country,
      },
      orderStatus: 'pending',
      referralCode: discountReferralCode || localStorageReferralCode || 'company',
      affiliate: {
        paymentStatus: 'pending',
        commissionPercentage: product.affiliateCommission || 0,
      },
      discountCode: isDiscountApplied ? DISCOUNT_CODE : undefined,
    };

    try {
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        toast.error('Razorpay SDK failed to load. Please try again.');
        return;
      }

      const res = await fetch('/routes/create-razorpay-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: total }),
      });

      const order = await res.json();

      // NOTE: Many projects include @types/razorpay or a global declaration for window.Razorpay.
      // If your project already has those types, the following will be typed properly.
      // If you get an error here, add proper Razorpay types to the project (recommended).
      // We intentionally avoid adding any `any` in this file.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - rely on global Razorpay type in your environment
      const razorpay = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: order.amount,
        currency: order.currency,
        name: 'Viyaga',
        description: 'Product Payment',
        order_id: order.id,
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          toast.success('Payment successful!');
          try {
            const orderData: CreateOrderInput = {
              ...orderInput,
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
              paymentStatus: 'paid',
            };
            const payloadRes = await createOrder(orderData);
            if ((payloadRes as { error?: unknown }).error) throw new Error('Failed to create order');
            router.push('/dashboard/collections/orders');
          } catch (error) {
            console.error('Order creation failed:', error);
            toast.error('Failed to create order after payment. Please contact support.');
          }
        },
        prefill: {
          name: data.fullName,
          email: data.email,
          contact: data.phone,
        },
        theme: { color: '#3399cc' },
      });

      razorpay.open();
    } catch (err) {
      console.error(err);
      toast.error('Failed to process payment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-16 md:py-20 bg-gradient-to-b from-[#f8fafc] via-[#e2e8f0] to-[#f8fafc] dark:from-[#00182e] dark:via-[#011925] dark:to-[#00182e]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-3xl font-semibold mb-6 mt-6 text-gray-800 dark:text-gray-100">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <BillingDetailsForm
              defaultCountry={getCountryByCode(countryCode) || 'United States'}
              onSubmit={(data) =>
                onBillingSubmit(
                  data,
                  (document.getElementById('discount-applied') as HTMLInputElement)?.value === 'true'
                )
              }
            />
          </div>

          <div>
            <OrderSummary
              product={product}
              formatPrice={formatPrice}
              setupCost={effectiveSetupCost}
              originalPrice={effectiveUnitPrice}
              setDiscountReferralCode={setDiscountReferralCode}
            />

            <Button
              className="w-full mt-6 cursor-pointer"
              disabled={isSubmitting}
              onClick={() =>
                document
                  .getElementById('billing-form')
                  ?.dispatchEvent(
                    new Event('submit', { cancelable: true, bubbles: true })
                  )
              }
            >
              {isSubmitting ? 'Processing...' : 'Pay Now'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}