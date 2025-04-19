import Description from "./description"
import Features from "./features"
import LicenseInfo from "./licenseinfo"
import ProductHeader from "./product-header"
import ProductPreview from "./product-preview"
import RelatedProducts from "./related-products"
import Reviews from "./reviews"
import SupportContact from "./support-contact"

const product = {
  name: "Task Manager Pro",
  price: 49,
  category: "Productivity",
  description: "An advanced task manager for developers and teams.",
  features: [
    "Task prioritization",
    "Time tracking",
    "Collaborative team environment",
    "Customizable workflows",
  ],
  screenshots: [
    "/images/product-screenshot-1.jpg",
    "/images/product-screenshot-2.jpg",
  ],
  reviews: [
    {
      name: "John Smith",
      rating: 5,
      comment: "Fantastic tool! Saved us tons of time and effort.",
    },
    {
      name: "Alice Johnson",
      rating: 4,
      comment: "Great features, would love to see more integrations in future.",
    },
  ],
}

export default function ProductDetailsPage() {

  return (
    <div className="bg-[oklch(var(--background))] text-[oklch(var(--foreground))]">
      <ProductHeader name={product.name} category={product.category} price={product.price} />
      <ProductPreview screenshots={product.screenshots} />
      <Description description={product.description} />
      <Features features={product.features} />
      <LicenseInfo />
      <Reviews reviews={product.reviews} />
      <RelatedProducts />
      <SupportContact />
    </div>
  )
}
