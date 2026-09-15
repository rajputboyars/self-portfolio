import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import type { Project } from "@/lib/data";

const covers = [
  "bg-teal text-on-teal-mute",
  "bg-accent text-teal",
  "bg-[#2a7468] text-on-teal-mute",
  "bg-[#d6e4e0] text-mute",
];

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.12} className={index % 2 === 1 ? "md:mt-20" : ""}>
      <Link
        href={`/work/${project.slug}`}
        className="group flex h-full flex-col gap-5 rounded-[30px] bg-card p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(16,48,43,0.35)]"
      >
        <div
          className={`relative flex h-60 items-center justify-center overflow-hidden rounded-[22px] sm:h-[340px] ${covers[index % covers.length]}`}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} homepage`}
              fill
              sizes="(min-width: 768px) 640px, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <>
              <div className="absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-150" />
              <span className="relative px-6 text-center text-4xl font-extrabold tracking-tight opacity-40 transition-transform duration-500 group-hover:scale-110 sm:text-5xl">
                {project.client}
              </span>
            </>
          )}
          <span
            className={`absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-xs font-semibold ${
              index % 2 === 1 ? "bg-teal text-white" : "bg-accent text-on-accent"
            }`}
          >
            {project.year}
          </span>
          {project.category === "personal" && (
            <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-teal">
              Personal project
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2.5 px-3 pb-3 sm:px-4 sm:pb-4">
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-accent-deep">
            {project.client}
          </span>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold sm:text-[28px]">{project.title}</h2>
            <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-teal text-accent transition-all duration-300 group-hover:rotate-45 group-hover:bg-accent group-hover:text-teal">
              <ArrowUpRight size={22} />
            </span>
          </div>
          <p className="text-[15px] leading-relaxed text-mute">{project.summary}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-full bg-[#e1ebe8] px-3.5 py-1.5 text-[13px]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
