declare global {
  interface RazorpayHandlerResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }

  interface RazorpayPrefill {
    name: string;
    email: string;
    contact: string;
  }

  interface RazorpayTheme {
    color: string;
  }

  interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    order_id: string;
    handler: (response: RazorpayHandlerResponse) => void;
    prefill?: RazorpayPrefill;
    theme?: RazorpayTheme;
  }

  interface RazorpayInstance {
    open(): void;
  }

  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

export {};