import { Order, SubscriptionPlan } from "@/payload-types";

export type CheckoutProduct = {
    id: string;
    title: string;
    slug: string;
    isFeatured?: boolean;
    isFree?: boolean;
    isSubscription?: boolean;
    subscriptionPlans: SubscriptionPlan[];
    affiliateCommission: number;
    setupCostUSD?: number;
    setupCostINR?: number;
    thumbnail: {
        alt: string;
        url: string;
        id: string;
    };
}

export interface OrderSummaryProps {
    product: CheckoutProduct;
    formatPrice: (price: number) => string;
    subtotal: number;
    taxes: number;
    shipping: number;
    total: number;
    setupCost?: number;
}

export type PaymentOption = "razorpay";

export type CreateOrderInput = Omit<Order, "id" | "createdAt" | "updatedAt"> & {
    setupCost?: number;
};

export type Currency = "INR" | "USD";