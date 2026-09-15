import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

type Props = { title?: string; action?: string };

export default function CTA({ title = "Have a product to build? Let's talk.", action = "Get in touch" }: Props) {
  return (
    <Reveal className="mx-auto my-24 max-w-[1360px] md:my-28">
      <section className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[28px] bg-accent px-7 py-12 md:flex-row md:items-center md:rounded-[36px] md:p-[70px]">
        <div className="animate-spin-slow pointer-events-none absolute -top-20 right-[20%] h-64 w-64 rounded-full border-[40px] border-dashed border-white/20" />
        <h2 className="relative max-w-2xl text-3xl font-extrabold leading-tight text-teal sm:text-[52px]">
          {title}
        </h2>
        <Link
          href="/contact"
          className="group relative inline-flex shrink-0 items-center gap-2 rounded-full bg-teal px-8 py-5 text-[17px] font-semibold text-white transition-transform duration-300 hover:scale-105"
        >
          {action}
          <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </section>
    </Reveal>
  );
}
