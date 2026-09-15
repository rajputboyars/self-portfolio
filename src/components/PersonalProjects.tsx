import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { isPersonal, projects } from "@/lib/data";

export default function PersonalProjects({ limit = 2 }: { limit?: number }) {
  const personal = projects.filter(isPersonal).slice(0, limit);
  if (personal.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1320px] px-1 pt-28 sm:px-5 md:pt-32">
      <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-bold sm:text-[42px]">
            Personal &amp; <span className="text-accent">freelance</span>
          </h2>
          <p className="mt-3 max-w-md leading-relaxed text-mute">
            Products I designed, built, tested and shipped on my own.
          </p>
        </div>
        <Link
          href="/work#personal"
          className="group flex items-center gap-2 text-[15px] text-mute hover:text-accent-deep"
        >
          All personal projects
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {personal.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
