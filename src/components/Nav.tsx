"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import LinkedinIcon from "./LinkedinIcon";
import ThemeToggle from "./ThemeToggle";
import { linkedinUrl, navLinks, profile } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-accent"
        style={{ scaleX: progress }}
      />
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "border-b border-line bg-bg/75 backdrop-blur-xl" : ""
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm font-medium tracking-tight">
            <span className="text-gradient">abhishek</span>
            <span className="text-mute">.dev</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive(link.href) ? "text-fg" : "text-mute hover:text-fg"
                  }`}
                >
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-accent-tint"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-mute transition-colors hover:text-accent"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-on-accent transition-transform duration-300 hover:scale-[1.04]"
            >
              <Download
                size={14}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
              Résumé
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="text-fg"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-line bg-bg/95 px-6 backdrop-blur-xl md:hidden"
            >
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href} className="border-b border-line-soft">
                    <Link
                      href={link.href}
                      className={`block py-4 text-sm ${
                        isActive(link.href) ? "text-accent" : "text-mute"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="border-b border-line-soft">
                  <a href={linkedinUrl} target="_blank" rel="noreferrer" className="block py-4 text-sm text-mute">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={profile.resume}
                    download={profile.resumeFileName}
                    className="block py-4 text-sm text-accent"
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
