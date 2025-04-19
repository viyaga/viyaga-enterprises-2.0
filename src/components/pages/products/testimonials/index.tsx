import { Card, CardContent } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { StarIcon } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-12 px-4 bg-[oklch(var(--surface))]">
      <h2 className="text-2xl font-bold mb-8 text-center">What Our Users Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[...Array(2)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar />
                <div>
                  <p className="font-semibold">User #{i + 1}</p>
                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(5)].map((_, j) => (
                      <StarIcon key={j} className="h-4 w-4 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p>"Amazing product! Helped speed up our development massively."</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
