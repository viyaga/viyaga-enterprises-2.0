export function getLocalizedPrice(
    product: {
        price: number;
        discount_price: number;
        inr_price: number;
        inr_discount_price: number;
    },
    country: string,
    purchasingPower: number): {
        price: number,
        discountPrice: number,
        currency: string,
    } {


    const isIndia = country === "IN";
    const currency = isIndia ? "₹" : "$";

    let basePrice = isIndia ? product.inr_price : product.price;
    let baseDiscountPrice = isIndia ? product.inr_discount_price : product.discount_price;

    // Apply PPP adjustment if non-India (assuming INR is already adjusted)
    if (!isIndia) {
        basePrice = Math.round((basePrice ?? 0) * purchasingPower * 100) / 100;
        baseDiscountPrice =
            baseDiscountPrice !== undefined
                ? Math.round(baseDiscountPrice * purchasingPower * 100) / 100
                : 0;
    }

    return {
        price: basePrice,
        discountPrice: baseDiscountPrice,
        currency,
    };
}