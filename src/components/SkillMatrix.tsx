"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/lib/data";

export default function SkillMatrix() {
  return (
    <section className="relative z-10 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" title="Toolkit" hint="Day to day" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-line bg-card/70 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.16em] text-accent">{group.title}</p>
                <ul className="mt-5 space-y-2">
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-2.5 text-sm text-mute"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
