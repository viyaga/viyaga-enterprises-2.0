"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import Counter from "./Counter";
import Image from "next/image";

const services = [
  { id: 1, img: "/service1.png", title: "Web Development", counter: 35 },
  { id: 2, img: "/service2.png", title: "Mobile App Development", counter: 23 },
  { id: 3, img: "/service3.png", title: "AI Integrations", counter: 46 },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px" });

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

  return (
    <section className="w-full h-full bg-gradient-to-b from-gray-900 via-[#012a55] to-[#113a65] overflow-hidden text-white py-3 lg:py-5">
      <div
        ref={ref}
        className="flex flex-col lg:flex-row w-full h-full py-12 gap-1 md:gap-12 max-w-6xl mx-auto"
      >
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
              <motion.div
                key={service.id}
                variants={listVariants}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300"
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
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gray-300">
                    {service.counter} Projects
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex gap-6 mt-6">
            <Counter from={0} to={104} text="Projects Completed" />
            <Counter from={0} to={98} text="Happy Clients" />
          </div>
        </div>

        <div className="w-screen lg:w-1/2 h-[500px] lg:h-auto flex justify-center items-center mx-auto">
          <ComputerModelContainer />
        </div>
      </div>
    </section>
  );
};

export default Services;
