import Approach from "@/components/Approach";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import PersonalProjects from "@/components/PersonalProjects";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Approach />
      <Journey />
      <Projects limit={2} />
      <PersonalProjects />
      <Services />
      <CTA />
    </>
  );
}
