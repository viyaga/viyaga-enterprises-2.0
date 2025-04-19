"use client"

import { Menu } from 'lucide-react'
import { SheetTrigger } from '@/components/ui/sheet'

const HamburgerMenu = () => {
  return (
    <SheetTrigger className="md:hidden" asChild>
      <button aria-label="Open menu" className="text-foreground hover:text-primary transition-colors">
        <Menu size={24} />
      </button>
    </SheetTrigger>
  )
}

export default HamburgerMenu