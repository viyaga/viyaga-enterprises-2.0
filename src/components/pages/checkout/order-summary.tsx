'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { CheckoutProduct } from './types';
import { validateDiscountCode } from '@/lib/payload/discount-code';

// IMPORT THE SERVER ACTION

export function OrderSummary({
  product,
  formatPrice,
  setupCost = 0,
  originalPrice,
  setDiscountReferralCode
}: {
  product: CheckoutProduct;
  formatPrice: (price: number) => string;
  setupCost?: number;
  originalPrice: number;
  setDiscountReferralCode: (code: string | undefined) => void;
}) {
  const [discountCode, setDiscountCode] = useState('');
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [loadingValidation, setLoadingValidation] = useState(false);

  // discount info returned from server
  const [discountType, setDiscountType] = useState<'percentage' | 'fixed' | string | null>(null);
  const [discountValue, setDiscountValue] = useState<number>(0);

  const TAX_RATE = 0.18;

  // Compute discountAmount based on discountType/value
  const discountAmount = useMemo(() => {
    if (!isDiscountApplied || !discountType || !discountValue) return 0;

    if (discountType === 'percentage') {
      // percent of original price
      const amount = +(originalPrice * (discountValue / 100));
      return +amount.toFixed(2);
    }

    // fallback: treat as fixed amount
    return +Number(discountValue).toFixed(2);
  }, [isDiscountApplied, discountType, discountValue, originalPrice]);

  const discountedPrice = +(originalPrice - discountAmount).toFixed(2);
  const subtotal = +(discountedPrice + setupCost).toFixed(2);
  const taxes = +(subtotal * TAX_RATE).toFixed(2);
  const total = +(subtotal + taxes).toFixed(2);

  // Try to auto-apply code if ?discount=CODE is present in URL
  useEffect(() => {
    const codeFromURL = new URLSearchParams(window.location.search).get('discount') ?? '';
    if (codeFromURL) {
      (async () => {
        setDiscountCode(codeFromURL);
        await handleApplyDiscount(codeFromURL);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handler to validate and apply (or remove) discount
  async function handleApplyToggle() {
    if (isDiscountApplied) {
      // remove
      setDiscountCode('');
      setIsDiscountApplied(false);
      setDiscountType(null);
      setDiscountValue(0);
      toast.info('Discount removed.');
      return;
    }

    await handleApplyDiscount(discountCode);
  }

  // central apply logic (also used by auto-apply)
  async function handleApplyDiscount(codeToApply?: string) {
    const code = (codeToApply ?? discountCode).trim();
    if (!code) {
      toast.error('Please enter a discount code.');
      return;
    }

    setLoadingValidation(true);
    try {
      const result = await validateDiscountCode(code);

      if (!result || !result.valid) {
        toast.error(result?.message ?? 'Invalid discount code.');
        setIsDiscountApplied(false);
        setDiscountType(null);
        setDiscountValue(0);
        return;
      }

      // apply returned discount
      setDiscountType(result.discountType);
      setDiscountValue(result.discountValue);
      setIsDiscountApplied(true);
      setDiscountReferralCode(result?.referralCode);
      toast.success(`Discount "${result.code}" applied (${result.discountValue}${result.discountType === 'percentage' ? '%' : ''}).`);
    } catch (err) {
      console.error('apply discount error', err);
      toast.error('Failed to validate discount code. Please try again.');
      setIsDiscountApplied(false);
    } finally {
      setLoadingValidation(false);
    }
  }

  const motionProps = {
    initial: { opacity: 0, y: -5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 5 },
    transition: { duration: 0.18 },
  };

  return (
    <div className="rounded-lg shadow-lg bg-white dark:bg-[#102035] p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Order Summary</h2>

      <div className="w-full mb-2 aspect-video relative">
        {product.thumbnail?.url ? (
          <Image
            src={product.thumbnail.url}
            alt={product.thumbnail.alt || product.title}
            fill
            className="rounded-md object-cover border border-gray-200 dark:border-gray-700"
            sizes="100vw"
          />
        ) : (
          <div className="w-full h-40 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">No image</div>
        )}
      </div>

      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{product.title}</h3>

      <div className="flex items-center gap-2 mb-3">
        <input
          type="text"
          placeholder="Enter discount code"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loadingValidation}
        />
        <Button
          className="cursor-pointer"
          variant={isDiscountApplied ? 'destructive' : 'default'}
          onClick={handleApplyToggle}
          disabled={loadingValidation}
        >
          {loadingValidation ? 'Checking...' : isDiscountApplied ? 'Remove' : 'Apply'}
        </Button>
      </div>

      <input type="hidden" id="discount-applied" value={String(isDiscountApplied)} />

      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300">Price:</span>
        <span className="text-gray-900 dark:text-white flex items-center gap-2">
          {isDiscountApplied && (
            <span className="line-through text-sm text-gray-500">{formatPrice(originalPrice)}</span>
          )}
          <AnimatePresence mode="wait">
            <motion.span key={discountedPrice} {...motionProps} className="text-green-600 font-semibold">
              {formatPrice(discountedPrice)}
            </motion.span>
          </AnimatePresence>
        </span>
      </div>

      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300">Setup Cost:</span>
        <span className={setupCost === 0 ? 'text-green-600' : 'text-gray-900 dark:text-white'}>
          {formatPrice(setupCost)}
        </span>
      </div>

      {isDiscountApplied && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-green-600">Discount: {discountValue}{discountType === 'percentage' ? '%' : ''}</span>
          <span className="text-green-600">-{formatPrice(discountAmount)}</span>
        </div>
      )}

      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300">Taxes:</span>
        <span className="text-gray-900 dark:text-white">{formatPrice(taxes)}</span>
      </div>

      <hr className="my-4 border-gray-300 dark:border-gray-700" />

      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-900 dark:text-white">Total:</span>
        <AnimatePresence mode="wait">
          <motion.span key={total} {...motionProps} className="text-lg font-semibold text-green-600">
            {formatPrice(total)}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}