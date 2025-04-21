'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const techStack = [
  {
    name: 'React',
    logo: '/logos/react.svg',
    type: 'Frontend',
    desc: 'Modern UI development for dynamic user experiences.',
  },
  {
    name: 'Next.js',
    logo: '/logos/nextjs.svg',
    type: 'Frontend',
    desc: 'Server-rendered React framework for speed & SEO.',
  },
  {
    name: 'Node.js',
    logo: '/logos/nodejs.svg',
    type: 'Backend',
    desc: 'Scalable backend APIs with JavaScript.',
  },
  {
    name: 'Tailwind CSS',
    logo: '/logos/tailwindcss.svg',
    type: 'Frontend',
    desc: 'Utility-first styling for responsive design.',
  },
  {
    name: 'AWS',
    logo: '/logos/aws.svg',
    type: 'DevOps',
    desc: 'Cloud hosting, computing, and scaling.',
  },
  {
    name: 'Docker',
    logo: '/logos/docker.svg',
    type: 'DevOps',
    desc: 'Containerization for consistent deployments.',
  },
  {
    name: 'PostgreSQL',
    logo: '/logos/postgresql.svg',
    type: 'Database',
    desc: 'Reliable and scalable relational database.',
  },
  {
    name: 'MongoDB',
    logo: '/logos/mongodb.svg',
    type: 'Database',
    desc: 'Flexible, scalable NoSQL database for modern apps.',
  },
];

export default function TechStackSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Trigger when 30% of the section is in view
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="py-24 px-4 min-h-screen flex items-center justify-center text-black bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] dark:from-[#2d3748] dark:via-[#4a5568] dark:to-[#2b2d31]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-center mb-6 drop-shadow-md text-black dark:text-white">
          Technologies We Use
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto text-black dark:text-white">
          We use industry-leading technologies to deliver fast, scalable, and secure applications tailored to your needs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="w-full h-full"
            >
              <div className="h-full min-h-[220px] flex flex-col justify-between items-center text-center p-4 rounded-lg shadow-lg transition-all duration-300 bg-white dark:bg-[#1a202c] dark:text-white">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <p className="text-sm font-semibold">{tech.name}</p>
                <p className="text-xs opacity-80 mt-2">{tech.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
