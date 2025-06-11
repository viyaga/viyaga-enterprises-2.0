"use client";

import { Badge } from "@/components/ui/badge";
import { Product } from "../types";
import DemoLinks from "./DemoLinks";
import RichTextRenderer from "@/components/RichTextRenderer";

const ProductInfo = ({ product }: { product: Product }) => {
  return (
    <div className="flex-1 space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">{product.title}</h1>

      {product.isFree && (
        <Badge variant="outline" className="text-green-600 border-green-600">
          Free
        </Badge>
      )}
      {product.demo_urls?.length > 0 && (
        <DemoLinks demoUrls={product.demo_urls} />
      )}
      {product.description && (
        <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
          <RichTextRenderer content={product.description} />
          {/* {product.description[0].children[0].text} */}
        </div>
      )}

      {product.features && (
        <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
          <h2 className="text-lg font-semibold mb-1">Features</h2>
          <RichTextRenderer content={product.features} />
          {/* {product.features[0].children[0].text} */}
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
