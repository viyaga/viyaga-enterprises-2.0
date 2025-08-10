'use client';

import React, { useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { BillingDetailsForm, BillingFormData } from './billing-details-form';
import { CheckoutProduct, CreateOrderInput } from './types';
import { createOrder } from '@/lib/payload/orders';
import { getReferralCode } from '@/lib/services/affiliate';
import { OrderSummary } from './order-summary';
import { getCountryByCode } from '@/constants/countries';

import {
  loadRazorpayScript,
  formatProductPricing,
  createPriceFormatter,
  calculateTotals,
  DISCOUNT_CODE,
} from './utils';

export default function CheckoutPage({
  product,
  countryCode,
}: {
  product: CheckoutProduct;
  countryCode: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');
  const billingCycle = searchParams.get('billingcycle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Format pricing details
  const { currency, unitPrice, setupCost } = useMemo(
    () => formatProductPricing(product, countryCode, plan, billingCycle),
    [product, countryCode, plan, billingCycle]
  );

  if (unitPrice === undefined) throw new Error('Invalid plan/billing cycle.');

  // Price formatter
  const formatPrice = useMemo(() => createPriceFormatter(currency), [currency]);

  /** Submit billing details & handle payment */
  const onBillingSubmit = async (
    data: BillingFormData,
    isDiscountApplied: boolean
  ) => {
    setIsSubmitting(true);
    const referralCode = getReferralCode();
    const { originalPrice, discountedUnitPrice, subtotal, taxes, total } =
      calculateTotals(unitPrice, setupCost, isDiscountApplied);

    const orderInput: CreateOrderInput = {
      productTitle: product.title,
      productThumbnail: product.thumbnail?.id || undefined,
      currency,
      originalPrice,
      discountedPrice: discountedUnitPrice,
      subtotal,
      taxes,
      total,
      setupCost: setupCost > 0 ? setupCost : undefined,
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
      referralCode: referralCode || 'company',
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

      const razorpay = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: order.amount,
        currency: order.currency,
        name: 'Viyaga',
        description: 'Product Payment',
        order_id: order.id,
        handler: async (response) => {
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
            if (payloadRes.error) throw new Error('Failed to create order');
            router.push('/dashboard/collections/orders');
          } catch (error) {
            console.error('Order creation failed:', error);
            toast.error(
              'Failed to create order after payment. Please contact support.'
            );
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
              setupCost={setupCost}
              originalPrice={unitPrice}
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