"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.4 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHovering(Boolean(target?.closest("a, button, [data-cursor]")));
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="rounded-full border border-accent/60 bg-accent/15"
        animate={{
          width: hovering ? 44 : 18,
          height: hovering ? 44 : 18,
          marginLeft: hovering ? -22 : -9,
          marginTop: hovering ? -22 : -9,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
    </motion.div>
  );
}
