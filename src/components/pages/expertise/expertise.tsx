"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { services } from "./services-data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ExpertisePage() {
  return (
    <section className="min-h-screen bg-background text-foreground py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Our Areas of <span className="text-primary">Expertise</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From startup MVPs to enterprise systems, we bring deep technical skill and business context to every solution we build.
        </p>
      </div>

      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => (
          <motion.div variants={fadeInUp} key={service.id}>
            <Card className="rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-muted">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs font-medium border"
                    style={{ color: service.color, borderColor: service.color }}
                  >
                    {service.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}