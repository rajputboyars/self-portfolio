"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-8 w-14 items-center rounded-full border border-line bg-bg-soft px-1 transition-colors hover:border-accent/50"
    >
      <motion.span
        className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-on-accent"
        animate={{ x: mounted && isDark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {mounted && isDark ? <Moon size={13} /> : <Sun size={13} />}
      </motion.span>
    </button>
  );
}
