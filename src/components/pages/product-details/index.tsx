"use client";

import ProductThumbnail from "./components/ProductThumbnail";
import ProductInfo from "./components/ProductInfo";
import SubscriptionPlans from "./components/SubscriptionPlans";
import ScreenshotsGallery from "./components/ScreenshotsGallery";
import { Product } from "./types";

const ProductDetailsPage = ({ docs }: { docs: Product[] }) => {
  const product = docs[0];
  if (!product) return null;

  return (
    <section className="bg-gradient-to-b from-[#f0f9ff] to-[#f0f9ff] dark:from-[#0f172a] dark:to-[#0f172a]">
      <div className="pt-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <ProductThumbnail product={product} />
          <ProductInfo product={product} />
        </div>
      </div>
      {product.subscriptionPlans?.length > 0 && (
        <SubscriptionPlans plans={product.subscriptionPlans} productId={product.id} />
      )}
      {product.screenshots?.length > 0 && (
        <ScreenshotsGallery screenshots={product.screenshots} />
      )}
    </section>
  );
};

export default ProductDetailsPage;
