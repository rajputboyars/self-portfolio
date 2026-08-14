import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

type Props = {
  index: string;
  title: string;
  hint?: string;
  link?: { href: string; label: string };
};

export default function SectionHeading({ index, title, hint, link }: Props) {
  return (
    <Reveal>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs tracking-[0.22em] text-accent">{index}</span>
          <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">{title}</h2>
        </div>
        {link ? (
          <Link
            href={link.href}
            className="group inline-flex items-center gap-1.5 text-sm text-mute transition-colors hover:text-accent"
          >
            {link.label}
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        ) : hint ? (
          <span className="text-sm text-mute">{hint}</span>
        ) : null}
      </div>
    </Reveal>
  );
}
