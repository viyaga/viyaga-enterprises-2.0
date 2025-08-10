import { CheckoutProduct } from "@/components/pages/checkout/types";
import { getCountryByCode } from "@/constants/countries";

export function formatProductForCountry(product: CheckoutProduct, countryCode: string) {
  const country = getCountryByCode(countryCode) || "United States";
  const isIN = countryCode.toUpperCase() === "IN";

  const currency = isIN ? "INR" : "USD";
  const setupCost = isIN ? (product.setupCostINR ?? 0) : (product.setupCostUSD ?? 0);

  // Pick correct pricing for each subscription plan & billing option
  const formattedPlans = product.subscriptionPlans?.map(plan => ({
    ...plan,
    billingOptions: plan.billingOptions?.map(option => ({
      ...option,
      price: isIN ? option.priceINR : option.priceUSD
    }))
  })) ?? [];

  return {
    ...product,
    country,
    countryCode,
    currency,
    setupCost,
    subscriptionPlans: formattedPlans
  };
}
