import type { Metadata } from "next";
import CTA from "@/components/CTA";
import AboutHero from "@/components/AboutHero";
import Reveal from "@/components/Reveal";
import { education, languages, profile, skillGroups, timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: profile.summary,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <section className="mx-auto grid max-w-[1280px] gap-12 px-2 pt-28 sm:px-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight sm:text-[42px] lg:sticky lg:top-32">
            Experience
            <br />
            <span className="text-accent">timeline</span>
          </h2>
        </Reveal>
        <div className="relative flex flex-col gap-10 border-l-2 border-line pl-8 sm:pl-10">
          {timeline.map((item, i) => (
            <Reveal key={item.period} delay={i * 0.1} className="relative">
              <span
                className={`absolute -left-[43px] top-1 h-5 w-5 rounded-full sm:-left-[51px] ${
                  i === 0 ? "bg-accent shadow-[0_0_0_6px_#fde3c1]" : "bg-teal"
                }`}
              />
              <div className="text-sm font-semibold text-accent-deep">{item.period}</div>
              <div className="mt-1 text-2xl font-bold">{item.role}</div>
              <div className="text-[15px] text-mute">{item.org}</div>
              <p className="mt-2.5 leading-relaxed text-mute">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-[1360px] rounded-[28px] bg-teal px-5 py-14 text-on-teal sm:px-10 md:rounded-[36px] lg:p-16">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-[42px]">
            Skills &amp; <span className="text-accent">toolkit</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.1}>
              <div className="flex h-full flex-col gap-4 rounded-3xl bg-teal-2 p-7">
                <div className="text-lg font-semibold text-accent">{group.title}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default rounded-full bg-white px-4 py-2.5 text-sm text-fg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-teal"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-6 px-1 pt-16 sm:px-5 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[28px] bg-card p-9">
            <div className="text-[13px] font-semibold tracking-[0.08em] text-accent-deep">EDUCATION</div>
            <div className="mt-2 text-2xl font-bold">{education.degree}</div>
            <div className="text-mute">{education.school}</div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-[28px] bg-card p-9">
            <div className="text-[13px] font-semibold tracking-[0.08em] text-accent-deep">LANGUAGES</div>
            <div className="mt-2 text-2xl font-bold">{languages.join(" · ")}</div>
            <div className="text-mute">Based in {profile.location}</div>
          </div>
        </Reveal>
      </section>

      <CTA title="Let's work together." />
    </>
  );
}
