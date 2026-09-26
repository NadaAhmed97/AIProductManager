"use client";

import { useEffect, useState } from "react";
import { caseStudies, themes, isFilled, type CaseStudy, type Theme } from "@/data/content";
import Section from "./Section";

const steps = ["Problem", "Ownership", "Decisions", "Delivery", "Result"] as const;
type Step = (typeof steps)[number];

export default function CaseStudies() {
  const [open, setOpen] = useState<CaseStudy | null>(null);
  const [filter, setFilter] = useState<Theme | "All" | "Featured">("Featured");
  useEffect(() => {
    const onOpen = (e: Event) => {
      const cs = caseStudies.find((c) => c.id === (e as CustomEvent<string>).detail);
      if (cs) setOpen(cs);
    };
    window.addEventListener("open-case", onOpen);
    return () => window.removeEventListener("open-case", onOpen);
  }, []);
  const shown = caseStudies.filter((cs) => filter === "All" || (filter === "Featured" ? cs.featured : cs.theme === filter));

  return (
    <Section
      id="work"
      index="01"
      eyebrow="Case studies"
      title="The situations every 0→1 PM hits, and how I handled each."
      intro="Each one follows the same frame: Problem → Ownership → Decisions → Delivery → Result. Open one to step through it."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {(["Featured", ...themes, "All"] as const).map((t) => (
          <button key={t} onClick={() => setFilter(t)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              filter === t ? "border-accent bg-accent text-ink" : "border-white/15 text-neutral-400 hover:border-white/40"
            }`}>
            {t === "Featured" ? "★ Featured" : t === "All" ? "See all" : t}
            <span className="ml-1.5 font-mono text-[10px] opacity-60">
              {t === "All" ? caseStudies.length : t === "Featured" ? caseStudies.filter((c) => c.featured).length : caseStudies.filter((c) => c.theme === t).length}
            </span>
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((cs, i) => (
          <button
            key={cs.id}
            onClick={() => setOpen(cs)}
            className="card group flex animate-rise flex-col overflow-hidden p-7 text-left hover:-translate-y-1 hover:border-accent/60 hover:bg-white/[0.05]"
          >
            {cs.images && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={cs.images[0].src} alt="" loading="lazy"
                className={`-mx-7 -mt-7 mb-6 h-36 w-[calc(100%+3.5rem)] max-w-none border-b border-white/10 object-cover transition duration-700 group-hover:scale-[1.03] ${cs.images[0].phone ? "object-[50%_55%]" : "object-top"}`} />
            )}
            <div className="flex items-center justify-between">
              <span className="chip border-accent/40 text-accent">{cs.tag}</span>
              <span className="font-mono text-xs text-neutral-600">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold leading-snug">{cs.title}</h3>
            <p className="mt-2 font-mono text-xs text-neutral-500">{cs.company}</p>
            <p className="mt-4 flex-1 text-sm text-neutral-400">{cs.summary}</p>
            <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-5">
              <div>
                <div className="text-2xl font-bold">{cs.headline.value}</div>
                <div className="text-xs text-neutral-500">{cs.headline.label}</div>
              </div>
              <span className="shrink-0 whitespace-nowrap pl-3 text-sm text-neutral-400 transition group-hover:text-accent">Open →</span>
            </div>
          </button>
        ))}
      </div>
      {filter === "Featured" && (
        <button onClick={() => setFilter("All")}
          className="mt-8 rounded-full border border-white/15 px-5 py-2.5 text-sm text-neutral-300 transition hover:border-accent hover:text-white">
          See all {caseStudies.length} case studies →
        </button>
      )}
      {open && <Drawer cs={open} onClose={() => setOpen(null)} />}
    </Section>
  );
}

function Drawer({ cs, onClose }: { cs: CaseStudy; onClose: () => void }) {
  const [step, setStep] = useState<Step>("Problem");
  const idx = steps.indexOf(step);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setStep((s) => steps[Math.min(steps.indexOf(s) + 1, steps.length - 1)]);
      if (e.key === "ArrowLeft") setStep((s) => steps[Math.max(steps.indexOf(s) - 1, 0)]);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={cs.title}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-2xl animate-slide flex-col border-l border-white/10 bg-neutral-950">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 p-6 md:p-8">
          <div>
            <span className="chip border-accent/40 text-accent">{cs.tag}</span>
            <h3 className="mt-4 text-2xl font-bold leading-tight">{cs.title}</h3>
            <p className="mt-1 font-mono text-xs text-neutral-500">{cs.company}</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="rounded-full border border-white/15 px-3 py-1 text-sm hover:border-white">
            Esc
          </button>
        </div>

        <div className="flex gap-1 border-b border-white/10 px-6 md:px-8">
          {steps.map((s, i) => (
            <button
              key={s}
              onClick={() => setStep(s)}
              className={`relative py-4 pr-4 text-sm transition ${s === step ? "text-white" : "text-neutral-500 hover:text-neutral-300"}`}
            >
              <span className="mr-1 font-mono text-[10px] text-neutral-600">{i + 1}</span>
              {s}
              {s === step && <span className="absolute inset-x-0 bottom-0 mr-4 h-0.5 bg-accent" />}
            </button>
          ))}
        </div>

        <div key={step} className="flex-1 animate-rise overflow-y-auto p-6 md:p-8">
          {step === "Problem" && (
            <>
              <div className="card mb-6 p-4 text-sm text-neutral-400">
                <p className="font-mono text-[11px] text-neutral-500">CONTEXT</p>
                <p className="mt-1">{cs.context}</p>
              </div>
              <p className="text-lg leading-relaxed text-neutral-300">{cs.problem}</p>
            </>
          )}
          {step === "Ownership" && (
            <ul className="space-y-3">
              {cs.ownership.map((o) => (
                <li key={o} className="card flex gap-3 p-4">
                  <span className="text-accent">■</span>
                  <span className="text-neutral-300">{o}</span>
                </li>
              ))}
            </ul>
          )}
          {step === "Decisions" && (
            <div className="space-y-4">
              {cs.decisions.map((d, i) => (
                <div key={d.call} className="card p-5">
                  <p className="font-mono text-[11px] text-neutral-500">DECISION 0{i + 1}</p>
                  <p className="mt-1 font-semibold">{d.call}</p>
                  <p className="mt-3 text-sm text-neutral-400"><span className="text-neutral-200">Why · </span>{d.why}</p>
                  <p className="mt-2 text-sm text-neutral-400"><span className="text-neutral-200">Trade-off · </span>{d.tradeoff}</p>
                </div>
              ))}
            </div>
          )}
          {step === "Delivery" && cs.images && (
            <div className={`mb-8 grid gap-4 ${cs.images.every((im) => im.phone) ? "grid-cols-2" : ""}`}>
              {cs.images.map((im) => (
                <figure key={im.src} className="overflow-hidden rounded-xl border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={im.src} alt={im.caption} loading="lazy" className="w-full" />
                  <figcaption className="border-t border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-neutral-400">{im.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
          {step === "Delivery" && (
            <ol className="relative space-y-6 border-l border-white/10 pl-6">
              {cs.delivery.map((d) => (
                <li key={d} className="relative text-neutral-300">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                  {d}
                </li>
              ))}
            </ol>
          )}
          {step === "Result" && (
            <>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {cs.results.filter((r) => isFilled(r.value)).map((r) => (
                  <div key={r.label} className="card p-4">
                    <div className="text-2xl font-bold text-accent">{r.value}</div>
                    <div className="mt-1 text-xs text-neutral-500">{r.label}</div>
                  </div>
                ))}
              </div>
              <blockquote className="mt-8 border-l-2 border-accent pl-5 text-lg italic text-neutral-300">{cs.learned}</blockquote>
            </>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-white/10 p-4 md:px-8">
          <button disabled={idx === 0} onClick={() => setStep(steps[idx - 1])}
            className="text-sm text-neutral-400 hover:text-white disabled:opacity-30">← Prev</button>
          <div className="flex gap-1.5">
            {steps.map((s, i) => (
              <span key={s} className={`h-1 w-6 rounded-full transition ${i <= idx ? "bg-accent" : "bg-white/10"}`} />
            ))}
          </div>
          <button disabled={idx === steps.length - 1} onClick={() => setStep(steps[idx + 1])}
            className="text-sm text-neutral-400 hover:text-white disabled:opacity-30">Next →</button>
        </div>
      </aside>
    </div>
  );
}
