"use client";

import { motion } from "framer-motion";
import HeroSection from "./hero";
import SearchFilters from "./search-filters";
import ProductGrid from "./product-grid";
import Licensing from "./licensing";
import Testimonials from "./testimonials";
import Newsletter from "./newsletter";
import AutoScrollBanner from "./auto-scroll-banner";

const Breadcrumb = () => (
  <div className="text-sm text-gray-400 px-4 py-2 bg-gray-900">
    Home / Products / <span className="text-white">Software</span>
  </div>
);

export default function SoftwareProductsPage() {
  return (
    <div className="relative">
      <Breadcrumb />

     
        <HeroSection />

      <AutoScrollBanner />

        <SearchFilters />

        <ProductGrid />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Licensing />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Newsletter />
      </motion.div>
    </div>
  );
}
