"use client";

import { useEffect, useRef, useState } from "react";
import { caseStudies, profile } from "@/data/content";

// A scripted assistant that runs entirely in the browser. It matches the visitor's
// question against hand-written answers and the case studies. There is no LLM behind it.

type Msg = { from: "bot" | "user"; text: string; link?: { label: string; href: string } };

const intents: { keys: string[]; answer: string; link?: Msg["link"] }[] = [
  {
    keys: ["who", "about", "yourself", "summary", "background", "introduce"],
    answer:
      "Nada is a Senior AI & Growth Product Manager based across the UAE and Egypt. She started as a software and QA engineer, became a product manager, and has since been the sole PM at Smart Bricks, YallaGain, MUAB, XPay, Mumzworld's app and Pleny. She specialises in taking AI products from 0 to 1.",
  },
  {
    keys: ["0", "zero", "one", "0→1", "early", "blank", "founder", "startup", "ambiguity", "ambiguous", "unstructured"],
    answer:
      "0→1 is where she does her best work. She founded Zaffa AI (an AI wedding planner), built Zeki (a kids' AI-literacy app) on her own, and defined an AI underwriting product for institutional investors from a blank page. Her approach is to live the problem, cut scope hard, prototype with AI tools, and validate with real users before a big build.",
    link: { label: "See the 0→1 case studies", href: "#work" },
  },
  {
    keys: ["government", "gov", "ministry", "public", "policy", "stakeholder", "stakeholders", "mofa", "edge", "difficult", "client", "clients"],
    answer:
      "She has shipped legal AI adopted by the UAE Ministry of Foreign Affairs and EDGE Group. Her approach with government stakeholders is to give everyone shared evidence: automated quality checks, one visible backlog, and compliance built into acceptance criteria rather than left for a final review.",
    link: { label: "Open the Law71 case", href: "#work" },
  },
  {
    keys: ["build", "code", "coding", "vibe", "technical", "engineer", "engineering", "prototype", "prototyping", "figma", "tools", "stack"],
    answer:
      "She builds what she designs. She uses Figma, then Claude Code, Cursor, Lovable or v0 to ship working prototypes. Recent builds include an analytics pipeline in Apps Script, the Zeki app in React/TypeScript, a nine-screen underwriting prototype, and this portfolio.",
    link: { label: "Visit the Build lab", href: "#build" },
  },
  {
    keys: ["ai", "agent", "agents", "agentic", "llm", "orchestration", "trust", "hallucination", "deterministic", "satellite", "econometric", "econometrics", "imagery", "decision-support", "impact"],
    answer:
      "Her core AI principle: AI reasons, deterministic engines calculate, humans decide. She has written requirements for agentic AI orchestration and for deterministic financial engines, and built LLM output-validation frameworks. The Blueprint section shows how she'd apply this to a government decision-support product.",
    link: { label: "Play the Blueprint", href: "#blueprint" },
  },
  {
    keys: ["arabic", "localisation", "localization", "language", "bilingual", "rtl"],
    answer:
      "Arabic is her native language, and she has owned Arabic localisation on every product she's joined, from payment gateways to legal AI. At Law71 she built automated tests covering the platform in both Arabic and English.",
  },
  {
    keys: ["data", "analytics", "metrics", "experiment", "a/b", "growth", "retention", "activation", "funnel"],
    answer:
      "She's a growth PM who fixes the data before trusting it. At Smart Bricks she defined the company's metrics and coded the reporting pipeline herself. She has run funnels, feature flags and A/B tests in PostHog and Mixpanel across fintech, e-commerce and AI products.",
  },
  {
    keys: ["fintech", "payment", "payments", "xpay", "migration", "bank", "cbe", "uptime"],
    answer:
      "At XPay, one of Egypt's top payment gateways, she was the sole PM for a migration to a new platform with a rebuilt financial core. Live merchants kept transacting with 100% uptime, and she took part in the Central Bank of Egypt licensing process.",
    link: { label: "Open the XPay case", href: "#work" },
  },
  {
    keys: ["prioritise", "prioritize", "priorities", "prioritisation", "prioritization", "roadmap", "decide", "decisions", "tradeoff", "trade-off"],
    answer:
      "She agrees the decision criteria with stakeholders before debating features, which turns opinion fights into one explicit trade-off. Try it yourself in the decision simulator.",
    link: { label: "Try the simulator", href: "#simulator" },
  },
  {
    keys: ["contact", "hire", "email", "reach", "available", "availability", "cv", "resume", "call", "interview"],
    answer: `You can reach Nada at ${profile.email} or on LinkedIn. Her CV can be downloaded at the bottom of the page.`,
    link: { label: "Go to contact", href: "#contact" },
  },
];

const suggestions = [
  "What's your 0→1 experience?",
  "How do you handle government stakeholders?",
  "Can you actually build things?",
  "How do you make AI trustworthy?",
];

const tokens = (s: string) => s.toLowerCase().split(/[^a-z0-9→/؀-ۿ-]+/).filter((t) => t.length > 1 || t === "0");

function reply(q: string): Msg {
  const t = new Set(tokens(q));
  let best = { score: 0, i: -1 };
  intents.forEach((it, i) => {
    const score = it.keys.filter((k) => t.has(k)).length;
    if (score > best.score) best = { score, i };
  });
  // Fall back to searching the case studies for overlapping words.
  const cs = caseStudies
    .map((c) => ({ c, score: tokens(`${c.title} ${c.company} ${c.context}`).filter((w) => w.length > 3 && t.has(w)).length }))
    .sort((a, b) => b.score - a.score)[0];
  if (cs && cs.score > best.score) {
    return { from: "bot", text: `From her ${cs.c.company.split(" · ")[0]} case study, in her words: "${cs.c.summary}"`, link: { label: "Open the case studies", href: "#work" } };
  }
  if (best.i >= 0) return { from: "bot", text: intents[best.i].answer, link: intents[best.i].link };
  return {
    from: "bot",
    text: `I don't have a scripted answer for that. Nada would be happy to answer it herself at ${profile.email}.`,
  };
}

export default function AskNada() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Hi! I'm Nada's portfolio assistant. Ask me about her 0→1 work, government projects, how she builds, or how she thinks about AI." },
  ]);
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => end.current?.scrollIntoView({ behavior: "smooth" }), [msgs, typing]);

  const ask = (q: string) => {
    if (!q.trim() || typing) return;
    setMsgs((m) => [...m, { from: "user", text: q }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, reply(q)]);
      setTyping(false);
    }, 700 + Math.random() * 500);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close assistant" : "Ask Nada's AI"}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-ink shadow-[0_0_40px_rgba(198,255,61,.35)] transition hover:scale-105"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ink" />
        </span>
        {open ? "Close" : "Ask Nada's AI"}
      </button>

      {open && (
        <div className="fixed bottom-20 right-4 z-40 flex h-[min(560px,75vh)] w-[min(380px,calc(100vw-32px))] animate-rise flex-col overflow-hidden rounded-2xl border border-white/15 bg-neutral-950 shadow-2xl">
          <div className="border-b border-white/10 p-4">
            <p className="font-semibold">Ask Nada&apos;s AI</p>
            <p className="font-mono text-[10px] text-neutral-500">Scripted assistant · runs in your browser · no LLM</p>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {msgs.map((m, i) => (
              <div key={i} className={`flex animate-rise ${m.from === "user" ? "justify-end" : ""}`}>
                <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm ${
                  m.from === "user" ? "bg-accent text-ink" : "bg-white/[0.06] text-neutral-200"}`}>
                  {m.text}
                  {m.link && (
                    <a href={m.link.href} onClick={() => setOpen(false)} className="mt-2 block text-xs text-accent hover:underline">
                      {m.link.label} →
                    </a>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex gap-1 px-2 py-3">
                {[0, 1, 2].map((d) => (
                  <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-500" style={{ animationDelay: `${d * 0.15}s` }} />
                ))}
              </div>
            )}
            {msgs.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {suggestions.map((s) => (
                  <button key={s} onClick={() => ask(s)} className="rounded-full border border-white/15 px-3 py-1.5 text-left text-xs text-neutral-300 hover:border-accent">
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={end} />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); ask(input); }} className="flex gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Nada's work…"
              className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm outline-none focus:border-accent"
            />
            <button className="rounded-full bg-white px-4 text-sm font-semibold text-ink hover:bg-accent">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
