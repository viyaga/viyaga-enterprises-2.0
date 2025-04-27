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

