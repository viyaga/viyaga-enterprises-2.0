"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Types
type Category = { id: string; name: string };

type Pricing = {
  country: string;
  currency: string;
  price: number;
  discount_price?: number;
};

type Product = {
  id: string;
  title: string;
  description?: string | React.ReactNode;
  category?: Category[];
  pricing?: Pricing[];
  isFree?: boolean;
  thumbnail?: { url: string };
};

// Animation Variants
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function ProductCard({ product }: { product: Product }) {
  const priceInfo = product.pricing?.[0];
  const priceLabel = product.isFree
    ? "Free"
    : priceInfo
      ? `${priceInfo.currency} ${priceInfo.discount_price ?? priceInfo.price}`
      : "N/A";

  const thumbnailUrl = product.thumbnail?.url ?? "/fallback-thumbnail.jpg";

  console.log({ product });

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Card className="p-0 border border-white/20 bg-white/90 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden group">
        <div className="relative w-full h-40 sm:h-44 md:h-48 overflow-hidden">
          <Image
            src={thumbnailUrl}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-4 sm:p-5">
          <CardTitle
            className="mb-1 text-lg sm:text-xl font-semibold truncate"
            title={product.title}
          >
            {product.title}
          </CardTitle>

          {product.description && (
            <p className="text-sm text-black/80 dark:text-white/80 mb-2 line-clamp-2">
              {typeof product.description === "string"
                ? product.description
                : "Rich content"}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mb-3">
            {product.category?.map((cat) => (
              <span
                key={cat.id}
                className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                {cat.name}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <span className="font-bold text-sm text-primary dark:text-primary/80">
              {priceLabel}
            </span>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button className="text-xs px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-green-600 hover:to-blue-600">
                <a href="#" className="flex items-center gap-1">
                  View Details <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="py-6 md:py-12 px-4 sm:px-6 md:px-8 min-h-screen text-black dark:text-white bg-gradient-to-b from-[#e0f2ff] to-[#f0f9ff] dark:from-[#113a65] dark:to-[#0f172a]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </motion.section>
  );
}
