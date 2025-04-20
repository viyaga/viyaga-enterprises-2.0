"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/constants/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <motion.section
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden text-foreground bg-background"
      variants={staggerContainer(0.2, 0.3)}
      initial="hidden"
      animate="show"
    >
      {/* 🔥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.35] blur-[1px]"
      >
        <source src="/videos/hero-bg-2.mp4" type="video/mp4" />
      </video>

      {/* Hero Content */}
      <div className="relative z-30 max-w-5xl text-center px-4">
        <motion.h1
          variants={textVariant(1.1)}
          className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-xl"
        >
          Turning Bold Ideas Into <span className="text-primary">Digital Impact</span>
        </motion.h1>

        <motion.p
          variants={textVariant(1.3)}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-sm"
        >
          We craft high-performance software for ambitious businesses
        </motion.p>

        <motion.div
          variants={textVariant(1.4)}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link href="/demo-designs">
            <Button size="lg" className="gap-2">
              Explore Our Work <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/contact-us">
            <Button variant="outline" size="lg" className="gap-2">
              Let&apos;s Talk
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
