"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { profile } from "@/lib/data";

type Props = {
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  label?: string;
};

const styles = {
  solid: "bg-accent text-on-accent",
  outline: "border border-line bg-card/60 text-fg backdrop-blur hover:border-accent hover:text-accent",
  ghost: "text-mute hover:text-accent",
};

export default function ResumeButton({
  variant = "outline",
  className = "",
  label = "Download résumé",
}: Props) {
  return (
    <motion.a
      href={profile.resume}
      download={profile.resumeFileName}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      <Download
        size={16}
        className="transition-transform duration-300 group-hover:translate-y-0.5"
      />
      {label}
    </motion.a>
  );
}
