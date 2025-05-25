export type CheckoutProduct = {
    thumbnail: {
        alt: string,
        filename: string,
        url: string
    };
    title: string;
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