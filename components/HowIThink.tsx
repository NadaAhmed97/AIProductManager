"use client";

import { useState } from "react";
import { principles } from "@/data/thinking";
import Section from "./Section";
import NadaParticles from "./NadaParticles";

export const openCase = (id: string) => {
  window.dispatchEvent(new CustomEvent("open-case", { detail: id }));
};

export default function HowIThink() {
  const [i, setI] = useState(0);
  const p = principles[i];

  return (
    <Section
      id="thinking"
      index="02"
      eyebrow="How Nada thinks"
      title={`${principles.length} principles I actually work by, each with a real example.`}
      intro="These aren't frameworks from a book. Each one comes from a decision I made on a real product, and you can open the full case study behind it."
    >
      <div className="mb-10 grid items-center gap-6 lg:grid-cols-[1fr_340px]">
        <NadaParticles />
        <div>
          <p className="font-mono text-xs text-accent">WHAT I DO, IN ONE LOOP</p>
          <p className="mt-3 text-2xl font-bold leading-snug">I take chaos and give it structure, in Arabic and English.</p>
          <p className="mt-3 text-sm text-neutral-400">
            Every principle below is one way I do that. Each comes from a real decision on a real product.
          </p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
        {/* principle list: horizontal scroller on mobile, vertical list on desktop */}
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
          {principles.map((pr, idx) => (
            <button
              key={pr.id}
              onClick={() => setI(idx)}
              className={`group flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition lg:shrink ${
                idx === i ? "border-accent bg-accent/10" : "border-white/10 hover:border-white/30"
              }`}
            >
              <span className={`font-mono text-xs ${idx === i ? "text-accent" : "text-neutral-600"}`}>
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className={`whitespace-nowrap text-sm lg:whitespace-normal ${idx === i ? "text-white" : "text-neutral-400 group-hover:text-neutral-200"}`}>
                {pr.principle}
              </span>
            </button>
          ))}
        </div>

        <article key={p.id} className="card animate-rise p-6 md:p-10">
          <p className="font-mono text-xs text-accent">PRINCIPLE {String(i + 1).padStart(2, "0")}</p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{p.principle}</h3>
          <p className="mt-3 text-lg text-neutral-400">{p.oneLiner}</p>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="font-mono text-[11px] text-neutral-500">REAL EXAMPLE · {p.project.toUpperCase()}</p>
            <p className="mt-2 text-neutral-300">{p.situation}</p>
          </div>

          <p className="mt-8 font-mono text-[11px] text-neutral-500">WHAT I DID</p>
          <ol className="mt-3 space-y-3">
            {p.move.map((m, k) => (
              <li key={m} className="flex animate-rise gap-3 text-neutral-200" style={{ animationDelay: `${0.1 + k * 0.1}s` }}>
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 font-mono text-[11px] text-accent">
                  {k + 1}
                </span>
                {m}
              </li>
            ))}
          </ol>

          <blockquote className="mt-8 border-l-2 border-accent pl-4 text-neutral-300 italic">{p.why}</blockquote>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
            {p.caseId ? (
              <button onClick={() => openCase(p.caseId!)} className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink hover:brightness-110">
                Read the full case study →
              </button>
            ) : <span />}
            <div className="flex gap-2">
              <button onClick={() => setI((i - 1 + principles.length) % principles.length)} aria-label="Previous principle"
                className="rounded-full border border-white/15 px-3 py-1.5 text-sm hover:border-white">←</button>
              <button onClick={() => setI((i + 1) % principles.length)} aria-label="Next principle"
                className="rounded-full border border-white/15 px-3 py-1.5 text-sm hover:border-white">→</button>
            </div>
          </div>
        </article>
      </div>
    </Section>
  );
}
