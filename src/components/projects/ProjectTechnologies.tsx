interface Technology {
  name: string;
  description: string;
}

interface ProjectTechnologiesProps {
  technologies: Technology[];
}

export default function ProjectTechnologies({ technologies }: ProjectTechnologiesProps) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Stack
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">Technologies used</h2>
      </div>
      <div className="space-y-4">
        {technologies.map((tech, index) => (
          <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0">
            <h3 className="text-base font-semibold text-slate-900">{tech.name}</h3>
            <p className="mt-2 text-slate-600">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}