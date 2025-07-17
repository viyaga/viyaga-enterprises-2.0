"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { SheetContent } from "@/components/ui/sheet";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { navLinks, socialLinks } from "../top-bar-data";

const Sidebar = ({ onClose }: { onClose: () => void }) => {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);



  return (
    <SheetContent
      side="left"
      hideCloseBtn
      className="w-80 p-0 bg-white text-black dark:bg-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between"
    >
      {/* Header */}
      <div>
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <Link href="/" onClick={onClose}>
            <Image
              src={
                isDark
                  ? "/logo/logo-viyaga-bold-light.svg"
                  : "/logo/logo-viyaga-bold.svg"
              }
              width={162}
              height={50}
              alt="Viyaga logo"
            />
          </Link>
          <button onClick={onClose} aria-label="Close">
            <X
              size={28}
              className="text-black hover:text-primary dark:text-white dark:hover:text-primary transition-colors"
            />
          </button>
        </div>

        {/* Nav Links */}
        <ul className="px-4 py-6 space-y-3">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={onClose}
                className={`block px-4 py-2 rounded-xl font-medium text-md transition-all duration-200 text-black dark:text-white
                ${pathname === href
                    ? "underline underline-offset-4 text-primary dark:text-primary"
                    : ""
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <Button
            asChild
            variant="default"
            className="inline-flex md:hidden text-black dark:text-white bg-gradient-to-r from-blue-500 to-green-500 hover:brightness-110 transition font-semibold rounded-xl px-12 py-4 mt-5"
          >
            <Link href="/hire-us">Hire Us</Link>
          </Button>
        </ul>
      </div>

      {/* Footer Social Icons */}
      <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-center space-x-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <Icon size={22} />
            </Link>
          ))}
        </div>
      </div>
    </SheetContent>
  );
};

export default Sidebar;
