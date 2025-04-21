'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '@/constants/motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section
      className="relative min-h-[calc(100svh-20px)] w-full flex flex-col justify-center items-center overflow-hidden text-black dark:text-white bg-background px-4"
      variants={staggerContainer(0.2, 0.3)}
      initial="hidden"
      animate="show"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-5"
        autoPlay
        muted
        loop
        playsInline
      >
        {/* Mobile video first for smaller devices */}
        <source
          src="/videos/hero-bg-mobile.mp4"
          type="video/mp4"
          media="(max-width: 768px)"
        />
        {/* Fallback/desktop video */}
        <source
          src="/videos/hero-bg-1.mp4"
          type="video/mp4"
          media="(min-width: 769px)"
        />
        Your browser does not support the video tag.
      </video>

      {/* Background Glow Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/10 via-transparent to-gray-100 pointer-events-none dark:from-blue-600/30 dark:via-transparent dark:to-gray-800" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl text-center">
        <motion.h1
          variants={textVariant(1.1)}
          className="text-balance text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-xl text-white"
        >
          Turning Bold Ideas Into Digital Impact
        </motion.h1>

        <motion.p
          variants={textVariant(1.3)}
          className="text-muted-foreground text-lg md:text-xl font-bold max-w-2xl mx-auto mb-8 drop-shadow-sm text-pretty text-white"
        >
          We craft high-performance software for ambitious businesses.
        </motion.p>

        <motion.div
          variants={textVariant(1.4)}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link href="/demo-designs" aria-label="Explore our work">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white hover:brightness-110 transition"
            >
              Explore Our Work <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/contact-us" aria-label="Contact us to start your project">
            <Button variant="outline" size="lg" className="gap-2 text-black bg-white">
              Let&apos;s Talk
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </motion.div>
    </motion.section>
  );
}
