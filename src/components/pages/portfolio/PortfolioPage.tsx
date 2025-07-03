"use client";

import { CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { projects, Project } from "./projects";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const categories = [
  "All",
  ...Array.from(new Set(projects.flatMap((p) => p.tags))),
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tags.includes(filter))
      );
    }
  }, [filter]);

  return (
    <motion.section
      variants={containerVariants}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="pt-24 sm:pt-28 pb-20 px-4 sm:px-6 text-black dark:text-white bg-gradient-to-b from-[#0d1a2d] to-[#121212]"
    >
      {/* Heading */}
      <motion.h2
        variants={fadeInUp}
        className="text-3xl sm:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
      >
        Projects We&apos;ve Transformed
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        className="text-center max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg text-gray-200 mb-10"
      >
        Explore how we&apos;ve helped businesses around the world level up their
        digital experience with elegant designs, technical depth, and
        problem-solving.
      </motion.p>

      {/* Filters */}
      <motion.div
        variants={fadeInUp}
        className="flex gap-2 mb-10 sm:mb-12 overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center"
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setFilter(cat)}
            variant={filter === cat ? "default" : "outline"}
            className="capitalize shrink-0 text-sm sm:text-base whitespace-nowrap"
          >
            {cat}
          </Button>
        ))}
      </motion.div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/90 dark:bg-zinc-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden group"
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
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
            </div>

            <CardContent className="p-5 sm:p-6 text-left">
              <CardTitle className="text-lg sm:text-xl font-semibold mb-2">
                {project.title}
              </CardTitle>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-3">
                <span className="font-medium">Challenge:</span>{" "}
                {project.problem}
              </p>
              <p className="text-sm italic text-green-700 dark:text-green-300 mb-4">
                <span className="font-medium">Solution:</span>{" "}
                {project.solution}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                variant="link"
                className="text-primary dark:text-blue-400 underline hover:text-primary/80 p-0"
                asChild
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </Link>
              </Button>
            </CardContent>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div variants={fadeInUp} className="text-center mt-16">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button className="text-sm sm:text-base px-5 sm:px-6 py-3 mt-5 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-green-600 hover:to-blue-600">
            Start Your Project
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
