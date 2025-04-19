import { Badge } from "@/components/ui/badge"

interface ProductHeaderProps {
  name: string
  category: string
  price: number
}

export default function ProductHeader({ name, category, price }: ProductHeaderProps) {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{name}</h1>
      <p className="text-xl text-muted-foreground">{category}</p>
      <div className="flex items-center gap-4 mt-6">
        <span className="font-bold text-lg">${price}</span>
        <Badge variant="secondary">{category}</Badge>
      </div>
    </section>
  )
}
