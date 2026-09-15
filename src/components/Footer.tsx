import Link from "next/link";
import { linkedinUrl, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1360px] flex-col items-center justify-between gap-5 border-t border-line px-5 py-10 text-sm text-mute md:flex-row">
      <Link href="/" className="text-xl font-bold text-teal">
        abhishek<span className="text-accent">.</span>dev
      </Link>
      <div className="flex flex-wrap justify-center gap-7">
        <Link href="/work" className="transition-colors hover:text-accent-deep">Work</Link>
        <Link href="/about" className="transition-colors hover:text-accent-deep">About</Link>
        <Link href="/contact" className="transition-colors hover:text-accent-deep">Contact</Link>
        <a href={linkedinUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent-deep">
          LinkedIn
        </a>
      </div>
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
    </footer>
  );
}
