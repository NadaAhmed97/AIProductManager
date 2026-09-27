"use client";

import { Fragment, useMemo, useState } from "react";
import {
  aiLadder, aiQuestions, edge, fit, competitors, customers, facts, measurement, metricTree, navigatorFeatures,
  plan, proposals, questionsForThem, scalabilityChecks, sources, type Proposal,
} from "@/data/whiteshield";

const nav = [
  ["know", "What I know"],
  ["case", "The case"],
  ["metrics", "Metric tree"],
  ["bets", "Proposals"],
  ["intel", "Competitor intel"],
  ["scale", "Scale & AI"],
  ["measure", "Measure & plan"],
  ["fit", "Nada × Whiteshield"],
];

function Block({ id, n, title, intro, children }: { id: string; n: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-white/10 py-16 md:py-20">
      <div data-reveal>
        <p className="eyebrow"><span className="text-accent">{n}</span> / {nav.find(([k]) => k === id)?.[1]}</p>
        <h2 className="mt-3 max-w-3xl text-2xl font-bold tracking-tight md:text-4xl">{title}</h2>
        {intro && <p className="mt-4 max-w-2xl text-neutral-400">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

const Dots = ({ n, color }: { n: number; color: string }) => (
  <span className="inline-flex gap-0.5 align-middle">
    {[1, 2, 3, 4, 5].map((i) => <span key={i} className="h-1.5 w-3 rounded-full" style={{ background: i <= n ? color : "rgba(255,255,255,.1)" }} />)}
  </span>
);

export default function WhiteshieldCase() {
  const [w, setW] = useState({ impact: 3, confidence: 2, effort: 2, risk: 2 });
  const [sel, setSel] = useState(proposals[0].id);

  const ranked = useMemo(() => {
    const score = (p: Proposal) => p.impact * w.impact + p.confidence * w.confidence - p.effort * w.effort - p.risk * w.risk;
    const list = proposals.map((p) => ({ ...p, s: score(p) })).sort((a, b) => b.s - a.s);
    const max = Math.max(...list.map((x) => x.s)), min = Math.min(...list.map((x) => x.s));
    return list.map((p) => ({ ...p, pct: max === min ? 100 : 20 + ((p.s - min) / (max - min)) * 80 }));
  }, [w]);
  const p = proposals.find((x) => x.id === sel)!;
  const rank = (id: string) => ranked.findIndex((r) => r.id === id);

  return (
    <div className="relative">
      <div className="orb left-[-10%] top-[-5%] h-[380px] w-[380px] bg-accent/30" />
      <div className="orb right-[-5%] top-[10%] h-[340px] w-[340px] bg-sky-500/30 [animation-delay:-6s]" />

      {/* header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-ink/80 backdrop-blur-md">
        <div className="container-x flex h-14 items-center justify-between gap-4">
          <a href="/" className="whitespace-nowrap text-sm font-semibold">Nada Ahmed <span className="text-neutral-500">× Whiteshield</span></a>
          <nav className="hidden gap-5 text-xs text-neutral-400 lg:flex">
            {nav.map(([id, label]) => <a key={id} href={`#${id}`} className="hover:text-white">{label}</a>)}
          </nav>
          <span className="whitespace-nowrap rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 font-mono text-[10px] text-amber-200">PRIVATE</span>
        </div>
      </header>

      <main className="container-x relative">
        {/* hero */}
        <section className="pt-16 pb-12 md:pt-24">
          <p className="eyebrow animate-rise">Prepared for Whiteshield · Product Manager, Data &amp; AI</p>
          <h1 className="mt-5 max-w-4xl animate-rise text-4xl font-extrabold leading-[1.05] tracking-tight [animation-delay:.1s] md:text-6xl">
            Career Navigator: from <span className="text-neutral-500">matches</span> to <span className="shimmer">verified hires.</span>
          </h1>
          <p className="mt-6 max-w-2xl animate-rise text-lg text-neutral-400 [animation-delay:.2s]">
            A case study and proposal on a real Whiteshield product, showing how I work: metrics behind every decision, a value
            proposition for every feature, impact, effort and risk scored openly, competitors checked, scalability tested, and AI
            added where it genuinely helps.
          </p>
          <a href="/whiteshield/prototype/" className="mt-8 inline-flex animate-rise items-center gap-3 rounded-2xl border border-accent/50 bg-accent/10 px-5 py-4 transition hover:bg-accent/20 [animation-delay:.25s]">
            <span className="text-2xl">▶</span>
            <span><span className="block font-semibold">Open the clickable prototype</span><span className="text-sm text-neutral-400">Career Navigator rebuilt, with Today / Proposed on every screen</span></span>
          </a>
          <br />
          <p className="mt-6 max-w-2xl animate-rise rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-neutral-400 [animation-delay:.3s]">
            <span className="font-semibold text-neutral-200">Built from public information only.</span> Anything marked as a
            hypothesis is an assumption I would validate with your real data in my first weeks.
          </p>
        </section>

        {/* 01 know */}
        <Block id="know" n="01" title="What I know about Whiteshield" intro="A policy-intelligence company turning data and AI into decisions for governments, with Jobs Navigator as its citizen-facing labour-market product.">
          <div className="grid gap-3 md:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="card p-5">
                <p className="font-mono text-[11px] uppercase text-neutral-500">{f.label}</p>
                <p className="mt-2 text-sm text-neutral-200">{f.value}</p>
              </div>
            ))}
          </div>
          <p className="eyebrow mt-10">Career Navigator today (public description)</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {navigatorFeatures.map((f) => <span key={f} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-neutral-300">{f}</span>)}
          </div>
        </Block>

        {/* 02 case */}
        <Block id="case" n="02" title="The case: one product, three customers" intro="Career Navigator only wins if the citizen gets a job, the employer gets a ready candidate, and the government can prove it happened. Every feature below is judged against all three.">
          <div className="grid gap-4 md:grid-cols-3">
            {customers.map((c, i) => (
              <div key={c.who} className="card p-6">
                <p className="font-mono text-[11px] text-accent">CUSTOMER {i + 1}</p>
                <p className="mt-2 font-semibold">{c.who}</p>
                <p className="mt-3 text-sm italic text-neutral-400">{c.job}</p>
                <p className="mt-4 border-t border-white/10 pt-3 text-sm"><span className="text-neutral-500">Wins when: </span>{c.wins}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border-l-2 border-accent bg-white/[0.03] p-5 text-neutral-300">
            <p className="font-mono text-[11px] text-neutral-500">THE INSIGHT</p>
            <p className="mt-1">The citizen product and the government product are the same flywheel: better matches → more verified hires →
              stronger evidence for ministries → more contracts and data → better matches. The weakest link today is most likely the
              last step: <span className="text-white">proving the hire happened</span> (hypothesis).</p>
          </div>
        </Block>

        {/* 03 metric tree */}
        <Block id="metrics" n="03" title="The metric tree I'd run the product on" intro="One north-star metric, four drivers a team can move, and guardrails we never trade away.">
          <div className="card mx-auto max-w-3xl border-accent/40 bg-accent/5 p-6 text-center">
            <p className="font-mono text-[11px] text-accent">NORTH STAR</p>
            <p className="mt-2 text-xl font-bold md:text-2xl">{metricTree.northStar.name}</p>
            <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-400">{metricTree.northStar.why}</p>
          </div>
          <div className="mx-auto h-8 w-px bg-gradient-to-b from-accent to-white/10" />
          <div className="grid gap-4 md:grid-cols-4">
            {metricTree.drivers.map((d, i) => (
              <div key={d.name} className="card animate-rise p-5" style={{ animationDelay: `${i * 0.08}s` }}>
                <p className="font-mono text-[11px] text-neutral-500">DRIVER {i + 1}</p>
                <p className="mt-1 font-semibold">{d.name}</p>
                <p className="mt-2 text-sm text-accent">{d.metric}</p>
                <p className="mt-4 font-mono text-[10px] text-neutral-500">LEVERS</p>
                <ul className="mt-1 space-y-1 text-sm text-neutral-300">{d.levers.map((l) => <li key={l}>· {l}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl border border-red-400/20 bg-red-500/5 p-4">
            <span className="font-mono text-[11px] text-red-300">GUARDRAILS</span>
            {metricTree.guardrails.map((g) => <span key={g} className="rounded-full border border-red-400/20 px-3 py-1 text-xs text-neutral-300">{g}</span>)}
          </div>
        </Block>

        {/* 04 proposals */}
        <Block id="bets" n="04" title="Six proposals, scored in the open" intro="Every feature has to name who it helps, the value it adds, the metric it moves, and its effort and risk. Move the weights to see how priorities shift, then click a proposal for the full reasoning.">
          <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
            <div className="card h-fit p-5">
              <p className="eyebrow">Scoring weights</p>
              {([["impact", "Impact", "+"], ["confidence", "Confidence", "+"], ["effort", "Effort", "−"], ["risk", "Risk", "−"]] as const).map(([k, label, sign]) => (
                <label key={k} className="mt-4 block">
                  <span className="flex justify-between text-sm"><span>{label} <span className="text-neutral-600">({sign})</span></span><span className="font-mono text-accent">{w[k]}</span></span>
                  <input type="range" min={0} max={5} value={w[k]} onChange={(e) => setW({ ...w, [k]: Number(e.target.value) })}
                    className="mt-2 w-full accent-[#C6FF3D]" aria-label={label} />
                </label>
              ))}
              <p className="mt-5 text-xs text-neutral-500">Score = impact × w + confidence × w − effort × w − risk × w. I'd agree these weights with the team and client before debating features.</p>
            </div>

            <div>
              {/* ranked list */}
              <div className="space-y-2">
                {ranked.map((r, i) => (
                  <button key={r.id} onClick={() => setSel(r.id)}
                    className={`flex w-full items-center gap-4 rounded-xl border px-4 py-3 text-left transition ${sel === r.id ? "border-accent bg-accent/10" : "border-white/10 hover:border-white/30"}`}>
                    <span className="w-5 font-mono text-xs text-neutral-500">{i + 1}</span>
                    <span className="min-w-0 flex-1">
                      <span className="flex justify-between gap-3 text-sm font-medium"><span className="truncate">{r.name}</span></span>
                      <span className="mt-2 block h-1 rounded-full bg-white/5"><span className="block h-full rounded-full bg-accent transition-all duration-500" style={{ width: `${r.pct}%` }} /></span>
                    </span>
                    <span className="hidden shrink-0 gap-3 font-mono text-[10px] text-neutral-500 sm:flex">
                      <span>I{r.impact}</span><span>C{r.confidence}</span><span>E{r.effort}</span><span>R{r.risk}</span>
                    </span>
                  </button>
                ))}
              </div>

              {/* detail */}
              <article key={p.id} className="card mt-5 animate-rise p-6 md:p-8">
                <p className="font-mono text-[11px] text-accent">PROPOSAL · RANKED #{rank(p.id) + 1} WITH CURRENT WEIGHTS</p>
                <h3 className="mt-2 text-2xl font-bold">{p.name}</h3>
                <p className="mt-2 text-neutral-300">{p.oneLiner}</p>
                <p className="mt-4 rounded-lg bg-white/[0.03] p-3 text-sm text-neutral-400"><span className="text-neutral-200">Problem · </span>{p.problem}</p>

                <p className="eyebrow mt-6">Value proposition</p>
                <div className={`mt-2 grid gap-3 ${p.valueProp.employer ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                  {Object.entries(p.valueProp).map(([k, v]) => (
                    <div key={k} className="rounded-lg border border-white/10 p-3 text-sm"><span className="font-mono text-[10px] uppercase text-accent">{k}</span><p className="mt-1 text-neutral-300">{v}</p></div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="eyebrow">How I'd measure it</p>
                    <p className="mt-2 text-sm"><span className="text-neutral-500">Leading · </span>{p.metrics.leading}</p>
                    <p className="mt-1 text-sm"><span className="text-neutral-500">Lagging · </span>{p.metrics.lagging}</p>
                    <p className="mt-3 text-sm text-neutral-400"><span className="text-neutral-200">Experiment · </span>{p.experiment}</p>
                  </div>
                  <div>
                    <p className="eyebrow">Impact · effort · risk</p>
                    <div className="mt-2 space-y-1.5 text-sm">
                      <p className="flex items-center justify-between">Impact <Dots n={p.impact} color="#C6FF3D" /></p>
                      <p className="flex items-center justify-between">Confidence <Dots n={p.confidence} color="#60A5FA" /></p>
                      <p className="flex items-center justify-between">Effort <Dots n={p.effort} color="#FBBF24" /></p>
                      <p className="flex items-center justify-between">Risk <Dots n={p.risk} color="#F87171" /></p>
                    </div>
                    <p className="mt-3 text-sm text-neutral-400"><span className="text-neutral-200">Risk & mitigation · </span>{p.riskNote}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-purple-400/20 bg-purple-500/5 p-4">
                    <p className="font-mono text-[11px] text-purple-300">AI ENABLEMENT · {p.ai.level.toUpperCase()}</p>
                    <p className="mt-2 text-sm text-neutral-300">{p.ai.how}</p>
                    <p className="mt-2 text-sm text-neutral-400"><span className="text-neutral-200">Guardrail · </span>{p.ai.guardrail}</p>
                  </div>
                  <div className="rounded-lg border border-sky-400/20 bg-sky-500/5 p-4">
                    <p className="font-mono text-[11px] text-sky-300">SCALABILITY CHECK</p>
                    <ul className="mt-2 space-y-1 text-sm text-neutral-300">{p.scalability.map((s) => <li key={s}>✓ {s}</li>)}</ul>
                    <p className="mt-3 font-mono text-[11px] text-sky-300">COMPETITOR SIGNAL</p>
                    <p className="mt-1 text-sm text-neutral-400">{p.competitor}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* impact vs effort map: HTML grid so proposals sharing a score stack instead of overlapping */}
          <div className="card mt-8 p-6">
            <p className="eyebrow">Impact vs effort map · colour = risk (green low → red high) · top-right = quick wins</p>
            <div className="mt-5 overflow-x-auto">
              <div className="grid min-w-[640px] grid-cols-[70px_repeat(4,1fr)] gap-2">
                <span />
                {[4, 3, 2, 1].map((e) => <span key={e} className="text-center font-mono text-[10px] text-neutral-500">EFFORT {e}{e === 1 ? " (least)" : e === 4 ? " (most)" : ""}</span>)}
                {[5, 4].map((imp) => (
                  <Fragment key={imp}>
                    <span className="self-center font-mono text-[10px] text-neutral-500">IMPACT {imp}</span>
                    {[4, 3, 2, 1].map((e) => {
                      const items = proposals.filter((q) => q.impact === imp && q.effort === e);
                      const quick = imp === 5 && e <= 2;
                      return (
                        <div key={`${imp}-${e}`} className={`min-h-[84px] space-y-1.5 rounded-lg border p-2 ${quick ? "border-accent/40 bg-accent/5" : "border-white/5 bg-white/[0.02]"}`}>
                          {items.map((q) => {
                            const riskColor = ["#34D399", "#34D399", "#A3E635", "#FBBF24", "#F87171", "#F87171"][q.risk];
                            return (
                              <button key={q.id} onClick={() => setSel(q.id)}
                                className={`block w-full rounded-md border px-2 py-1.5 text-left text-xs transition ${sel === q.id ? "border-white bg-white/10" : "border-white/10 hover:border-white/40"}`}
                                style={{ borderLeft: `3px solid ${riskColor}` }}>
                                {q.name}
                              </button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </Block>

        {/* 05 intel */}
        <Block id="intel" n="05" title="Competitor intel: where Career Navigator can win" intro="Not a feature checklist: who each player serves, what they do well, the gap they leave, and the angle that gives Whiteshield the edge.">
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-white/[0.04] font-mono text-[11px] uppercase text-neutral-500">
                <tr><th className="p-4">Player</th><th className="p-4">Strength</th><th className="p-4">Gap</th><th className="p-4 text-accent">Our angle</th></tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr key={c.name} className="border-t border-white/10 align-top">
                    <td className="p-4"><p className="font-semibold">{c.name}</p><p className="text-xs text-neutral-500">{c.type}</p></td>
                    <td className="p-4 text-neutral-300">{c.strength}</td>
                    <td className="p-4 text-neutral-400">{c.gap}</td>
                    <td className="p-4 text-neutral-200">{c.angle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-neutral-500">How I'd keep this current: a weekly competitor sweep posted to Slack, ranked by how much each move matters to us. I built exactly this at Smart Bricks.</p>
        </Block>

        {/* 06 scale & AI */}
        <Block id="scale" n="06" title="How I check scalability, and where AI belongs" intro="Two filters every proposal passes before it reaches a roadmap.">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Scalability test</p>
              <div className="mt-4 space-y-3">
                {scalabilityChecks.map((s, i) => (
                  <div key={s.q} className="card p-4">
                    <p className="font-semibold"><span className="mr-2 font-mono text-xs text-accent">{i + 1}</span>{s.q}</p>
                    <p className="mt-1 text-sm text-neutral-400">{s.why}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">AI enablement ladder</p>
              <div className="mt-4 space-y-3">
                {aiLadder.map((a, i) => (
                  <div key={a.level} className="card p-4" style={{ marginLeft: `${i * 16}px` }}>
                    <p className="font-semibold text-purple-200">{a.level}</p>
                    <p className="mt-1 text-sm text-neutral-400">{a.desc}</p>
                    <p className="mt-1 text-xs text-neutral-500">e.g. {a.example}</p>
                  </div>
                ))}
              </div>
              <p className="eyebrow mt-8">Questions I ask before adding AI</p>
              <ol className="mt-3 space-y-2 text-sm text-neutral-300">
                {aiQuestions.map((q, i) => <li key={q} className="flex gap-3"><span className="font-mono text-xs text-accent">{i + 1}</span>{q}</li>)}
              </ol>
              <p className="mt-6 rounded-lg border-l-2 border-accent bg-white/[0.03] p-4 text-sm text-neutral-300">
                The principle I carry from Smart Bricks and Law71: <span className="text-white">AI reasons, models calculate, humans decide.</span> For
                government data, every number must be auditable.
              </p>
            </div>
          </div>
        </Block>

        {/* 07 measure & plan */}
        <Block id="measure" n="07" title="How I'd measure impact, and my first 90 days" intro="A loop I've run before: define the metric, test it, read it weekly, then scale or stop.">
          <div className="grid gap-3 md:grid-cols-5">
            {measurement.map((m, i) => (
              <div key={m.step} className="card relative p-5">
                <p className="font-mono text-[11px] text-accent">STEP {i + 1}</p>
                <p className="mt-1 font-semibold">{m.step}</p>
                <p className="mt-2 text-sm text-neutral-400">{m.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {plan.map((ph) => (
              <div key={ph.phase} className="card p-6">
                <p className="font-semibold text-accent">{ph.phase}</p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-300">{ph.items.map((it) => <li key={it}>· {it}</li>)}</ul>
              </div>
            ))}
          </div>
        </Block>

        {/* 08 fit */}
        <Block id="fit" n="08" title="Nada × Whiteshield: what you need, and where I've already done it" intro="Each line of the role, matched to proof from my work. Every item has a full case study in my portfolio.">
          <div className="space-y-3">
            {fit.map((f, i) => (
              <div key={f.need} className="card grid gap-4 p-5 md:grid-cols-[1fr_1.6fr]" style={{ animationDelay: `${i * 0.05}s` }}>
                <div>
                  <p className="font-mono text-[11px] text-neutral-500">YOU NEED</p>
                  <p className="mt-1 font-semibold">{f.need}</p>
                </div>
                <div className="border-t border-white/10 pt-3 md:border-l md:border-t-0 md:pl-5 md:pt-0">
                  <p className="font-mono text-[11px] text-accent">I'VE DONE IT</p>
                  <p className="mt-1 text-neutral-300">{f.proof}</p>
                  <p className="mt-2 text-xs text-neutral-500">{f.where}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {edge.map((e) => (
              <div key={e.t} className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
                <p className="text-2xl">{e.icon}</p>
                <p className="mt-2 font-semibold">{e.t}</p>
                <p className="mt-1 text-sm text-neutral-400">{e.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-xl border-l-2 border-accent bg-white/[0.03] p-5 text-lg text-neutral-200">
            You're building AI that helps governments and citizens make better decisions. I've shipped AI for a ministry, rebuilt
            products with no playbook, and prototyped this whole proposal myself. <span className="text-white">I'd like to do that with you, for Career Navigator.</span>
          </p>
        </Block>

        {/* close */}
        <section className="border-t border-white/10 py-16 md:py-20">
          <div data-reveal className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Questions I'd love to ask you</p>
              <ul className="mt-4 space-y-3">
                {questionsForThem.map((q) => <li key={q} className="card p-4 text-neutral-200">{q}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Unclear problem, no playbook? <span className="shimmer">That&apos;s where I do my best work.</span></h2>
              <a href="/" className="mt-6 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink">See my full portfolio →</a>
              <p className="eyebrow mt-10">Sources</p>
              <ul className="mt-3 space-y-1 text-sm">
                {sources.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-accent">{s.label} ↗</a></li>)}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
