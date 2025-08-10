// utils/checkout-utils.ts
import { CheckoutProduct, Currency } from '@/components/pages/checkout/types';

const DISCOUNT_CODE = 'DISCOUNT10';
const DISCOUNT_PERCENTAGE = 10;

/** Load Razorpay Script */
export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false);
    if ('Razorpay' in window) return resolve(true);

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

/** Get product price & setup cost based on country */
export const formatProductPricing = (
  product: CheckoutProduct,
  countryCode: string,
  plan?: string | null,
  billingCycle?: string | null
) => {
  const selectedPlan = product.subscriptionPlans?.find(
    (p) =>
      p.planName === plan &&
      p.billingOptions?.some((b) => b.billingCycle === billingCycle)
  );

  const selectedBillingOption = selectedPlan?.billingOptions?.find(
    (b) => b.billingCycle === billingCycle
  );

  const currency: Currency = countryCode === 'IN' ? 'INR' : 'USD';
  const unitPrice =
    currency === 'INR'
      ? selectedBillingOption?.priceINR
      : selectedBillingOption?.priceUSD;

  const setupCost =
    countryCode === 'IN'
      ? product.setupCostINR ?? 0
      : product.setupCostUSD ?? 0;

  return { currency, unitPrice, setupCost };
};

/** Price formatter function */
export const createPriceFormatter = (currency: Currency) => {
  return (price: number) => {
    if (price === 0) return 'Free';
    return new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en-US', {
      style: 'currency',
      currency,
    }).format(price);
  };
};

/** Calculate final totals */
export const calculateTotals = (
  unitPrice: number,
  setupCost: number,
  isDiscountApplied: boolean
) => {
  const originalPrice = unitPrice ?? 0;
  const discountedUnitPrice =
    isDiscountApplied && unitPrice
      ? +(unitPrice * (1 - DISCOUNT_PERCENTAGE / 100)).toFixed(2)
      : unitPrice;

  const subtotal = discountedUnitPrice + setupCost;
  const taxes = +(subtotal * 0.18).toFixed(2);
  const shipping = 0;
  const total = +(subtotal + taxes + shipping).toFixed(2);

  return { originalPrice, discountedUnitPrice, subtotal, taxes, total };
};

export { DISCOUNT_CODE, DISCOUNT_PERCENTAGE };