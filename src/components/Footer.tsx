import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navLinks, profile, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="text-lg tracking-tight">
            <span className="text-gradient">abhishek</span>
            <span className="text-mute">.dev</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-mute">
            {profile.role} in {profile.location}, building fast, API-driven interfaces with
            React and Next.js.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-mute">Pages</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-mute transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-mute">Elsewhere</p>
          <ul className="mt-4 space-y-2.5">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-mute transition-colors hover:text-accent"
                >
                  {social.label}
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                download={profile.resumeFileName}
                className="text-sm text-mute transition-colors hover:text-accent"
              >
                Résumé
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-line-soft pt-6">
        <p className="text-xs text-mute">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
