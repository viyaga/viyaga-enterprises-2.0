import React from "react";
import { CheckoutProduct } from "./types";
import Image from "next/image";

export function OrderSummary({
  product,
  formatPrice,
  taxes,
  total,
  originalPrice,
  discountedPrice,
  setupCost,
}: {
  product: CheckoutProduct;
  formatPrice: (price: number) => string;
  taxes: number;
  total: number;
  originalPrice: number;
  discountedPrice: number;
  setupCost?: number;
}) {
  return (
    <div className="rounded-lg shadow-md bg-white dark:bg-gray-900 p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Order Summary
      </h2>

      {/* Product Image */}
      <div className="w-full mb-2 aspect-video relative">
        <Image
          src={product.thumbnail.url}
          alt={product.thumbnail.alt || product.title}
          fill
          className="rounded-md object-cover border border-gray-200 dark:border-gray-700"
          sizes="100vw"
        />
      </div>

      {/* Product Title */}
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {product.title}
        </h3>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300">Price:</span>
        <span className="text-gray-900 dark:text-white">
          <span className="line-through text-sm text-gray-500 mr-2">
            {formatPrice(originalPrice)}
          </span>
          <span className="text-green-600 font-semibold">
            {formatPrice(discountedPrice)}
          </span>
        </span>
      </div>

      {/* Setup Cost (if applicable) */}
      {setupCost && setupCost > 0 && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700 dark:text-gray-300">
            Setup Cost:
          </span>
          <span className="text-gray-900 dark:text-white">
            {formatPrice(setupCost)}
          </span>
        </div>
      )}

      {/* Taxes */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300">Taxes:</span>
        <span className="text-gray-900 dark:text-white">
          {formatPrice(taxes)}
        </span>
      </div>

      <hr className="my-4 border-gray-300 dark:border-gray-700" />

      {/* Total */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          Total:
        </span>
        <span className="text-lg font-semibold text-green-600">
          {formatPrice(total)}
        </span>
      </div>
    </div>
  );
}