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
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * i,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function TestimonialsSection() {
  return (
    <section
      className="px-4 py-10 md:py-12 lg:py-16 bg-muted dark:bg-background text-black 
      dark:text-white bg-gradient-to-b from-[#f0f9ff] to-[#deecf5] dark:from-[#0f172a] dark:to-[#0e172d]"
    >
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
          >
            <Card className="p-6 rounded-2xl border-none shadow-xl bg-gradient-to-br from-[#f0f4ff] via-white to-[#e2e8f0] dark:from-[#1f2937] dark:via-[#111827] dark:to-[#1f2937] transition-all duration-300">
              <CardContent className="space-y-4">
                <p className="italic text-muted-foreground">“{t.text}”</p>
                <div className="flex items-center gap-4">
                  <Avatar className="bg-primary text-white">
                    <AvatarFallback className="font-bold">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{t.name}</p>
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
