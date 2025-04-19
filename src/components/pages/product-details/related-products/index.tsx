import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function RelatedProducts() {
  return (
    <section className="py-8 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <Card key={index} className="bg-[oklch(var(--surface))]">
            <CardContent>
              <h3 className="font-semibold text-lg">Related Product {index + 1}</h3>
              <span className="text-sm text-muted-foreground">Category</span>
              <Button variant="outline" className="mt-4 w-full">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
