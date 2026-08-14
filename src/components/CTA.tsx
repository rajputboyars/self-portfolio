"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import ResumeButton from "./ResumeButton";

type Props = {
  eyebrow?: string;
  title?: string;
  body?: string;
};

export default function CTA({
  eyebrow = "Next step",
  title = "Have a project in mind?",
  body = "I'm open to frontend and full-stack roles, and to freelance builds. Tell me what you're working on.",
}: Props) {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-card/70 p-9 backdrop-blur md:p-14">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
              <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight tracking-tight md:text-5xl">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-mute">{body}</p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent"
                  >
                    Start a conversation
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </motion.div>
                <ResumeButton variant="outline" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
