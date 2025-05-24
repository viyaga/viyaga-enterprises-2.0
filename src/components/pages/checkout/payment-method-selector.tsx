"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface PaymentMethodSelectorProps {
  paymentOptions: string[];
  selectedPayment: string;
  onSelect: (method: string) => void;
}

export function PaymentMethodSelector({
  paymentOptions,
  selectedPayment,
  onSelect,
}: PaymentMethodSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {paymentOptions.map((method) => (
        <div
          key={method}
          role="button"
          tabIndex={0}
          onClick={() => onSelect(method)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onSelect(method);
            }
          }}
          className={cn(
            "relative border rounded-xl p-4 cursor-pointer transition  shadow-sm hover:shadow-lg outline-none bg-gray-100 dark:bg-[#0e161c]/50",
            selectedPayment === method
              ? "border-blue-500 ring-2 ring-blue-300 dark:ring-offset-neutral-900 bg-blue-50 dark:bg-[#0e161c]"
              : "border-border"
          )}
          aria-pressed={selectedPayment === method}
          aria-label={`Select payment method ${method}`}
        >
          <p className="font-medium">{method}</p>
          {selectedPayment === method && (
            <div className="absolute top-2 right-2 text-green-500 font-bold select-none">✓</div>
          )}
          {method === "Credit/Debit Card" && (
            <div className="flex items-center gap-2 mt-2 opacity-70">
              <Image src="/visa.svg" alt="Visa" width={30} height={20} />
              <Image src="/mastercard.svg" alt="Mastercard" width={30} height={20} />
              <Image src="/amex.svg" alt="American Express" width={30} height={20} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
