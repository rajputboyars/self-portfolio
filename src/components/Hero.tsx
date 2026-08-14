"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import ResumeButton from "./ResumeButton";
import { profile } from "@/lib/data";

const line1 = ["I", "build", "fast,"];
const line2 = ["API-driven", "interfaces."];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
};

const word = {
  hidden: { opacity: 0, y: "60%", rotate: 4 },
  show: {
    opacity: 1,
    y: "0%",
    rotate: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const chips = ["Next.js", "TypeScript", "React", "GraphQL", "Node.js", "Tailwind CSS"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-32 pb-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-card/70 px-4 py-1.5 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          <span className="text-xs tracking-wide text-mute">Available for new work</span>
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl font-display text-[15vw] leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block overflow-hidden pb-2">
            {line1.map((w, i) => (
              <motion.span key={i} variants={word} className="mr-[0.25em] inline-block">
                {w}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden pb-2">
            {line2.map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className={`mr-[0.25em] inline-block ${i === 0 ? "text-gradient" : ""}`}
              >
                {w}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-mute"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent transition-transform duration-300 hover:scale-[1.03]"
          >
            View my work
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <ResumeButton variant="outline" />
          <span className="inline-flex items-center gap-1.5 text-sm text-mute">
            <MapPin size={14} /> {profile.location}
          </span>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-14 flex flex-wrap gap-2"
        >
          {chips.map((chip) => (
            <li
              key={chip}
              className="rounded-lg border border-line bg-card/60 px-3 py-1.5 text-xs text-mute backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
            >
              {chip}
            </li>
          ))}
        </motion.ul>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-16 hidden text-mute md:block"
        >
          <ArrowDown size={18} />
        </motion.div>
      </div>
    </section>
  );
}
