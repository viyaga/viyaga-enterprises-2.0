'use client';

import React, { useState, useEffect } from 'react';
import { CheckoutProduct } from './types';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const DISCOUNT_CODE = 'DISCOUNT10';
const DISCOUNT_PERCENTAGE = 10;

export function OrderSummary({
  product,
  formatPrice,
  setupCost,
  originalPrice,
  currency,
}: {
  product: CheckoutProduct;
  formatPrice: (price: number) => string;
  setupCost?: number;
  originalPrice: number;
  currency: string;
}) {
  const [discountCode, setDiscountCode] = useState('');
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  const discountAmount = isDiscountApplied
    ? +(originalPrice * (DISCOUNT_PERCENTAGE / 100)).toFixed(2)
    : 0;

  const discountedPrice = originalPrice - discountAmount;
  const subtotal = discountedPrice + (setupCost ?? 0);
  const taxes = +(subtotal * 0.18).toFixed(2);
  const total = +(subtotal + taxes).toFixed(2);

  useEffect(() => {
    const codeFromURL = new URLSearchParams(window.location.search).get('discount');
    if (codeFromURL?.toUpperCase() === DISCOUNT_CODE) {
      setDiscountCode(codeFromURL);
      setIsDiscountApplied(true);
      toast.success(`Discount code "${codeFromURL}" applied automatically.`);
    }
  }, []);

  const applyDiscount = () => {
    if (discountCode.trim().toUpperCase() === DISCOUNT_CODE) {
      setIsDiscountApplied(true);
      toast.success(`Discount applied! You saved ${DISCOUNT_PERCENTAGE}%.`);
    } else {
      setIsDiscountApplied(false);
      toast.error('Invalid discount code. Please try again.');
    }
  };

  return (
    <div className="rounded-lg shadow-md bg-white dark:bg-gray-900 p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Order Summary
      </h2>

      <div className="w-full mb-2 aspect-video relative">
        <Image
          src={product.thumbnail.url}
          alt={product.thumbnail.alt || product.title}
          fill
          className="rounded-md object-cover border border-gray-200 dark:border-gray-700"
          sizes="100vw"
        />
      </div>

      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
        {product.title}
      </h3>

      {/* Discount Input */}
      <div className="flex items-center gap-2 mb-3">
        <input
          type="text"
          placeholder="Enter discount code"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button
          variant={isDiscountApplied ? 'destructive' : 'default'}
          onClick={() => {
            if (isDiscountApplied) {
              setDiscountCode('');
              setIsDiscountApplied(false);
              toast.info('Discount removed.');
            } else {
              applyDiscount();
            }
          }}
        >
          {isDiscountApplied ? 'Remove' : 'Apply'}
        </Button>
      </div>

      <input type="hidden" id="discount-applied" value={isDiscountApplied.toString()} />

      {/* Price */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300">Price:</span>
        <span className="text-gray-900 dark:text-white flex items-center gap-2">
          {isDiscountApplied && (
            <span className="line-through text-sm text-gray-500">
              {formatPrice(originalPrice)}
            </span>
          )}
          <AnimatePresence mode="wait">
            <motion.span
              key={discountedPrice}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="text-green-600 font-semibold"
            >
              {formatPrice(discountedPrice)}
            </motion.span>
          </AnimatePresence>
        </span>
      </div>

      {setupCost !== undefined && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700 dark:text-gray-300">Setup Cost:</span>
          <span
            className={`${
              setupCost === 0
                ? 'text-green-600'
                : 'text-gray-900 dark:text-white'
            }`}
          >
            {formatPrice(setupCost)}
          </span>
        </div>
      )}

      {isDiscountApplied && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700 dark:text-gray-300">Discount:</span>
          <span className="text-green-600">
            -{formatPrice(discountAmount)}
          </span>
        </div>
      )}

      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300">Taxes:</span>
        <span className="text-gray-900 dark:text-white">
          {formatPrice(taxes)}
        </span>
      </div>

      <hr className="my-4 border-gray-300 dark:border-gray-700" />

      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          Total:
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={total}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="text-lg font-semibold text-green-600"
          >
            {formatPrice(total)}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}