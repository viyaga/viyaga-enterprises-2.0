import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { ProductCardProps } from "./types";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProductCard({ product, country }: ProductCardProps) {
  const isIndia = country === "IN";
  const currency = isIndia ? "₹" : "$";
  const price = isIndia ? product.inr_price : product.price;
  const discountPrice = isIndia
    ? product.inr_discount_price
    : product.discount_price;
  const thumbnailUrl = product.thumbnail?.url ?? "/fallback-thumbnail.jpg";

  const priceLabel = (
    <div className="flex items-center gap-2 text-sm sm:text-base">
      {discountPrice ? (
        <>
          <span className="line-through text-muted-foreground">
            {currency}
            {price}
          </span>
          <span className="text-primary font-semibold">
            {currency}
            {discountPrice}
          </span>
        </>
      ) : (
        <span className="text-primary font-semibold">
          {currency}
          {price}
        </span>
      )}
    </div>
  );

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="p-0 overflow-hidden bg-background border border-border shadow-lg rounded-2xl group transition-all duration-300 hover:shadow-xl">
        <div className="relative w-full h-48 sm:h-52">
          <Image
            src={thumbnailUrl}
            alt={product.thumbnail?.alt || product.title}
            width={500}
            height={300}
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <CardContent className="p-5 flex flex-col justify-between h-full">
          <div>
            <CardTitle
              className="mb-2 text-lg sm:text-xl font-semibold flex items-center gap-2 truncate"
              title={product.title}
            >
              {product.title}
              {discountPrice && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-destructive text-white text-xs px-2 py-0.5 rounded-full"
                >
                  Offer
                </motion.span>
              )}
            </CardTitle>

            <div className="flex flex-wrap gap-2 mb-4">
              {product.category?.map((cat) => (
                <Badge
                  key={cat.id}
                  variant="outline"
                  className="text-blue-700 border-blue-300 dark:text-blue-300 dark:border-blue-700"
                >
                  {cat.title}
                </Badge>
              ))}
              {product.tags?.map((tag) => (
                <Badge
                  key={tag.id}
                  variant="outline"
                  className="text-green-700 border-green-300 dark:text-green-300 dark:border-green-700"
                >
                  {tag.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-auto pt-3 border-t border-border">
            {priceLabel}

            <div className="flex items-center gap-2">
              {/* External link button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={
                    product.slug.startsWith("https")
                      ? product.slug
                      : `/products/${product.slug}`
                  }
                  target="_blank"
                >
                  <Button
                    className="text-xs px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-green-600 hover:to-blue-600"
                    variant="ghost"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>

              {/* Buy Now Button (updated) */}
              {product && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={product?.id || "/"} target="_blank">
                    <Button className="text-xs px-4 py-1.5 rounded-full text-white shadow font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500">
                      Buy Now
                    </Button>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
