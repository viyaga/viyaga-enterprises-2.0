"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { navVariants } from '@/constants/motion'
import { Sheet } from '@/components/ui/sheet'
import Navbar from './navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import HamburgerMenu from './hamburger-menu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeSheet = () => setIsOpen(false)

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="absolute top-0 left-0 w-full bg-background text-foreground py-3 md:py-5 z-50 border-b border-border"
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

        <div className="hidden md:flex flex-wrap items-center gap-5 lg:gap-10">
          {[
            { href: "/", label: "Home" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/demo-designs", label: "Designs" },
            { href: "/services", label: "Services" },
            { href: "/about-us", label: "About" },
            { href: "https://take.app/viyaga", label: "Learn" },
            { href: "/contact-us", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-base font-medium hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button asChild variant="default" className="hidden md:inline-flex">
            <Link href="/contact-us">Book a Demo</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <HamburgerMenu />
            <Navbar onClose={closeSheet} />
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
