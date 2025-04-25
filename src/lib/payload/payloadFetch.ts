"use server";

import * as qs from 'qs-esm';

const endpoint = process.env.PAYLOAD_API_URL;
const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.PAYLOAD_API_KEY}`,
};

export async function payloadFetch({
    path,
    query,
    method = 'GET',
    body,
    tags,
    revalidateTime = 60 * 60 * 24 * 365,
}: {
    path: string;
    query?: Record<string, any>;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    tags?: string[];
    revalidateTime?: number;
}) {
    const queryString = query ? `?${qs.stringify(query, { encode: false })}` : '';
    const url = `${endpoint}/${path}${queryString}`;

    console.log({ url, query });

    try {
        const res = await fetch(url, {
            method,
            headers,
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

            return { error: message, status: res.status, raw: data };
        }

        return data;
    } catch (err: unknown) {
        if (err instanceof Error) {
            return { error: err.message };
        }
        return { error: 'An unknown error occurred' };
    }
}
