"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

const accents = [
  "from-accent/20 to-mint/15",
  "from-mint/20 to-accent/15",
  "from-peach/20 to-accent/15",
  "from-accent/15 to-peach/20",
];

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-line bg-card/70 backdrop-blur transition-colors duration-300 hover:border-accent/50 hover:shadow-soft"
    >
      <Link href={`/work/${project.slug}`} className="block p-7 md:p-9">
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-br ${
            accents[index % accents.length]
          } opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-mute">
              {project.year} · {project.role.split(",")[0]}
            </p>
            <h3 className="mt-3 font-display text-2xl tracking-tight md:text-3xl">
              {project.client}
            </h3>
            <p className="mt-1.5 text-sm text-accent">{project.title}</p>
          </div>
          <span className="mt-1 shrink-0 rounded-full border border-line p-2 text-mute transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <p className="relative mt-6 text-sm leading-relaxed text-mute">{project.summary}</p>

        <ul className="relative mt-7 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line-soft bg-bg-soft px-2.5 py-1 text-xs text-mute"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Link>
    </motion.article>
  );
}
