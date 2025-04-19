import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Work Together</h2>
        <p className="text-muted-foreground mb-6">
          Ready to discuss your next big idea? Drop us a message.
        </p>
        <form className="space-y-4">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" className="min-h-[120px]" />
          <Button size="lg" type="submit" className="w-full gap-2">
            Send Message <Mail className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}
