import { CheckCircle2, LayoutGrid, Search } from "lucide-react";
import Reveal from "./Reveal";
import { approach } from "@/lib/data";

const icons = [CheckCircle2, LayoutGrid, Search];

export default function Approach() {
  return (
    <section id="how-i-work" className="mx-auto max-w-[1280px] scroll-mt-24 px-2 pt-28 sm:px-6 md:pt-36">
      <Reveal>
        <h2 className="text-center text-3xl font-bold sm:text-[42px]">
          How I <span className="text-accent">work</span>
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {approach.map((item, i) => {
          const Icon = icons[i];
          const featured = i === 1;
          return (
            <Reveal key={item.title} delay={i * 0.12} className={featured ? "md:-translate-y-6" : ""}>
              <div
                className={`flex h-full flex-col gap-4 rounded-[28px] p-9 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(16,48,43,0.35)] ${
                  featured ? "bg-teal text-on-teal" : "border-t-[6px] border-teal bg-card"
                }`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    featured ? "bg-accent text-on-accent" : "bg-teal text-accent"
                  }`}
                >
                  <Icon size={26} />
                </span>
                <h3 className="text-[22px] font-semibold">{item.title}</h3>
                <p className={`text-[15px] leading-relaxed ${featured ? "text-on-teal-mute" : "text-mute"}`}>
                  {item.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
