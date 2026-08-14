import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function Projects({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          title="Selected work"
          link={{ href: "/work", label: "All projects" }}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {list.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
