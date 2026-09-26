import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Blueprint from "@/components/Blueprint";
import BuildLab from "@/components/BuildLab";
import HowIThink from "@/components/HowIThink";
import DecisionSimulator from "@/components/DecisionSimulator";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import AskNada from "@/components/AskNada";
import Effects from "@/components/Effects";

export default function Home() {
  return (
    <>
      <Effects />
      <Nav />
      <main>
        <Hero />
        <CaseStudies />
        <HowIThink />
        <DecisionSimulator />
        <Blueprint />
        <BuildLab />
        <Experience />
        <Contact />
      </main>
      <AskNada />
    </>
  );
}
