"use client"

import { Menu } from 'lucide-react'
import { SheetTrigger } from '@/components/ui/sheet'

const HamburgerMenuBtn = () => {
  return (
    <SheetTrigger className='md:hidden' asChild>
      <button aria-label="Open menu" className="text-black hover:text-green-600 transition">
        <Menu size={24} />
      </button>
    </SheetTrigger>
  )
}

export default HamburgerMenuBtn
