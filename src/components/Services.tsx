"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" title="What I do" hint="Four areas" />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full rounded-2xl border border-line bg-card/70 p-7 backdrop-blur transition-colors hover:border-accent/50 hover:shadow-soft"
              >
                <span className="text-xs tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl tracking-tight md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-mute">
                      <Check size={14} className="text-mint" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
