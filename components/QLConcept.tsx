"use client";

import { useEffect, useState } from "react";

// Concept demo for Hugo: how an agentic policy-simulation product could answer one question
// while keeping numbers deterministic, evidence cited and a human in charge. All data illustrative.

const steps = ["Question", "Plan", "Evidence", "Simulate", "Map", "Brief"] as const;

const plan = [
  ["Understand", "LLM", "Tariff +10% on imported steel · horizon 3 years · outputs: jobs, output, prices by region"],
  ["Retrieve", "Search", "Trade flows, sector employment by region, firm locations, industrial-zone activity"],
  ["Simulate", "Trade model", "Deterministic run: base, low and high elasticity scenarios"],
  ["Allocate", "Spatial model", "Distribute impact to regions using firm data + satellite activity"],
  ["Explain", "LLM", "Draft a cited brief; list assumptions and gaps"],
];

const evidence = [
  { s: "Customs trade flows, steel imports", f: "Q2 2026", c: "high", note: "Official" },
  { s: "Labour survey, manufacturing jobs by region", f: "2025", c: "medium", note: "Annual, 9 months old" },
  { s: "Satellite activity index, industrial zones", f: "Aug 2026", c: "medium", note: "Nowcast, cloud gaps in 1 region" },
  { s: "Firm registry, steel-using manufacturers", f: "2026", c: "high", note: "Official" },
  { s: "Producer survey, price pass-through", f: "—", c: "missing", note: "Not available: using literature range" },
];

const regions = [
  { r: "North industrial", v: 4 }, { r: "Capital", v: 1 }, { r: "Coastal port", v: -3 },
  { r: "East", v: 2 }, { r: "Central", v: 0 }, { r: "South", v: -1 },
];

const tone = (c: string) => (c === "high" ? "text-emerald-300 border-emerald-400/40" : c === "medium" ? "text-amber-200 border-amber-400/40" : "text-red-300 border-red-400/40");

export default function QLConcept() {
  const [i, setI] = useState(0);
  const [play, setPlay] = useState(false);
  const [approved, setApproved] = useState(false);
  const [elast, setElast] = useState<"low" | "base" | "high">("base");

  useEffect(() => {
    if (!play) return;
    if (i >= steps.length - 1) { setPlay(false); return; }
    const t = setTimeout(() => setI((x) => x + 1), 2600);
    return () => clearTimeout(t);
  }, [play, i]);

  const k = { low: 0.6, base: 1, high: 1.5 }[elast];
  const jobs = Math.round(2400 * k), cost = (0.8 * k).toFixed(1);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-4 md:p-6">
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((s, n) => (
          <button key={s} onClick={() => { setPlay(false); setI(n); }}
            className={`rounded-full px-3 py-1.5 font-mono text-[11px] transition ${n === i ? "bg-accent font-semibold text-ink" : n < i ? "text-accent" : "text-neutral-500 hover:text-white"}`}>
            {n + 1}. {s}
          </button>
        ))}
        <button onClick={() => { setI(0); setApproved(false); setPlay(true); }} className="ml-auto rounded-full border border-accent/50 px-3 py-1.5 text-xs text-accent hover:bg-accent/10">▶ Play the flow</button>
      </div>

      <div key={i} className="mt-5 min-h-[330px]">
        {i === 0 && (
          <div className="mt-slide">
            <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">Minister's policy team asks</p>
            <p className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-xl font-semibold md:text-2xl">“What happens to jobs in each region if we raise the tariff on imported steel by 10%?”</p>
            <p className="mt-4 max-w-2xl text-sm text-neutral-400">The product's job isn't to answer instantly. It's to give an answer the minister can defend: every number traceable, every assumption visible, every gap admitted.</p>
          </div>
        )}
        {i === 1 && (
          <div className="mt-slide space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">Agent plan, shown to the analyst before it runs</p>
            {plan.map(([a, who, d], n) => (
              <div key={a} className="mt-slide flex items-start gap-3 rounded-xl border border-white/10 p-3" style={{ animationDelay: `${n * 0.12}s` }}>
                <span className="font-mono text-xs text-accent">{n + 1}</span>
                <span className="w-24 shrink-0 font-semibold">{a}</span>
                <span className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] ${who === "LLM" ? "border-sky-400/40 text-sky-300" : "border-emerald-400/40 text-emerald-300"}`}>{who}</span>
                <span className="text-sm text-neutral-400">{d}</span>
              </div>
            ))}
            <p className="pt-2 text-xs text-neutral-500"><span className="text-sky-300">Blue</span> = language model (reasons, explains). <span className="text-emerald-300">Green</span> = deterministic tools (every number comes from here).</p>
          </div>
        )}
        {i === 2 && (
          <div className="mt-slide">
            <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">Evidence retrieved, with freshness and confidence</p>
            <div className="mt-3 space-y-2">
              {evidence.map((e, n) => (
                <div key={e.s} className="mt-slide flex flex-wrap items-center gap-3 rounded-xl border border-white/10 p-3 text-sm" style={{ animationDelay: `${n * 0.1}s` }}>
                  <span className="font-mono text-xs text-neutral-500">[{n + 1}]</span>
                  <span className="flex-1">{e.s}</span>
                  <span className="font-mono text-xs text-neutral-400">{e.f}</span>
                  <span className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase ${tone(e.c)}`}>{e.c}</span>
                  <span className="w-full pl-8 text-xs text-neutral-500 md:w-auto md:pl-0">{e.note}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-amber-200">⚠ One gap and one weak signal are flagged up front, not hidden.</p>
          </div>
        )}
        {i === 3 && (
          <div className="mt-slide grid gap-5 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">Scenario: price pass-through</p>
              <div className="mt-3 flex gap-2">
                {(["low", "base", "high"] as const).map((e) => (
                  <button key={e} onClick={() => setElast(e)} className={`rounded-full px-3 py-1.5 text-sm ${elast === e ? "bg-accent font-semibold text-ink" : "border border-white/15 text-neutral-300"}`}>{e}</button>
                ))}
              </div>
              <p className="mt-4 text-sm text-neutral-400">Deterministic trade model. The analyst can change assumptions; the LLM never changes a number.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 p-4"><p className="text-xs text-neutral-500">Net manufacturing jobs, 3 yrs</p><p className="mt-2 text-3xl font-bold text-accent">+{jobs.toLocaleString()}</p><p className="text-xs text-neutral-500">range ±{Math.round(jobs * 0.35).toLocaleString()}</p></div>
              <div className="rounded-2xl border border-white/10 p-4"><p className="text-xs text-neutral-500">Higher input costs, downstream</p><p className="mt-2 text-3xl font-bold text-amber-200">+{cost}%</p><p className="text-xs text-neutral-500">construction & autos most exposed</p></div>
              <p className="col-span-2 font-mono text-[10px] text-neutral-500">Illustrative numbers · source: trade model v3.2, inputs [1][2][4], literature range for [5]</p>
            </div>
          </div>
        )}
        {i === 4 && (
          <div className="mt-slide">
            <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">Where impact lands (spatial model + satellite activity)</p>
            <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-3">
              {regions.map((r, n) => {
                const v = Math.round(r.v * k);
                return (
                  <div key={r.r} className="mt-slide rounded-xl p-4" style={{ animationDelay: `${n * 0.08}s`, background: v > 0 ? `rgba(54,194,244,${0.1 + v * 0.08})` : v < 0 ? `rgba(248,113,113,${0.1 - v * 0.08})` : "rgba(255,255,255,.04)" }}>
                    <p className="text-sm font-semibold">{r.r}</p>
                    <p className="mt-1 font-mono text-lg">{v > 0 ? "+" : ""}{v}%</p>
                    {r.r === "Coastal port" && <p className="mt-1 text-[11px] text-amber-200">⚠ cloud gaps: lower confidence</p>}
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-sm text-neutral-400">Protected producers in the north gain; the port region loses import activity. The map shows confidence, not just colour.</p>
          </div>
        )}
        {i === 5 && (
          <div className="mt-slide grid gap-4 md:grid-cols-[1.4fr_1fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm">
              <p className="font-mono text-[10px] uppercase tracking-wider text-sky-300">✦ AI-drafted brief · {approved ? "approved by analyst" : "awaiting analyst approval"}</p>
              <p className="mt-3 font-semibold text-white">A 10% steel tariff likely adds around {jobs.toLocaleString()} manufacturing jobs over three years, concentrated in the north, while raising construction and auto input costs by about {cost}%.</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-300">
                <li>Port region loses import activity [1][3].</li>
                <li>Price pass-through is uncertain: no local survey; literature range used [5].</li>
                <li>Recommendation: pair with a review at 12 months using the satellite index as an early signal.</li>
              </ul>
              <p className="mt-3 font-mono text-[10px] text-neutral-500">Assumptions editable · model v3.2 · sources [1]–[5] · run ID QL-0931</p>
            </div>
            <div className="space-y-3">
              <button onClick={() => setApproved(true)} disabled={approved} className="w-full rounded-2xl bg-accent px-4 py-3 font-semibold text-ink disabled:opacity-60">{approved ? "✓ Approved · sent to minister's office" : "Approve & send"}</button>
              <div className="rounded-2xl border border-white/10 p-4 text-xs text-neutral-400">
                <p className="font-mono uppercase tracking-wider text-neutral-500">Audit trail</p>
                <p className="mt-2">Question · plan · 5 sources · model versions · assumptions · analyst edits · approval {approved ? "· ✓ approver + timestamp" : ""}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
