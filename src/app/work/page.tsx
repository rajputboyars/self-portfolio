import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects — headless commerce, CMS platforms and internal tools built with React, Next.js and TypeScript.",
};

export default function WorkPage() {
  const years = projects.map((p) => Number(p.year));

  return (
    <>
      <PageHeader
        eyebrow={`Selected work · ${Math.min(...years)} — ${Math.max(...years)}`}
        lead="Headless storefronts, CMS-driven platforms and internal tools — each one owned end to end, from component architecture through to performance tuning."
      >
        Products I&apos;ve <span className="text-accent">shipped</span>
      </PageHeader>

      <section className="mx-auto mt-24 grid max-w-[1320px] gap-8 px-1 sm:px-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </section>

      <CTA title="Your project could be next." action="Start a conversation" />
    </>
  );
}
