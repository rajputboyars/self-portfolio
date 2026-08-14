import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { getProject, getProjectNeighbours, projects } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  const title = `${project.client} — ${project.title}`;
  return {
    title,
    description: project.summary,
    openGraph: { title, description: project.summary, type: "article" },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { previous, next } = getProjectNeighbours(slug);

  return <ProjectDetail project={project} previous={previous} next={next} />;
}
