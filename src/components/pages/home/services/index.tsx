import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CheckCircle, Globe, Star, Cpu } from "lucide-react";

export default function ServicesSection() {
  const services = [
    { title: "Web Development", icon: <Globe className="w-6 h-6" /> },
    { title: "Mobile Apps", icon: <Star className="w-6 h-6" /> },
    { title: "SaaS Solutions", icon: <CheckCircle className="w-6 h-6" /> },
    { title: "AI Integrations", icon: <Cpu className="w-6 h-6" /> },
  ];

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <Card key={i} className="rounded-2xl shadow-lg p-6 text-center">
            <CardContent className="flex flex-col items-center">
              <div className="mb-4 text-primary">{s.icon}</div>
              <CardTitle>{s.title}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
