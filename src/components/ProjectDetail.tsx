"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import CTA from "./CTA";
import Reveal from "./Reveal";
import TealShell from "./TealShell";
import type { Project } from "@/lib/data";

type Props = { project: Project; previous?: Project; next?: Project };

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectDetail({ project, previous, next }: Props) {
  const meta = [
    { label: "Role", value: project.role },
    { label: "Stack", value: project.stack.join(" · ") },
    { label: "Year", value: project.year },
  ];

  return (
    <>
      <TealShell stacked={false} className="overflow-hidden pb-0 lg:pb-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
          <Link href="/work" className="group inline-flex items-center gap-2 text-sm text-on-teal-mute hover:text-accent">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to work
          </Link>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-accent"
        >
          {project.client} · {project.year}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[76px]"
        >
          {project.title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-10 grid gap-6 border-t border-white/15 py-7 sm:grid-cols-3"
        >
          {meta.map((item) => (
            <div key={item.label}>
              <div className="text-[13px] text-on-teal-mute/80">{item.label}</div>
              <div className="mt-1 font-semibold sm:text-[17px]">{item.value}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease }}
          className="mx-auto mt-4 max-w-[1080px]"
        >
          <div className="animate-floaty flex h-64 flex-col overflow-hidden rounded-t-[26px] bg-bg sm:h-[460px]">
            <div className="flex gap-2 bg-[#dfe9e6] px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-accent" />
              <span className="h-3 w-3 rounded-full bg-[#9cc3ba]" />
              <span className="h-3 w-3 rounded-full bg-[#9cc3ba]" />
            </div>
            {project.image ? (
              <div className="relative flex-1">
                <Image
                  src={project.image}
                  alt={`${project.title} homepage`}
                  fill
                  priority
                  sizes="(min-width: 1080px) 1080px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <div className="flex flex-1 items-center justify-center text-5xl font-extrabold tracking-tight text-teal/10 sm:text-8xl">
                {project.client}
              </div>
            )}
          </div>
        </motion.div>
      </TealShell>

      <section className="mx-auto grid max-w-[1280px] gap-14 px-2 pt-24 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold sm:text-[40px]">
            The <span className="text-accent">brief</span>
          </h2>
          <p className="text-lg leading-relaxed text-mute">{project.problem ?? project.summary}</p>
          {project.outcome && (
            <div className="mt-4 rounded-[24px] bg-teal p-7 text-on-teal">
              <div className="text-[13px] font-semibold uppercase tracking-[0.12em] text-accent">Outcome</div>
              <p className="mt-2 leading-relaxed">{project.outcome}</p>
            </div>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 self-start rounded-full bg-accent px-7 py-4 font-semibold text-on-accent transition-transform duration-300 hover:scale-105"
            >
              Visit live site
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
        </Reveal>
        <div className="flex flex-col gap-4">
          <Reveal>
            <h3 className="mb-1 text-[22px] font-semibold">Highlights</h3>
          </Reveal>
          {project.highlights.map((highlight, i) => (
            <Reveal key={highlight} delay={i * 0.08}>
              <div className="flex gap-4 rounded-[20px] bg-card p-5 transition-transform duration-300 hover:translate-x-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed text-[#34524d]">{highlight}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {project.sections && (
        <section className="mx-auto max-w-[1360px] px-0 pt-24">
          <div className="rounded-[28px] bg-teal px-5 py-14 text-on-teal sm:px-10 md:rounded-[36px] lg:p-16">
            <Reveal>
              <h2 className="text-3xl font-bold sm:text-[42px]">
                What I <span className="text-accent">built</span>
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {project.sections.map((section, i) => (
                <Reveal key={section.title} delay={(i % 2) * 0.1}>
                  <div className="h-full rounded-3xl bg-teal-2 p-7 sm:p-8">
                    <h3 className="text-lg font-semibold text-accent">{section.title}</h3>
                    <ul className="mt-4 flex flex-col gap-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3 leading-relaxed text-on-teal-mute">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto grid max-w-[1320px] gap-6 px-1 pt-24 sm:px-5 md:grid-cols-2">
        {previous ? (
          <Link href={`/work/${previous.slug}`} className="group rounded-[28px] bg-card p-9 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-2 text-[13px] text-mute">
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" /> Previous
            </div>
            <div className="mt-1.5 text-[22px] font-semibold">{previous.title}</div>
          </Link>
        ) : (
          <div className="hidden md:block" />
        )}
        {next && (
          <Link href={`/work/${next.slug}`} className="group rounded-[28px] bg-teal p-9 text-right text-white transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-end gap-2 text-[13px] text-accent">
              Next project <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </div>
            <div className="mt-1.5 text-[22px] font-semibold">{next.title}</div>
          </Link>
        )}
      </section>

      <CTA />
    </>
  );
}
