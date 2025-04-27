"use server";

import { cookies } from "next/headers";

export async function getPurchasingPower(): Promise<number> {

    const cookieStore = await cookies();
    const purchasing_power = cookieStore.get("purchasing_power")?.value;
    const ppp = purchasing_power ? parseFloat(purchasing_power) : 0.15;
    
    return ppp
}
