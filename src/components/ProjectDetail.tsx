"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CTA from "./CTA";
import Reveal from "./Reveal";
import type { Project } from "@/lib/data";

type Props = {
  project: Project;
  previous?: Project;
  next?: Project;
};

const meta = (project: Project) => [
  { label: "Client", value: project.client },
  { label: "Year", value: project.year },
  { label: "Role", value: project.role },
  { label: "Stack", value: project.stack.join(", ") },
];

export default function ProjectDetail({ project, previous, next }: Props) {
  return (
    <div className="relative z-10 px-6 pb-8 pt-36">
      <div className="mx-auto max-w-5xl">
        <Reveal y={16}>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-accent"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            All work
          </Link>
        </Reveal>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-10 text-xs uppercase tracking-[0.22em] text-accent"
        >
          {project.year} · {project.title}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl"
        >
          {project.client}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-mute"
        >
          {project.summary}
        </motion.p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {meta(project).map((item, i) => (
            <Reveal key={item.label} delay={i * 0.07}>
              <div className="h-full bg-card/80 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.16em] text-mute">{item.label}</p>
                <p className="mt-2.5 text-sm leading-relaxed">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">What I built</h2>
          </Reveal>
          <ul className="mt-10 grid gap-4">
            {project.highlights.map((point, i) => (
              <Reveal key={point} delay={i * 0.06}>
                <motion.li
                  whileHover={{ x: 4 }}
                  className="flex gap-6 rounded-2xl border border-line bg-card/70 p-6 backdrop-blur transition-colors hover:border-accent/50"
                >
                  <span className="shrink-0 font-display text-lg text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed">{point}</p>
                </motion.li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">Technologies</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <motion.li
                  key={tech}
                  whileHover={{ y: -3 }}
                  className="rounded-lg border border-line bg-card/70 px-4 py-2 text-sm text-mute backdrop-blur"
                >
                  {tech}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 border-t border-line pt-10 sm:grid-cols-2">
          {previous ? (
            <Link
              href={`/work/${previous.slug}`}
              className="group rounded-2xl border border-line bg-card/70 p-6 backdrop-blur transition-colors hover:border-accent/50"
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-mute">
                <ArrowLeft size={14} /> Previous
              </span>
              <p className="mt-3 font-display text-xl tracking-tight group-hover:text-accent">
                {previous.client}
              </p>
              <p className="mt-1 text-sm text-mute">{previous.title}</p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group rounded-2xl border border-line bg-card/70 p-6 text-right backdrop-blur transition-colors hover:border-accent/50 sm:col-start-2"
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-mute">
                Next <ArrowRight size={14} />
              </span>
              <p className="mt-3 font-display text-xl tracking-tight group-hover:text-accent">
                {next.client}
              </p>
              <p className="mt-1 text-sm text-mute">{next.title}</p>
            </Link>
          ) : null}
        </div>
      </div>

      <CTA
        eyebrow="Next step"
        title="Want something like this for your product?"
        body="Tell me what you're building and I'll tell you how I'd approach the frontend."
      />
    </div>
  );
}
