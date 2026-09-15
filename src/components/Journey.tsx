import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { profile, timeline } from "@/lib/data";

const journeyStats = [profile.stats[2], profile.stats[1], profile.stats[0]];

export default function Journey() {
  const steps = [...timeline].reverse();

  return (
    <section className="mx-auto grid max-w-[1280px] items-center gap-12 px-2 pt-28 sm:px-6 md:pt-32 lg:grid-cols-3">
      <div className="flex flex-col">
        <Reveal>
          <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-[38px]">My journey so far</h2>
        </Reveal>
        {steps.map((step, i) => (
          <Reveal key={step.period} delay={i * 0.1}>
            <div className={`flex gap-5 py-5 ${i < steps.length - 1 ? "border-b border-line" : ""}`}>
              <span className="font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <div className="font-semibold">{step.role}</div>
                <div className="text-[13px] text-mute">
                  {step.period} · {step.org}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="flex justify-center">
        <div className="animate-floaty h-[420px] w-[300px] rounded-[160px] border-[3px] border-teal p-3">
          {/* Replace with <Image> of your photo */}
          <div className="flex h-full w-full items-center justify-center rounded-[150px] bg-teal text-7xl font-extrabold text-white/10">
            AR
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-3 gap-6 lg:flex lg:flex-col lg:items-end lg:gap-9">
        {journeyStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1} className="text-center lg:text-right">
            <CountUp value={stat.value} suffixClassName="" className="text-3xl font-bold sm:text-[44px]" />
            <div className="text-sm text-mute">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
