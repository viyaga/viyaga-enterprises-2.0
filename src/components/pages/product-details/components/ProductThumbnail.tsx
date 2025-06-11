"use client";

import Image from "next/image";

const ProductThumbnail = ({ product }: { product: any }) => {
  if (!product.thumbnail?.url) return null;

  return (
    <div className="flex-shrink-0">
      <Image
        src={product.thumbnail.url}
        alt={product.title || "Product Thumbnail"}
        width={500}
        height={375}
        className="rounded-xl shadow-lg object-cover w-full h-auto"
        priority
      />
    </div>
  );
};

export default ProductThumbnail;
