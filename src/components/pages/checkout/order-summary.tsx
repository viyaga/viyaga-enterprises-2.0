"use client";

import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderItem } from "./order-item";
import { CartItem } from "./order-item";

interface OrderSummaryProps {
  cartItems: CartItem[];
  formatPrice: (price: number) => string;
  subtotal: number;
  taxes: number;
  shipping: number;
  total: number;
}

export function OrderSummary({
  cartItems,
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
        {cartItems.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}

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
