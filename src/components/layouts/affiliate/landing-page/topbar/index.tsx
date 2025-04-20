"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "../../theme-toggle";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-16 bg-muted flex items-center justify-between px-4 md:px-6 border-b">
      <div className="flex items-center gap-4">
        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="text-lg font-semibold tracking-tight">
          Affiliate Program
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant="default" size="sm">
          Login
        </Button>
      </div>
    </header>
  );
}
