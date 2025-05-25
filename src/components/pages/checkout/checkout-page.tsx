"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { PaymentMethodSelector } from "./payment-method-selector";
import { CardNumberInput } from "./card-number-input";
import { BankTransferDetails } from "./bank-transfer-details";
import { getUserGeoLocation } from "@/lib/services/user-geo-location";
import { BillingDetailsForm, BillingFormData } from "./billing-details-form";
import { OrderSummary } from "./order-summary";
import { CheckoutProduct } from "./types";

export default function CheckoutPage({ product }: { product: CheckoutProduct }) {
  const [countryCode, setCountryCode] = useState<string>("");
  const [paymentOptions, setPaymentOptions] = useState<string[]>([
    "Credit/Debit Card",
    "PayPal",
  ]);
  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [geoLoading, setGeoLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function fetchGeo() {
      try {
        const { country } = await getUserGeoLocation();
        setCountryCode(country);
        if (country === "US" && !paymentOptions.includes("Bank Transfer")) {
          setPaymentOptions((opts) => ["Bank Transfer", ...opts]);
        }
      } catch (e) {
        console.error("Geo lookup failed", e);
      } finally {
        setGeoLoading(false);
      }
    }
    fetchGeo();
  }, []);

  const availablePaymentOptions = useMemo(() => paymentOptions, [paymentOptions]);

  const currency = "inr_price" in product ? "INR" : "USD";
  const unitPrice = "inr_price" in product ? product.inr_price! : product.price;
  const quantity = 1;

  const subtotal = unitPrice * quantity;
  const taxes = +(subtotal * 0.1).toFixed(2);
  const shipping = 0;
  const total = +(subtotal + taxes + shipping).toFixed(2);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
      style: "currency",
      currency,
    }).format(price);

  function onBillingSubmit(data: BillingFormData) {
    setIsSubmitting(true);
    console.log("Billing Data:", data);
  }

  return (
    <div className="min-h-screen py-8 bg-gradient-to-b from-[#f8fafc] via-[#e2e8f0] to-[#f8fafc] dark:from-[#00182e] dark:via-[#011925] dark:to-[#00182e]">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Checkout
        </motion.h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BillingDetailsForm
              defaultCountry={geoLoading ? "" : countryCode}
              onSubmit={onBillingSubmit}
              isLoading={isSubmitting}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <OrderSummary
              product={product}
              // quantity={quantity}
              formatPrice={formatPrice}
              subtotal={subtotal}
              taxes={taxes}
              shipping={shipping}
              total={total}
            />

            <div className="mt-6">
              <PaymentMethodSelector
                paymentOptions={availablePaymentOptions}
                selectedPayment={selectedPayment}
                onSelect={setSelectedPayment}
              />
              {selectedPayment === "Credit/Debit Card" && <CardNumberInput />}
              {selectedPayment === "Bank Transfer" && <BankTransferDetails />}
            </div>

            <Button className="w-full mt-6" disabled={!selectedPayment}>
              Pay Now
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}