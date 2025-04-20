"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import { Sheet } from '@/components/ui/sheet'
import { SheetTrigger, SheetContent } from '@/components/ui/sheet'
import HamburgerMenuBtn from './hamburgerMenuBtn'
import Link from 'next/link'
import Sidebar from './sidebar'

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 w-full bg-white py-3 md:py-5 z-50 border-b"
    >
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-12 max-w-screen-xl mx-auto">
        <Link href="/" className="flex-shrink-0 mr-4">
          <img
            src="/logo/logo-viyaga-bold.svg"
            width={162}
            height={50}
            alt="Viyaga logo"
          />
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-10">
          <Link href="/" className="text-base font-medium hover:text-green-600 transition">
            Home
          </Link>
          <Link href="/portfolio" className="text-base font-medium hover:text-green-600 transition">
            Portfolio
          </Link>
          <Link href="/demo-designs" className="text-base font-medium hover:text-green-600 transition">
            Designs
          </Link>
          <Link href="/services" className="text-base font-medium hover:text-green-600 transition">
            Services
          </Link>
          <Link href="/about-us" className="text-base font-medium hover:text-green-600 transition">
            About
          </Link>
          <Link href="https://take.app/viyaga" className="text-base font-medium hover:text-green-600 transition">
            Learn
          </Link>
          <Link href="/contact-us" className="text-base font-medium hover:text-green-600 transition">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <Languages className="w-4 h-4" />
          </Button>
          <Button asChild variant="default" className="hidden md:inline-flex">
            <Link href="/contact-us">Book a Demo</Link>
          </Button>

          {/* Mobile Drawer */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <HamburgerMenuBtn />
            </SheetTrigger>
            <SheetContent>
              <Sidebar onClose={() => setIsOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

export default TopBar
