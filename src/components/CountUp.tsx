"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type Props = { value: string; className?: string; suffixClassName?: string };

/** Counts a stat like "4.5", "50K+" or "04" up from zero when it scrolls into view. */
export default function CountUp({ value, className, suffixClassName = "text-accent" }: Props) {
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals = match?.[1].includes(".") ? match[1].split(".")[1].length : 0;
  const pad = match && !decimals ? match[1].length : 0;

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(match ? format(0) : value);

  function format(n: number) {
    const text = n.toFixed(decimals);
    return pad ? text.padStart(pad, "0") : text;
  }

  useEffect(() => {
    if (!inView || !match) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (n) => setDisplay(format(n)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix && <span className={suffixClassName}>{suffix}</span>}
    </span>
  );
}
