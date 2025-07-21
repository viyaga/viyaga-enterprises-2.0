"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, Variants, useAnimation, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { services } from './services-data';

// Motion variants
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// 1. FullStack Hero w/ code typing
const codeSnippets = [
  'import express from "express";',
  'const app = express();',
  'app.listen(3000, () => console.log("Live"));',
  '#[get("/")] async fn hello() -> &\'static str\' { "Hi" }',
];

const FullStackHero: React.FC = () => (
  <motion.section
    id="fullstack-hero"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.5 }}
    variants={fadeInUp}
    className="relative flex flex-col lg:flex-row lg:gap-x-20 items-center p-12 bg-gradient-to-r from-[#0E1A2B] to-[#1D2D44] rounded-3xl overflow-hidden"
  >
    {/* Left - Code */}
    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
      <code className="block bg-[#0a1f3a] p-6 rounded-lg overflow-auto text-sm text-green-400 font-mono leading-relaxed shadow-xl">
        <Typewriter
          words={codeSnippets}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={20}
          delaySpeed={1500}
        />
      </code>
    </div>

    {/* Right - Text */}
    <div className="w-full lg:w-1/2 space-y-6 text-white text-center lg:text-left">
      <h2 className="text-4xl lg:text-5xl font-mono font-semibold">
        Full‑Stack Craftsmanship
      </h2>
      <p className="text-lg opacity-80 leading-relaxed">
        From scalable APIs to beautiful UIs, we build robust digital solutions
        for startups, enterprises, and every kind of business.
      </p>
      <Button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white text-base">
        Start Your Project
      </Button>
    </div>
  </motion.section>
);

// 2. Carousel for services 2–4
const ServicesCarousel: React.FC = () => {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);
  const visible = services.slice(1, 4);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(400);

  // Measure card width dynamically
  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth + 24); // +gap (e.g., 1.5rem)
    }
  }, []);

  // Move when index changes
  useEffect(() => {
    controls.start({ x: -index * cardWidth });
  }, [index, controls, cardWidth]);

  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x;
    const direction = offset > 0 ? -1 : 1; // swipe direction
    const newIndex = Math.min(
      Math.max(index + direction, 0),
      visible.length - 1
    );
    setIndex(newIndex);
  };

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        animate={controls}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex gap-6 px-4"
        drag="x"
        dragConstraints={{ left: -cardWidth * (visible.length - 1), right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
      >
        {visible.map((svc, i) => (
          <motion.div
            ref={i === 0 ? cardRef : null}
            key={svc.id}
            className="min-w-[400px] backdrop-blur-lg bg-white/20 dark:bg-black/20 rounded-2xl p-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Image src={svc.image} alt={svc.title} width={40} height={40} />
              <h4 className="text-xl font-semibold text-black dark:text-white">{svc.title}</h4>
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
              {svc.desc}
            </p>
            <Badge
              className="px-2 py-1 text-xs"
              style={{
                color: svc.color,
                borderColor: svc.color,
                backgroundColor: `${svc.color}20`,
              }}
            >
              {svc.badge}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-2 mt-4">
        {visible.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-blue-500" : "bg-gray-400"
            }`}
            aria-label={`Go to service ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


// 3. CRM/ERP Accordion for service #5
const CRMAccordion: React.FC = () => {
  const crm = services.find((s) => s.badge === 'CRM/ERP');
  const [open, setOpen] = useState<number | null>(null);

  if (!crm) return null;
  return (
    <section id={String(crm.id)} className="py-24 bg-gradient-to-r from-purple-700 to-purple-500 text-white">
      <h3 className="text-4xl font-bold text-center mb-12">Custom CRM & ERP</h3>
      <div className="max-w-4xl mx-auto space-y-4">
        {crm.features.map((feat, idx) => (
          <motion.div
            key={idx}
            layout
            className="bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden"
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            <motion.div className="p-6 flex justify-between items-center cursor-pointer">
              <span>{feat}</span>
              <span className="text-2xl">{open === idx ? '−' : '+'}</span>
            </motion.div>
            <AnimatePresence>
              {open === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-sm"
                >
                  Detailed info about {feat.toLowerCase()}. KPI, graphs, stats, whatever!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// 4. Mosaic for services 6–9
const ServicesMosaic: React.FC = () => {
  const mosaic = services.slice(5);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4">
      {mosaic.map((svc) => (
        <motion.div
          id={String(svc.id)}
          key={svc.id}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
        >
          <span
            className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 group-hover:scale-y-100 transition-transform"
            style={{ backgroundColor: svc.color }}
          />
          <div className="flex items-center gap-3 mb-4">
            <Image src={svc.image} alt={svc.title} width={36} height={36} />
            <h5 className="text-lg font-semibold text-gray-900 dark:text-white">{svc.title}</h5>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{svc.desc}</p>
          <Badge
            className="px-2 py-1 text-xs"
            style={{
              color: svc.color,
              borderColor: svc.color,
              backgroundColor: `${svc.color}20`,
            }}
          >
            {svc.badge}
          </Badge>
          <motion.a
            href="#"
            className="absolute inset-0 flex items-center justify-center text-blue-500 opacity-0 bg-white/20 dark:bg-black/20 transition-opacity"
            whileHover={{ opacity: 1 }}
          >
            Learn More →
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
};


// 5. Sticky JumpNav for services
const JumpNav: React.FC = () => {
  const [active, setActive] = useState<number>(services[0].id);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("section[id], div[id]")
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.id));
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Trigger when section center is in view
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: number
  ) => {
    e.preventDefault();
    const section = document.getElementById(String(id));
    if (section) {
      const offset = 80; // Scroll 80px before the section
      const y = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 py-2 z-10">
      <ul className="flex justify-center gap-4 flex-wrap">
        {services.map((svc) => (
          <li key={svc.id}>
            <a
              href={`#${svc.id}`}
              onClick={(e) => handleClick(e, svc.id)}
              className={`px-4 py-1 rounded-full text-sm transition-colors ${active === svc.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                }`}
            >
              {svc.badge}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function ExpertiseSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#0f172a] dark:to-[#0f172a] text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Sticky nav */}
        <JumpNav />
        {/* Intro */}
        <motion.div variants={fadeInUp} className="py-16 px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text mx-auto inline-block">
            Our Areas of Expertise
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            We blend innovation, proven methodologies, and practical expertise to deliver impactful solutions that fuel growth and efficiency.
          </p>
        </motion.div>
        {/* Sections */}
        <FullStackHero />
        <ServicesCarousel />
        <CRMAccordion />
        <ServicesMosaic />
      </div>

    </motion.section>
  );
}