import { Order } from "@/payload-types";

export type CheckoutProduct = {
    id:string;
    thumbnail: {
        alt: string,
        url: string
        id: string
    };
    title: string,
    affiliateCommission: number;
} & (
        | {
            inr_price: number;
            inr_discount_price: number;
            price?: never;
            discount_price?: never;
        }
        | {
            price: number;
            discount_price: number;
            inr_price?: never;
            inr_discount_price?: never;
        }
    );

export interface OrderSummaryProps {
    product: CheckoutProduct;
    formatPrice: (price: number) => string;
    subtotal: number;
    taxes: number;
    shipping: number;
    total: number;
}

export type PaymentOption = "card" | "paypal" | "bank transfer";

export interface PaymentOptionsProps {
    paymentOptions: PaymentOption[];
    selectedOption: PaymentOption;
    onSelect: (option: PaymentOption) => void;
}

export type CreateOrderInput = Omit<Order, "id" | "createdAt" | "updatedAt">;