"use server";

import { payloadFetch } from "./payloadFetch";
import { getAllProductsQuery, getProductByIdForCheckoutQuery } from "./queries";

type GetFilteredProductsOptions = {
  page: number;
  limit: number;
  search: string;
  categoryId: number;
  tagId: number;
  sort: string;
  depth?: number;
};

type GetProductByIdOptions = {
  id: string;
  depth?: number;
};

export async function getAllProducts({
  page,
  limit,
  search, //"Invoicy"
  categoryId, //"ecommerce"
  tagId, //"6"
  sort = "createdAt", //"title,-createdAt"
  depth = 0,
}: GetFilteredProductsOptions) {

  const query = getAllProductsQuery({
    page,
    limit,
    search,
    categoryId,
    tagId,
    sort,
    depth
  });

  return await payloadFetch({
    path: 'products',
    query,
    tags: ['products']
  });
}

export async function getProductByIdForCheckout({ id, depth = 0 }: GetProductByIdOptions) {
  const query = await getProductByIdForCheckoutQuery({ depth });

  return await payloadFetch({
    path: `products/${id}`,
    query,
    tags: ['products', `product-${id}`],
  });
}

type GetProductBySlugOptions = {
  slug: string;
  depth?: number;
};

export async function getProductDetailsBySlug({ slug, depth = 0 }: GetProductBySlugOptions) {
  const query = { depth };
  return await payloadFetch({
    path: `products`,
    query: { ...query, where: { slug: { equals: slug } } },
    tags: ['products', `product-slug-${slug}`],
  });
}