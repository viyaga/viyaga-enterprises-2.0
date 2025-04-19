import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-16 text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Discover High-Quality Software Tools</h1>
      <p className="text-lg mb-6">Browse premium tools, scripts, and apps made for developers and businesses.</p>
      <div className="flex justify-center gap-4">
        <Button>Browse Products</Button>
        <Button variant="outline">Submit a Product</Button>
      </div>
    </section>
  )
}
