"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type DemoLink = {
  url: string;
  label: string;
};

const DemoLinks = ({ demoUrls }: { demoUrls: DemoLink[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {demoUrls.map((demo, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href={demo?.url} target="_blank">
            <Button
              className="px-4 py-2 text-xs rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-green-600 hover:to-blue-600"
              variant="ghost"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              {demo.label}
            </Button>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default DemoLinks;