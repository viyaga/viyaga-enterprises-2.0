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

export const getProductByIdForCheckoutQuery = async ({
  depth = 2,
}: {
  depth?: number;
}) => {
  const { country } = await getUserGeoLocation();

  return {
    depth,
    select: {
      title: true,
      thumbnail: true,
      affiliateCommission: true,
      setupCostINR: true,
      setupCostUSD: true,
      subscriptionPlans: true,
    },
  };
};

export const getProductDetailsBySlugQuery = (
    { slug, depth = 0 }: { slug: string; depth?: number }
) => {
    const select = {
        "thumbnail": true,
        "title": true,
        "description": true,
        "features": true,
        "affiliateCommission": true,
        "inr_price": true,
        "inr_discount_price": true,
        "price": true,
        "discount_price": true,
        "category": true,
        "tags": true,
        "isSubscription": true,
        "subscriptionPlans": true,
        "screenshots": true,
        "demo_urls": true,
        "seo": true,
        "slug": true
    }

    const where = { slug: { equals: slug } };

    return {
        where,
        depth,
        select
    };
};