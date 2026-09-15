import Reveal from "./Reveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="mx-auto max-w-[1280px] px-2 pt-28 sm:px-6 md:pt-32">
      <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 className="text-3xl font-bold leading-tight sm:text-[42px]">
          What I can do
          <br />
          for <span className="text-accent">your product</span>
        </h2>
        <p className="max-w-[420px] leading-relaxed text-mute">
          From component libraries to Core Web Vitals — the parts that make a product fast to use
          and cheap to change.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.1}>
            <div className="group flex h-full flex-col gap-3.5 rounded-[26px] bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-teal hover:text-on-teal hover:shadow-[0_30px_60px_-20px_rgba(16,48,43,0.35)]">
              <span className="text-[40px] font-extrabold text-[#d6e4e0] transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[19px] font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-mute transition-colors group-hover:text-on-teal-mute">
                {service.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {service.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full bg-bg px-3 py-1 text-xs text-mute transition-colors group-hover:bg-white/10 group-hover:text-on-teal"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
