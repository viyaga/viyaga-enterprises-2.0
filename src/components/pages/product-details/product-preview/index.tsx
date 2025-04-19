import { Button } from "@/components/ui/button"

interface ProductPreviewProps {
  screenshots: string[]
}

export default function ProductPreview({ screenshots }: ProductPreviewProps) {
  return (
    <section className="py-8 px-4 max-w-4xl mx-auto">
      <div className="flex justify-center gap-8 mb-6">
        {screenshots.map((screenshot, index) => (
          <img
            key={index}
            src={screenshot}
            alt={`Screenshot ${index + 1}`}
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        ))}
      </div>
      <Button variant="outline" className="mt-6 w-full md:w-48 mx-auto">
        Try Live Demo
      </Button>
    </section>
  )
}
