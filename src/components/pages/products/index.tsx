import HeroSection from "./hero";
import SearchFilters from "./search-filters";
import ProductGrid from "./product-grid";
import Licensing from "./licensing";
import Testimonials from "./testimonials";
import Newsletter from "./newsletter";

export default function SoftwareProductsPage() {
  return (
    <div className="bg-[oklch(var(--background))] text-[oklch(var(--foreground))]">
      <HeroSection />
      <SearchFilters />
      <ProductGrid />
      <Licensing />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
