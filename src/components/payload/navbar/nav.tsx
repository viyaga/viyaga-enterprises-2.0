"use client";

import React, { useState } from "react";
import { Link, useNav } from "@payloadcms/ui";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "./navLinks";
import { toast } from "sonner";
import { logoutAction } from "@/lib/payload/users";
import { LogOut, X } from "lucide-react";

export default function MyCustomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { setNavOpen } = useNav();

  const handleCloseNav = () => {
    setNavOpen(false)
  };

  const handleLogout = async () => {
    const res = await logoutAction();
    if ("error" in res) return toast.error(res.error);
    toast.success("Logged out Successfully");
    router.replace(`/dashboard/login?redirect=${encodeURIComponent(pathname)}`);
  };

  return (
    <nav className="relative w-full p-5 border-b border-gray-200 dark:border-gray-700">
      {/* Close Button */}
      <button
        aria-label="Close Menu"
        className="absolute top-5 right-5 p-2 bg-transparent border-none"
        type="button"
        onClick={handleCloseNav}
      >
        <span className="sr-only">Close Menu</span>
        <X />
      </button>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-4 pt-16">
        {navLinks.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href} className="list-none">
              <Link
                href={href}
                className={`flex items-center gap-2 transition-colors no-underline ${
                  isActive ? "text-primary underline" : "text-muted-foreground"
                }`}
              >
                {icon} {label}
              </Link>
            </li>
          );
        })}

        {/* Logout Button */}
        <li className="pt-6 list-none">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-white transition-colors font-medium shadow-sm cursor-pointer text-red-500"
          >
            <LogOut className="h-5 w-5" />
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
}
