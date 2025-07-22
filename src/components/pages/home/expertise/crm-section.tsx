"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LucideChevronDown, LucideChevronUp } from "lucide-react";
import Image from "next/image";

const crmData = {
  title: "Custom CRM & ERP Solutions",
  desc: "Streamline your operations with customizable dashboards, automated billing, and intelligent reporting tailored to your team.",
  image: "/images/services/crm-erp.png",
  features: [
    {
      title: "Lead & Pipeline Management",
      content:
        "Track leads through every stage of your funnel with smart automations, reminders, and pipeline visualizations.",
    },
    {
      title: "Automated Billing & Invoicing",
      content:
        "Create and manage invoices with real-time payment tracking, auto-reminders, and recurring billing options.",
    },
    {
      title: "Role-Based Dashboards",
      content:
        "Deliver customized dashboards with insights tailored to the user's role, access level, and priorities.",
    },
  ],
};

// Motion variants for fade-in & stagger
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const CRMSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <motion.section
      id="crm-erp"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="scroll-mt-24 py-16 bg-gradient-to-br from-[#2a0845] via-[#6441a5] to-[#1f1c2c] text-white rounded-2xl shadow-sm p-4"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {crmData.title}
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/80 mb-10 max-w-prose"
          >
            {crmData.desc}
          </motion.p>

          <motion.div variants={containerVariants} className="space-y-4">
            {crmData.features.map((feat, idx) => {
              const isOpen = openIdx === idx;

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="rounded-2xl border border-white/10 bg-white/5 dark:bg-white/10 shadow-xl transition-all duration-300 hover:shadow-white/20"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`feature-panel-${idx}`}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200 hover:bg-white/10 rounded-2xl"
                  >
                    <h4
                      id={`feature-title-${idx}`}
                      className="text-base md:text-lg font-medium"
                    >
                      {feat.title}
                    </h4>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <LucideChevronDown className="w-5 h-5 text-white" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        id={`feature-panel-${idx}`}
                        role="region"
                        aria-labelledby={`feature-title-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="px-5 pb-5 text-sm text-white/80"
                      >
                        {feat.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className="hidden md:block relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
        >
          <Image
            src={crmData.image}
            alt="CRM Dashboard Illustration"
            fill
            className="object-cover object-center transition-transform duration-300 hover:scale-105"
            placeholder="blur"
            blurDataURL="/images/services/crm-erp.png"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CRMSection;