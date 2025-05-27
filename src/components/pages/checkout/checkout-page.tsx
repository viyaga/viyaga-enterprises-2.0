"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { PaymentMethodSelector } from "./payment-method-selector";
import { CardNumberInput } from "./card-number-input";
import { BankTransferDetails } from "./bank-transfer-details";
import { BillingDetailsForm, BillingFormData } from "./billing-details-form";
import { OrderSummary } from "./order-summary";

import { getReferralCode, getUserGeoLocation } from "@/lib/services/cookies";
import { createOrder } from "@/lib/payload/orders";
import { CheckoutProduct, CreateOrderInput, PaymentOption } from "./types";

export default function CheckoutPage({
  product,
}: {
  product: CheckoutProduct;
}) {
  const router = useRouter();

  const [countryCode, setCountryCode] = useState<string>("");
  const [paymentOptions, setPaymentOptions] = useState<PaymentOption[]>([
    "bank transfer",
  ]);
  const [selectedPayment, setSelectedPayment] =
    useState<PaymentOption>("bank transfer");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function fetchGeo() {
      try {
        const { country } = await getUserGeoLocation();
        setCountryCode(country);

        if (country !== "IN")
          setPaymentOptions(["card", "paypal", "bank transfer"]);

      } catch (e) {
        console.error("Geo lookup failed", e);
      }
    }

    fetchGeo();
  }, []);

  const availablePaymentOptions: PaymentOption[] = useMemo(
    () => paymentOptions,
    [paymentOptions]
  );

  const currency = product?.inr_price ? "INR" : "USD";
  const unitPrice = product?.inr_discount_price ?? product?.discount_price;
  const originalPrice = product?.inr_price ?? product?.price;

  if (unitPrice === undefined || originalPrice === undefined) {
    throw new Error("Product is missing unitPrice");
  }

  const quantity = 1;
  const subtotal = unitPrice * quantity;
  const taxes = +(subtotal * 0.18).toFixed(2);
  const shipping = 0;
  const total = +(subtotal + taxes + shipping).toFixed(2);

  const formatPrice = useMemo(
    () => (price: number) =>
      new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
        style: "currency",
        currency,
      }).format(price),
    [currency]
  );

  const triggerFormSubmit = () => {
    document
      .getElementById("billing-form")
      ?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
  };

  const onBillingSubmit = async (data: BillingFormData) => {
    setIsSubmitting(true);

    const referralCode = await getReferralCode();

    const orderData: CreateOrderInput = {
      productTitle: product.title,
      productThumbnail: product.thumbnail?.id || undefined,
      currency,
      originalPrice,
      discountedPrice: unitPrice,
      subtotal,
      taxes,
      total,
      paymentMethod: selectedPayment,
      countryCode,
      billingDetails: {
        fullName: data.fullName,
        email: data.email,
        address: data.address,
        city: data.city,
        state: data.state,
        postalCode: data.zip,
        country: data.country,
      },
      orderStatus: "pending",
      referralCode: referralCode || "company",
      affiliate: {
        paymentStatus: "pending",
        commissionPercentage: product.affiliateCommission || 0,
      },
    };

    console.log({ orderData });

    const response = await createOrder(orderData);
    console.log({ response });

    if (response?.error) {
      return toast.error(
        response.error || "Something went wrong. Please try again."
      );
    }

    toast.success("Order placed successfully! Please login to continue.");
    router.push("/admin/collections/orders");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-8 md:py-12 bg-gradient-to-b from-[#f8fafc] via-[#e2e8f0] to-[#f8fafc] dark:from-[#00182e] dark:via-[#011925] dark:to-[#00182e]">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BillingDetailsForm
              defaultCountry={countryCode}
              onSubmit={onBillingSubmit}
            />
          </div>

          <div>
            <OrderSummary
              product={product}
              formatPrice={formatPrice}
              taxes={taxes}
              total={total}
              originalPrice={originalPrice}
              discountedPrice={unitPrice}
            />

            <div className="mt-6">
              <PaymentMethodSelector
                paymentOptions={availablePaymentOptions}
                selectedOption={selectedPayment}
                onSelect={setSelectedPayment}
              />

              {selectedPayment === "card" && <CardNumberInput />}
              {selectedPayment === "bank transfer" && <BankTransferDetails />}
            </div>

            <Button
              className="w-full mt-6"
              disabled={!selectedPayment || isSubmitting}
              onClick={triggerFormSubmit}
            >
              {isSubmitting ? "Processing..." : "Pay Now"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
