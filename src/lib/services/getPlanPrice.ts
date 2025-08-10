import { getPurchasingPower, getUserGeoLocation } from "./cookies";

type BillingOption = {
    billingCycle: string;
    priceUSD: number;
    priceINR: number;
};

export async function getPlanPrice(billing: BillingOption) {
    const { country } = await getUserGeoLocation();
    const ppp = await getPurchasingPower();

    if (country === "IN") {
        return {
            amount: billing.priceINR,
            currencySymbol: "₹",
            currencyCode: "INR",
        };
    }

    // Adjust USD price for purchasing power
    return {
        amount: Math.round(billing.priceUSD * ppp * 100) / 100,
        currencySymbol: "$",
        currencyCode: "USD",
    };
}