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

export default function AutoScrollBanner() {
  const logos = [...companies, ...companies];

  return (
    <section className="bg-white dark:bg-[#00182e]">
      <div
        className="w-full px-4 text-center"
       
      >
        <div className="overflow-hidden relative w-full max-w-6xl mx-auto"  style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}>
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
                className="flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 h-12 sm:h-14 md:h-16 relative bg-white/90 rounded-lg shadow-md p-3 transition duration-300 hover:ring-2 hover:ring-blue-400"
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
