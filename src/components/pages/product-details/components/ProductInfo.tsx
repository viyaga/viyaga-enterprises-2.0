"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProductInfo = ({ product }: { product: any }) => {
  return (
    <div className="flex-1 space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">{product.title}</h1>

      {product.isFree && (
        <Badge variant="outline" className="text-green-600 border-green-600">
          Free
        </Badge>
      )}

      {product.description?.length > 0 && (
        <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
          {/* {product.description[0].children[0].text} */}
        </div>
      )}

      {product.features?.length > 0 && (
        <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
          <h2 className="text-lg font-semibold mb-1">Features</h2>
          {/* {product.features[0].children[0].text} */}
        </div>
      )}

      <div className="space-y-2">
        <p>
          <span className="font-semibold">Price (USD):</span>{" "}
          <s className="text-gray-500">${product.price}</s>{" "}
          <span className="text-green-600 font-bold">${product.discount_price}</span>
        </p>
        <p>
          <span className="font-semibold">Price (INR):</span>{" "}
          <s className="text-gray-500">₹{product.inr_price}</s>{" "}
          <span className="text-green-600 font-bold">₹{product.inr_discount_price}</span>
        </p>
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link href={`/checkout/${product.id}`}>
          <Button className="px-6 py-2 rounded-full text-white shadow font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-red-600 hover:to-pink-600">
            Buy Now
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ProductInfo;
