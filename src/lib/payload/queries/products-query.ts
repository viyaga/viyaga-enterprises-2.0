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