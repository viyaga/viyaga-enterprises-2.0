'use server';

import { cookies } from 'next/headers';

interface GeoLocation {
  country: string;
  region?: string;
  city?: string;
}

export async function getUserGeoLocation(): Promise<GeoLocation> {
  const cookieStore = await cookies();

  const country = cookieStore.get('user_country')?.value || 'US';
  const region = cookieStore.get('user_country_region')?.value;
  const city = cookieStore.get('user_city')?.value;

  return {
    country,
    region,
    city,
  }
}

export async function getPurchasingPower(): Promise<number> {

  const cookieStore = await cookies();
  const purchasing_power = cookieStore.get("purchasing_power")?.value;
  const ppp = purchasing_power ? parseFloat(purchasing_power) : 0.15;

  if (ppp > 1) {
    return 1;
  }

  return ppp
}

export async function getReferralCode(): Promise<string> {
  const cookieStore = await cookies();
  return cookieStore.get('referralCode')?.value || 'company';
}