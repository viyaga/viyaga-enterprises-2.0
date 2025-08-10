// app/actions/validateDiscountCode.ts
'use server';

import { payloadFetch } from "./payloadFetch";


type ValidateDiscountResult =
    | {
        valid: true;
        code: string;
        discountType: 'percentage' | string;
        discountValue: number;
        message?: string;
        referralCode: string;
    }
    | {
        valid: false;
        message: string;
    };

/**
 * Validate a discount code against your Payload CMS `discountCodes` collection.
 *
 * Notes:
 * - This function only VALIDATES. It does not update timesUsed or mutate DB.
 * - Increment timesUsed in your order-creation flow (server-side) after payment/checkout succeeds.
 *
 * @param code - discount code (string)
 */
export async function validateDiscountCode(code: string): Promise<ValidateDiscountResult> {
    const raw = code?.trim();
    if (!raw) return { valid: false, message: 'No discount code provided.' };

    const query = {
        where: {
            code: {
                equals: raw,
            },
            active: {
                equals: true,
            },
        },
        limit: 1,
        depth: 0,
    };

    try {
        const res = await payloadFetch({
            path: 'discount-codes',
            query,
        });

        const docs = res?.docs ?? [];

        if (!Array.isArray(docs) || docs.length === 0) {
            return { valid: false, message: 'Invalid discount code.' };
        }

        const dc = docs[0];

        // Basic server-side validation
        const now = new Date();

        if (dc.validFrom) {
            const from = new Date(dc.validFrom);
            if (from.getTime() > now.getTime()) {
                return { valid: false, message: 'Discount is not active yet.' };
            }
        }

        if (dc.validUntil) {
            const until = new Date(dc.validUntil);
            if (until.getTime() < now.getTime()) {
                return { valid: false, message: 'Discount has expired.' };
            }
        }

        // maxUses check (if defined)
        if (typeof dc.maxUses === 'number' && dc.maxUses > 0) {
            const timesUsed = typeof dc.timesUsed === 'number' ? dc.timesUsed : 0;
            if (timesUsed >= dc.maxUses) {
                return { valid: false, message: 'This code has reached its maximum uses.' };
            }
        }

        // Ensure discountValue makes sense
        const discountValue = Number(dc.discountValue ?? 0);
        if (Number.isNaN(discountValue) || discountValue <= 0) {
            return { valid: false, message: 'Invalid discount configuration.' };
        }

        return {
            valid: true,
            code: dc.code,
            discountType: dc.discountType ?? 'percentage',
            discountValue,
            message: 'Valid discount code.',
            referralCode: dc.referralCode ?? ''
        };
    } catch (err) {
        console.error('validateDiscountCode error', err);
        return { valid: false, message: 'Failed to validate discount code.' };
    }
}