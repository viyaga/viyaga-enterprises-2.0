'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ComputerModelContainer from './computer/ComputerModelContainer';
import Counter from './Counter';
import Image from 'next/image';
import { useMediaQuery } from '@/lib/useMediaQuery'; // optional hook

const services = [
  { id: 1, img: '/service1.png', title: 'Web Development', counter: 35 },
  { id: 2, img: '/service2.png', title: 'Product Design', counter: 23 },
  { id: 3, img: '/service3.png', title: 'Branding', counter: 46 },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-200px' });
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const textVariants = {
    initial: { x: -100, y: -100, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const listVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.5 } },
  };

  return (
    <section ref={ref} className="flex flex-col lg:flex-row w-full h-full px-6 py-12 gap-12 overflow-hidden max-w-6xl mx-auto">
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-10">
        <motion.h1
          variants={textVariants}
          animate={isInView ? 'animate' : 'initial'}
          className="text-5xl lg:text-6xl font-bold"
        >
          How do I help?
        </motion.h1>

        <motion.div
          variants={listVariants}
          animate={isInView ? 'animate' : 'initial'}
          className="flex flex-col gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={listVariants}
              className="flex items-center gap-4 p-5 rounded-2xl bg-muted"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  service.id === 1
                    ? 'bg-red-500'
                    : service.id === 2
                    ? 'bg-teal-800'
                    : 'bg-yellow-700'
                }`}
              >
                <Image src={service.img} width={24} height={24} alt={service.title} />
              </div>
              <div>
                <h2 className="text-lg font-medium">{service.title}</h2>
                <p className="text-sm text-muted-foreground">{service.counter} Projects</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-wrap gap-6 mt-6">
          <Counter from={0} to={104} text="Projects Completed" />
          <Counter from={0} to={72} text="Happy Clients" />
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto flex justify-center items-center">
        {isDesktop ? (
          <ComputerModelContainer />
        ) : (
          <ComputerModelContainer />
        )}
      </div>
    </section>
  );
};

export default Services;
