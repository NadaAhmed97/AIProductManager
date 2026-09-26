"use client";

import { useCallback, useEffect, useState } from "react";
import { tour } from "@/data/tour";
import { profile } from "@/data/content";
import { BlueprintMap } from "./Blueprint";
import StopMotion from "./StopMotion";
import { openCase } from "./HowIThink";

// Present mode: a full-screen, chapter-by-chapter walkthrough for interviews.
// Open with the "Present" button, the P key, or a link ending in ?tour=1.
// Arrow keys / space to move, Esc to exit.

export const openTour = () => window.dispatchEvent(new Event("open-tour"));

const rows = [
  ["problem", "The problem"],
  ["owned", "What I owned"],
  ["decided", "The call I made"],
  ["delivered", "What I delivered"],
  ["outcome", "Outcome"],
] as const;

export default function Tour() {
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);
  const [start, setStart] = useState<number | null>(null);
  const [now, setNow] = useState(0);

  const show = useCallback(() => {
    setI(0);
    setOpen(true);
    setStart(Date.now());
    setNow(Date.now());
  }, []);

  // ?tour=1 opens the walkthrough once, then the parameter is removed from the address bar
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("tour") === "1") {
      show();
      url.searchParams.delete("tour");
      window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    }
  }, [show]);

  useEffect(() => {
    window.addEventListener("open-tour", show);
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement)?.closest?.("input, textarea");
      if (typing) return;
      if (!open && (e.key === "p" || e.key === "P")) return show();
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); setI((x) => Math.min(x + 1, tour.length - 1)); }
      if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); setI((x) => Math.max(x - 1, 0)); }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("open-tour", show);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, show]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => { document.body.style.overflow = ""; clearInterval(t); };
  }, [open]);

  if (!open) return null;
  const c = tour[i];
  const answers = tour.filter((t) => t.kind === "answer");
  const qNum = answers.indexOf(c) + 1;
  const elapsed = start ? Math.floor((now - start) / 1000) : 0;

  const goCase = (id?: string) => {
    if (!id) return;
    setOpen(false);
    setTimeout(() => openCase(id), 50);
  };

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-ink" role="dialog" aria-modal="true" aria-label="Presentation">
      <div className="orb left-[-10%] top-[-20%] h-[420px] w-[420px] bg-accent/25" />
      <div className="orb bottom-[-20%] right-[-10%] h-[420px] w-[420px] bg-purple-500/25 [animation-delay:-8s]" />

      {/* top bar */}
      <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-3 md:px-8">
        <span className="text-sm font-semibold">{profile.name} <span className="hidden text-neutral-500 sm:inline">· walkthrough</span></span>
        <div className="flex items-center gap-4 font-mono text-xs text-neutral-500">
          <span title="Time since you started" className="hidden sm:inline">{String(Math.floor(elapsed / 60)).padStart(2, "0")}:{String(elapsed % 60).padStart(2, "0")}</span>
          <span>{i + 1} / {tour.length}</span>
          <button onClick={() => setOpen(false)} className="rounded-full border border-white/15 px-3 py-1 text-neutral-300 hover:border-white">Exit · Esc</button>
        </div>
      </div>
      <div className="relative h-0.5 bg-white/5">
        <div className="h-full bg-accent transition-all duration-500" style={{ width: `${((i + 1) / tour.length) * 100}%` }} />
      </div>

      {/* chapter */}
      <div key={c.id} className="relative flex-1 overflow-y-auto">
        <div className="container-x flex min-h-full flex-col justify-center py-10">
          {c.kind === "intro" && (
            <div className="grid animate-rise items-center gap-10 lg:grid-cols-[1fr_360px]">
              <div>
                <p className="eyebrow">Hi, I&apos;m {profile.name}</p>
                <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                  I take unclear problems and turn them into <span className="shimmer">AI products people trust.</span>
                </h2>
                <p className="mt-6 max-w-2xl text-lg text-neutral-400">
                  Engineer and QA by background. Sole PM at six companies. Comfortable with ambiguity, changing priorities and
                  government stakeholders, in Arabic and English.
                </p>
                <p className="mt-8 eyebrow">In the next 10 minutes</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {answers.map((a, k) => (
                    <button key={a.id} onClick={() => setI(tour.indexOf(a))}
                      className="rounded-full border border-white/15 px-3 py-1.5 text-left text-xs text-neutral-300 transition hover:border-accent">
                      <span className="mr-1 font-mono text-accent">{k + 1}</span>{a.question}
                    </button>
                  ))}
                </div>
              </div>
              <StopMotion className="mx-auto w-full max-w-[360px]" />
            </div>
          )}

          {c.kind === "answer" && c.example && (
            <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
              <div className="animate-rise">
                <p className="font-mono text-xs text-accent">QUESTION {qNum} / {answers.length}</p>
                <p className="mt-3 text-lg text-neutral-400">{c.question}</p>
                <h2 className="mt-4 text-2xl font-bold leading-snug tracking-tight md:text-3xl">{c.answer}</h2>
                {c.alsoSee && (
                  <div className="mt-8">
                    <p className="eyebrow">Also</p>
                    <ul className="mt-2 space-y-1.5 text-sm text-neutral-400">
                      {c.alsoSee.map((a) => <li key={a}>+ {a}</li>)}
                    </ul>
                  </div>
                )}
              </div>
              <div className="card p-6 md:p-8">
                <p className="font-mono text-[11px] text-neutral-500">EXAMPLE · {c.example.project.toUpperCase()}</p>
                <div className="mt-5 space-y-4">
                  {rows.map(([k, label], n) => (
                    <div key={k} className={`animate-rise grid gap-1 md:grid-cols-[130px_1fr] md:gap-4 ${k === "outcome" ? "rounded-lg border border-accent/30 bg-accent/5 p-3" : ""}`}
                      style={{ animationDelay: `${0.15 + n * 0.12}s` }}>
                      <span className={`font-mono text-[11px] uppercase ${k === "outcome" ? "text-accent" : "text-neutral-500"}`}>{label}</span>
                      <span className="text-neutral-200">{c.example![k]}</span>
                    </div>
                  ))}
                </div>
                {c.caseId && (
                  <button onClick={() => goCase(c.caseId)} className="mt-6 text-sm text-accent hover:underline">
                    Open the full case study →
                  </button>
                )}
              </div>
            </div>
          )}

          {c.kind === "blueprint" && (
            <div className="animate-rise">
              <p className="font-mono text-xs text-accent">APPLYING IT</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
                How I&apos;d structure an AI decision-support product for government.
              </h2>
              <p className="mt-3 max-w-2xl text-neutral-400">
                AI agents, econometric models, satellite and client data, and a human who decides. Here&apos;s one policy question travelling through it.
              </p>
              <div className="mt-6"><BlueprintMap autoPlay /></div>
            </div>
          )}

          {c.kind === "close" && (
            <div className="animate-rise text-center">
              <p className="eyebrow">Thank you</p>
              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
                Unclear problem, no playbook? <span className="shimmer">That&apos;s where I do my best work.</span>
              </h2>
              <p className="mt-6 text-neutral-400">{profile.email}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button onClick={() => setI(0)} className="rounded-full border border-white/20 px-5 py-2.5 text-sm hover:border-white">↺ Start again</button>
                <button onClick={() => setOpen(false)} className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink">Explore the full portfolio</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* bottom nav */}
      <div className="relative flex items-center justify-between gap-4 border-t border-white/10 px-5 py-3 md:px-8">
        <button disabled={i === 0} onClick={() => setI(i - 1)} className="text-sm text-neutral-400 hover:text-white disabled:opacity-30">← Back</button>
        <div className="hidden gap-1.5 sm:flex">
          {tour.map((t, k) => (
            <button key={t.id} onClick={() => setI(k)} aria-label={`Go to chapter ${k + 1}`}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-accent" : k < i ? "w-3 bg-accent/50" : "w-3 bg-white/15"}`} />
          ))}
        </div>
        <button disabled={i === tour.length - 1} onClick={() => setI(i + 1)} className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-ink hover:bg-accent disabled:opacity-30">
          Next →
        </button>
      </div>
    </div>
  );
}
