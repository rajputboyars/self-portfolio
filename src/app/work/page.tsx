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
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Things I've shipped."
        lead="Headless storefronts, CMS-driven platforms and internal tools — each one owned end to end, from component architecture through to performance tuning."
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Your project could be next."
        body="Tell me about the product you're building and I'll tell you how I'd approach the frontend."
      />
    </>
  );
}
