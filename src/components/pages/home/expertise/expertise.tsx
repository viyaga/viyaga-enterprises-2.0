"use client";

import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { services } from "../../expertise/services-data";

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function ExpertiseSection() {
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 md:py-28 px-4 min-h-screen text-black dark:text-white bg-gradient-to-b from-[#f0f9ff] to-[#f0f9ff] dark:from-[#0f172a] dark:to-[#0f172a]"
        >
            <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text"
            >
                Our Areas of Expertise
            </motion.h2>
            <motion.p
                variants={fadeInUp}
                className="max-w-2xl mx-auto text-center text-lg text-gray-700 dark:text-gray-300 mb-16"
            >
                We blend innovation, proven methodologies, and practical expertise to deliver impactful solutions that fuel growth and efficiency.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {services.map((svc) => (
                    <motion.div
                        key={svc.id}
                        variants={fadeInUp}
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 150 }}
                        className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg rounded-2xl p-6 flex flex-col gap-4 transition-all border border-transparent hover:border-primary"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex-shrink-0">
                                <Image
                                    src={svc.image}
                                    alt={svc.title}
                                    width={48}
                                    height={48}
                                    className="rounded-md"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {svc.title}
                                </h3>
                                <Badge
                                    className="text-xs font-medium px-2 py-1 mt-1 bg-opacity-10"
                                    style={{
                                        color: svc.color,
                                        borderColor: svc.color,
                                        backgroundColor: `${svc.color}22`,
                                    }}
                                >
                                    {svc.badge}
                                </Badge>
                            </div>
                        </div>

                        <p className="text-sm text-gray-800 dark:text-gray-200">
                            {svc.desc}
                        </p>

                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
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