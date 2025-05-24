"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export function OrderItem({ item }: { item: CartItem }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={item.image} alt={item.title} width={60} height={60} className="rounded" />
        <div>
          <p className="font-medium text-gray-700 dark:text-gray-200">{item.title}</p>
          <Badge variant="secondary">Qty: {item.quantity}</Badge>
        </div>
      </div>
      <p className="font-semibold text-gray-900 dark:text-gray-100">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
  );
}
