import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { isPersonal, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects — headless commerce, CMS platforms, internal tools and personal freelance builds with React, Next.js and TypeScript.",
};

export default function WorkPage() {
  const years = projects.map((p) => Number(p.year));
  const clientWork = projects.filter((p) => !isPersonal(p));
  const personalWork = projects.filter(isPersonal);

  return (
    <>
      <PageHeader
        eyebrow={`Selected work · ${Math.min(...years)} — ${Math.max(...years)}`}
        lead="Headless storefronts, CMS-driven platforms and internal tools — each one owned end to end, from component architecture through to performance tuning."
      >
        Products I&apos;ve <span className="text-accent">shipped</span>
      </PageHeader>

      <section className="mx-auto mt-24 max-w-[1320px] px-1 sm:px-5">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-[42px]">
            Client <span className="text-accent">work</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {clientWork.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {personalWork.length > 0 && (
        <section id="personal" className="mx-auto mt-28 max-w-[1320px] scroll-mt-28 px-1 sm:px-5">
          <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="text-3xl font-bold sm:text-[42px]">
              Personal &amp; <span className="text-accent">freelance</span>
            </h2>
            <p className="max-w-md leading-relaxed text-mute">
              Products I designed, built, tested and shipped on my own — from the first prototype to
              deployment.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {personalWork.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </section>
      )}

      <CTA title="Your project could be next." action="Start a conversation" />
    </>
  );
}
