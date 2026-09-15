"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import CountUp from "./CountUp";
import Sparkle from "./Sparkle";
import TealShell from "./TealShell";
import { profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

// Wait for the preloader only on the first page load, not on client-side navigation back home.
let introPlayed = false;

const heroStats = [profile.stats[0], profile.stats[1], profile.stats[3]];

export default function Hero() {
  const [introDelay] = useState(() => (introPlayed ? 0 : 2.4));
  useEffect(() => {
    introPlayed = true;
  }, []);

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: introDelay + delay, ease },
  });

  return (
    <TealShell className="pb-24 md:pb-28">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <motion.div {...rise(0)} className="flex items-center gap-2.5 text-sm text-on-teal-mute">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </span>
            {profile.role} · {profile.location}
          </motion.div>

          <motion.h1
            {...rise(0.1)}
            className="text-[40px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-6xl lg:text-[68px]"
          >
            I build web apps that feel <span className="text-accent">fast</span> and ship clean.
          </motion.h1>

          <motion.p {...rise(0.25)} className="max-w-[520px] text-base leading-relaxed text-on-teal-mute sm:text-lg">
            Full Stack Developer with 4.5 years crafting responsive, high-performance products in
            React, Next.js and TypeScript.
          </motion.p>

          <motion.div {...rise(0.4)} className="flex flex-wrap items-center gap-4">
            <Link
              href="/work"
              className="rounded-full bg-accent px-7 py-4 font-semibold text-on-accent transition-transform duration-300 hover:scale-105"
            >
              View my work
            </Link>
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="group flex items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/35 transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
                <Download size={18} />
              </span>
              Download résumé
            </a>
          </motion.div>

          <motion.div {...rise(0.55)} className="mt-3 flex flex-wrap gap-10 sm:gap-12">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <CountUp value={stat.value} className="text-3xl font-bold sm:text-[34px]" />
                <div className="text-[13px] text-on-teal-mute/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: introDelay + 0.1, ease }}
          className="relative mx-auto flex h-[380px] w-full max-w-[520px] items-center justify-center sm:h-[520px]"
        >
          <div className="absolute h-[300px] w-[300px] rounded-full bg-teal-3 sm:h-[440px] sm:w-[440px]" />
          <div className="animate-spin-slow absolute h-[360px] w-[360px] rounded-full border-2 border-dashed border-white/20 sm:h-[520px] sm:w-[520px]" />
          <div className="animate-floaty relative flex h-[320px] w-[250px] items-end justify-center overflow-hidden rounded-[180px_180px_28px_28px] bg-gradient-to-b from-[#2a7468] to-[#0e3731] sm:h-[440px] sm:w-[340px]">
            {/* Replace with <Image> of your photo */}
            <span className="absolute inset-0 flex items-center justify-center text-[120px] font-extrabold text-white/10 sm:text-[160px]">
              AR
            </span>
          </div>
          <Sparkle className="absolute left-6 top-10 sm:left-14 sm:top-16" />
          <div
            className="animate-floaty absolute right-0 top-20 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-teal shadow-[0_20px_40px_rgba(0,0,0,0.25)] sm:right-2 sm:top-28"
            style={{ animationDelay: "1s" }}
          >
            React · Next.js
          </div>
          <div
            className="animate-floaty absolute bottom-16 left-0 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-on-accent sm:bottom-24"
            style={{ animationDelay: "2s" }}
          >
            TypeScript · GraphQL
          </div>
        </motion.div>
      </div>

      <a
        href="#how-i-work"
        aria-label="Scroll down"
        className="absolute -bottom-9 left-1/2 flex h-[68px] w-[68px] -translate-x-1/2 items-center justify-center rounded-full bg-bg text-teal"
      >
        <ChevronDown size={24} strokeWidth={2.4} className="animate-floaty" />
      </a>
    </TealShell>
  );
}
