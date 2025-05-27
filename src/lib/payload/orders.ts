"use server";

import { payloadFetch } from './payloadFetch'; // Make sure path is correct based on your file structure
import { Order } from '@/payload-types';

export async function createOrder(orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) {
  const response = await payloadFetch({
    path: 'orders',
    method: 'POST',
    body: orderData,
    tags: ['orders'],
  });

  return response;
}
