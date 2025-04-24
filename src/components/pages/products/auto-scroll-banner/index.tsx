"use client"

import { motion } from "framer-motion"

const logos = [
  { src: "/images/american-express.svg", name: "American Express" },
  { src: "/images/united-parcel-service.svg", name: "United Parcel Service" },
  { src: "/images/verizon.svg", name: "Verizon" },
  { src: "/images/AT&T.svg", name: "AT&T" },
  { src: "/images/nike.svg", name: "Nike" },
  { src: "/images/Aliexpress.svg", name: "Aliexpress" },
  { src: "/images/mckinsey-company.svg", name: "McKinsey & Company" },
  { src: "/images/PricewaterhouseCoopers.svg", name: "PwC" },
]

export default function AutoScrollBanner() {
  return (
    <div
      className="w-full overflow-hidden py-6 max-w-6xl mx-auto bg-white dark:bg-[#00182e]"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <motion.div
        className="flex whitespace-nowrap gap-10 px-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {logos.concat(logos).map((logo, i) => (
            <img
            key={i}
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              className="h-6 sm:h-8 md:h-10 object-contain opacity-80 transition duration-300 md:grayscale md:hover:grayscale-0 md:opacity-70 md:hover:opacity-100"
            />
        ))}
      </motion.div>
    </div>
  )
}
