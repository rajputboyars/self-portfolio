"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const NAME = "Abhishek";
const SUBTITLE = "Full Stack Developer";

const LETTER_STAGGER = 0.085;
const DROP_DURATION = 1.05;
const SUBTITLE_DELAY = NAME.length * LETTER_STAGGER + 0.45;
const HOLD = 0.75;
const TOTAL_MS = (SUBTITLE_DELAY + 0.7 + HOLD) * 1000;

export default function Preloader() {
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => setDone(true), TOTAL_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  if (reduceMotion) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
          />

          <h1 className="sr-only">Abhishek Rajput — Full Stack Developer</h1>

          <div aria-hidden className="relative flex overflow-hidden pb-2">
            {NAME.split("").map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block font-display text-6xl leading-none tracking-tight sm:text-7xl md:text-8xl"
                initial={{ y: "-160%", opacity: 0 }}
                animate={{
                  y: ["-160%", "0%", "-26%", "0%", "-8%", "0%"],
                  opacity: [0, 1, 1, 1, 1, 1],
                  scaleY: [1, 0.82, 1.05, 0.94, 1.02, 1],
                }}
                transition={{
                  duration: DROP_DURATION,
                  delay: i * LETTER_STAGGER,
                  times: [0, 0.46, 0.63, 0.79, 0.91, 1],
                  ease: "easeOut",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.div
            aria-hidden
            className="mt-5 h-px bg-accent"
            initial={{ width: 0 }}
            animate={{ width: "min(280px, 60vw)" }}
            transition={{ duration: 0.7, delay: SUBTITLE_DELAY - 0.15, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            aria-hidden
            className="mt-5 text-xs uppercase tracking-[0.35em] text-mute sm:text-sm"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: SUBTITLE_DELAY, ease: [0.22, 1, 0.36, 1] }}
          >
            {SUBTITLE}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
