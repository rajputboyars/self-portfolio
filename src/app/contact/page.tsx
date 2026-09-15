import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} — ${profile.role} based in ${profile.location}.`,
};

export default function ContactPage() {
  return (
    <div className="pb-20">
      <ContactSection />
    </div>
  );
}
