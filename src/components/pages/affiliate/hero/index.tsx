"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { textVariant, zoomIn, staggerContainer } from "@/constants/motion";

export default function HeroSection() {
  return (
    <motion.section
      className="py-20 text-center px-4 md:px-10 mx-auto bg-gradient-1-accent text-foreground rounded-xl shadow-xl"
      variants={staggerContainer(0.2, 0.3)}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          variants={textVariant(0.3)}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Earn Big Promoting Business-Boosting Solutions
        </motion.h1>
        <motion.p
          variants={textVariant(0.5)}
          className="text-lg md:text-xl mb-6"
        >
          Join our affiliate program and get up to 30% commission for every
          client you refer.
        </motion.p>
        <motion.div variants={zoomIn(0.7, 0.6)}>
          <Button size="lg">Join Now</Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
