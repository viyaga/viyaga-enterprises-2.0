'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { CheckoutProduct } from './types';

const DISCOUNT_CODE = 'DISCOUNT10';

/**
 * OrderSummary component (kept in same file for convenience)
 */
export function OrderSummary({
  product,
  formatPrice,
  setupCost = 0,
  originalPrice,
}: {
  product: CheckoutProduct;
  formatPrice: (price: number) => string;
  setupCost?: number;
  originalPrice: number;
}) {
  const [discountCode, setDiscountCode] = useState('');
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  const DISCOUNT_PERCENTAGE = 10;
  const TAX_RATE = 0.18;

  /** --- Derived Calculations --- **/
  const discountAmount = useMemo(
    () => (isDiscountApplied ? +(originalPrice * (DISCOUNT_PERCENTAGE / 100)).toFixed(2) : 0),
    [isDiscountApplied, originalPrice]
  );

  const discountedPrice = originalPrice - discountAmount;
  const subtotal = +(discountedPrice + setupCost).toFixed(2);
  const taxes = +(subtotal * TAX_RATE).toFixed(2);
  const total = +(subtotal + taxes).toFixed(2);

  /** --- Effects --- **/
  useEffect(() => {
    const codeFromURL = new URLSearchParams(window.location.search).get('discount') ?? '';
    if (codeFromURL.toUpperCase() === DISCOUNT_CODE) {
      setDiscountCode(codeFromURL);
      setIsDiscountApplied(true);
      toast.success(`Discount code "${codeFromURL}" applied automatically.`);
    }
  }, []);

  /** --- Handlers --- **/
  const handleDiscountToggle = () => {
    if (isDiscountApplied) {
      setDiscountCode('');
      setIsDiscountApplied(false);
      toast.info('Discount removed.');
      return;
    }

    if (discountCode.trim().toUpperCase() === DISCOUNT_CODE) {
      setIsDiscountApplied(true);
      toast.success(`Discount applied! You saved ${DISCOUNT_PERCENTAGE}%.`);
    } else {
      toast.error('Invalid discount code. Please try again.');
    }
  };

  /** --- Motion Props --- **/
  const motionProps = {
    initial: { opacity: 0, y: -5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 5 },
    transition: { duration: 0.2 },
  };

  return (
    <div className="rounded-lg shadow-lg bg-white dark:bg-[#102035] p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Order Summary</h2>

      {/* Product Image */}
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

      {/* Product Title */}
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{product.title}</h3>

      {/* Discount Input */}
      <div className="flex items-center gap-2 mb-3">
        <input
          type="text"
          placeholder="Enter discount code"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button className="cursor-pointer" variant={isDiscountApplied ? 'destructive' : 'default'} onClick={handleDiscountToggle}>
          {isDiscountApplied ? 'Remove' : 'Apply'}
        </Button>
      </div>

      <input type="hidden" id="discount-applied" value={String(isDiscountApplied)} />

      {/* Price */}
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

      {/* Setup Cost */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300">Setup Cost:</span>
        <span className={setupCost === 0 ? 'text-green-600' : 'text-gray-900 dark:text-white'}>
          {formatPrice(setupCost)}
        </span>
      </div>

      {/* Discount */}
      {isDiscountApplied && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700 dark:text-gray-300">Discount:</span>
          <span className="text-green-600">-{formatPrice(discountAmount)}</span>
        </div>
      )}

      {/* Taxes */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300">Taxes:</span>
        <span className="text-gray-900 dark:text-white">{formatPrice(taxes)}</span>
      </div>

      <hr className="my-4 border-gray-300 dark:border-gray-700" />

      {/* Total */}
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
