"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Build Scalable Software with Viyaga Enterprises
      </h1>
      <p className="text-lg md:text-xl max-w-2xl text-muted-foreground mb-8">
        We craft modern web and mobile solutions for global businesses.
      </p>
      <Button size="lg" className="gap-2">
        Get a Free Quote <ArrowRight className="w-4 h-4" />
      </Button>
    </section>
  );
}
