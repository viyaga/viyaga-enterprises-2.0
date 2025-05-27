"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function ProductCardSkeleton() {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="p-0 overflow-hidden bg-background border border-border shadow-lg rounded-2xl">
        {/* Image Skeleton */}
        <div className="relative w-full h-48 sm:h-52">
          <Skeleton className="w-full h-full object-cover" />
        </div>

        <CardContent className="p-5 flex flex-col justify-between h-full">
          <div>
            {/* Title Skeleton */}
            <CardTitle className="mb-2 text-lg sm:text-xl font-semibold">
              <Skeleton className="w-3/4 h-6" />
            </CardTitle>

            {/* Category + Tags Skeleton */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Skeleton className="w-16 h-5 rounded-full" />
              <Skeleton className="w-20 h-5 rounded-full" />
              <Skeleton className="w-12 h-5 rounded-full" />
            </div>
          </div>

          {/* Price and Buttons */}
          <div className="flex justify-between items-center mt-auto pt-3 border-t border-border">
            {/* Price Skeleton */}
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <Skeleton className="w-12 h-5" />
              <Skeleton className="w-14 h-5" />
            </div>

            {/* Buttons Skeleton */}
            <div className="flex items-center gap-2">
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="w-20 h-8 rounded-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProductGridSkeleton() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="py-12 px-4 sm:px-6 md:px-8 text-black dark:text-white bg-gradient-to-b from-[#e0f2ff] to-[#f0f9ff] dark:from-[#113a65] dark:to-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}