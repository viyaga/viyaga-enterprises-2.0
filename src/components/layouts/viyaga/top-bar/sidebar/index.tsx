'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { SheetContent } from '@/components/ui/sheet'

const Sidebar = ({ onClose }: { onClose: () => void }) => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/demo-designs', label: 'Designs' },
    { href: '/services', label: 'Services' },
    { href: '/about-us', label: 'About' },
    { href: 'https://take.app/viyaga', label: 'Learn' },
    { href: '/contact-us', label: 'Contact' },
  ]

  return (
    <SheetContent
      side="left"
      hideCloseBtn
      className="w-80 p-0 bg-sidebar text-sidebar-foreground border-r border-sidebar-border"
    >
      <div className="flex justify-between items-center p-4 border-b border-sidebar-border">
        <Link href="/" onClick={onClose}>
          <img
            src="/logo/logo-viyaga-bold.svg"
            width={162}
            height={50}
            alt="Viyaga logo"
          />
        </Link>
        <button onClick={onClose} aria-label="Close">
          <X size={28} className="text-sidebar-foreground hover:text-primary transition-colors" />
        </button>
      </div>

      <ul className="px-4 py-4 space-y-2">
        {navLinks.map(({ href, label }, index) => (
          <li key={href}>
            <Link
              href={href}
              onClick={onClose}
              className={`block w-full px-3 py-2 rounded-xl font-medium transition-all duration-200
              hover:text-primary-foreground hover:bg-gradient-${(index % 6) + 7}-accent`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </SheetContent>
  )
}

export default Sidebar
