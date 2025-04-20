import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Review {
  name: string
  rating: number
  comment: string
}

interface ReviewsProps {
  reviews: Review[]
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <section className="py-8 px-4 bg-[oklch(var(--surface-variant))]">
      <h2 className="text-2xl font-bold mb-6 text-center">Customer Reviews</h2>
      <div className="max-w-4xl mx-auto">
        {reviews.map((review, index) => (
          <Card key={index} className="mb-4">
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg">&quot;{review.comment}&quot;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
