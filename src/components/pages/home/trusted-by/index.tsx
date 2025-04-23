"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  "/logos/google.png",
  "/logos/meta.png",
  "/logos/aws.png",
  "/logos/microsoft.png",
  "/logos/netflix.png",
  "/logos/shopify.png",
  "/logos/stripe.png",
  "/logos/vercel.png",
];

export default function TrustedBy() {
  const logos = [...companies, ...companies];

  return (
    <section className="py-16 bg-gradient-to-b from-[#f0f9ff] to-white dark:from-[#0f172a] dark:to-[#020617]">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-10">
        Trusted By Industry Leaders
      </h2>

      <div className="overflow-hidden relative w-full">
        <motion.div
          className="flex gap-12 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {logos.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-40 h-16 relative grayscale hover:grayscale-0 transition duration-300">
              <Image
                src={src}
                alt={`Company ${index}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
