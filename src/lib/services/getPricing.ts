// lib/getPricing.ts
import { getPurchasingPower, getUserGeoLocation } from "./cookies";

type BillingOption = {
  billingCycle: string;
  priceUSD: number;
  priceINR: number;
};

type SetupCostOption = {
  setupCostUSD: number;
  setupCostINR: number;
};

type PriceResult = {
  amount: number;
  currencySymbol: string;
  currencyCode: string;
};

export async function getPricingContext() {
  const { country } = await getUserGeoLocation();
  const ppp = await getPurchasingPower();
  return { country, ppp };
}

export function calculatePlanPrice(
  billing: BillingOption,
  country: string,
  ppp: number
): PriceResult {
  if (country === "IN") {
    return {
      amount: billing.priceINR,
      currencySymbol: "₹",
      currencyCode: "INR",
    };
  }
  return {
    amount: Math.round(billing.priceUSD * ppp * 100) / 100,
    currencySymbol: "$",
    currencyCode: "USD",
  };
}

export function calculateSetupPrice(
  product: SetupCostOption,
  country: string,
  ppp: number
): PriceResult {
  if (country === "IN") {
    return {
      amount: product.setupCostINR,
      currencySymbol: "₹",
      currencyCode: "INR",
    };
  }
  return {
    amount: Math.round(product.setupCostUSD * ppp * 100) / 100,
    currencySymbol: "$",
    currencyCode: "USD",
  };
}