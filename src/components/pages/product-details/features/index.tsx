interface FeaturesProps {
    features: string[]
  }
  
  export default function Features({ features }: FeaturesProps) {
    return (
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Key Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-lg">{feature}</li>
          ))}
        </ul>
      </section>
    )
  }
  