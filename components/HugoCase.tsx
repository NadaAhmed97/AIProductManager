"use client";

import { useCallback, useEffect, useState } from "react";
import QLConcept from "@/components/QLConcept";

// /hugo: a page tailored to Hugo Zlotowski (AI Innovation Lead, Quantum Leap Lead).
// A short deck (?meet=1) plus a clickable concept of an agentic policy-simulation flow.

const slides: { id: string; kicker: string; title: React.ReactNode; body: React.ReactNode }[] = [
  {
    id: "idea", kicker: "The idea in one line",
    title: <>The model isn&apos;t the hard part. <span className="shimmer">Trust</span> is.</>,
    body: <p className="mt-slide max-w-2xl text-xl text-neutral-400" style={{ animationDelay: ".4s" }}>A minister acts on a forecast only when every number is traceable, every assumption visible, and every gap admitted.</p>,
  },
  {
    id: "principle", kicker: "How I design agentic products",
    title: "AI reasons. Engines calculate. Humans decide.",
    body: (
      <div className="grid gap-3 md:grid-cols-3">
        {[["✦", "LLM & agents", "Understand the question, plan the steps, retrieve evidence, explain the result"], ["∑", "Your models", "Trade, fiscal, spatial and nowcasting models produce every number, deterministically"], ["✓", "People", "Analysts edit assumptions; nothing reaches a minister without approval and an audit trail"]].map(([i, t, d], n) => (
          <div key={t} className="mt-slide rounded-2xl border border-white/10 bg-white/[0.03] p-6" style={{ animationDelay: `${0.25 + n * 0.18}s` }}>
            <p className="text-3xl text-accent">{i}</p><p className="mt-4 text-xl font-bold">{t}</p><p className="mt-2 text-neutral-400">{d}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "demo", kicker: "A concept, built for this conversation",
    title: "One question, end to end.",
    body: <div className="mt-slide" style={{ animationDelay: ".3s" }}><QLConcept /></div>,
  },
  {
    id: "evals", kicker: "How I'd know it works",
    title: "Evals are the acceptance criteria for AI.",
    body: (
      <ol className="grid gap-3 md:grid-cols-5">
        {["Golden set of real policy questions, answers approved by your economists", "Automatic checks on every change: groundedness, citations, refusal when evidence is missing", "Back-tests against past decisions and official data", "Expert review of sampled briefs before release", "Production monitoring: quality, cost, latency; every failure becomes a test"].map((t, n) => (
          <li key={t} className="mt-slide rounded-2xl border border-white/10 p-4 text-sm" style={{ animationDelay: `${0.2 + n * 0.12}s` }}><span className="font-mono text-accent">{n + 1}</span><p className="mt-2 text-neutral-300">{t}</p></li>
        ))}
      </ol>
    ),
  },
  {
    id: "bridge", kicker: "Where a PM adds value",
    title: "From research that works to a product clients adopt.",
    body: (
      <div className="grid gap-3 md:grid-cols-4">
        {[["Research team", "Owns the methods. I bring sharp questions, protect focus, agree evals."], ["Engineering", "Owns reliability. I define data freshness, latency and cost targets."], ["Clients", "Own the decision. I turn requests into requirements and make trade-offs visible."], ["Sovereignty", "Shapes the architecture from day one: data in-country, models in-region, audit."]].map(([t, d], n) => (
          <div key={t} className="mt-slide rounded-2xl border border-accent/30 bg-accent/[0.05] p-5" style={{ animationDelay: `${0.25 + n * 0.15}s` }}><p className="font-bold">{t}</p><p className="mt-2 text-sm text-neutral-300">{d}</p></div>
        ))}
      </div>
    ),
  },
  {
    id: "fit", kicker: "Nada × Whiteshield",
    title: "I've done this shape of product before.",
    body: (
      <div className="grid gap-3 md:grid-cols-3">
        {[["Agentic AI for decision-makers", "Smart Bricks: defined an AI underwriting platform for institutional investors. Set the rule: agents reason, deterministic engines calculate, humans authorise capital."], ["Government AI in production", "Law71: legal AI adopted by the UAE Ministry of Foreign Affairs and EDGE Group. Owned Arabic quality as the only Arabic speaker."], ["I build what I propose", "This concept and a Career Navigator prototype, built myself. Clients react to something real within days."]].map(([t, d], n) => (
          <div key={t} className="mt-slide rounded-2xl border border-white/10 p-6" style={{ animationDelay: `${0.25 + n * 0.18}s` }}><p className="text-xl font-bold">{t}</p><p className="mt-3 text-neutral-400">{d}</p></div>
        ))}
      </div>
    ),
  },
];

function Deck({ onClose }: { onClose: () => void }) {
  const [i, setI] = useState(0);
  const go = useCallback((d: number) => setI((x) => Math.min(slides.length - 1, Math.max(0, x + d))), []);
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === "BUTTON" && e.key === " ") return;
      if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft" || e.key === "PageUp") go(-1);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [go, onClose]);
  const s = slides[i];
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-ink text-neutral-100">
      <div className="ws-grid pointer-events-none absolute inset-0" />
      <div className="relative flex items-center justify-between px-6 py-4 font-mono text-xs text-neutral-500 md:px-12">
        <span className="hidden sm:inline">NADA AHMED × WHITESHIELD · FOR HUGO</span>
        <span className="flex items-center gap-4"><span>{String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          <button onClick={onClose} className="rounded-full border border-white/15 px-3 py-1 hover:text-white">Esc · page</button></span>
      </div>
      <div key={s.id} className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col overflow-y-auto px-6 pb-8 md:px-12 [&>*:first-child]:mt-auto [&>*:last-child]:mb-auto">
        <div>
          <p className="mt-slide font-mono text-xs uppercase tracking-[0.25em] text-accent">{s.kicker}</p>
          <h2 className="mt-wipe mt-4 max-w-5xl text-3xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">{s.title}</h2>
          <div className="mt-8">{s.body}</div>
        </div>
      </div>
      <div className="relative flex items-center gap-4 px-6 py-5 md:px-12">
        <button onClick={() => go(-1)} disabled={i === 0} className="rounded-full border border-white/15 px-4 py-2 text-sm disabled:opacity-30">←</button>
        <div className="flex flex-1 gap-1.5">{slides.map((x, n) => <button key={x.id} onClick={() => setI(n)} aria-label={`Slide ${n + 1}`} className={`h-1.5 flex-1 rounded-full ${n <= i ? "bg-accent" : "bg-white/10"}`} />)}</div>
        <button onClick={() => (i === slides.length - 1 ? onClose() : go(1))} className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink">{i === slides.length - 1 ? "Done" : "Next →"}</button>
      </div>
    </div>
  );
}

export default function HugoCase() {
  const [deck, setDeck] = useState(false);
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("meet") === "1") setDeck(true);
  }, []);
  const close = useCallback(() => {
    setDeck(false);
    const u = new URL(window.location.href);
    if (u.searchParams.has("meet")) { u.searchParams.delete("meet"); window.history.replaceState(null, "", u); }
  }, []);

  return (
    <div className="ws relative min-h-screen">
      {deck && <Deck onClose={close} />}
      <div className="ws-grid pointer-events-none absolute inset-x-0 top-0 h-[600px]" />
      <header className="sticky top-0 z-30 border-b border-white/10 bg-ink/80 backdrop-blur-md">
        <div className="container-x flex h-14 items-center justify-between gap-4 text-sm">
          <span className="font-semibold">Nada Ahmed <span className="text-neutral-500">× Hugo Zlotowski</span></span>
          <span className="flex items-center gap-3">
            <a href="/whiteshield/" className="hidden text-neutral-400 hover:text-white sm:inline">Career Navigator case</a>
            <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 font-mono text-[10px] text-amber-200">PRIVATE</span>
          </span>
        </div>
      </header>

      <main className="container-x relative pb-24">
        <section className="pt-16 pb-10 md:pt-20">
          <p className="eyebrow animate-rise">For Hugo Zlotowski · AI Innovation Lead &amp; Quantum Leap Lead</p>
          <h1 className="mt-5 max-w-4xl animate-rise text-4xl font-extrabold leading-[1.05] tracking-tight [animation-delay:.1s] md:text-6xl">
            Agentic AI a minister can <span className="shimmer">defend.</span>
          </h1>
          <p className="mt-6 max-w-2xl animate-rise text-lg text-neutral-400 [animation-delay:.2s]">
            A short concept of how I&apos;d design a policy-simulation flow: agents that plan and explain, your models that calculate, and people who decide. Built from public information only; all data illustrative.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-rise [animation-delay:.3s]">
            <button onClick={() => setDeck(true)} className="inline-flex items-center gap-3 rounded-2xl bg-accent px-5 py-4 text-left text-ink transition hover:scale-[1.02]">
              <span className="text-2xl">▶</span><span><span className="block font-semibold">Start the walkthrough</span><span className="text-sm opacity-70">6 screens · arrow keys</span></span>
            </button>
            <a href="#concept" className="inline-flex items-center gap-3 rounded-2xl border border-accent/50 bg-accent/10 px-5 py-4 transition hover:bg-accent/20">
              <span className="text-2xl">◎</span><span><span className="block font-semibold">Try the concept</span><span className="text-sm text-neutral-400">One question, end to end</span></span>
            </a>
          </div>
        </section>

        <section id="concept" className="scroll-mt-20 border-t border-white/10 py-14">
          <p className="eyebrow"><span className="text-accent">01</span> / Concept</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-4xl">From a policy question to an approved brief</h2>
          <p className="mt-3 max-w-2xl text-neutral-400">Step through it, change the scenario, and approve the brief. Every number comes from a deterministic model; the language model only plans and explains.</p>
          <div className="mt-8"><QLConcept /></div>
        </section>

        <section className="border-t border-white/10 py-14">
          <p className="eyebrow"><span className="text-accent">02</span> / What makes it trustworthy</p>
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {[["Traceable", "Every number links to a model version and its inputs"], ["Honest", "Freshness and confidence on every source; gaps flagged, not hidden"], ["Editable", "Analysts change assumptions; the model re-runs, the LLM re-explains"], ["Accountable", "Human approval and a full audit trail before a minister sees it"]].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><p className="font-bold text-accent">{t}</p><p className="mt-2 text-sm text-neutral-300">{d}</p></div>
            ))}
          </div>
        </section>

        <p className="font-mono text-xs text-neutral-500">Concept by Nada Ahmed · not affiliated with Whiteshield · not based on any internal information</p>
      </main>
    </div>
  );
}
