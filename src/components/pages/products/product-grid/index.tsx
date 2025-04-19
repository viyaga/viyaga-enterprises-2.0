import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const mockProducts = [
  { id: 1, name: "Invoice Generator", price: 29, category: "Finance", description: "Create custom invoices." },
  { id: 2, name: "Task Manager Pro", price: 39, category: "Productivity", description: "Organize tasks easily." },
  { id: 3, name: "ChatBot AI", price: 59, category: "AI", description: "Add an AI chatbot to your site." },
]

export default function ProductGrid() {
  return (
    <section className="py-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {mockProducts.map((product) => (
        <Card key={product.id} className="bg-[oklch(var(--surface))]">
          <CardContent className="p-4">
            <div className="h-40 bg-muted rounded-lg mb-4" />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.description}</p>
            <div className="flex items-center justify-between mt-4">
              <Badge variant="secondary">{product.category}</Badge>
              <span className="font-bold">${product.price}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
