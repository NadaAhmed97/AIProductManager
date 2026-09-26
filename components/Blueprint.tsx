"use client";

import { useEffect, useState } from "react";
import Section from "./Section";

// An interactive system map showing how I'd architect an AI decision-support product
// for government: data → AI agents → deterministic models → insights → a human decides.

type Layer = "data" | "agent" | "engine" | "insight" | "human";
type Node = { id: string; label: string; layer: Layer; x: number; y: number; detail: string };

const W = 150;
const H = 40;

const nodes: Node[] = [
  { id: "sat", label: "Satellite imagery", layer: "data", x: 90, y: 90, detail: "Observed ground truth: construction, land use, traffic and night-time lights. Hard to argue with, and it doesn't wait for official statistics." },
  { id: "eco", label: "Economic datasets", layer: "data", x: 90, y: 190, detail: "National accounts, trade, employment and prices. These are the inputs the models are calibrated on." },
  { id: "pub", label: "Public data", layer: "data", x: 90, y: 290, detail: "Open government data, census and news. Broad context, variable quality, so every source is scored for reliability." },
  { id: "cli", label: "Client data", layer: "data", x: 90, y: 390, detail: "The ministry's or institution's own data. It's the most valuable and the most sensitive, so access is scoped per client and never mixed." },

  { id: "ing", label: "Ingestion agent", layer: "agent", x: 300, y: 140, detail: "Cleans, maps and tags incoming data, and flags gaps or conflicts for a human to review instead of silently filling them." },
  { id: "res", label: "Research agent", layer: "agent", x: 300, y: 240, detail: "Turns a policy question into a structured analysis plan: which indicators, which comparable cases, which time horizon." },
  { id: "scn", label: "Scenario agent", layer: "agent", x: 300, y: 340, detail: "Builds 'what if' variants (budget, timing, region) and sends each one to the models. It never invents the numbers itself." },

  { id: "econ", label: "Econometric models", layer: "engine", x: 510, y: 190, detail: "Deterministic, auditable models that produce every number. The same inputs always give the same output, which is what a minister needs to defend a decision." },
  { id: "val", label: "Validation guardrails", layer: "engine", x: 510, y: 310, detail: "Checks every output: confidence ranges, source traceability, Arabic/English consistency and bias checks. Anything that fails is blocked, not softened." },

  { id: "brief", label: "Insight briefs", layer: "insight", x: 720, y: 190, detail: "Plain-language summaries in Arabic and English, with every claim linked back to its source and model run." },
  { id: "dash", label: "Decision dashboard", layer: "insight", x: 720, y: 310, detail: "Scenario comparisons, maps and sensitivity sliders. Built for a 10-minute briefing, not a data-science workshop." },

  { id: "dm", label: "Decision-maker", layer: "human", x: 910, y: 250, detail: "A human always makes the call. Their questions and overrides feed back into the system, and that loop is how the product learns what matters." },
];

const edges: [string, string][] = [
  ["sat", "ing"], ["eco", "ing"], ["pub", "ing"], ["cli", "ing"],
  ["ing", "res"], ["res", "scn"], ["res", "econ"], ["scn", "econ"],
  ["econ", "val"], ["val", "brief"], ["val", "dash"], ["econ", "brief"],
  ["brief", "dm"], ["dash", "dm"],
];

const layers: Record<Layer, { name: string; color: string }> = {
  data: { name: "Data", color: "#60A5FA" },
  agent: { name: "AI agents", color: "#C084FC" },
  engine: { name: "Deterministic engines", color: "#C6FF3D" },
  insight: { name: "Insights", color: "#FBBF24" },
  human: { name: "Human decision", color: "#F472B6" },
};

// A guided walkthrough: one policy question travelling through the system.
const story: { title: string; text: string; active: string[] }[] = [
  { title: "The question", text: "A ministry asks: \"What is the economic impact of a new industrial zone in this region over five years?\"", active: ["dm"] },
  { title: "Gather evidence", text: "Satellite, economic, public and client data are pulled in and cleaned. Gaps are flagged, not guessed.", active: ["sat", "eco", "pub", "cli", "ing"] },
  { title: "Frame the analysis", text: "The research agent turns the question into indicators and comparable cases. The scenario agent drafts three budget and timing options.", active: ["res", "scn"] },
  { title: "Calculate, don't generate", text: "Every number comes from deterministic econometric models. The AI reasons about the question but never makes up a figure.", active: ["econ"] },
  { title: "Earn trust", text: "Guardrails check confidence ranges, source traceability and Arabic/English consistency before anything reaches a decision-maker.", active: ["val"] },
  { title: "Decide", text: "A bilingual brief and a scenario dashboard reach the decision-maker. A human makes the call, and their feedback shapes the next version.", active: ["brief", "dash", "dm"] },
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

function path(a: Node, b: Node) {
  const x1 = a.x + W / 2, y1 = a.y, x2 = b.x - W / 2, y2 = b.y;
  if (a.layer === b.layer) {
    // vertical link inside a column
    const x = a.x - W / 2 - 14;
    return `M ${a.x - W / 2} ${a.y} C ${x} ${a.y}, ${x} ${b.y}, ${b.x - W / 2} ${b.y}`;
  }
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
}

export default function Blueprint() {
  const [selected, setSelected] = useState<string>("econ");
  const [step, setStep] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => {
      if (step === null || step < story.length - 1) setStep((s) => (s === null ? 0 : s + 1));
      else setPlaying(false);
    }, step === null ? 50 : 3200);
    return () => clearTimeout(t);
  }, [playing, step]);

  const active = step !== null ? new Set(story[step].active) : null;
  const lit = (id: string) => !active || active.has(id);
  const node = byId[selected];

  return (
    <Section
      id="blueprint"
      index="03"
      eyebrow="How I architect AI products"
      title="Blueprint: an AI decision-support product for government."
      intro="This is how I'd structure an AI product that helps senior decision-makers understand the impact of policies and investments. Press play to follow one policy question through it, or click any part to see why it's there."
    >
      <div className="card overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-4">
          <div className="flex flex-wrap gap-3">
            {Object.entries(layers).map(([k, l]) => (
              <span key={k} className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-400">
                <span className="h-2 w-2 rounded-full" style={{ background: l.color }} />
                {l.name}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => { setStep(null); setPlaying(true); }}
              className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-ink hover:brightness-110"
            >
              {playing ? "Playing…" : "▶ Play walkthrough"}
            </button>
            {step !== null && !playing && (
              <button onClick={() => setStep(null)} className="rounded-full border border-white/15 px-4 py-1.5 text-sm hover:border-white">
                Reset
              </button>
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          <svg viewBox="0 0 1000 480" className="min-w-[720px]" role="img" aria-label="System map of an AI decision-support product">
            {edges.map(([a, b]) => {
              const on = lit(a) && lit(b);
              return (
                <g key={a + b}>
                  <path d={path(byId[a], byId[b])} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth={1.5} />
                  <path
                    d={path(byId[a], byId[b])}
                    fill="none"
                    stroke={layers[byId[b].layer].color}
                    strokeWidth={1.5}
                    strokeDasharray="4 10"
                    className="flow"
                    style={{ opacity: on ? 0.9 : 0.08, transition: "opacity .5s" }}
                  />
                </g>
              );
            })}
            {/* feedback loop from the human back into the agents */}
            <path d="M 910 270 C 910 460, 300 470, 300 360" fill="none" stroke="#F472B6" strokeWidth={1.2}
              strokeDasharray="3 8" className="flow" style={{ opacity: !active || active.has("dm") ? 0.5 : 0.06, transition: "opacity .5s" }} />
            <text x="610" y="462" textAnchor="middle" className="fill-neutral-500 font-mono" fontSize="11">feedback loop: questions and overrides improve the next analysis</text>

            {nodes.map((n) => {
              const c = layers[n.layer].color;
              const sel = selected === n.id;
              return (
                <g key={n.id} onClick={() => setSelected(n.id)} className="cursor-pointer"
                  style={{ opacity: lit(n.id) ? 1 : 0.2, transition: "opacity .5s" }}>
                  <rect x={n.x - W / 2} y={n.y - H / 2} width={W} height={H} rx={10}
                    fill={sel ? c : "#111"} fillOpacity={sel ? 0.18 : 1}
                    stroke={c} strokeOpacity={sel ? 1 : 0.45} strokeWidth={sel ? 1.8 : 1} />
                  {active?.has(n.id) && (
                    <rect x={n.x - W / 2} y={n.y - H / 2} width={W} height={H} rx={10} fill="none" stroke={c} className="pulse" />
                  )}
                  <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="13" className="fill-neutral-100 select-none">{n.label}</text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="grid gap-px border-t border-white/10 bg-white/10 md:grid-cols-2">
          <div className="bg-ink p-5">
            {step !== null ? (
              <div key={step} className="animate-rise">
                <p className="font-mono text-[11px] text-accent">STEP {step + 1} / {story.length}</p>
                <p className="mt-1 font-semibold">{story[step].title}</p>
                <p className="mt-2 text-sm text-neutral-400">{story[step].text}</p>
              </div>
            ) : (
              <div>
                <p className="font-mono text-[11px] text-neutral-500">CORE PRINCIPLE</p>
                <p className="mt-1 font-semibold">AI reasons. Models calculate. Humans decide.</p>
                <p className="mt-2 text-sm text-neutral-400">
                  I applied the same principle to institutional real-estate underwriting at Smart Bricks. When the stakes are
                  public money, trust is the product.
                </p>
              </div>
            )}
          </div>
          <div key={selected} className="animate-rise bg-ink p-5">
            <p className="font-mono text-[11px]" style={{ color: layers[node.layer].color }}>{layers[node.layer].name.toUpperCase()}</p>
            <p className="mt-1 font-semibold">{node.label}</p>
            <p className="mt-2 text-sm text-neutral-400">{node.detail}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
