export default function TechStackSection() {
    const techs = ["React", "Next.js", "Node.js", "Tailwind CSS", "AWS", "Docker", "PostgreSQL"];
    return (
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Technologies We Use</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techs.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    );
  }
  