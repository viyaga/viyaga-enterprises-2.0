"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Counter from "./Counter";
import Image from "next/image";

const services = [
  {
    id: 1,
    img: "/images/services/ai-services.png",
    title: "AI Agents & Automation",
    counter: 46,
    bgColor: "bg-red-500",
  },
  {
    id: 2,
    img: "/images/services/web-services.png",
    title: "Full-Stack Web Applications",
    counter: 35,
    bgColor: "bg-teal-600",
  },
  {
    id: 3,
    img: "/images/services/mobile-app-services.png",
    title: "Scalable Mobile Solutions",
    counter: 23,
    bgColor: "bg-yellow-600",
  },
];


const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px" });
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);

  const textVariants = {
    initial: { x: -100, y: -100, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const listVariants = {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.5 },
    },
  };

  const selectedService = services.find((s) => s.id === activeServiceId);

  return (
    <section
      ref={ref}
      className="
        w-full h-full 
        bg-gray-50 text-black 
        dark:bg-gradient-to-b dark:from-gray-900 dark:via-[#012a55] dark:to-[#113a65] dark:text-white
        overflow-hidden py-3 lg:py-5
      "
    >
      <div className="flex flex-col lg:flex-row w-full h-full py-12 gap-1 md:gap-12 max-w-6xl mx-auto px-3">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-10">
          <motion.h1
            variants={textVariants}
            animate={isInView ? "animate" : "initial"}
            className="text-4xl lg:text-6xl font-bold leading-tight"
          >
            How We Help You Grow?
          </motion.h1>

          <motion.div
            variants={listVariants}
            animate={isInView ? "animate" : "initial"}
            className="flex flex-col gap-4"
          >
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                variants={listVariants}
                className={`
                  flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 cursor-pointer
                  ${activeServiceId === service.id
                    ? "bg-gray-200 dark:bg-white/20"
                    : "bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20"
                  }
                `}
              >
                <div className={`relative w-12 h-12 rounded-full overflow-hidden ${service.bgColor}`}>
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {service.counter} Projects
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <div className="flex gap-6 mt-6">
            <Counter from={0} to={100} text="Projects Completed" className="text-black dark:text-white" />
            <Counter from={0} to={98} symbol="%" text="Client Satisfaction" className="text-black dark:text-white" />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full py-4 lg:w-1/2 h-[400px] lg:h-auto flex justify-center items-center mx-auto px-4 sm:px-8">
          <Image
            key={selectedService?.img}
            src={selectedService?.img || ""}
            alt={selectedService?.title || ""}
            width={500}
            height={500}
            className="object-contain rounded-xl transition duration-700 ease-in-out shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;