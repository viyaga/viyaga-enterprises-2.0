import { Where } from "payload";

export const getAllProductsQuery = (
    { page, limit, search, tagId, sort = "createdAt", depth = 0 }
        : { page: number; limit: number; search?: string; tagId?: number, sort?: string, depth?: number }
) => {
    const where: Where = {};
    const select = {
        title: true,
        documentation_url: true
    }

    if (search) {
        where.or = [
            { title: { like: search } },
            { description: { like: search } },
        ];
    }

    if (tagId) {
        where.tag = { equals: tagId };
    }

    return {
        page,
        limit,
        select,
        where,
        sort,
        depth,
    };
};