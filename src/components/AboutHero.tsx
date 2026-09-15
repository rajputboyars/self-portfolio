"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import LinkedinIcon from "./LinkedinIcon";
import TealShell from "./TealShell";
import { linkedinUrl, profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export default function AboutHero() {
  return (
    <TealShell>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease }}
          className="relative mx-auto flex h-[380px] w-full max-w-[460px] items-center justify-center sm:h-[480px]"
        >
          <div className="animate-spin-slow absolute h-[360px] w-[360px] rounded-full border-2 border-dashed border-white/20 sm:h-[460px] sm:w-[460px]" />
          <div className="animate-floaty h-[340px] w-[260px] rounded-[160px] border-[3px] border-accent p-3 sm:h-[420px] sm:w-[320px]">
            {/* Replace with <Image> of your photo */}
            <div className="flex h-full w-full items-center justify-center rounded-[150px] bg-teal-3 text-8xl font-extrabold text-white/10">
              AR
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.span {...rise(0)} className="text-sm uppercase tracking-[0.18em] text-on-teal-mute">
            About me
          </motion.span>
          <motion.h1
            {...rise(0.1)}
            className="text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-5xl lg:text-[60px]"
          >
            Hi, I&apos;m Abhishek — I <span className="text-accent">own features</span> end to end.
          </motion.h1>
          <motion.p {...rise(0.2)} className="leading-relaxed text-on-teal-mute sm:text-[17px]">
            {profile.summary} {profile.longSummary}
          </motion.p>
          <motion.div {...rise(0.3)} className="flex flex-wrap gap-3.5">
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-on-accent transition-transform duration-300 hover:scale-105"
            >
              <Download size={18} /> Download résumé
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-4 transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </TealShell>
  );
}
