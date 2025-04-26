"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Licensing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Licensing Options</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="personal">
            <AccordionTrigger>Personal License</AccordionTrigger>
            <AccordionContent>
              Use on personal projects with no redistribution.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="commercial">
            <AccordionTrigger>Commercial License</AccordionTrigger>
            <AccordionContent>
              Use in commercial products with attribution.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </motion.div>
  );
}
