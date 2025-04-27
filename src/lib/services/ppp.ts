"use server";

import { cookies } from "next/headers";
import countries from "@/constants/countries";

type Country = {
    id: number;
    country: string;
    country_code: string;
    currency_prefix: string;
    currency_code: string;
    tier: number;
    purchasing_power: number;
} | undefined

export async function setPurchasingPower(countryCode: string): Promise<number> {
    const cookieStore = await cookies();
    const country: Country = countries.find(
        (c) => c.country_code.toUpperCase() === countryCode.toUpperCase()
    );

    cookieStore.set({
        name: "purchasing_power",
        value: !country ? "0.15" : country.purchasing_power.toString(),
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30,
    });

    return country?.purchasing_power || 0.15;
}

export async function getPurchasingPower(): Promise<number> {
    
    const cookieStore = await cookies();
    const countryCode = cookieStore.get('user_country')?.value || 'US';
    const purchasing_power = cookieStore.get("purchasing_power")?.value;

    let ppp = purchasing_power ? parseFloat(purchasing_power) : null;

    if (!ppp) {
        ppp = await setPurchasingPower(countryCode);
    }

    return ppp;
}
