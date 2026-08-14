"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <section className="relative z-10 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" title="Experience" hint="4.5 years" />

        <div className="mt-16 border-l border-line pl-8 md:pl-12">
          {timeline.map((item, i) => (
            <Reveal key={item.period} delay={i * 0.08} className="pb-16 last:pb-0">
              <div className="relative">
                <span className="absolute -left-[39px] top-2 h-3 w-3 rounded-full border-2 border-bg bg-accent md:-left-[55px]" />
                <p className="text-xs uppercase tracking-[0.18em] text-accent">{item.period}</p>
                <h3 className="mt-4 font-display text-2xl leading-tight tracking-tight md:text-3xl">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm text-mute">{item.org}</p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-mute">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
