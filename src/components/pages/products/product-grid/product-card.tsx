"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

export default function ProductCard({ product }: ProductCardProps) {
  const thumbnailUrl = product.thumbnail?.url ?? "/fallback-thumbnail.jpg";
  console.log({ thumbnailUrl });

  return (
    <Link href={`/products/${product.slug}`}>
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
              <div className="flex flex-wrap gap-2 mb-auto pb-3 border-t border-border">
                {product.category?.[0] && (
                  <Badge
                    key={product.category[0].id}
                    variant="outline"
                    className="text-blue-700 border-blue-300 dark:text-blue-300 dark:border-blue-700"
                  >
                    {product.category[0].title}
                  </Badge>
                )}
                {product.tags?.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag.id}
                    variant="outline"
                    className="text-green-700 border-green-300 dark:text-green-300 dark:border-green-700"
                  >
                    {tag.name}
                  </Badge>
                ))}
              </div>
              <CardTitle
                className="mb-2 text-lg sm:text-xl font-semibold flex items-center gap-2 truncate"
                title={product.title}
              >
                {product.title}
              </CardTitle>
              {/* <div className="flex justify-between items-center mt-auto pt-3 border-t border-border"> */}

            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
