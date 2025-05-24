"use server";

import HeroSection from "./hero";
import SearchFilters from "./search-filters";
import ProductGrid from "./product-grid";
import Licensing from "./licensing";
import Testimonials from "./testimonials";
import Newsletter from "./newsletter";
import AutoScrollBanner from "./auto-scroll-banner";
import { getAllProducts } from "@/lib/payload";
import { searchParamsCache } from "@/lib/searchparams";
import { getUserGeoLocation } from "@/lib/services/user-geo-location";
import { getPurchasingPower } from "@/lib/services/ppp";

export default async function SoftwareProductsPage() {
  const { country } = await getUserGeoLocation();
  const ppp = await getPurchasingPower();
  console.log({ country, ppp });

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
    depth:1
  });

  if (products.error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">{products.error}</h1>
      </div>
    );
  }

  console.log({products:products.docs, country});
  
  return (
    <div className="relative">
      <HeroSection />
      <AutoScrollBanner />
      <SearchFilters />
      <ProductGrid products={products.docs} country={country} />
      <Licensing />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
