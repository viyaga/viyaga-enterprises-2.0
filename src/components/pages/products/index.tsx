import HeroSection from "./hero";
import SearchFilters from "./search-filters";
import ProductGrid from "./product-grid";
import Licensing from "./licensing";
import Testimonials from "./testimonials";
import Newsletter from "./newsletter";
import AutoScrollBanner from "./auto-scroll-banner";

export default function SoftwareProductsPage() {
  return (
    <div className="">
      <HeroSection />
      <AutoScrollBanner />
      <SearchFilters />
      <ProductGrid />
      <Licensing />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
