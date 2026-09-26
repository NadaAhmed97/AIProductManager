"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/content";

// A guided chat: visitors pick from predefined questions and get hand-written answers.
// There is no free-text input and no LLM behind it.

type Msg = { from: "bot" | "user"; text: string; link?: { label: string; href: string } };

const questions: { q: string; answer: string; link?: Msg["link"] }[] = [
  {
    q: "Who is Nada, in 30 seconds?",
    answer:
      "Nada is a Senior AI & Growth Product Manager based across the UAE and Egypt. She started as a software and QA engineer, became a product manager, and has since been the sole PM at Smart Bricks, YallaGain, MUAB, XPay, Mumzworld's app and Pleny. She specialises in taking AI products from 0 to 1.",
  },
  {
    q: "What's your 0→1 experience?",
    answer:
      "0→1 is where she does her best work. She founded Zaffa AI (an AI wedding planner), built Zeki (a kids' AI-literacy app) on her own, and defined an AI underwriting product for institutional investors from a blank page. Her approach is to live the problem, cut scope hard, prototype with AI tools, and validate with real users before a big build.",
    link: { label: "See the 0→1 case studies", href: "#work" },
  },
  {
    q: "How do you handle government stakeholders?",
    answer:
      "She has shipped legal AI adopted by the UAE Ministry of Foreign Affairs and EDGE Group. Her approach with government stakeholders is to give everyone shared evidence: automated quality checks, one visible backlog, and compliance built into acceptance criteria rather than left for a final review.",
    link: { label: "Open the Law71 case", href: "#work" },
  },
  {
    q: "Can you actually build things?",
    answer:
      "She builds what she designs. She uses Figma, then Claude Code, Cursor, Lovable or v0 to ship working prototypes. Recent builds include an analytics pipeline in Apps Script, the Zeki app in React/TypeScript, a nine-screen underwriting prototype, and this portfolio.",
    link: { label: "Visit the Build lab", href: "#build" },
  },
  {
    q: "What have you built for other teams?",
    answer:
      "Beyond product, she builds tools for the teams around her. For customer success: a dashboard with next-best actions and AI-written questions per user, and a call-insights tool. For marketing: email campaigns, a guided product tour and an AI content engine. For the team: a metrics watchdog, a decision-log listener, and Slack bots for kudos, competitor intel and feedback-to-Jira.",
    link: { label: "Browse the Build lab", href: "#build" },
  },
  {
    q: "How do you make AI trustworthy?",
    answer:
      "Her core AI principle: AI reasons, deterministic engines calculate, humans decide. She has written requirements for agentic AI orchestration and for deterministic financial engines, and built LLM output-validation frameworks. The Blueprint section shows how she'd apply this to a government decision-support product.",
    link: { label: "Play the Blueprint", href: "#blueprint" },
  },
  {
    q: "How strong is your Arabic?",
    answer:
      "Arabic is her native language, and she has owned Arabic localisation on every product she's joined. At Law71 she was the only Arabic speaker on the team and brought the Arabic legal-AI portal to the same quality as English, despite dialects, messier data and different retrieval behaviour. At Pleny she localised the entire platform on her own.",
  },
  {
    q: "How do you use data?",
    answer:
      "She's a growth PM who fixes the data before trusting it. At Smart Bricks she defined the company's metrics and coded the reporting pipeline herself. She has run funnels, feature flags and A/B tests in PostHog and Mixpanel across fintech, e-commerce and AI products.",
  },
  {
    q: "Tell me about the XPay migration",
    answer:
      "At XPay, one of Egypt's top payment gateways, she was the sole PM for a migration to a new platform with a rebuilt financial core. Live merchants kept transacting with 100% uptime, and she took part in the Central Bank of Egypt licensing process.",
    link: { label: "Open the XPay case", href: "#work" },
  },
  {
    q: "How do you prioritise?",
    answer:
      "She agrees the decision criteria with stakeholders before debating features, which turns opinion fights into one explicit trade-off. Try it yourself in the decision simulator.",
    link: { label: "Try the simulator", href: "#simulator" },
  },
  {
    q: "How can I reach Nada?",
    answer: `You can reach Nada at ${profile.email} or on LinkedIn. Her CV can be downloaded at the bottom of the page.`,
    link: { label: "Go to contact", href: "#contact" },
  },
];

export default function AskNada() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [asked, setAsked] = useState<number[]>([]);
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Hi! I'm Nada's portfolio assistant. Pick a question below and I'll answer it." },
  ]);
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => end.current?.scrollIntoView({ behavior: "smooth" }), [msgs, typing]);

  const ask = (i: number) => {
    if (typing) return;
    const item = questions[i];
    setMsgs((m) => [...m, { from: "user", text: item.q }]);
    setAsked((a) => [...a, i]);
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: "bot", text: item.answer, link: item.link }]);
      setTyping(false);
    }, 700 + Math.random() * 500);
  };

  const reset = () => {
    setAsked([]);
    setMsgs([{ from: "bot", text: "Hi! I'm Nada's portfolio assistant. Pick a question below and I'll answer it." }]);
  };
  const remaining = questions.map((q, i) => ({ ...q, i })).filter((q) => !asked.includes(q.i));

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
            <p className="font-mono text-[10px] text-neutral-500">Pick a question to learn about Nada</p>
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
            <div ref={end} />
          </div>
          <div className="max-h-[42%] overflow-y-auto border-t border-white/10 p-3">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
              {remaining.length ? "Choose a question" : "That's everything"}
            </p>
            <div className="flex flex-wrap gap-2">
              {remaining.map((q) => (
                <button key={q.i} onClick={() => ask(q.i)} disabled={typing}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-left text-xs text-neutral-200 transition hover:border-accent hover:text-white disabled:opacity-40">
                  {q.q}
                </button>
              ))}
              {!remaining.length && (
                <button onClick={reset} className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-ink">↺ Start over</button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
