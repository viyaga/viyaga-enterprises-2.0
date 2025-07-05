'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { ChevronDown } from 'lucide-react'

export function WhoWeAreSection() {
  return (
    <section
      id="intro"
      className="container px-4 sm:px-6 lg:px-8 pt-16 pb-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-16 lg:gap-24">
        {/* LEFT TEXT CONTENT */}
        <div className="space-y-6">
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="uppercase bg-gradient-to-r from-secondary/20 to-transparent text-secondary text-xs font-semibold px-4 py-1 rounded-full tracking-wider"
            >
              Who We Are
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
          >
            Engineering Reliable Software for Forward-Thinking Businesses
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-muted-foreground text-base leading-relaxed"
          >
            Viyaga is a software development firm focused on creating stable, efficient, and maintainable digital systems. Our work spans web applications, backend platforms, and cloud-native solutions.
            <br />
            <br />
            Every project we take on is designed to support measurable growth. Through collaboration, clear processes, and engineering precision, we help organizations transform their workflows and reach new levels of performance.
          </motion.p>
        </div>

        {/* RIGHT ACCORDION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {accordionItems.map(({ title, content, value }) => (
              <AccordionItem
                key={value}
                value={value}
                className="bg-muted/60 dark:bg-muted/70 border border-border rounded-xl shadow-sm"
              >
                <AccordionTrigger className="flex items-center justify-between text-lg font-medium py-4 px-5 hover:bg-muted/40 dark:hover:bg-muted/50 rounded-xl transition-colors">
                  <span>{title}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 pt-0 text-muted-foreground text-sm leading-relaxed">
                  {content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

const accordionItems = [
  {
    value: 'mission',
    title: 'Our Mission',
    content:
      'To build dependable and efficient software systems that address real-world challenges. We are dedicated to supporting our clients with clean architecture, clear communication, and long-term maintainability.'
  },
  {
    value: 'vision',
    title: 'Our Vision',
    content:
      'To be recognized as a trusted engineering partner for modern companies seeking technical excellence, speed, and clarity. We continuously evolve our methods to deliver well-structured solutions in an ever-changing digital environment.'
  },
  {
    value: 'values',
    title: 'Our Values',
    content:
      'We prioritize honesty, precision, and accountability. From code to communication, we focus on what matters: clear outcomes, dependable delivery, and respectful collaboration.'
  }
]