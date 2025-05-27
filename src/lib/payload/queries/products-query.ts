import { getUserGeoLocation } from "@/lib/services/cookies";
import { Where } from "payload";

export const getAllProductsQuery = (
    { page, limit, search, categoryId, tagId, sort = "createdAt", depth = 0 }
        : { page: number; limit: number; search?: string; categoryId: number, tagId?: number, sort?: string, depth?: number }
) => {
    const where: Where = {};

    if (search) {
        where.or = [
            { title: { like: search } },
            { description: { like: search } },
        ];
    }

    if (categoryId) {
        where.category = { equals: categoryId };
    }

    if (tagId) {
        where.tag = { equals: tagId };
    }

    return {
        page,
        limit,
        // select,
        where,
        sort,
        depth,
    };
};

export const getProductByIdForCheckoutQuery = async ({ depth = 0 }: { depth?: number }) => {
    const { country } = await getUserGeoLocation()
    const select = country === "IN"
        ? {
            "thumbnail": true,
            "title": true,
            "affiliateCommission":true,
            "inr_price": true,
            "inr_discount_price": true
        }
        : {
            "thumbnail": true,
            "title": true,
            "affiliateCommission":true,
            "price": true,
            "discount_price": true
        };

    return {
        depth,
        select
    };
};
