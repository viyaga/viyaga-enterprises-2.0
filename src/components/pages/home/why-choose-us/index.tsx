"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const features = [
  {
    title: "🚀 Rapid Delivery",
    image: "/images/features/fast.png",
    description: "Launch MVPs in days—not months. We prioritize speed without compromising quality to give your business a competitive edge.",
    metric: "🚀 3x Faster Go-To-Market",
    country: "🇸🇬 Singapore",
    industry: "FinTech",
    testimonial: '"Delivered our MVP in just 48 hours!"',
    video: "/videos/testimonial1.mp4",
  },
  {
    title: "🤝 Dedicated Success Partner",
    image: "/images/features/support.png",
    description: "One expert guiding you from start to scale. Think of us as your in-house CTO with a vested interest in your success.",
    metric: "✅ 92% Client Retention",
    country: "🇺🇸 USA",
    industry: "SaaS",
    testimonial: '"Felt like I had an in-house CTO."',
    video: "/videos/testimonial2.mp4",
  },
  {
    title: "📊 Outcome-Driven Strategy",
    image: "/images/features/analytics.png",
    description: "We design with impact—and business goals—in mind. Every pixel and flow is aligned to increase your ROI.",
    metric: "📈 40% Higher Conversions",
    country: "🇬🇧 UK",
    industry: "eCommerce",
    testimonial: '"They cared about results as much as we did."',
    video: "/videos/testimonial3.mp4",
  },
  {
    title: "💬 Transparent Communication",
    image: "/images/features/pricing.png",
    description: "Clear pricing. Real updates. No surprises. We're obsessed with keeping things predictable and collaborative.",
    metric: "💡 100% Clarity Guaranteed",
    country: "🇦🇺 Australia",
    industry: "Healthcare",
    testimonial: '"Everything was upfront and predictable."',
    video: "/videos/testimonial4.mp4",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="w-full px-6 py-16 md:py-20 lg:py-24 relative bg-gradient-to-b from-[#f0f9ff] to-[#f0f9ff] dark:from-[#0f172a] dark:to-[#0f172a] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Why Teams Love Working With Us
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-16">
          We combine speed, strategy, and communication to deliver serious business value.
        </p>

        <div className="flex flex-col sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-8 px-2 sm:px-4">
          {features.map((feature, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/40 dark:bg-gradient-to-b dark:from-slate-800/60 dark:to-slate-900/60 backdrop-blur-xl border border-white/10 dark:border-slate-700 rounded-3xl shadow-lg hover:shadow-2xl p-6 text-left transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Logo / Icon */}
                <figure className="relative w-16 h-16 mb-4">
                  <Image
                    src={feature.image}
                    alt={`${feature.title} icon representing ${feature.industry}`}
                    width={64}
                    height={64}
                    className="rounded-xl object-contain"
                  />
                </figure>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 min-h-[60px]">
                  {feature.description}
                </p>

                {/* Metric */}
                <p className="inline-block text-xs font-semibold text-green-700 bg-green-100 dark:bg-green-800/30 dark:text-green-300 rounded-full px-3 py-1 mb-3">
                  {feature.metric}
                </p>

                {/* Country & Industry */}
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <span title={feature.country} className="mr-2">
                    {feature.country}
                  </span>
                  {feature.industry}
                </p>

                {/* Testimonial */}
                <blockquote className="italic text-gray-500 dark:text-gray-400 border-l-2 pl-3 border-gray-300 dark:border-gray-600 mb-4">
                  {feature.testimonial}
                </blockquote>
              </div>

              {/* Optional Video Bubble */}
              {feature.video && (
                <motion.a
                  href={feature.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-300 text-sm font-medium hover:underline"
                >
                  <PlayCircle className="text-lg animate-pulse" />
                  Watch Client Clip
                </motion.a>
              )}
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <Button
            variant="outline"
            className="text-lg px-6 py-3 border-slate-300 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-300 transition"
          >
            View Our Work
          </Button>
        </motion.div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-[-80px] left-[-40px] w-[300px] h-[300px] bg-[#2fb97d33] rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute bottom-[-60px] right-[-40px] w-[240px] h-[240px] bg-[#3b82f633] rounded-full blur-2xl opacity-30 z-0" />
    </section>
  );
}