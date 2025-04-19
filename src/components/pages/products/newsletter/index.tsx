import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Newsletter() {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="mb-6">Join our newsletter to hear about the latest tools and updates.</p>
      <div className="flex justify-center gap-2 max-w-md mx-auto">
        <Input placeholder="Enter your email" className="w-full" />
        <Button>Subscribe</Button>
      </div>
    </section>
  )
}
