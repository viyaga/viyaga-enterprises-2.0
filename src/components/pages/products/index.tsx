import HeroSection from "./hero";
import SearchFilters from "./search-filters";
import ProductGrid from "./product-grid/product-grid";
import Licensing from "./licensing";
import Testimonials from "./testimonials";
import Newsletter from "./newsletter";
import AutoScrollBanner from "./auto-scroll-banner";
import { Suspense } from "react";
import ProductGridSkeleton from "./product-grid/product-grid-skeleton";

export default function SoftwareProductsPage() {
  return (
    <div className="relative bg-gradient-to-b from-[#f0f9ff] to-[#f0f9ff] dark:from-[#0f172a] dark:to-[#0f172a]">
      <HeroSection />
      <AutoScrollBanner />
      <SearchFilters />
      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid />
      </Suspense>
      {/* <Licensing />
      <Testimonials /> */}
      {/* <Newsletter /> */}
    </div>
  );
}
