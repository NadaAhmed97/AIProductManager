"use client";

import { useMemo, useState } from "react";
import Section from "./Section";

// Scenario loosely based on an AI fitness-coach MVP. Scores are 1–5.
type Feature = { id: string; name: string; reach: number; impact: number; confidence: number; safety: number; effort: number };

const features: Feature[] = [
  { id: "onb", name: "AI onboarding & goal-setting chat", reach: 5, impact: 4, confidence: 4, safety: 4, effort: 3 },
  { id: "plan", name: "Adaptive workout plans", reach: 4, impact: 5, confidence: 3, safety: 3, effort: 4 },
  { id: "nudge", name: "WhatsApp nudges & streaks", reach: 4, impact: 3, confidence: 4, safety: 4, effort: 2 },
  { id: "ref", name: "Referral loop", reach: 3, impact: 3, confidence: 2, safety: 5, effort: 2 },
  { id: "nutri", name: "AI nutrition advice", reach: 3, impact: 4, confidence: 2, safety: 1, effort: 4 },
  { id: "dash", name: "Progress dashboard", reach: 3, impact: 2, confidence: 5, safety: 5, effort: 2 },
  { id: "pay", name: "In-app subscriptions", reach: 2, impact: 4, confidence: 4, safety: 3, effort: 3 },
];

type Weights = { reach: number; impact: number; confidence: number; safety: number; effort: number };

const presets: { id: string; label: string; weights: Weights; take: string }[] = [
  {
    id: "prepmf", label: "Pre-PMF: learn fast",
    weights: { reach: 2, impact: 3, confidence: 1, safety: 1, effort: 5 },
    take: "Before product-market fit, speed of learning beats polish. I weight effort hard so we ship the smallest thing that tests the riskiest assumption — here, whether people actually engage with an AI coach.",
  },
  {
    id: "growth", label: "Growth: move the metric",
    weights: { reach: 5, impact: 4, confidence: 3, safety: 2, effort: 2 },
    take: "Once retention is proven, reach matters most. Nudges and referral loops climb because they compound — each activated user brings the next one.",
  },
  {
    id: "regulated", label: "Regulated / government",
    weights: { reach: 2, impact: 3, confidence: 4, safety: 5, effort: 2 },
    take: "With government or fintech clients, one unsafe AI answer costs more than any feature earns. Confidence and safety dominate; AI nutrition advice drops out until we have validation in place.",
  },
];

const dims: { key: keyof Weights; label: string; hint: string }[] = [
  { key: "reach", label: "Reach", hint: "How many users it touches" },
  { key: "impact", label: "Impact", hint: "How much it moves the goal" },
  { key: "confidence", label: "Confidence", hint: "How sure we are it works" },
  { key: "safety", label: "Risk safety", hint: "Low AI / compliance risk" },
  { key: "effort", label: "Effort penalty", hint: "How hard to punish cost" },
];

const CAPACITY = 9; // effort points available this cycle
const ROW = 60;

function score(f: Feature, w: Weights) {
  const value = f.reach * w.reach + f.impact * w.impact + f.confidence * w.confidence + f.safety * w.safety;
  return value / Math.pow(f.effort, w.effort / 3);
}

export default function DecisionSimulator() {
  const [preset, setPreset] = useState(presets[0].id);
  const [w, setW] = useState<Weights>(presets[0].weights);
  const active = presets.find((p) => p.id === preset);

  const ranked = useMemo(() => {
    const sorted = [...features].map((f) => ({ ...f, s: score(f, w) })).sort((a, b) => b.s - a.s);
    const max = sorted[0].s;
    let used = 0;
    return sorted.map((f) => {
      const ships = used + f.effort <= CAPACITY;
      if (ships) used += f.effort;
      return { ...f, pct: (f.s / max) * 100, ships };
    });
  }, [w]);

  const pos = Object.fromEntries(ranked.map((f, i) => [f.id, i]));
  const used = ranked.filter((f) => f.ships).reduce((a, f) => a + f.effort, 0);

  return (
    <Section
      id="simulator"
      index="03"
      eyebrow="Live product thinking"
      title="Decision simulator: what ships in a 6-week MVP?"
      intro="Seven candidate features, two engineers, 9 effort points. Pick a context or drag the weights yourself — the backlog re-ranks and the cut line moves in real time."
    >
      <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
        <div className="card p-6">
          <p className="eyebrow">Context</p>
          <div className="mt-3 grid gap-2">
            {presets.map((p) => (
              <button key={p.id}
                onClick={() => { setPreset(p.id); setW(p.weights); }}
                className={`rounded-lg border px-4 py-2.5 text-left text-sm transition ${
                  preset === p.id ? "border-accent bg-accent/10 text-white" : "border-white/10 text-neutral-400 hover:border-white/30"
                }`}>
                {p.label}
              </button>
            ))}
          </div>
          <p className="eyebrow mt-8">Weights</p>
          <div className="mt-4 space-y-5">
            {dims.map((d) => (
              <label key={d.key} className="block">
                <div className="flex justify-between text-sm">
                  <span>{d.label}</span>
                  <span className="font-mono text-accent">{w[d.key]}</span>
                </div>
                <input type="range" min={0} max={5} value={w[d.key]}
                  onChange={(e) => { setPreset("custom"); setW({ ...w, [d.key]: Number(e.target.value) }); }}
                  className="mt-2 w-full accent-[#C6FF3D]" aria-label={d.label} />
                <span className="text-xs text-neutral-600">{d.hint}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="card flex flex-col p-6">
          <div className="flex items-center justify-between">
            <p className="eyebrow">Ranked backlog</p>
            <p className="font-mono text-xs text-neutral-400">
              capacity <span className="text-accent">{used}</span>/{CAPACITY} pts
            </p>
          </div>
          <div className="relative mt-5" style={{ height: features.length * ROW }}>
            {features.map((f) => {
              const r = ranked[pos[f.id]];
              return (
                <div key={f.id}
                  className="absolute inset-x-0 transition-transform duration-500 ease-out"
                  style={{ transform: `translateY(${pos[f.id] * ROW}px)`, height: ROW - 8 }}>
                  <div className={`flex h-full items-center gap-4 rounded-lg border px-4 transition-colors ${
                    r.ships ? "border-accent/30 bg-accent/[0.06]" : "border-white/5 opacity-50"}`}>
                    <span className="w-5 font-mono text-xs text-neutral-500">{pos[f.id] + 1}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate text-sm">{f.name}</span>
                        <span className={`shrink-0 font-mono text-[10px] ${r.ships ? "text-accent" : "text-neutral-500"}`}>
                          {r.ships ? "SHIP" : "LATER"} · {f.effort}pt
                        </span>
                      </div>
                      <div className="mt-2 h-1 rounded-full bg-white/5">
                        <div className="h-full rounded-full bg-accent transition-all duration-500" style={{ width: `${r.pct}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 rounded-lg border-l-2 border-accent bg-white/[0.03] p-4 text-sm text-neutral-300">
            <p className="font-mono text-[11px] text-neutral-500">MY TAKE</p>
            <p className="mt-1">
              {active?.take ??
                "Custom weights — notice how small shifts reorder everything. That's why I agree the weights with stakeholders before debating features: it turns opinion fights into one explicit trade-off."}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
