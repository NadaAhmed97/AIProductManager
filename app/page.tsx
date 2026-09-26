import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Blueprint from "@/components/Blueprint";
import BuildLab from "@/components/BuildLab";
import DecisionSimulator from "@/components/DecisionSimulator";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import AskNada from "@/components/AskNada";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CaseStudies />
        <Blueprint />
        <BuildLab />
        <DecisionSimulator />
        <Experience />
        <Contact />
      </main>
      <AskNada />
    </>
  );
}
