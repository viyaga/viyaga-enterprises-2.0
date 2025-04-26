"use client"

import { Button } from "@/components/ui/button"
import { RocketIcon } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section
      className="relative pb-15 pt-36 text-center px-4 bg-gradient-to-b from-[#f4cc77] via-[#f7d895] to-[#fff] 
      dark:from-[#00182e] dark:via-[#00334d] dark:to-[#00182e] 
      light:from-[#ffffff] light:via-[#f5f5f5] light:to-[#ffffff] 
      overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-5 max-w-3xl mx-auto leading-tight">
          Discover High-Quality Software Tools Built for Growth
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto text-muted-foreground">
          Explore powerful tools developed by Viyaga Enterprises to elevate your business.
        </p>
        <div className="flex justify-center">
          <Button size="lg" className="gap-2">
            <RocketIcon className="w-5 h-5" />
            Browse Products
          </Button>
        </div>
      </motion.div>

      {/* Decorative Background Glow (Optional) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/20 rounded-full blur-3xl opacity-30" />
    </section>
  )
}
