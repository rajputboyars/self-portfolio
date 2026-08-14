"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    className: "left-[-12%] top-[-18%] h-[560px] w-[560px] bg-accent/40",
    duration: 20,
    x: [0, 90, -50, 0],
    y: [0, -70, 50, 0],
  },
  {
    className: "right-[-16%] top-[6%] h-[480px] w-[480px] bg-mint/35",
    duration: 24,
    x: [0, -80, 60, 0],
    y: [0, 60, -40, 0],
  },
  {
    className: "left-[22%] top-[42%] h-[620px] w-[620px] bg-peach/30",
    duration: 28,
    x: [0, 70, -90, 0],
    y: [0, -50, 70, 0],
  },
];

export default function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ opacity: "var(--aurora-opacity)" }}
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[130px] ${blob.className}`}
          animate={{ x: blob.x, y: blob.y }}
          transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_10%,var(--c-bg)_78%)]" />
    </div>
  );
}
