import HeroSection from "./hero";
import SearchFilters from "./search-filters";
import ProductGrid from "./product-grid";
import Licensing from "./licensing";
import Testimonials from "./testimonials";
import Newsletter from "./newsletter";
import AutoScrollBanner from "./auto-scroll-banner";
import { getAllProducts } from "@/lib/payload";

export default async function SoftwareProductsPage() {
  const products = await getAllProducts({});
  console.log({ products: products?.docs });

  return (
    <div className="relative">
      <HeroSection />
      <AutoScrollBanner />
      <SearchFilters />
      <ProductGrid />
      <Licensing />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
