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
      image: "/images/portfolio/ecommerce.jpg",
    },
    {
      title: "Health AI Dashboard",
      description: "Interactive AI-powered platform for real-time diagnostics.",
      link: "#",
      image: "/images/portfolio/ai-dashboard.jpg",
    },
    {
      title: "Enterprise CRM Suite",
      description: "Custom CRM with role-based access and integrations.",
      link: "#",
      image: "/images/portfolio/crm.jpg",
    },
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 px-4 min-h-screen text-black dark:text-white
                 bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]
                 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155]"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-4xl font-bold text-center mb-12 drop-shadow-md"
      >
        Our Portfolio
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div key={i} variants={fadeInUp}>
            <Card className="p-0 border border-white/20 bg-white/90 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-xl font-semibold">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-black/80 dark:text-white/80 mb-4">
                  {project.description}
                </p>
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
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
