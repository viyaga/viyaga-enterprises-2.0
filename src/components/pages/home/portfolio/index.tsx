"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projects";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PortfolioSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="
        py-12 md:py-24 px-4 min-h-screen
        bg-white text-black
        dark:bg-gradient-to-b dark:from-[#113a65] dark:to-[#0f172a] dark:text-white
      "
    >
      <motion.h2
        variants={fadeInUp}
        className="
          text-4xl font-bold mb-4 text-center
          bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text drop-shadow-md
        "
      >
        Case Studies
      </motion.h2>

      <motion.h3
        variants={fadeInUp}
        className="
          text-xl md:text-2xl mb-12 font-medium text-center
          text-gray-700 dark:text-white/80
        "
      >
        How We Helped Businesses Scale, Transform, and Win
      </motion.h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((project, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-2xl shadow-xl hover:shadow-2xl"
            >
              <Card
                className="
                  p-0 border
                  bg-gray-50 border-gray-200
                  dark:bg-white/5 dark:border-white/20
                  backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl
                  transition-all duration-300 h-full overflow-hidden group
                "
              >
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    placeholder="blur"
                    blurDataURL="/images/placeholder.jpg"
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 dark:bg-black/10 group-hover:bg-black/10 transition" />
                </div>

                <CardContent className="p-5 sm:p-6 text-left">
                  <CardTitle className="text-lg sm:text-xl font-semibold mb-2">
                    {project.title}
                  </CardTitle>

                  <p className="text-sm text-gray-800 dark:text-gray-300 mb-3">
                    {project.description}
                  </p>

                  <p className="text-sm text-gray-700 dark:text-gray-400 mb-3">
                    <span className="font-medium">The Challenge:</span>{" "}
                    {project.problem}
                  </p>

                  <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                    <span className="font-medium">Our Solution:</span>{" "}
                    {project.solution}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="
                          bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded
                          dark:bg-blue-900 dark:text-blue-300
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="link"
                    className="
                      underline hover:text-primary/80
                      text-blue-600 dark:text-blue-400 p-0
                    "
                    asChild
                  >
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
      </div>

      <div className="text-center mt-16">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/work">
            <Button className="
              sm:w-auto text-base sm:text-lg px-6 py-3 md:mt-5 rounded-full
              bg-gradient-to-r from-blue-500 to-green-500 text-white
              hover:from-green-600 hover:to-blue-600
            ">
              Explore All Case Studies
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}