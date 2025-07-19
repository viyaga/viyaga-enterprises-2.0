// types.ts

import { PayloadLexicalReactContent } from "@zapal/payload-lexical-react";

export interface Screenshot {
  image: {
    url: string;
  };
}

export interface DemoUrl {
  label: string;
  url: string;
}

export type SubscriptionPlan = {
  label: string;
  planName: string;
  trialPeriodDays: number;
  isActive: boolean;
  isPopular: boolean;
  features?: string[];
  billingOptions: {
    billingCycle: "monthly" | "yearly" | "one-time";
    priceUSD: number;
    priceINR: number;
  }[];
};

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
  description?: PayloadLexicalReactContent;
  features?: PayloadLexicalReactContent;
  subscriptionPlans: SubscriptionPlan[];
  demo_urls: DemoUrl[];
  screenshots: Screenshot[];
}
