"use client";

import { motion } from "framer-motion";
import { textVariant, textVariant2, textContainer, staggerContainer } from "@/constants/motion";

export default function ProgramHighlights() {
  return (
    <motion.section
      className="py-16 px-4 md:px-10 max-w-4xl mx-auto"
      variants={staggerContainer(0.2, 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2 variants={textVariant(0.3)} className="text-3xl font-bold text-center mb-6">
        Why Join Our Affiliate Program?
      </motion.h2>
      <motion.ul variants={textContainer} className="space-y-4 text-lg">
        <motion.li variants={textVariant2}>💰 Up to 30% commissions per sale</motion.li>
        <motion.li variants={textVariant2}>🕒 60-day tracking cookie</motion.li>
        <motion.li variants={textVariant2}>💸 Fast payouts & transparent dashboard</motion.li>
        <motion.li variants={textVariant2}>📊 High conversion rates & average order value</motion.li>
        <motion.li variants={textVariant2}>📥 Ready-to-use marketing assets</motion.li>
      </motion.ul>
    </motion.section>
  );
}
