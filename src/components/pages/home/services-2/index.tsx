"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Counter from "./Counter";
import Image from "next/image";

const services = [
  {
    id: 1,
    img: "/images/ai-services.png",
    title: "AI Agents & Automation",
    counter: 46,
  },
  {
    id: 2,
    img: "/images/web-services.png",
    title: "Full-Stack Web Applications",
    counter: 35,
  },
  {
    id: 3,
    img: "/images/mobile-app-services.png",
    title: "Scalable Mobile Solutions",
    counter: 23,
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
    <section className="w-full h-full bg-gradient-to-b from-gray-900 via-[#012a55] to-[#113a65] overflow-hidden text-white py-3 lg:py-5">
      <div
        ref={ref}
        className="flex flex-col lg:flex-row w-full h-full py-12 gap-1 md:gap-12 max-w-6xl mx-auto"
      >
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-10 px-3">
          <motion.h1
            variants={textVariants}
            animate={isInView ? "animate" : "initial"}
            className="text-4xl lg:text-6xl font-bold leading-tight text-white"
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
                className={`flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 ${
                  activeServiceId === service.id
                    ? "bg-white/20"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    service.id === 1
                      ? "bg-red-500"
                      : service.id === 2
                        ? "bg-teal-600"
                        : "bg-yellow-600"
                  }`}
                >
                  <Image
                    src={service.img}
                    width={24}
                    height={24}
                    alt={service.title}
                    className="p-1 sm:p-2 md:p-3"
                  />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold text-white">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gray-300">
                    {service.counter} Projects
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <div className="flex gap-6 mt-6">
            <Counter from={0} to={100} text="Projects Completed" />
            <Counter from={0} to={98} symbol="%" text="Client Satisfaction" />
          </div>
        </div>

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
