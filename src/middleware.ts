// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import countries from '@/constants/countries';

const allowedOrigins = ['https://viyaga.com', 'https://www.viyaga.com', 'http://localhost:3000'];

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // CORS support for API routes
  const origin = request.headers.get('origin') || '';
  if (allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
  }

  const pathname = request.nextUrl.pathname;
  const skipPaths = ['/admin', '/api', '/media'];
  const shouldSkip = skipPaths.some((prefix) => pathname.startsWith(prefix));

  if (!shouldSkip) {
    const cookieStore = request.cookies;
    const alreadySet = cookieStore.get('geo_checked');

    if (!alreadySet) {
      const country = request.headers.get('x-vercel-ip-country') || 'US';
      const region = request.headers.get('x-vercel-ip-country-region') || '';
      const city = request.headers.get('x-vercel-ip-city') || '';

      response.cookies.set('geo_checked', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24,
      });

      response.cookies.set('user_country', country, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
      });

      if (region) {
        response.cookies.set('user_country_region', region, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          path: '/',
          maxAge: 60 * 60 * 24 * 365,
        });
      }

      if (city) {
        response.cookies.set('user_city', city, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          path: '/',
          maxAge: 60 * 60 * 24 * 365,
        });
      }

      const countryObj = countries.find(
        (c) => c.country_code.toUpperCase() === country.toUpperCase()
      );

      const purchasingPower = countryObj?.purchasing_power ?? 0.15;

      response.cookies.set('purchasing_power', purchasingPower.toString(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
      });
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|static|admin|api|media).*)'],
};
