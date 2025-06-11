import ProductCard from "./product-card";
import { Product } from "./types";
import { getAllProducts } from "@/lib/payload";
import { searchParamsCache } from "@/lib/searchparams";
import { getUserGeoLocation } from "@/lib/services/cookies";
import { getPurchasingPower } from "@/lib/services/cookies";
import { getLocalizedPrice } from "@/lib/services/price";
import { ClientPagination } from "./pagination";

export default async function ProductGrid() {
  const { country } = await getUserGeoLocation();
  const purchasingPower = await getPurchasingPower();

  const page = searchParamsCache.get("page");
  const search = searchParamsCache.get("q");
  const limit = searchParamsCache.get("limit");
  const sort = searchParamsCache.get("sort");
  const category = searchParamsCache.get("category");
  const tag = searchParamsCache.get("tagId");

  let tagId = 0;
  let categoryId = 0;

  if (tag) {
    tagId = 1;
  }

  if (category) {
    categoryId = 1;
  }

  const products = await getAllProducts({
    page,
    limit,
    search,
    categoryId,
    tagId,
    sort,
    depth: 1,
  });

  if (products.error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">{products.error}</h1>
      </div>
    );
  }
  console.log({products, totalPages:products.totalDocs});
  
  return (
    <div className="py-12 px-4 sm:px-6 md:px-8 text-black dark:text-white bg-gradient-to-b from-[#e0f2ff] to-[#f0f9ff] dark:from-[#113a65] dark:to-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.docs.map((product: Product) => {
            const priceData = getLocalizedPrice(
              product,
              country,
              purchasingPower
            );

            return (
              <ProductCard
                key={product.id}
                product={product}
              />
            );
          })}
        </div>

        {/* Pagination */}
        <ClientPagination totalItems={products.totalDocs} />
      </div>
    </div>
  );
}
