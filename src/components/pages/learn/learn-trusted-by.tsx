"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { src: "/images/american-express.svg", name: "American Express" },
  { src: "/images/united-parcel-service.svg", name: "United Parcel Service" },
  { src: "/images/AT&T.svg", name: "AT&T" },
  { src: "/images/nike.svg", name: "Nike" },
  { src: "/images/etsy.svg", name: "Etsy" },
  { src: "/images/Aliexpress.svg", name: "Aliexpress" },
  { src: "/images/mckinsey-company.svg", name: "McKinsey & Company" },
  { src: "/images/PricewaterhouseCoopers.svg", name: "PwC" },
];

export default function LearnTrustedBy() {
  const logos = [...companies, ...companies];

  return (
    <section className="py-10 md:py-15 
                        bg-white dark:bg-gradient-to-b dark:from-[#00182e] dark:to-gray-900">
      <div className="mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold 
                       text-black dark:text-white mb-2">
          Trusted by Global Brands and Fast‑Growth Startups
        </h2>
        <p className="text-sm mb-6 max-w-xl mx-auto 
                      text-gray-700 dark:text-gray-400">
          Our software powers innovation at scale—from Fortune 500s to next‑gen disruptors.
        </p>

        <div
          className="overflow-hidden relative w-full max-w-6xl mx-auto"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <motion.div
            className="flex gap-12 px-6 w-[200%]"
            initial={{ x: "0%" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {logos.map(({ src, name }, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 
                           h-12 sm:h-14 md:h-16 relative
                           bg-gray-100 dark:bg-white/90
                           rounded-lg shadow-md p-3
                           transition duration-300
                           hover:ring-2 hover:ring-blue-400"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Logo of ${name}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 7rem, (max-width: 768px) 8rem, 10rem"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
