'use server';

import { logout } from '@payloadcms/next/auth';
import config from '@payload-config';
import { payloadFetch } from './payloadFetch';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function getUserToken(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('payload-token')?.value;
  return token ?? null;
}

export async function getMe() {
  const token = await getUserToken();
  if (!token) return null;
  return payloadFetch({
    path: '/users/me',
    tags: ['users'],
    customHeaders: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function logoutAction() {
  return logout({ config });
}

export async function redirectBasedOnRole(): Promise<never | void> {
  const res = await getMe();
  console.log({ res, user: res.user });

  const role = res?.user?.role;

  if (role === 'customer' || role === 'affiliate') {
    return redirect('/dashboard/collections/orders');
  }

  if (!role || role !== 'admin') {
    await logoutAction()
    return redirect('/dashboard/login');
  }
}