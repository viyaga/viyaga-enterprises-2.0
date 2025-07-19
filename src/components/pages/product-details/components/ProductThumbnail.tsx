"use client";

import Image from "next/image";
import { Product } from "../types";

const ProductThumbnail = ({ product }: { product: Product }) => {
  if (!product.thumbnail?.url) return null;

  return (
    <div className="w-full max-w-md md:max-w-sm lg:max-w-md">
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={product.thumbnail.url}
          alt={product.title || "Product Thumbnail"}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default ProductThumbnail;