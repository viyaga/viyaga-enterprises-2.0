'use server';

import { logout } from '@payloadcms/next/auth';
import config from '@payload-config';
import { payloadFetch } from './payloadFetch';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { User } from '@/payload-types';

type AuthArgs = {
  email: string;
  password: string;
  sponsorCode?: string;
  team?: string;
};

export async function getUserToken(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('payload-token')?.value;
  return token ?? null;
}

export async function getMe(): Promise<User | null> {
  const token = await getUserToken();
  if (!token) return null;

  const response = await payloadFetch({
    path: '/users/me',
    tags: ['users'],
    customHeaders: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  return response?.user || null;
}

export async function logoutAction() {
  return logout({ config });
}

export async function redirectBasedOnRole(): Promise<void> {
  const user = await getMe();

  const role = user?.role;

  if ((role === 'customer') || (role === 'affiliate')) {
    return redirect('/dashboard/collections/orders');
  }

  if (!role || role !== 'admin') {
    await logoutAction();
    return redirect('/login-register');
  }
}

// ---------------------------
// Login function
// ---------------------------
export async function loginUser({ email, password }: AuthArgs): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const response = await payloadFetch({
      path: '/users/login',
      method: 'POST',
      body: { email, password },
      customHeaders: {
        'Content-Type': 'application/json',
      },
    });

    if (!response || !response.token) {
      throw new Error('Invalid login response');
    }

    const cookieStore = await cookies();
    cookieStore.set('payload-token', response.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365,
    });

    return {
      success: true,
    };
  } catch (err) {
    console.error('Login error:', err);
    return {
      success: false,
      error: 'Invalid credentials',
    };
  }
}

// ---------------------------
// Register function
// ---------------------------
export async function registerUser({ email, password, sponsorCode, team }: AuthArgs): Promise<{
  success: boolean;
  error?: string;
}> {

  const response = await payloadFetch({
    path: '/users',
    method: 'POST',
    body: { email, password, sponsorCode, team },
  });

  console.log('Registration response:', response);

  if (response?.error) {
    return { error: response.error, success: false };
  }

  return {
    success: true,
  };
}