"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import LinkedinIcon from "./LinkedinIcon";
import Sparkle from "./Sparkle";
import TealShell from "./TealShell";
import { linkedinUrl, profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;
const projectTypes = ["Web app", "Storefront", "CMS site", "Something else"];

const inputClass =
  "w-full rounded-2xl border-[1.5px] border-[#d6e4e0] bg-[#f5f9f8] px-5 py-4 text-[15px] text-fg outline-none transition-colors placeholder:text-[#7a948f] focus:border-accent focus:bg-white";

export default function ContactSection() {
  const [type, setType] = useState(projectTypes[0]);

  const channels = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: LinkedinIcon, label: "LinkedIn", value: "in/abhishek-r-7b0937241", href: linkedinUrl },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  // No backend: compose the message in the visitor's mail client.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `${type} enquiry from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <TealShell stacked={false}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-sm uppercase tracking-[0.18em] text-on-teal-mute"
          >
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="text-[40px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-6xl lg:text-[68px]"
          >
            Let&apos;s build something <span className="text-accent">great</span> together.
          </motion.h1>
          <Sparkle size={40} />
          <div className="flex flex-col gap-3.5">
            {channels.map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-accent text-teal">
                    <Icon size={22} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[13px] text-on-teal-mute/80">{c.label}</div>
                    <div className="break-all font-semibold">{c.value}</div>
                  </div>
                </>
              );
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease }}
                >
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-4 rounded-[20px] bg-teal-2 p-5 transition-all duration-300 hover:translate-x-2 hover:bg-teal-3"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-[20px] bg-teal-2 p-5">{inner}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="flex flex-col gap-5 self-start rounded-[30px] bg-white p-6 text-fg shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] sm:p-10"
        >
          <h2 className="text-[26px] font-bold">Send a message</h2>
          <div className="grid gap-3.5 sm:grid-cols-2">
            <input required name="name" placeholder="Your name" aria-label="Your name" className={inputClass} />
            <input required type="email" name="email" placeholder="Email address" aria-label="Email address" className={inputClass} />
          </div>
          <fieldset className="flex flex-col gap-2.5">
            <legend className="mb-2.5 text-sm font-medium">What are you building?</legend>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${
                    type === t ? "bg-teal text-white" : "border-[1.5px] border-[#d6e4e0] hover:border-teal"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </fieldset>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell me about the project…"
            aria-label="Message"
            className={`${inputClass} resize-none`}
          />
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 rounded-full bg-accent py-[18px] font-bold text-on-accent transition-transform duration-300 hover:scale-[1.02]"
          >
            Send message
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.form>
      </div>
    </TealShell>
  );
}
