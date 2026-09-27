"use client";

import { useEffect, useState } from "react";

// Concept prototype: a recreation of Whiteshield's Career Navigator, with proposed upgrades.
// Built by Nada Ahmed for an interview. Not affiliated with or endorsed by Whiteshield.
// All data, names and numbers shown are illustrative. "AI" responses are scripted so the demo can't fail live.

const C = { navy: "#0B3B5C", side: "#0A3350", sideActive: "#1D4E6E", bg: "#EBEDF0", ink: "#1F4E6B", muted: "#6B7A86" };

type ScreenId = "test" | "cv" | "market" | "explore" | "provider";
type Note = { n: number; title: string; value: string; metric: string; ier: string; ai?: string };

const screens: { id: ScreenId; label: string; nav: string; kind: "upgrade" | "new"; notes: Note[]; today?: string[] }[] = [
  {
    id: "cv", label: "CV → Skills → Gap", nav: "CV Analysis", kind: "upgrade",
    today: [
      "Paste-text box and an empty 'Your Skills' panel: no preview of the value before the user does the work",
      "Personal data (phone, email, attestations) is pasted along with the CV, though extraction doesn't need it",
      "'Gap Analysis' stays disabled; during my walkthrough, Extract Skills → Gap Analysis failed to load",
      "Not connected to the Career Test: two separate profiles instead of one",
    ],
    notes: [
      { n: 1, title: "Drop a CV, or answer 5 questions by voice", value: "Citizen: a profile in one minute, even with no CV. Government: skills data on everyone who signs up, not just finishers.", metric: "Profile completion within 24h", ier: "Impact 5 · Effort 2 · Risk 2", ai: "Assist: an LLM extracts skills and maps them to the taxonomy; the user confirms each one." },
      { n: 2, title: "Personal data removed before analysis", value: "Trust and compliance for a sovereign, government-facing product.", metric: "0 PII fields stored with skills data", ier: "Impact 4 · Effort 1 · Risk 1", ai: "Deterministic PII scrubbing runs before any model sees the text." },
      { n: 3, title: "Skills grouped, with confidence and evidence", value: "Users see why each skill was found, and can fix mistakes, so matches improve.", metric: "% of extracted skills confirmed vs removed", ier: "Impact 4 · Effort 2 · Risk 2", ai: "Each skill links to the CV sentence it came from." },
      { n: 4, title: "Top roles in your country, with the gap", value: "Goes straight from 'who I am' to 'what I can get, and what's missing'.", metric: "Match → gap plan click-through", ier: "Impact 5 · Effort 3 · Risk 2", ai: "Recommend: matching scores are deterministic; AI only explains them." },
    ],
  },
  {
    id: "market", label: "Gap → Marketplace", nav: "My Gap Plan", kind: "new",
    notes: [
      { n: 1, title: "Why this job, in plain language", value: "Explainable matches build trust and make users act.", metric: "Apply / save rate per match", ier: "Impact 5 · Effort 3 · Risk 2", ai: "Explanation generated only from the match's structured fields." },
      { n: 2, title: "Each missing skill → vetted providers", value: "Connects Career Navigator (demand) with EduHub Navigator (supply): universities, training centres and independent educators.", metric: "Enrolments from gap plans; gap-closure rate", ier: "Impact 5 · Effort 4 · Risk 3", ai: "Recommend: ranks courses by outcomes, fit, language and price." },
      { n: 3, title: "Ranked by outcomes, not by who pays", value: "Past learners' hire rate is the quality signal, the same approach I used for MUAB's AI quality scoring.", metric: "Hire rate after course completion", ier: "Impact 4 · Effort 3 · Risk 3", ai: "AI flags low-quality or misleading providers for human review." },
      { n: 4, title: "Subsidy applied automatically", value: "Government programmes become one click, and their impact becomes measurable.", metric: "Subsidised enrolments → verified hires", ier: "Impact 4 · Effort 4 · Risk 3" },
    ],
  },
  {
    id: "explore", label: "Explore, personalised", nav: "Explore", kind: "upgrade",
    today: [
      "The same generic top-10 lists for everyone, even after the user has a skills profile",
      "Most recent year shown is 2023, while the homepage promises monthly updates",
      "'Top employers' ranked by job-post volume, including recruiters and aggregators",
      "Raw taxonomy titles ('Sales Workers Not Elsewhere Classified'), English only",
    ],
    notes: [
      { n: 1, title: "For you, in your country, now", value: "Turns market data into personal guidance: roles growing that fit the user's skills.", metric: "Explore → match view conversion", ier: "Impact 4 · Effort 2 · Risk 1", ai: "Recommend: ranks growing roles by the user's skills overlap." },
      { n: 2, title: "Fresh data, visibly dated", value: "'Updated Sep 2026' earns trust, which matters for a government product.", metric: "Data freshness SLA met", ier: "Impact 3 · Effort 2 · Risk 1" },
      { n: 3, title: "Plain titles, in Arabic and English", value: "People understand the role instantly.", metric: "Role card engagement by language", ier: "Impact 3 · Effort 1 · Risk 1", ai: "Assist: AI proposes plain titles; a taxonomy owner approves them." },
      { n: 4, title: "Employers you can act on", value: "Direct employers with open roles you qualify for, not posting volume.", metric: "Clicks to apply", ier: "Impact 4 · Effort 3 · Risk 2" },
    ],
  },
  {
    id: "provider", label: "Provider & university view", nav: "Demand Signals", kind: "new",
    notes: [
      { n: 1, title: "Live demand by skill and city", value: "Providers and universities build what the market needs, from real, anonymised gaps.", metric: "Courses launched from demand signals", ier: "Impact 4 · Effort 3 · Risk 2", ai: "Deterministic aggregation; no individual is ever identifiable." },
      { n: 2, title: "Your coverage vs the gap", value: "Shows each institution where its programme misses demand, extending EduHub's course scores.", metric: "Programme changes made", ier: "Impact 4 · Effort 3 · Risk 2" },
      { n: 3, title: "AI suggestion, with the evidence", value: "A concrete next action instead of a report.", metric: "Suggestions accepted", ier: "Impact 3 · Effort 2 · Risk 2", ai: "Recommend: AI drafts the suggestion; numbers come from the model." },
    ],
  },
  {
    id: "test", label: "Career Test landing", nav: "Career Test", kind: "upgrade",
    today: [
      "The most prominent block is an O*NET licence disclaimer",
      "No time estimate and no preview of what you get at the end",
      "No alternative for people who already know their direction",
    ],
    notes: [
      { n: 1, title: "Time and outcome up front", value: "People start what they know they can finish.", metric: "Test start and completion rate", ier: "Impact 4 · Effort 1 · Risk 1" },
      { n: 2, title: "A faster path: skip with your CV", value: "Experienced users go straight to matches.", metric: "Time to first match", ier: "Impact 4 · Effort 2 · Risk 1" },
      { n: 3, title: "Disclaimer kept, but in its place", value: "Legal compliance without blocking the start.", metric: "—", ier: "Impact 2 · Effort 1 · Risk 1" },
    ],
  },
];

const Hot = ({ n, on, onClick }: { n: number; on: boolean; onClick: (n: number) => void }) => (
  <button onClick={() => onClick(n)} aria-label={`Change ${n}`}
    className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold shadow transition ${on ? "scale-110 bg-[#C6FF3D] text-black ring-4 ring-[#C6FF3D]/30" : "bg-[#F59E0B] text-white hover:scale-110"}`}>
    {n}
  </button>
);

export default function CareerNavProto() {
  const [screen, setScreen] = useState<ScreenId>("cv");
  const [mode, setMode] = useState<"today" | "proposed">("proposed");
  const [active, setActive] = useState<number | null>(null);
  const s = screens.find((x) => x.id === screen)!;
  const proposed = s.kind === "new" || mode === "proposed";

  useEffect(() => setActive(null), [screen, mode]);
  const hot = (n: number) => <Hot n={n} on={active === n} onClick={(k) => setActive(active === k ? null : k)} />;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />

      {/* presenter bar */}
      <div className="sticky top-0 z-30 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-3 px-4 py-3">
          <a href="/whiteshield/" className="text-sm font-semibold">← Case study</a>
          <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] text-amber-200">CONCEPT PROTOTYPE BY NADA AHMED · NOT AFFILIATED WITH WHITESHIELD</span>
          <div className="ml-auto flex flex-wrap gap-1.5">
            {screens.map((x, i) => (
              <button key={x.id} onClick={() => setScreen(x.id)}
                className={`rounded-full px-3 py-1.5 text-xs transition ${screen === x.id ? "bg-[#C6FF3D] font-semibold text-black" : "border border-white/15 text-neutral-300 hover:border-white/40"}`}>
                {i + 1}. {x.label}{x.kind === "new" && <span className="ml-1 rounded bg-sky-500/20 px-1 text-[9px] text-sky-300">NEW</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-5 px-4 py-5 xl:grid-cols-[1fr_340px]">
        <div>
          {s.kind === "upgrade" ? (
            <div className="mb-3 inline-flex rounded-full border border-white/15 p-1 text-sm">
              {(["today", "proposed"] as const).map((m) => (
                <button key={m} onClick={() => setMode(m)} className={`rounded-full px-4 py-1.5 transition ${mode === m ? "bg-white font-semibold text-black" : "text-neutral-400"}`}>
                  {m === "today" ? "Today" : "Proposed ✦"}
                </button>
              ))}
            </div>
          ) : (
            <p className="mb-3 text-sm text-sky-300">✦ New screen proposed</p>
          )}

          {/* the app */}
          <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl" style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>
            <div className="flex h-12 items-center justify-between px-5" style={{ background: C.navy }}>
              <span className="flex items-center gap-2 text-white">
                <span className="font-serif text-xl italic leading-none">W<span className="text-sm">S</span></span>
                <span className="text-sm font-semibold tracking-[0.12em]">CAREER NAVIGATOR</span>
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                {proposed && <span className="rounded bg-white/20 px-1.5 text-[10px]">EN | ع</span>}● Nada ▾
              </span>
            </div>
            <div className="flex min-h-[640px]">
              <aside className="hidden w-48 shrink-0 space-y-1 p-3 md:block" style={{ background: C.side }}>
                {["Career Test", "CV Analysis", ...(proposed ? ["My Gap Plan"] : []), "My Program", "Explore", ...(screen === "provider" ? ["Demand Signals"] : [])].map((n) => (
                  <div key={n} className="rounded-lg px-3 py-2.5 text-sm" style={{ background: n === s.nav ? C.sideActive : "transparent", color: n === s.nav ? "#fff" : "#B8C7D3", fontWeight: n === s.nav ? 600 : 400 }}>{n}</div>
                ))}
              </aside>
              <main className="min-w-0 flex-1 p-5 text-[#26323B] md:p-7" style={{ background: C.bg }}>
                <div key={screen + mode} className="animate-rise">
                  {screen === "cv" && <CvScreen proposed={proposed} hot={hot} go={() => setScreen("market")} />}
                  {screen === "market" && <MarketScreen hot={hot} />}
                  {screen === "explore" && <ExploreScreen proposed={proposed} hot={hot} />}
                  {screen === "provider" && <ProviderScreen hot={hot} />}
                  {screen === "test" && <TestScreen proposed={proposed} hot={hot} />}
                </div>
              </main>
            </div>
          </div>
        </div>

        {/* notes */}
        <aside className="space-y-3 xl:sticky xl:top-20 xl:h-fit">
          {!proposed && s.today ? (
            <div className="rounded-xl border border-red-400/30 bg-red-500/5 p-4">
              <p className="font-mono text-[11px] text-red-300">WHAT I NOTICED · TODAY</p>
              <ul className="mt-2 space-y-2 text-sm text-neutral-300">{s.today.map((t) => <li key={t}>· {t}</li>)}</ul>
              <button onClick={() => setMode("proposed")} className="mt-4 rounded-full bg-[#C6FF3D] px-4 py-1.5 text-sm font-semibold text-black">See the proposal →</button>
            </div>
          ) : (
            <>
              <p className="font-mono text-[11px] text-neutral-500">TAP A NUMBER ON THE SCREEN</p>
              {s.notes.map((n) => (
                <button key={n.n} onClick={() => setActive(active === n.n ? null : n.n)}
                  className={`block w-full rounded-xl border p-4 text-left transition ${active === n.n ? "border-[#C6FF3D] bg-[#C6FF3D]/10" : "border-white/10 bg-white/[0.03] hover:border-white/30"}`}>
                  <p className="flex items-center gap-2 font-semibold"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F59E0B] text-[10px] text-white">{n.n}</span>{n.title}</p>
                  {active === n.n && (
                    <div className="mt-3 space-y-2 text-sm">
                      <p className="text-neutral-300"><span className="text-neutral-500">Value · </span>{n.value}</p>
                      <p><span className="text-neutral-500">Metric · </span><span className="text-[#C6FF3D]">{n.metric}</span></p>
                      <p className="font-mono text-xs text-neutral-400">{n.ier}</p>
                      {n.ai && <p className="rounded-lg bg-purple-500/10 p-2 text-purple-200"><span className="font-mono text-[10px]">AI · </span>{n.ai}</p>}
                    </div>
                  )}
                </button>
              ))}
            </>
          )}
        </aside>
      </div>
    </div>
  );
}

type HotFn = (n: number) => React.ReactNode;
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => <div className={`rounded-xl bg-white p-5 shadow-sm ${className}`}>{children}</div>;
const H = ({ children }: { children: React.ReactNode }) => <h2 className="text-2xl font-bold" style={{ color: C.ink }}>{children}</h2>;
const Btn = ({ children, onClick, ghost }: { children: React.ReactNode; onClick?: () => void; ghost?: boolean }) => (
  <button onClick={onClick} className={`rounded-full px-5 py-2 text-sm font-semibold transition ${ghost ? "border-2 text-[#1F4E6B]" : "text-white hover:brightness-110"}`} style={ghost ? { borderColor: C.ink } : { background: C.ink }}>{children}</button>
);

/* ---------------- CV → skills → gap ---------------- */
const extracted = [
  { group: "Product", items: [["Product strategy", 96], ["Roadmapping", 94], ["PRDs", 92], ["A/B testing", 88]] },
  { group: "AI & data", items: [["LLM products", 93], ["Agentic AI", 86], ["Prompt engineering", 90], ["SQL", 78], ["PostHog / Mixpanel", 91]] },
  { group: "Delivery", items: [["Agile / Scrum", 95], ["Stakeholder management", 93], ["QA & test automation", 89]] },
  { group: "Languages", items: [["Arabic (native)", 99], ["English (fluent)", 97]] },
] as const;
const roles = [
  { t: "AI Product Manager", m: 92, gap: ["Python for data", "Cloud (GCP)"] },
  { t: "Growth Product Manager", m: 88, gap: ["Paid acquisition"] },
  { t: "Data Product Manager", m: 81, gap: ["dbt / data modelling", "Python for data"] },
];

function CvScreen({ proposed, hot, go }: { proposed: boolean; hot: HotFn; go: () => void }) {
  const [phase, setPhase] = useState<"idle" | "reading" | "done">("idle");
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (phase !== "reading") return;
    const total = extracted.reduce((a, g) => a + g.items.length, 0);
    const t = setInterval(() => setShown((x) => { if (x >= total) { clearInterval(t); setPhase("done"); return x; } return x + 1; }), 110);
    return () => clearInterval(t);
  }, [phase]);

  if (!proposed) {
    return (
      <div>
        <div className="mb-5 flex items-center gap-3 text-sm font-semibold" style={{ color: C.ink }}>
          <span className="h-4 w-4 rounded-full border-2 border-[#1F4E6B]" /> Extract CV <span className="h-1 flex-1 rounded bg-[#B7C6CF]" /> Gap Analysis
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card><p className="text-lg font-bold" style={{ color: C.ink }}>Skills Extractor</p><p className="mt-2 text-sm" style={{ color: C.muted }}>Utilize our skills extraction tool to analyze your CV and receive recommendations for positions that best match your qualifications.</p>
            <div className="mt-4 h-72 rounded-lg bg-[#F5F6F8] p-4 text-sm text-neutral-400">Paste your CV here...</div>
            <div className="mt-4 flex justify-between"><span className="rounded-full bg-[#5E6B75] px-4 py-2 text-sm text-white">▤ Upload CV</span><span className="flex gap-2"><span className="rounded-full border px-4 py-2 text-sm text-neutral-400">Reset</span><span className="rounded-full bg-[#B7C6CF] px-4 py-2 text-sm text-white">Extract Skills ›</span></span></div>
          </Card>
          <Card><p className="text-lg font-bold" style={{ color: C.ink }}>Your Skills</p><div className="mt-4 flex h-80 flex-col items-center justify-center rounded-lg bg-[#F5F6F8] text-neutral-500"><span className="text-3xl">⚙</span>Extracted Skills</div></Card>
        </div>
      </div>
    );
  }

  let k = 0;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3"><H>Your skills profile</H><span className="text-xs" style={{ color: C.muted }}>Linked to your Career Test results ✓</span></div>
      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1.3fr]">
        <Card>
          <div className="flex items-center gap-2">{hot(1)}<p className="font-semibold" style={{ color: C.ink }}>Add your experience</p></div>
          <button onClick={() => { setShown(0); setPhase("reading"); }}
            className="mt-4 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#9FB3C1] bg-[#F7F9FB] p-6 text-center transition hover:bg-white">
            <span className="text-3xl">⬆</span>
            <span className="mt-2 font-semibold" style={{ color: C.ink }}>{phase === "idle" ? "Drop your CV (PDF, Word) or tap to use a sample" : phase === "reading" ? "Reading your CV…" : "Nada_Ahmed_CV.pdf ✓"}</span>
            <span className="mt-1 text-xs" style={{ color: C.muted }}>Arabic or English · about 30 seconds</span>
          </button>
          <button className="mt-3 w-full rounded-xl border border-[#D5DEE5] bg-white p-3 text-sm" style={{ color: C.ink }}>🎙 No CV? Answer 5 quick questions by voice</button>
          {phase !== "idle" && (
            <div className="mt-4 flex items-start gap-2 rounded-lg bg-emerald-50 p-3 text-xs text-emerald-800">
              {hot(2)}<span><b>Personal data removed before analysis:</b> phone numbers, email, address and ID details are never stored with your skills.</span>
            </div>
          )}
        </Card>
        <Card>
          <div className="flex items-center gap-2">{hot(3)}<p className="font-semibold" style={{ color: C.ink }}>Skills we found {phase !== "idle" && <span className="text-xs font-normal" style={{ color: C.muted }}>· tap any skill to see where it came from or remove it</span>}</p></div>
          {phase === "idle" ? (
            <div className="mt-4 space-y-2">
              <p className="text-sm" style={{ color: C.muted }}>You'll see your skills here, grouped and scored, then the roles you can get in your country.</p>
              {[1, 2, 3].map((i) => <div key={i} className="h-8 animate-pulse rounded-lg bg-[#EEF1F4]" />)}
            </div>
          ) : (
            <div className="mt-3 space-y-3">
              {extracted.map((g) => (
                <div key={g.group}>
                  <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: C.muted }}>{g.group}</p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {g.items.map(([name, conf]) => { k++; return k <= shown ? (
                      <span key={name} className="animate-rise rounded-full border border-[#C9D6DF] bg-[#F3F7FA] px-2.5 py-1 text-xs" style={{ color: C.ink }}>
                        {name} <span className={conf >= 90 ? "text-emerald-600" : "text-amber-600"}>{conf}%</span>
                      </span>) : null; })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
      {phase === "done" && (
        <Card className="mt-4 animate-rise">
          <div className="flex items-center gap-2">{hot(4)}<p className="font-semibold" style={{ color: C.ink }}>Your top roles in the United Arab Emirates</p></div>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {roles.map((r) => (
              <div key={r.t} className="rounded-xl border border-[#DCE4EA] p-4">
                <p className="font-semibold" style={{ color: C.ink }}>{r.t}</p>
                <div className="mt-2 h-1.5 rounded-full bg-[#EEF1F4]"><div className="h-full rounded-full bg-emerald-500" style={{ width: `${r.m}%` }} /></div>
                <p className="mt-1 text-xs" style={{ color: C.muted }}>{r.m}% skills match · missing {r.gap.length}</p>
                <div className="mt-2 flex flex-wrap gap-1">{r.gap.map((g) => <span key={g} className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] text-amber-800">+ {g}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-end"><Btn onClick={go}>Build my gap-to-hire plan →</Btn></div>
        </Card>
      )}
    </div>
  );
}

/* ---------------- Gap → marketplace ---------------- */
const providers = {
  "Python for data": [
    { who: "A UAE university", type: "University (via EduHub)", fmt: "Short course · 6 weeks · EN", price: "AED 1,800", sub: true, hired: 71, q: 4.7 },
    { who: "A Dubai training centre", type: "Training centre", fmt: "Bootcamp · 4 weeks · AR/EN", price: "AED 2,400", sub: true, hired: 64, q: 4.5 },
    { who: "An independent data coach", type: "Independent educator", fmt: "Self-paced · 12 hrs · AR", price: "AED 350", sub: false, hired: 58, q: 4.8 },
  ],
  "Cloud (GCP)": [
    { who: "A cloud provider academy", type: "Online (partner)", fmt: "Learning path · 20 hrs · EN", price: "Free", sub: false, hired: 62, q: 4.6 },
    { who: "A UAE university", type: "University (via EduHub)", fmt: "Evening course · 8 weeks · AR/EN", price: "AED 2,100", sub: true, hired: 69, q: 4.4 },
  ],
};

function MarketScreen({ hot }: { hot: HotFn }) {
  const [skill, setSkill] = useState<keyof typeof providers>("Python for data");
  const [enrolled, setEnrolled] = useState<string | null>(null);
  return (
    <div>
      <p className="text-xs" style={{ color: C.muted }}>Target role</p>
      <div className="flex flex-wrap items-center justify-between gap-3"><H>AI Product Manager · UAE</H><span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">92% ready</span></div>
      <Card className="mt-4">
        <div className="flex items-start gap-2">{hot(1)}<div>
          <p className="font-semibold" style={{ color: C.ink }}>Why this job fits you</p>
          <p className="mt-1 text-sm" style={{ color: C.muted }}>You match 11 of the 13 skills UAE employers ask for most in this role, including LLM products, A/B testing and stakeholder management. Closing <b>2 gaps</b> would put you in the top 15% of applicants. Demand for this role grew <b>34%</b> in the last 12 months.</p>
        </div></div>
      </Card>
      <div className="mt-4 grid gap-4 lg:grid-cols-[260px_1fr]">
        <Card>
          <p className="text-sm font-semibold" style={{ color: C.ink }}>Your gaps</p>
          {(Object.keys(providers) as (keyof typeof providers)[]).map((g) => (
            <button key={g} onClick={() => setSkill(g)} className={`mt-2 block w-full rounded-lg border p-3 text-left text-sm transition ${skill === g ? "border-[#1F4E6B] bg-[#F3F7FA]" : "border-[#E2E8ED]"}`}>
              <span className="font-semibold" style={{ color: C.ink }}>{g}</span>
              <span className="block text-xs" style={{ color: C.muted }}>Asked for in {g === "Python for data" ? "61%" : "44%"} of these roles</span>
            </button>
          ))}
          <p className="mt-4 text-xs" style={{ color: C.muted }}>Estimated time to job-ready: <b>6–8 weeks</b></p>
        </Card>
        <div>
          <div className="mb-2 flex items-center gap-2">{hot(2)}<p className="text-sm font-semibold" style={{ color: C.ink }}>Close “{skill}” with a vetted provider</p>{hot(3)}<span className="text-xs" style={{ color: C.muted }}>ranked by learner outcomes</span></div>
          <div className="space-y-3">
            {providers[skill].map((p) => (
              <Card key={p.who} className="animate-rise">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold" style={{ color: C.ink }}>{p.who}</p>
                    <p className="text-xs" style={{ color: C.muted }}>{p.type} · {p.fmt}</p>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-800">{p.hired}% of learners hired within 6 months</span>
                      <span className="rounded-full bg-[#F3F7FA] px-2 py-0.5" style={{ color: C.ink }}>★ {p.q} quality</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold" style={{ color: C.ink }}>{p.price}</p>
                    {p.sub && <p className="flex items-center justify-end gap-1 text-xs text-emerald-700">{hot(4)} 50% government subsidy applied</p>}
                    <button onClick={() => setEnrolled(p.who)} className="mt-2 rounded-full px-4 py-1.5 text-sm font-semibold text-white" style={{ background: enrolled === p.who ? "#059669" : C.ink }}>
                      {enrolled === p.who ? "✓ Added to plan" : "Add to my plan"}
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Explore ---------------- */
function ExploreScreen({ proposed, hot }: { proposed: boolean; hot: HotFn }) {
  if (!proposed) {
    return (
      <div>
        <div className="flex gap-6 text-lg font-semibold"><span className="border-b-2 border-[#1F4E6B] pb-1" style={{ color: C.ink }}>Trends</span><span className="text-neutral-400">Occupations</span><span className="text-neutral-400">Education</span></div>
        <Card className="mt-4"><div className="grid gap-4 md:grid-cols-3 text-sm"><div><b style={{ color: C.ink }}>Industry</b><p className="border-b py-1 text-neutral-400">Sector ▾</p></div><div><b style={{ color: C.ink }}>Occupation</b><p className="border-b py-1 text-neutral-400">Occupation ▾</p></div><div><b style={{ color: C.ink }}>Country</b><p className="border-b py-1">United Arab Emirates ▾</p></div></div><div className="mt-3 flex justify-end"><Btn>Apply Filters</Btn></div></Card>
        <Card className="mt-4 max-w-xl"><p className="text-lg font-semibold" style={{ color: C.ink }}>Top Employers in United Arab Emirates</p>
          <table className="mt-3 w-full text-sm"><thead><tr className="text-left text-white" style={{ background: C.ink }}><th className="p-2">#</th><th className="p-2">Employer</th><th className="p-2">No. Of Job Posts</th></tr></thead>
            <tbody>{[["Marriott International, Inc", "4,228"], ["Hilton", "3,549"], ["CareerMatch", "3,316"], ["Qureos", "2,371"], ["IHG Hotels & Resorts", "2,137"]].map(([e, n], i) => <tr key={e} className="border-b"><td className="p-2">{i + 1}</td><td className="p-2">{e}</td><td className="p-2">{n}</td></tr>)}</tbody></table>
        </Card>
        <Card className="mt-4"><p className="font-semibold" style={{ color: C.ink }}>Top Occupations (in demand last 3 years) · 2023</p><p className="mt-2 text-sm" style={{ color: C.muted }}>1 Software Developers · 2 Sales Workers Not Elsewhere Classified · 3 Advertising And Marketing Professionals …</p></Card>
      </div>
    );
  }
  const growing = [
    { t: "AI Product Manager", ar: "مدير منتجات الذكاء الاصطناعي", g: 34, m: 92, open: 48, pts: [8, 10, 12, 15, 19, 24] },
    { t: "Data Product Manager", ar: "مدير منتجات البيانات", g: 21, m: 81, open: 31, pts: [10, 11, 13, 14, 16, 18] },
    { t: "Growth Product Manager", ar: "مدير منتجات النمو", g: 17, m: 88, open: 26, pts: [12, 12, 14, 15, 16, 19] },
  ];
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3"><div className="flex items-center gap-2">{hot(1)}<H>For you in the UAE</H></div>
        <span className="flex items-center gap-2 text-xs" style={{ color: C.muted }}>{hot(2)} Updated Sep 2026 · 184,000 job posts this quarter</span></div>
      <p className="mt-1 text-sm" style={{ color: C.muted }}>Growing roles that match your skills profile</p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {growing.map((r, i) => (
          <Card key={r.t}>
            <div className="flex items-start justify-between gap-2"><div><p className="font-semibold" style={{ color: C.ink }}>{r.t}</p><p className="text-sm" dir="rtl" style={{ color: C.muted }}>{r.ar}</p></div>{i === 0 && hot(3)}</div>
            <svg viewBox="0 0 120 36" className="mt-3 h-10 w-full"><polyline fill="none" stroke="#059669" strokeWidth="2.5" points={r.pts.map((p, j) => `${j * 24},${36 - p}`).join(" ")} /></svg>
            <p className="text-sm"><b className="text-emerald-700">▲ {r.g}%</b> <span style={{ color: C.muted }}>demand in 12 months</span></p>
            <p className="mt-1 text-sm" style={{ color: C.muted }}>{r.m}% match · <b style={{ color: C.ink }}>{r.open} open roles</b> you qualify for</p>
          </Card>
        ))}
      </div>
      <Card className="mt-4">
        <div className="flex items-center gap-2">{hot(4)}<p className="font-semibold" style={{ color: C.ink }}>Employers hiring for your top role now</p></div>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          {[["A sovereign AI lab, Abu Dhabi", "6 open · verified employer"], ["A national bank, Dubai", "4 open · verified employer"], ["A government digital agency", "3 open · Emiratisation eligible"], ["A proptech scale-up, Dubai", "2 open · verified employer"]].map(([e, d]) => (
            <div key={e} className="flex items-center justify-between rounded-lg border border-[#E2E8ED] p-3 text-sm"><span><b style={{ color: C.ink }}>{e}</b><span className="block text-xs" style={{ color: C.muted }}>{d}</span></span><span className="text-xs font-semibold" style={{ color: C.ink }}>View roles →</span></div>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ---------------- Provider / university ---------------- */
function ProviderScreen({ hot }: { hot: HotFn }) {
  const rows = [
    { s: "Python for data", l: 3240, j: "61%", cov: 20 },
    { s: "Power BI", l: 2810, j: "48%", cov: 0 },
    { s: "Cloud (GCP / Azure)", l: 2150, j: "44%", cov: 55 },
    { s: "Arabic business writing", l: 1630, j: "37%", cov: 90 },
    { s: "Prompt engineering", l: 1420, j: "29%", cov: 10 },
  ];
  const cities = [["Dubai", 92], ["Abu Dhabi", 78], ["Riyadh", 85], ["Sharjah", 44], ["Jeddah", 61], ["Doha", 38]] as const;
  return (
    <div>
      <p className="text-xs" style={{ color: C.muted }}>Signed in as: Career Services, a partner university</p>
      <H>Demand signals</H>
      <p className="mt-1 text-sm" style={{ color: C.muted }}>Anonymised skills gaps from Career Navigator users, matched to your programmes. No individual is identifiable.</p>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Card>
          <div className="flex items-center gap-2">{hot(1)}{hot(2)}<p className="font-semibold" style={{ color: C.ink }}>Top unmet skills vs your coverage</p></div>
          <table className="mt-3 w-full text-sm">
            <thead><tr className="text-left text-xs" style={{ color: C.muted }}><th className="py-2">Skill</th><th>Learners missing it</th><th>Jobs asking</th><th>Your coverage</th></tr></thead>
            <tbody>{rows.map((r) => (
              <tr key={r.s} className="border-t border-[#EEF1F4]"><td className="py-2.5 font-medium" style={{ color: C.ink }}>{r.s}</td><td>{r.l.toLocaleString()}</td><td>{r.j}</td>
                <td><div className="flex items-center gap-2"><div className="h-1.5 w-20 rounded-full bg-[#EEF1F4]"><div className="h-full rounded-full" style={{ width: `${r.cov}%`, background: r.cov < 30 ? "#DC2626" : r.cov < 70 ? "#F59E0B" : "#059669" }} /></div><span className="text-xs">{r.cov}%</span></div></td></tr>
            ))}</tbody>
          </table>
        </Card>
        <Card>
          <p className="font-semibold" style={{ color: C.ink }}>Gap intensity by city</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {cities.map(([c, v]) => (
              <div key={c} className="rounded-lg p-3 text-white" style={{ background: `rgba(11,59,92,${0.3 + v / 140})` }}><p className="text-sm font-semibold">{c}</p><p className="text-xs opacity-80">{v} / 100</p></div>
            ))}
          </div>
        </Card>
      </div>
      <Card className="mt-4 border-l-4 border-[#F59E0B]">
        <div className="flex items-start gap-2">{hot(3)}<div>
          <p className="font-semibold" style={{ color: C.ink }}>Suggested action</p>
          <p className="mt-1 text-sm" style={{ color: C.muted }}>Launch a 6-week <b>Power BI</b> short course in Dubai and Riyadh. 2,810 learners are missing it, 48% of target jobs ask for it, and none of your programmes cover it. Comparable courses on the platform have a 66% hire rate.</p>
          <div className="mt-3 flex gap-2"><Btn>Create course draft</Btn><Btn ghost>See the evidence</Btn></div>
        </div></div>
      </Card>
    </div>
  );
}

/* ---------------- Career test landing ---------------- */
function TestScreen({ proposed, hot }: { proposed: boolean; hot: HotFn }) {
  if (!proposed) {
    return (
      <div className="max-w-3xl">
        <H>Discover Your Ideal Career</H>
        <p className="mt-4 text-sm" style={{ color: C.muted }}>The Career Test tool will help you discover the type of work activities and occupations that you would like and find exciting.</p>
        <p className="mt-3 text-sm" style={{ color: C.muted }}>You will identify the broad interest areas that resonate with you most and use your results to explore the diverse world of occupations.</p>
        <div className="mt-6"><Btn>Begin Career Test</Btn></div>
        <Card className="mt-6 max-w-md text-sm" ><b>Disclaimer:</b><p className="mt-1" style={{ color: C.muted }}>This page includes information from the O*NET Career Exploration Tools by the U.S. Department of Labor, Employment and Training Administration (USDOL/ETA). Used under the O*NET Tools Developer License. O*NET® is a trademark of USDOL/ETA. Whiteshield Career Navigator has modified all or some of this information. USDOL/ETA has not approved, endorsed, or tested these modifications.</p></Card>
      </div>
    );
  }
  return (
    <div className="max-w-4xl">
      <H>Discover your ideal career</H>
      <div className="mt-3 flex items-center gap-2 text-sm" style={{ color: C.muted }}>{hot(1)} <b style={{ color: C.ink }}>About 8 minutes</b> · 30 quick questions · save and continue anytime</div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {[["Your interest profile", "The 3 work styles that fit you best"], ["Matching careers", "Roles in your country, with salary and demand"], ["Your next step", "The skills to build first, and where to learn them"]].map(([t, d], i) => (
          <Card key={t}><p className="text-xs font-semibold" style={{ color: C.muted }}>YOU'LL GET {i + 1}/3</p><p className="mt-1 font-semibold" style={{ color: C.ink }}>{t}</p><p className="mt-1 text-sm" style={{ color: C.muted }}>{d}</p></Card>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3"><Btn>Start the test</Btn>
        <span className="flex items-center gap-2">{hot(2)}<Btn ghost>Already know your direction? Start from your CV</Btn></span></div>
      <p className="mt-8 flex items-center gap-2 text-xs" style={{ color: C.muted }}>{hot(3)} Based on O*NET Career Exploration Tools (USDOL/ETA), used under licence. <u>Full disclaimer</u></p>
    </div>
  );
}
