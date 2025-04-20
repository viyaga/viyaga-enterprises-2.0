'use client';

import { motion } from 'framer-motion';
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
];

export default function TechStackSection() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Technologies We Use</h2>
        <p className="text-center text-white/70 mb-14 max-w-2xl mx-auto">
          We use industry-leading technologies to deliver fast, scalable, and secure applications tailored to your needs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-items-center">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="text-center group"
            >
              <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="mx-auto mb-3"
                />
                <p className="text-sm font-semibold text-white">{tech.name}</p>
                <p className="text-xs text-white/60 group-hover:text-white mt-1">{tech.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
