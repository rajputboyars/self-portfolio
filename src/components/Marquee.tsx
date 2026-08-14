"use client";

import { motion } from "framer-motion";

const items = [
  "React",
  "Next.js",
  "TypeScript",
  "GraphQL",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Redux",
  "Shopify",
  "Strapi",
  "Jahia",
  "Express",
];

export default function Marquee() {
  return (
    <div className="relative z-10 overflow-hidden border-y border-line bg-card/40 py-6 backdrop-blur">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-lg tracking-tight text-mute">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
