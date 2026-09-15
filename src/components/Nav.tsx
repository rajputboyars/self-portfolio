"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { linkedinUrl, navLinks, profile } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-accent"
        style={{ scaleX: progress }}
      />
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-6 lg:px-10 lg:pt-7"
      >
        <nav
          className={`mx-auto flex items-center justify-between rounded-full text-on-teal transition-all duration-500 ${
            scrolled
              ? "mt-2 max-w-5xl bg-teal/90 px-5 py-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:px-6"
              : "max-w-[1360px] px-5 py-4 sm:px-10 lg:px-16 lg:py-6"
          }`}
        >
          <Link href="/" className="text-lg font-bold tracking-tight sm:text-xl">
            abhishek<span className="text-accent">.</span>dev
          </Link>

          <ul className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative block rounded-full px-4 py-2 text-[15px] transition-colors ${
                    isActive(link.href)
                      ? "font-semibold text-accent"
                      : "text-on-teal/85 hover:text-on-teal"
                  }`}
                >
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-on-accent transition-transform duration-300 hover:scale-105 md:inline-flex"
          >
            Hire me
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-on-accent md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="mt-2 overflow-hidden rounded-3xl bg-teal px-6 py-2 text-on-teal shadow-2xl md:hidden"
            >
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href} className="border-b border-white/10">
                    <Link
                      href={link.href}
                      className={`block py-4 ${isActive(link.href) ? "text-accent" : ""}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="border-b border-white/10">
                  <a href={linkedinUrl} target="_blank" rel="noreferrer" className="block py-4">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={profile.resume}
                    download={profile.resumeFileName}
                    className="block py-4 text-accent"
                  >
                    Download résumé
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
