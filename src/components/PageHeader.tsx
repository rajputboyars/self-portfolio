"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
};

export default function PageHeader({ eyebrow, title, lead }: Props) {
  return (
    <header className="px-6 pb-4 pt-36">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.22em] text-accent"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl"
        >
          {title}
        </motion.h1>
        {lead ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-mute"
          >
            {lead}
          </motion.p>
        ) : null}
      </div>
    </header>
  );
}
