import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Global eCommerce Platform",
      description: "Scalable eCommerce system with microservices and React frontend.",
      link: "#",
    },
    {
      title: "Health AI Dashboard",
      description: "Interactive AI-powered platform for real-time diagnostics.",
      link: "#",
    },
    {
      title: "Enterprise CRM Suite",
      description: "Custom CRM with role-based access and integrations.",
      link: "#",
    },
  ];
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-12">Our Portfolio</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <Card key={i} className="p-6">
            <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <Button variant="link" className="text-primary p-0 gap-1" asChild>
                <a href={project.link} target="_blank">
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
