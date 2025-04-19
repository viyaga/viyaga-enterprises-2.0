import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alice Smith",
      role: "CTO, TechWave",
      text: "Viyaga Enterprises helped us launch a complex SaaS product on time with outstanding quality.",
    },
    {
      name: "Raj Mehra",
      role: "Founder, MarketMinds",
      text: "Exceptional communication, fast iterations, and true technical mastery.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted">
      <h2 className="text-3xl font-semibold text-center mb-12">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <Card key={i} className="p-6">
            <CardContent className="space-y-4">
              <p className="italic text-muted-foreground">“{t.text}”</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
