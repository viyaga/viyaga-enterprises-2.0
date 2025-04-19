"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { slideIn } from "@/constants/motion";

export default function HowItWorks() {
  const steps = ["Sign Up", "Get Your Link", "Promote", "Earn Commissions"];

  return (
    <section className="bg-muted py-16 px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={slideIn("up", "spring", i * 0.2, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-2xl font-bold">{i + 1}</p>
                  <p>{step}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
