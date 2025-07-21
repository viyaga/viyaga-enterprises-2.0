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
        id: true,
        title: true,
        isFree: true,
        isSubscription: true,
        thumbnail: { url: true },
        price: true,
        discount_price: true,
        inr_price: true,
        inr_discount_price: true,
        description: true,
        features: true,
        subscriptionPlans: {
            label: true,
            planName: true,
            trialPeriodDays: true,
            isActive: true,
            isPopular: true,
            features: true,
            billingOptions: {
                billingCycle: true,
                priceUSD: true,
                priceINR: true,
            },
        },
        demo_urls: {
            label: true,
            url: true,
        },
        screenshots: {
            image: { url: true },
        },
        category: true,
        tags: true,
        seo: true,
        slug: true,
    };

    const where = { slug: { equals: slug } };

    return {
        where,
        depth,
        select
    };
};