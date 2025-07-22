"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { services } from "./services-data";
import ServiceBadge from "./service-badge";

const ServicesCarousel: React.FC = () => {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);
  const visible = services.slice(1, 4);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(400);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth + 24);
    }
  }, []);

  useEffect(() => {
    controls.start({ x: -index * cardWidth });
  }, [index, controls, cardWidth]);

  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x;
    const direction = offset > 0 ? -1 : 1;
    const newIndex = Math.min(Math.max(index + direction, 0), visible.length - 1);
    setIndex(newIndex);
  };

  return (
    <div className="relative overflow-hidden py-8 mb-14">
      <motion.div
        animate={controls}
        transition={{ type: 'spring', stiffness: 100 }}
        className="flex gap-6 px-4"
        drag="x"
        dragConstraints={{ left: -cardWidth * (visible.length - 1), right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
      >
        {visible.map((svc, i) => (
          <section key={svc.slug} id={svc.slug} className="scroll-mt-24">
            <motion.div
              ref={i === 0 ? cardRef : null}
              className="min-w-[400px] backdrop-blur-lg bg-white/20 dark:bg-black/20 rounded-2xl p-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image src={svc.image} alt={svc.title} width={40} height={40} />
                <h4 className="text-xl font-semibold text-black dark:text-white">{svc.title}</h4>
              </div>
              <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">{svc.desc}</p>
              <ServiceBadge text={svc.badge} color={svc.color} />
            </motion.div>
          </section>
        ))}
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-2 mt-4">
        {visible.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${i === index ? 'bg-blue-500' : 'bg-gray-400'}`}
            aria-label={`Go to service ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;