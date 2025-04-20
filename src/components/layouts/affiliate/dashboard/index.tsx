"use client";

import { ReactNode, useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

export default function AffiliateDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 md:hidden w-64">
          <Sidebar onClick={() => setSidebarOpen(false)} />
        </SheetContent>

        {/* Sidebar for desktop */}
        <Sidebar className="hidden md:flex" />

        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Topbar */}
          <Topbar onSidebarToggle={() => setSidebarOpen(true)} />

          {/* Content Area */}
          <ScrollArea className="flex-1 overflow-y-auto bg-background p-4">
            {children}
          </ScrollArea>
        </div>
      </Sheet>
    </div>
  );
}
