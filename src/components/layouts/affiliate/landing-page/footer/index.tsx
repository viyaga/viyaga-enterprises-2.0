"use client";

import { motion } from "framer-motion";
import { footerVariants } from "@/constants/motion";

export default function Footer() {
  return (
    <motion.footer
      className="py-6 text-center text-sm text-muted-foreground"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <p>© 2025 Viyaga Enterprises. All rights reserved.</p>
      <p>
        <a href="/terms" className="underline mx-2">Terms</a> | <a href="/privacy" className="underline mx-2">Privacy</a>
      </p>
    </motion.footer>
  );
}
