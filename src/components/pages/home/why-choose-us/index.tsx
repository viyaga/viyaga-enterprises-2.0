"use client";

import { motion } from "framer-motion";
import { Rocket, UserCheck, LineChart, BadgeDollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function WhyChooseUsSection() {
  const features = [
    { icon: Rocket, text: "Fast Turnaround Time" },
    { icon: UserCheck, text: "Dedicated Point of Contact" },
    { icon: LineChart, text: "Proven Results in Key Industries" },
    { icon: BadgeDollarSign, text: "Transparent Pricing & Process" }
  ];

  return (
    <section className="w-full px-4 py-16 bg-gradient-to-b from-[#f0f9ff] to-[#a4a7d6] dark:from-[#0f172a] dark:to-[#1e293b] transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Why Choose Us
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto text-base md:text-lg">
          We blend speed, transparency, and industry knowledge to bring you dependable solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, text }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="group py-0 bg-white dark:bg-slate-800 border border-transparent dark:border-[#2fb97d44] rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 w-full max-w-sm sm:max-w-xs md:max-w-md mx-auto">
                <CardContent className="flex items-center gap-4 p-4 sm:p-6">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-[#2fb97d] text-white group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-left font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base md:text-lg transition-colors">
                    {text}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
