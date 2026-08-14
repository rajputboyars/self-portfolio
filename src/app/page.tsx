import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Projects limit={4} />
      <Services />
      <CTA />
    </>
  );
}
