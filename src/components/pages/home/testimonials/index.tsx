"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alice Smith",
    role: "CTO, TechWave",
    text: "Viyaga Enterprises helped us launch a complex SaaS product on time with outstanding quality.",
  },
  {
    name: "Raj Mehra",
    role: "Founder, MarketMinds",
    text: "Exceptional communication, fast iterations, and true technical mastery.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * i,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function TestimonialsSection() {
  return (
    <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-[#f0f9ff] to-[#f0f9ff] dark:from-[#0f172a] dark:to-[#0f172a] text-black dark:text-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
          >
            <Card className="p-6 md:p-8 rounded-2xl border-none shadow-lg bg-gradient-to-br from-[#f9fbff] to-[#e5edf7] dark:from-[#1f2937] dark:to-[#111827] transition-all duration-300">
              <CardContent className="space-y-6">
                <p className="italic text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  “{t.text}”
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <Avatar className="bg-primary text-white">
                    <AvatarFallback className="font-bold uppercase">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-base">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}