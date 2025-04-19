"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn } from "@/constants/motion";

const services = [
  { title: "Custom Software", desc: "Tailored SaaS and business tools" },
  { title: "Landing Pages", desc: "High-converting, responsive designs" },
  { title: "Ecommerce Websites", desc: "Boost your online store with ease" },
  { title: "Business Websites", desc: "Professional and scalable web presence" },
];

export default function ProductOverview() {
  return (
    <section className="py-16 bg-muted text-muted-foreground px-4 md:px-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeIn("up", "spring", i * 0.2, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
