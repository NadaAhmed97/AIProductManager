"use client";

import { useCallback, useEffect, useState } from "react";

// Meeting mode for /whiteshield: one conclusion per screen, a visual, and almost no text.
// The detailed page stays underneath; "Go deeper" closes the deck and jumps to that section.

type Slide = { id: string; kicker: string; title: React.ReactNode; deeper?: string; body: React.ReactNode };

const Chain = () => {
  const steps = [
    ["National objective", "More nationals in skilled private-sector jobs"],
    ["Barrier", "Skills mismatch, and low trust in job matches"],
    ["Product lever", "Evidence-backed gap plans that end in a hire"],
    ["Measurable outcome", "Verified hires the programme can prove it caused"],
  ];
  return (
    <div className="grid gap-3 md:grid-cols-4">
      {steps.map(([k, v], i) => (
        <div key={k} className="mt-slide relative rounded-2xl border border-accent/30 bg-accent/[0.06] p-5" style={{ animationDelay: `${0.25 + i * 0.18}s` }}>
          <p className="font-mono text-[10px] uppercase tracking-wider text-accent">{String(i + 1).padStart(2, "0")} · {k}</p>
          <p className="mt-3 text-lg font-semibold leading-snug">{v}</p>
          {i < 3 && <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-accent md:block">→</span>}
        </div>
      ))}
    </div>
  );
};

const Proof = () => (
  <div className="grid items-end gap-8 md:grid-cols-[1fr_1.2fr]">
    <div className="space-y-5">
      {[["Followed a gap plan", 38, "bg-accent"], ["Similar people, no plan", 22, "bg-white/25"]].map(([l, v, c], i) => (
        <div key={l as string} className="mt-slide" style={{ animationDelay: `${0.3 + i * 0.2}s` }}>
          <p className="flex justify-between text-sm"><span className="text-neutral-300">{l}</span><b>{v}% hired</b></p>
          <div className="mt-2 h-4 overflow-hidden rounded-full bg-white/5"><div className={`mt-bar h-full rounded-full ${c}`} style={{ width: `${(v as number) * 2.2}%`, animationDelay: `${0.5 + i * 0.2}s` }} /></div>
        </div>
      ))}
      <p className="font-mono text-xs text-neutral-500">Illustrative · the uplift is what a ministry can defend in a budget review</p>
    </div>
    <ol className="space-y-3 text-lg">
      {["Verify the hire: employer or social-insurance records, not a self-report", "Compare with similar people who didn't use the plan", "Report the uplift and cost per verified hire, by course"].map((t, i) => (
        <li key={t} className="mt-slide flex gap-3" style={{ animationDelay: `${0.4 + i * 0.18}s` }}><span className="font-mono text-accent">{i + 1}</span><span>{t}</span></li>
      ))}
    </ol>
  </div>
);

const Trust = () => (
  <div className="grid gap-3 md:grid-cols-3">
    {[["AI reasons", "Reads CVs, asks the next question, drafts the policy brief", "✦"], ["Engines calculate", "Matches, gaps and every number are deterministic and auditable", "∑"], ["Humans decide", "The citizen confirms their profile; the ministry approves every brief", "✓"]].map(([t, d, icon], i) => (
      <div key={t} className="mt-slide rounded-2xl border border-white/10 bg-white/[0.03] p-6" style={{ animationDelay: `${0.25 + i * 0.18}s` }}>
        <p className="text-3xl text-accent">{icon}</p>
        <p className="mt-4 text-xl font-bold">{t}</p>
        <p className="mt-2 text-neutral-400">{d}</p>
      </div>
    ))}
    <p className="mt-slide font-mono text-xs text-neutral-500 md:col-span-3" style={{ animationDelay: ".9s" }}>Plus: Arabic first, in-country data, an audit trail on every recommendation</p>
  </div>
);

const Days = () => (
  <div className="grid gap-3 md:grid-cols-3">
    {[["Days 1–30", "Listen", "Sit in on client work with the policy team. Map stakeholders and turn my assumptions into hypotheses."], ["Days 31–60", "Prove", "Pick one measurable outcome with one client. Prototype it, test it with real users, agree the success metric."], ["Days 61–90", "Ship", "Launch the smallest version that produces evidence, with a verified-outcome loop from day one."]].map(([d, t, x], i) => (
      <div key={d} className="mt-slide rounded-2xl border border-white/10 p-6" style={{ animationDelay: `${0.25 + i * 0.18}s` }}>
        <p className="font-mono text-xs text-accent">{d}</p>
        <p className="mt-2 text-2xl font-bold">{t}</p>
        <p className="mt-2 text-neutral-400">{x}</p>
      </div>
    ))}
  </div>
);

const Fit = () => (
  <div className="grid gap-3 md:grid-cols-3">
    {[["In the client room", "Legal AI adopted by the UAE Ministry of Foreign Affairs and EDGE Group. Evidence-led with senior government stakeholders."], ["0→1 without a playbook", "Sole PM through ambiguity at Smart Bricks, XPay, MUAB and YallaGain. I create the structure."], ["I build what I propose", "You've just clicked through it. Prototypes in days, so clients react to something real."]].map(([t, d], i) => (
      <div key={t} className="mt-slide rounded-2xl border border-accent/30 bg-accent/[0.05] p-6" style={{ animationDelay: `${0.25 + i * 0.18}s` }}>
        <p className="text-xl font-bold">{t}</p>
        <p className="mt-3 text-neutral-300">{d}</p>
      </div>
    ))}
  </div>
);

const slides: Slide[] = [
  { id: "one", kicker: "The idea in one line", title: <>Career Navigator can become the <span className="shimmer">evidence engine</span> for labour policy.</>,
    body: <p className="mt-slide max-w-2xl text-xl text-neutral-400" style={{ animationDelay: ".4s" }}>From matching people to jobs → to proving verified hires a ministry can stand behind.</p> },
  { id: "chain", kicker: "Start from the policy, not the feature", title: "Every product decision traces back to a policy objective.", body: <Chain />, deeper: "metrics" },
  { id: "demo", kicker: "Two users, one journey", title: "Let me show you.", deeper: "case",
    body: (
      <div className="mt-slide grid gap-4 md:grid-cols-2" style={{ animationDelay: ".3s" }}>
        {[["The citizen", "AI onboarding → skills gap with evidence → a course → a hire", "/whiteshield/prototype/?screen=onboard"], ["The ministry", "Verified hires vs target, proof of impact, where training money works", "/whiteshield/prototype/?screen=ministry"]].map(([t, d, href]) => (
          <a key={t} href={href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-accent/40 bg-accent/[0.06] p-7 transition hover:bg-accent/15">
            <p className="text-3xl">▶</p>
            <p className="mt-4 text-2xl font-bold">{t}</p>
            <p className="mt-2 text-neutral-400">{d}</p>
            <p className="mt-4 font-mono text-xs text-accent group-hover:underline">Open the live prototype →</p>
          </a>
        ))}
      </div>
    ) },
  { id: "proof", kicker: "The question every ministry asks", title: "How do we know the programme caused the hire?", body: <Proof />, deeper: "measure" },
  { id: "trust", kicker: "AI a government can trust", title: "AI where it helps. Never in the numbers.", body: <Trust />, deeper: "scale" },
  { id: "days", kicker: "My first 90 days", title: "Listen, prove, then ship.", body: <Days />, deeper: "measure" },
  { id: "fit", kicker: "Nada × Whiteshield", title: "A PM your consultants can bring into the client room.", body: <Fit />, deeper: "fit" },
];

export default function WsMeeting() {
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("meet") === "1") setOpen(true);
    const h = () => { setI(0); setOpen(true); };
    window.addEventListener("open-meeting", h);
    return () => window.removeEventListener("open-meeting", h);
  }, []);

  const go = useCallback((d: number) => setI((x) => Math.min(slides.length - 1, Math.max(0, x + d))), []);
  const close = useCallback(() => {
    setOpen(false);
    const u = new URL(window.location.href);
    if (u.searchParams.has("meet")) { u.searchParams.delete("meet"); window.history.replaceState(null, "", u); }
  }, []);

  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft" || e.key === "PageUp") go(-1);
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open, go, close]);

  if (!open) return null;
  const s = slides[i];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-ink text-neutral-100">
      <div className="ws-grid pointer-events-none absolute inset-0" />
      <div className="relative flex items-center justify-between px-6 py-4 font-mono text-xs text-neutral-500 md:px-12">
        <span className="hidden sm:inline">NADA AHMED × WHITESHIELD</span>
        <span className="flex items-center gap-4">
          <span>{String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          <button onClick={close} className="rounded-full border border-white/15 px-3 py-1 hover:text-white">Esc · full page</button>
        </span>
      </div>

      <div key={s.id} className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col overflow-y-auto px-6 pb-8 [&>*:first-child]:mt-auto [&>*:last-child]:mb-auto md:px-12">
        <p className="mt-slide font-mono text-xs uppercase tracking-[0.25em] text-accent">{s.kicker}</p>
        <h2 className="mt-wipe mt-4 max-w-5xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">{s.title}</h2>
        <div className="mt-10">{s.body}</div>
        {s.deeper && (
          <a href={`#${s.deeper}`} onClick={close} className="mt-slide mt-10 self-start font-mono text-xs text-neutral-500 hover:text-accent" style={{ animationDelay: "1s" }}>Go deeper on the full page ↓</a>
        )}
      </div>

      <div className="relative flex items-center gap-4 px-6 py-5 md:px-12">
        <button onClick={() => go(-1)} disabled={i === 0} className="rounded-full border border-white/15 px-4 py-2 text-sm disabled:opacity-30">←</button>
        <div className="flex flex-1 gap-1.5">
          {slides.map((x, k) => (
            <button key={x.id} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} className={`h-1.5 flex-1 rounded-full transition ${k <= i ? "bg-accent" : "bg-white/10"}`} />
          ))}
        </div>
        <button onClick={() => (i === slides.length - 1 ? close() : go(1))} className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink">{i === slides.length - 1 ? "Done" : "Next →"}</button>
      </div>
    </div>
  );
}
