"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Fast Turnaround Time",
    image: "/images/features/fast.png",
    description: "We move quickly—delivering quality results without the wait.",
    testimonial: '"Delivered our project in 48 hours!"',
  },
  {
    title: "Dedicated Point of Contact",
    image: "/images/features/support.png",
    description: "One person to guide you through every step of the process.",
    testimonial: '"Felt like I had an in-house expert."',
  },
  {
    title: "Proven Results in Key Industries",
    image: "/images/features/analytics.png",
    description: "We know what works in your field, and we deliver exactly that.",
    testimonial: '"Great traction in our niche SaaS market."',
  },
  {
    title: "Transparent Pricing & Process",
    image: "/images/features/pricing.png",
    description: "No hidden fees. Clear communication, clear costs.",
    testimonial: '"I always knew what I was paying for."',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="w-full px-6 py-24 relative bg-gradient-to-b from-[#f0f9ff] to-[#a4a7d6] dark:from-[#0f172a] dark:to-[#1e293b] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Why Choose Us
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-16">
          Speed, communication, and results—delivered with clarity and care.
        </p>

        <div className="flex flex-col sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-8 px-2 sm:px-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl border border-white/10 dark:border-slate-700 rounded-3xl shadow-lg hover:shadow-2xl p-6 text-left transition-all duration-300"
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="rounded-xl object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {feature.description}
              </p>
              <p className="text-xs italic text-gray-500 dark:text-gray-500">
                {feature.testimonial}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <Button variant="outline" className="text-lg px-6 py-3 border-slate-300 dark:border-slate-600 hover:bg-white/10">
            View Our Work
          </Button>
        </motion.div>
      </div>

      {/* Decorative Background Blobs */}
      <div className="absolute top-[-80px] left-[-40px] w-[300px] h-[300px] bg-[#2fb97d33] rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute bottom-[-60px] right-[-40px] w-[240px] h-[240px] bg-[#3b82f633] rounded-full blur-2xl opacity-30 z-0" />
    </section>
  );
}