"use client";

import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Stats() {
  return (
    <section className="relative z-10 px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {profile.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="h-full bg-card/80 p-7 backdrop-blur">
              <p className="font-display text-4xl tracking-tight text-gradient">{stat.value}</p>
              <p className="mt-2 text-sm text-mute">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
