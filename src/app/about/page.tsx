import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ResumeButton from "@/components/ResumeButton";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import SkillMatrix from "@/components/SkillMatrix";
import { approach, education, languages, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: profile.summary,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Frontend engineer, full-stack habits."
        lead={profile.longSummary}
      />

      <Stats />

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {approach.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-card/70 p-7 backdrop-blur">
                <span className="text-xs tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-display text-xl tracking-tight">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-mute">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Timeline />
      <SkillMatrix />

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-card/70 p-7 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.16em] text-mute">Education</p>
              <p className="mt-4 text-lg tracking-tight">{education.degree}</p>
              <p className="mt-1.5 text-sm text-mute">{education.school}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-line bg-card/70 p-7 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.16em] text-mute">Languages</p>
              <p className="mt-4 text-lg tracking-tight">{languages.join(" · ")}</p>
              <p className="mt-1.5 text-sm text-mute">Comfortable working in both.</p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-accent/40 bg-accent-tint p-7">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-accent">Résumé</p>
                <p className="mt-4 text-lg leading-snug tracking-tight">
                  The one-page version, as a PDF.
                </p>
              </div>
              <ResumeButton variant="solid" className="mt-6 self-start" label="Download" />
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Let's work together."
        body="Open to frontend and full-stack roles, and to freelance builds."
      />
    </>
  );
}
