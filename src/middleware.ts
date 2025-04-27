import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const allowedOrigins = ['https://your-frontend.com', 'https://admin.your-frontend.com'];

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Handle CORS for API routes -============================================================
  const origin = request.headers.get('origin') || '';
  if (allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
  }

  // get and set GEO Location of the user  ==========================================================
  const isApiRoute = request.nextUrl.pathname.startsWith('/api');

  //Skip for API routes
  if (!isApiRoute) {
    const cookieStore = request.cookies;

    const existingCountry = cookieStore.get('user_country');
    const existingRegion = cookieStore.get('user_country_region');
    const existingCity = cookieStore.get('user_city');

    // Only if cookies are missing
    if (!existingCountry || !existingRegion || !existingCity) {
      const country = request.headers.get('x-vercel-ip-country');
      const region = request.headers.get('x-vercel-ip-country-region');
      const city = request.headers.get('x-vercel-ip-city');

      if (country) {
        response.cookies.set('user_country', country, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          path: '/',
          maxAge: 60 * 60 * 24 * 365,
        });
      }

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
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|static).*)'],
};
