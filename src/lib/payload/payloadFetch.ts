import * as qs from 'qs-esm';
import { Tquery } from './types';
import { JsonObject } from 'payload';

const endpoint = process.env.PAYLOAD_API_URL || process.env.NEXT_PUBLIC_PAYLOAD_API_URL;
const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.PAYLOAD_API_KEY}`,
};

const defaultRevalidateTime = process.env.NODE_ENV === 'development' ? 0 : 60 * 60 * 24 * 365;

export async function payloadFetch({
    path,
    query,
    method = 'GET',
    body,
    tags,
    revalidateTime = defaultRevalidateTime,
    customHeaders = headers
}: {
    path: string;
    query?: Tquery;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: JsonObject;
    tags?: string[];
    revalidateTime?: number;
    customHeaders?: Record<string, string>;
}) {
    const queryString = query ? `?${qs.stringify(query, { encode: false })}` : '';
    const url = `${endpoint}/${path}${queryString}`;

    console.log({ url, query });

    try {
        const res = await fetch(url, {
            method,
            headers: customHeaders,
            body: body ? JSON.stringify(body) : undefined,
            next: {
                tags,
                revalidate: revalidateTime,
            },
        });

        const data = await res.json();

        if (!res.ok) {
            console.error(`Payload fetch failed (${res.status})`, data);

            const message =
                data?.errors?.[0]?.message ||
                `Failed to fetch ${path} (status ${res.status})`;

            if (process.env.NODE_ENV === 'development') {
                return { error: message, status: res.status, raw: data };
            } else {
                return { error: message, status: res.status };
            }
        }

        return data;
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(`Payload fetch error: ${err}`);
            return { error: err.message };
        }
        return { error: 'An unknown error occurred' };
    }
}
