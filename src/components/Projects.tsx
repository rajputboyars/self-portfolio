import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects({ limit = 2 }: { limit?: number }) {
  return (
    <section className="mx-auto mt-28 max-w-[1360px] rounded-[28px] bg-teal px-5 py-16 text-on-teal sm:px-10 md:mt-32 md:rounded-[36px] lg:px-16 lg:py-[72px]">
      <Reveal className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-bold sm:text-[42px]">
          Selected <span className="text-accent">work</span>
        </h2>
        <Link href="/work" className="group flex items-center gap-2 text-[15px] text-on-teal-mute hover:text-accent">
          All projects <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
      <div className="mt-11 grid gap-7 md:grid-cols-2">
        {projects.slice(0, limit).map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.12}>
            <Link
              href={`/work/${project.slug}`}
              className="group flex h-full flex-col gap-3.5 rounded-[26px] bg-teal-2 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-teal-3 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="text-[13px] uppercase tracking-[0.12em] text-accent">
                  {project.year} · {project.client}
                </span>
                <ArrowUpRight
                  size={22}
                  className="text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
              <h3 className="text-2xl font-semibold sm:text-[26px]">{project.title}</h3>
              <p className="text-[15px] leading-relaxed text-on-teal-mute">{project.summary}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/10 px-3.5 py-1.5 text-[13px]">
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
