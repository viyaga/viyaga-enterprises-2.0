"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">
          Join our newsletter to hear about the latest tools and updates.
        </p>
        <div className="flex justify-center gap-2 max-w-md mx-auto">
          <Input placeholder="Enter your email" className="w-full" />
          <Button>Subscribe</Button>
        </div>
      </section>
    </motion.div>
  );
}
