"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { textVariant, staggerContainer, zoomIn } from "@/constants/motion";

export default function HeroSection() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-accent text-foreground"
      variants={staggerContainer(0.2, 0.3)}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={textVariant(0.3)}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Build Scalable Software with Viyaga Enterprises
      </motion.h1>
      <motion.p
        variants={textVariant(0.5)}
        className="text-lg md:text-xl max-w-2xl text-muted-foreground mb-8"
      >
        We craft modern web and mobile solutions for global businesses.
      </motion.p>
      <motion.div variants={zoomIn(0.7, 0.6)}>
        <Button
          size="lg"
          className="gap-2 text-primary hover:bg-primary-foreground hover:text-background transition-all"
        >
          Get a Free Quote <ArrowRight className="w-4 h-4" />
        </Button>
      </motion.div>
    </motion.section>
  );
}
