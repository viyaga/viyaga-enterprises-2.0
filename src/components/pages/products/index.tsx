import HeroSection from "./hero";
import SearchFilters from "./search-filters";
import ProductGrid from "./product-grid";
import Licensing from "./licensing";
import Testimonials from "./testimonials";
import Newsletter from "./newsletter";
import AutoScrollBanner from "./auto-scroll-banner";
import { getAllProducts } from "@/lib/payload";
import { searchParamsCache } from "@/lib/searchparams";

export default async function SoftwareProductsPage() {
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
  });

  console.log({ products: products?.docs });

  return (
    <div className="relative">
      <HeroSection />
      <AutoScrollBanner />
      <SearchFilters />
      <ProductGrid products={products} />
      <Licensing />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
