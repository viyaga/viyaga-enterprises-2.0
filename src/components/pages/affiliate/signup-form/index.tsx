"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { textVariant, zoomIn, staggerContainer } from "@/constants/motion";

export default function SignupForm() {
  return (
    <motion.section
      className="bg-muted py-16 px-4 md:px-10"
      variants={staggerContainer(0.2, 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="max-w-xl mx-auto">
        <motion.h2 variants={textVariant(0.3)} className="text-3xl font-bold mb-6 text-center">
          Become an Affiliate
        </motion.h2>
        <form className="space-y-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Email Address" type="email" />
          <Input placeholder="Your Website or Social Handle" />
          <Textarea placeholder="Tell us how you plan to promote" />
          <motion.div variants={zoomIn(0.4, 0.6)}>
            <Button type="submit" size="lg" className="w-full">
              Apply Now
            </Button>
          </motion.div>
        </form>
      </div>
    </motion.section>
  );
}
