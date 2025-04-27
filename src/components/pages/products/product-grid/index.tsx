"use client";

import { motion, Variants } from "framer-motion";
import ProductCard from "./product-card";

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

export default function ProductGrid({ products, country }: { products: Product[], country: string }) {
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
          <ProductCard key={product.id} product={product} country={country} />
        ))}
      </div>
    </motion.section>
  );
}
