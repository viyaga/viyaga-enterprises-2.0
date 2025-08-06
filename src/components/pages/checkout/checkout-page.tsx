'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { BillingDetailsForm, BillingFormData } from './billing-details-form';
import { OrderSummary } from './order-summary';

import { getReferralCode, getUserGeoLocation } from '@/lib/services/cookies';
import { CheckoutProduct, CreateOrderInput } from './types';

// ✅ Load Razorpay SDK dynamically
const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false);
    if ('Razorpay' in window) return resolve(true);

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function CheckoutPage({ product }: { product: CheckoutProduct }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const plan = searchParams.get('plan');
  const billingCycle = searchParams.get('billingcycle');

  const [countryCode, setCountryCode] = useState<string>('IN');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchGeo = async () => {
      try {
        const { country } = await getUserGeoLocation();
        setCountryCode(country);
      } catch (err) {
        console.error('Geo lookup failed', err);
      }
    };
    fetchGeo();
  }, []);

  const selectedPlan = useMemo(() => {
    return product.subscriptionPlans?.find(
      (p) =>
        p.planName === plan &&
        p.billingOptions?.some((b) => b.billingCycle === billingCycle)
    );
  }, [plan, billingCycle, product.subscriptionPlans]);

  const selectedBillingOption = useMemo(() => {
    return selectedPlan?.billingOptions?.find(
      (b) => b.billingCycle === billingCycle
    );
  }, [selectedPlan, billingCycle]);

  const currency = countryCode === 'IN' ? 'INR' : 'USD';
  const unitPrice =
    currency === 'INR'
      ? selectedBillingOption?.priceINR
      : selectedBillingOption?.priceUSD;

  const originalPrice = unitPrice ?? 0;
  if (unitPrice === undefined) throw new Error('Invalid plan/billing cycle.');

  const setupCost =
    countryCode === 'IN'
      ? product.setupCostINR ?? 0
      : product.setupCostUSD ?? 0;

  const subtotal = unitPrice + setupCost;
  const taxes = +(subtotal * 0.18).toFixed(2);
  const shipping = 0;
  const total = +(subtotal + taxes + shipping).toFixed(2);

  const formatPrice = useMemo(
    () => (price: number) =>
      new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en-US', {
        style: 'currency',
        currency,
      }).format(price),
    [currency]
  );

  const onBillingSubmit = async (data: BillingFormData) => {
    setIsSubmitting(true);
    const referralCode = await getReferralCode();

    const orderData: CreateOrderInput = {
      productTitle: product.title,
      productThumbnail: product.thumbnail?.id || undefined,
      currency,
      originalPrice,
      discountedPrice: unitPrice,
      subtotal,
      taxes,
      total,
      setupCost: setupCost > 0 ? setupCost : undefined,
      paymentMethod: 'razorpay',
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
      referralCode: referralCode || 'company',
      affiliate: {
        paymentStatus: 'pending',
        commissionPercentage: product.affiliateCommission || 0,
      },
    };

    console.log({ orderData });

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

      const razorpay = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: order.amount,
        currency: order.currency,
        name: 'Viyaga',
        description: 'Product Payment',
        order_id: order.id,
        handler: (response) => {
          toast.success('Payment successful!');
          console.log({ PaymentResponse: response });
          router.push('/dashboard/collections/orders');
        },
        prefill: { name: data.fullName, email: data.email, contact: data.phone },
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
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BillingDetailsForm
              defaultCountry={countryCode}
              onSubmit={onBillingSubmit}
            />
          </div>

          <div>
            <OrderSummary
              product={product}
              formatPrice={formatPrice}
              taxes={taxes}
              total={total}
              originalPrice={originalPrice}
              discountedPrice={unitPrice}
              setupCost={setupCost > 0 ? setupCost : undefined}
            />

            <Button
              className="w-full mt-6"
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