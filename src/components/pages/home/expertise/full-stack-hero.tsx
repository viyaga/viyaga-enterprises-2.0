"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

const codeSnippets = [
  'import express from "express";',
  'const app = express();',
  'app.listen(3000, () => console.log("Live"));',
  '#[get("/")] async fn hello() -> &\'static str\' { "Hi" }',
];

const FullStackHero: React.FC = () => (
  <motion.section
    id="full-stack"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
    className="scroll-mt-24 relative flex flex-col lg:flex-row lg:gap-x-20 items-center p-12 bg-gradient-to-r from-[#0E1A2B] to-[#1D2D44] rounded-3xl overflow-hidden"
  >
    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
      <code className="block bg-[#0a1f3a] p-6 rounded-lg overflow-auto text-sm text-green-400 font-mono leading-relaxed shadow-xl">
        <Typewriter
          words={codeSnippets}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={20}
          delaySpeed={1500}
        />
      </code>
    </div>

    <div className="w-full lg:w-1/2 space-y-6 text-white text-center lg:text-left">
      <h2 className="text-4xl lg:text-5xl font-mono font-semibold">
        Full‑Stack Craftsmanship
      </h2>
      <p className="text-lg opacity-80 leading-relaxed">
        From scalable APIs to beautiful UIs, we build robust digital solutions for startups, enterprises, and every kind of business.
      </p>
      <Button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white text-base">
        Start Your Project
      </Button>
    </div>
  </motion.section>
);

export default FullStackHero;
