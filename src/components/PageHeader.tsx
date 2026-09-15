"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Sparkle from "./Sparkle";
import TealShell from "./TealShell";

type Props = { eyebrow: string; children: ReactNode; lead?: string };

const ease = [0.22, 1, 0.36, 1] as const;

export default function PageHeader({ eyebrow, children, lead }: Props) {
  return (
    <TealShell>
      <Sparkle size={36} className="absolute right-10 top-28 hidden sm:block lg:right-20 lg:top-36" />
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="block text-sm uppercase tracking-[0.18em] text-on-teal-mute"
      >
        {eyebrow}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease }}
        className="mt-4 max-w-4xl text-[40px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[72px]"
      >
        {children}
      </motion.h1>
      {lead && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-on-teal-mute sm:text-lg"
        >
          {lead}
        </motion.p>
      )}
    </TealShell>
  );
}
