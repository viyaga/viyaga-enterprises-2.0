"use client";

import { motion } from "framer-motion";
import JumpNav from "./jump-nav";
import FullStackHero from "./full-stack-hero";
import ServicesCarousel from "./services-carousel";
import CRMSection from "./crm-section";
import ServicesMosaic from "./services-mosaic";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ExpertiseSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#0f172a] dark:to-[#0f172a] text-black dark:text-white"
      aria-labelledby="expertise-heading"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <JumpNav />
        <motion.div variants={fadeInUp} className="py-16 px-4 text-center">
          <h2 id="expertise-heading" className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text inline-block">
            Our Areas of Expertise
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            We blend innovation, proven methodologies, and practical expertise to deliver impactful solutions that fuel growth and efficiency.
          </p>
        </motion.div>
        <FullStackHero />
        <ServicesCarousel />
        <CRMSection />
        <ServicesMosaic />
      </div>
    </motion.section>
  );
}