// types.ts

export interface Screenshot {
  image: {
    url: string;
  };
}

export interface DemoUrl {
  label: string;
  url: string;
}

export interface SubscriptionPlan {
  planName: string;
  billingCycle: string;
  priceUSD: number;
  priceINR: number;
  trialPeriodDays: number;
  features?: string;
}

export interface Product {
  id: string;
  title: string;
  isFree: boolean;
  isSubscription: boolean;
  thumbnail?: {
    url: string;
  };
  price: number;
  discount_price: number;
  inr_price: number;
  inr_discount_price: number;
  description?: string;
  features?: string;
  subscriptionPlans: SubscriptionPlan[];
  demo_urls: DemoUrl[];
  screenshots: Screenshot[];
}
