"use client";

import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Types
interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
}

// Animation Variants
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

export default function PortfolioSection() {
  const projects: Project[] = [
    {
      title: "Global eCommerce Platform",
      description:
        "Scalable eCommerce system with microservices and React frontend.",
      link: "#",
      image: "/images/lee.jpg",
      tags: ["React", "Microservices", "Node.js"],
    },
    {
      title: "Health AI Dashboard",
      description: "Interactive AI-powered platform for real-time diagnostics.",
      link: "#",
      image: "/images/lee.jpg",
      tags: ["AI", "Next.js", "Tailwind"],
    },
    {
      title: "Enterprise CRM Suite",
      description: "Custom CRM with role-based access and integrations.",
      link: "#",
      image: "/images/lee.jpg",
      tags: ["CRM", "GraphQL", "PostgreSQL"],
    },
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="py-12 md:py-24 px-4 min-h-screen text-black dark:text-white
                 bg-gradient-to-b from-[#113a65] to-[#f0f9ff]
                 dark:from-[#113a65] dark:to-[#0f172a]"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text drop-shadow-md"
      >
        Our Portfolio
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="p-0 border border-white/20 bg-white/90 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden group">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-xl font-semibold">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-black/80 dark:text-white/80 mb-4">
                  {project.description}
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button
                    variant="link"
                    className="text-primary dark:text-blue-400 underline hover:text-primary/80"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project{" "}
                      <ExternalLink className="w-4 h-4 ml-1 inline" />
                    </a>
                  </Button>
                </motion.div>
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
          <Button className="w-full sm:w-auto text-base sm:text-lg px-6 py-3 md:mt-5 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-green-600 hover:to-blue-600">
            Let's Build Something Great Together
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
