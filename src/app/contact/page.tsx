import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ResumeButton from "@/components/ResumeButton";
import LinkedinIcon from "@/components/LinkedinIcon";
import { linkedinUrl, profile, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} — ${profile.role} based in ${profile.location}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something."
        lead="Open to frontend and full-stack roles, and to freelance projects. The fastest way to reach me is email — I reply to everything."
      />

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl border border-line bg-card/70 p-9 backdrop-blur md:p-12">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.16em] text-mute">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="group mt-5 flex items-center gap-3 font-display text-xl tracking-tight transition-colors hover:text-accent sm:text-2xl md:text-3xl"
                >
                  <Mail size={24} className="shrink-0 text-accent" />
                  <span className="break-all">{profile.email}</span>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <div className="mt-12 flex flex-wrap items-center gap-3">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-soft px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    <LinkedinIcon size={15} />
                    LinkedIn
                  </a>
                  <ResumeButton variant="outline" />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-line bg-card/70 p-7 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.16em] text-mute">Based in</p>
                <p className="mt-4 inline-flex items-center gap-2 text-lg tracking-tight">
                  <MapPin size={17} className="text-accent" />
                  {profile.location}
                </p>
                <p className="mt-2 text-sm text-mute">Available remotely and on site.</p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-2xl border border-accent/40 bg-accent-tint p-7">
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                  </span>
                  <span className="text-xs uppercase tracking-[0.16em] text-accent">
                    Available for work
                  </span>
                </span>
                <p className="mt-4 text-sm leading-relaxed">
                  Currently taking on new projects and open to full-time roles.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.16em] text-mute">Good fits</p>
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.07}>
                <div className="h-full bg-card/80 p-6 backdrop-blur">
                  <p className="text-sm tracking-tight">{service.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-mute">
                    {service.points.join(" · ")}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
