"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SheetTrigger } from "@/components/ui/sheet";
import { Menu, Bell } from "lucide-react";
import ThemeToggle from "../../theme-toggle";

export function Topbar({ onSidebarToggle }: { onSidebarToggle: () => void }) {
  return (
    <header className="w-full h-16 bg-muted flex items-center justify-between px-4 md:px-6 border-b">
      <div className="flex items-center gap-4">
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onSidebarToggle}>
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <div className="text-lg font-semibold tracking-tight">Affiliate Dashboard</div>
      </div>
      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 text-sm">No new notifications</PopoverContent>
        </Popover>
        <ThemeToggle />
        <Button variant="default" size="sm">Logout</Button>
      </div>
    </header>
  );
}
