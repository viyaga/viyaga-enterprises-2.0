"use server";

import { payloadFetch } from "./payloadFetch";
import { getAllProductsQuery } from "./queries";

type GetFilteredProductsOptions = {
  page: number;
  limit: number;
  search: string;
  categoryId: number;
  tagId: number;
  sort: string;
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


