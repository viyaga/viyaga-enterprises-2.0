"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { textVariant, fadeIn, staggerContainer } from "@/constants/motion";

export default function Testimonials() {
  return (
    <motion.section
      className="py-16 px-4 md:px-10 max-w-4xl mx-auto"
      variants={staggerContainer(0.2, 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2 variants={textVariant(0.3)} className="text-3xl font-bold text-center mb-6">
        Affiliate Success Stories
      </motion.h2>
      <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
        <Card>
          <CardContent className="p-6">
            <blockquote className="italic">
              “I earned ₹45,000 in my first month just by sharing my custom referral link. Super easy!”
            </blockquote>
            <p className="mt-2 text-right text-sm text-muted-foreground">– Ankit S., Affiliate</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}
