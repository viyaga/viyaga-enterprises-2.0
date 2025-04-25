"use server";

import { payloadFetch } from "./payloadFetch";
import { getAllProductsQuery } from "./queries";

type GetFilteredProductsOptions = {
  page?: number;
  limit?: number;
  search?: string;
  tagId?: number;
  sort?: string;
  depth?: number;
};

export async function getAllProducts({
  page = 1,
  limit = 12,
  search, //"Invoicy"
  tagId, //"6"
  sort = "title", //"title,-createdAt"
  depth = 0,
}: GetFilteredProductsOptions) {

  const query = getAllProductsQuery({
    page,
    limit,
    search,
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


