"use client";

import ProductThumbnail from "./components/ProductThumbnail";
import ProductInfo from "./components/ProductInfo";
import SubscriptionPlans from "./components/SubscriptionPlans";
import DemoLinks from "./components/DemoLinks";
import ScreenshotsGallery from "./components/ScreenshotsGallery";
import { Product } from "./types";

const ProductDetailsPage = ({ docs }: { docs: Product[] }) => {
  const product = docs[0]
  if (!product) return null;

  return (
    <section className="pt-24 space-y-12 bg-gradient-to-b from-[#f0f9ff] to-[#f0f9ff] dark:from-[#0f172a] dark:to-[#0f172a]">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto p-6">
        <ProductThumbnail product={product} />
        <ProductInfo product={product} />
      </div>
      {product.isSubscription && product.subscriptionPlans?.length > 0 && (
        <SubscriptionPlans plans={product.subscriptionPlans} />
      )}
      {product.demo_urls?.length > 0 && (
        <DemoLinks demoUrls={product.demo_urls} />
      )}
      {product.screenshots?.length > 0 && (
        <ScreenshotsGallery screenshots={product.screenshots} />
      )}
    </section>
  );
};

export default ProductDetailsPage;
