"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle";
import { Sheet } from "@/components/ui/sheet";
import HamburgerMenuBtn from "./hamburgerMenuBtn";
import Link from "next/link";
import Sidebar from "./sidebar";
import { useTheme } from "next-themes";
import Image from "next/image";
import { navLinks } from "./top-bar-data";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme) {
      setIsDark(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full p-0 bg-white text-black dark:bg-gray-900/80 dark:text-white z-50 shadow-md backdrop-blur-md"
    >
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-12 py-3 md:py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 mr-4">
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-md font-medium transition-colors text-gray-800 dark:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Button
            asChild
            variant="default"
            className="hidden md:inline-flex text-black dark:text-white bg-gradient-to-r from-blue-500 to-green-500 hover:brightness-110 transition font-semibold rounded-xl px-5 py-2"
          >
            <Link href="/login-register">Login</Link>
          </Button>

          {/* Mobile Drawer */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <HamburgerMenuBtn />
            <Sidebar onClose={() => setIsOpen(false)} />
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default TopBar;
