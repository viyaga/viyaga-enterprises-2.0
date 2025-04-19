interface DescriptionProps {
  description: string;
}

export default function Description({ description }: DescriptionProps) {
  return (
    <section className="py-8 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Description</h2>
      <p className="text-lg">{description}</p>
    </section>
  );
}
