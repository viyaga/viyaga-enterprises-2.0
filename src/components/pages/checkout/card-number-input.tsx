"use client";

import { Input } from "@/components/ui/input";

export function CardNumberInput() {
  return (
    <div className="mt-4 space-y-3">
      <Input
        id="cardNumber"
        placeholder="Card Number"
        maxLength={19}
        pattern="\d{13,19}"
        inputMode="numeric"
        autoComplete="cc-number"
      />
      <div className="grid grid-cols-2 gap-2">
        <Input
          id="expiryDate"
          placeholder="MM/YY"
          maxLength={5}
          pattern="(0[1-9]|1[0-2])\/?([0-9]{2})"
          autoComplete="cc-exp"
        />
        <Input
          id="cvv"
          placeholder="CVV"
          maxLength={4}
          pattern="\d{3,4}"
          inputMode="numeric"
          autoComplete="cc-csc"
        />
      </div>
    </div>
  );
}