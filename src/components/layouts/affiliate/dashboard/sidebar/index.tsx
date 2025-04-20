"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/affiliate", label: "Dashboard" },
  { href: "/affiliate/links", label: "Referral Links" },
  { href: "/affiliate/analytics", label: "Analytics" },
  { href: "/affiliate/payouts", label: "Payouts" },
  { href: "/affiliate/settings", label: "Settings" },
];

export function Sidebar({ className, onClick }: { className?: string; onClick?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className={cn("w-64 bg-muted p-4 border-r", className)} onClick={onClick}>
      <h2 className="text-xl font-semibold mb-4 tracking-tight">Affiliate</h2>
      <nav className="space-y-1 text-sm">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "block px-3 py-2 rounded-md transition-colors",
              pathname === link.href
                ? "bg-accent text-accent-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
            )}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
