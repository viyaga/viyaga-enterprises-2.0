"use client";

import * as React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckoutProduct } from "./types";

export function OrderItem({ product }: { product: CheckoutProduct }) {
  const isINR = "inr_price" in product;
  const currency = isINR ? "INR" : "USD";
  const unitPrice = isINR ? product.inr_price! : product.price;
  const quantity = 1; // Always 1 for single product checkout

  const formattedPrice = new Intl.NumberFormat(
    isINR ? "en-IN" : "en-US",
    {
      style: "currency",
      currency,
    }
  ).format(unitPrice * quantity);

  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div className="flex items-center gap-4">
        <Image
          src={product.thumbnail.url}
          alt={product.title}
          width={64}
          height={64}
          className="rounded-md object-cover"
        />
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none text-gray-900 dark:text-gray-100">
            {product.title}
          </p>
          <Badge variant="secondary">Qty: {quantity}</Badge>
        </div>
      </div>
      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
        {formattedPrice}
      </div>
    </div>
  );
}
