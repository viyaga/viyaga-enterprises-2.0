'use client';

import { motion } from 'framer-motion';
import {
  zoomIn,
  staggerContainer,
  textVariant,
} from '@/constants/motion';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { CheckCircle, Globe, Star, Cpu } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    title: 'Web Development',
    icon: <Globe className="w-6 h-6 text-primary drop-shadow-glow" />,
    image: '/images/services/web.png',
    description:
      'Crafting modern, responsive websites with stunning user experiences using the latest technologies.',
  },
  {
    title: 'Mobile Apps',
    icon: <Star className="w-6 h-6 text-primary drop-shadow-glow" />,
    image: '/images/services/mobile.png',
    description:
      'Building performant, native-like mobile applications for both Android and iOS platforms.',
  },
  {
    title: 'SaaS Solutions',
    icon: <CheckCircle className="w-6 h-6 text-primary drop-shadow-glow" />,
    image: '/images/services/saas.png',
    description:
      'Developing scalable SaaS platforms to power your business and automate processes.',
  },
  {
    title: 'AI Integrations',
    icon: <Cpu className="w-6 h-6 text-primary drop-shadow-glow" />,
    image: '/images/services/ai.png',
    description:
      'Embedding AI capabilities into your systems for automation, personalization, and prediction.',
  },
];

export default function ServicesSection() {
  return (
    <motion.section
      variants={staggerContainer(0.15, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-28 px-6 md:px-10 text-black dark:text-white overflow-hidden min-h-screen
                 bg-gradient-to-b from-[#f0f4ff] via-[#e2e8f0] to-[#cbd5e1] dark:from-[#1e293b] dark:via-[#334155] dark:to-[#4e5b6e]"
    >
      {/* Optional Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent dark:from-white/5 pointer-events-none" />

      <motion.h2
        variants={textVariant(0.2)}
        className="text-4xl md:text-5xl font-extrabold text-center relative z-10 mb-16 drop-shadow-title"
      >
        Our Services
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={zoomIn(0.2 + i * 0.2, 0.6)}
          >
            <Card className="bg-white/90 dark:bg-white/5 border border-white/20 backdrop-blur-md rounded-3xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 h-full">
              <CardContent className="flex flex-col items-center space-y-4">
                <Image
                  src={s.image}
                  alt={s.title}
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
                <div className="text-primary">{s.icon}</div>
                <CardTitle className="text-lg drop-shadow-sm">{s.title}</CardTitle>
                <p className="text-sm text-black/80 dark:text-white/80">{s.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
