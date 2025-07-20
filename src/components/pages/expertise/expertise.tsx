"use client";

import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services } from "./services-data";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ExpertisePage() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="py-12 md:py-24 px-4 min-h-screen text-black dark:text-white bg-gradient-to-b from-[#113a65] to-[#f0f9ff] dark:to-[#0f172a]"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text"
      >
        Our Areas of Expertise
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className="max-w-2xl mx-auto text-center text-lg text-white/80 mb-12"
      >
        We combine innovation, best practices, and hands‑on experience to deliver solutions that drive growth, efficiency,
        and competitive advantage.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {services.map((svc) => (
          <motion.div
            key={svc.id}
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-start space-y-4 p-6 group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex-shrink-0">
                <Image src={svc.image} alt={svc.title} width={48} height={48} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {svc.title}
                </h3>
                <Badge
                  // variant="ghost"
                  className="text-xs font-medium px-2 py-1 mt-1"
                  style={{ color: svc.color }}
                >
                  {svc.badge}
                </Badge>
              </div>
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              {svc.desc}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1 pl-4">
              {svc.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
