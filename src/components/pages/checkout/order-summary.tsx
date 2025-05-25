"use client";

import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderItem } from "./order-item";
import { OrderSummaryProps } from "./types";

export function OrderSummary({
  product,
  formatPrice,
  subtotal,
  taxes,
  shipping,
  total,
}: OrderSummaryProps) {
  return (
    <Card className="shadow-md bg-gray-100 dark:bg-[#0e161c]/50">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <OrderItem product={product} />
        <div className="border-t pt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes</span>
            <span>{formatPrice(taxes)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{formatPrice(shipping)}</span>
          </div>
          <div className="flex justify-between font-semibold text-gray-900 dark:text-gray-100">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
