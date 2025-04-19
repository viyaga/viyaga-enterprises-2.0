"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { SheetContent } from "@/components/ui/sheet"

const Navbar = ({ onClose }: { onClose: () => void }) => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/demo-designs", label: "Designs" },
    { href: "/services", label: "Services" },
    { href: "/about-us", label: "About" },
    { href: "https://take.app/viyaga", label: "Learn" },
    { href: "/contact-us", label: "Contact" },
  ]

  return (
    <SheetContent
      side="left"
      hideCloseBtn
      className="w-80 p-0 bg-background text-foreground"
    >
      <div className="flex justify-between items-center p-4 border-b border-border">
        <Link href="/" onClick={onClose}>
          <img
            src="/logo/logo-viyaga-bold.svg"
            width={162}
            height={50}
            alt="Viyaga logo"
          />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <X size={28} />
        </button>
      </div>

      <ul className="px-4 py-2 space-y-3">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={onClose}
              className="block py-2 text-base font-medium hover:text-primary transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </SheetContent>
  )
}

export default Navbar
