// All portfolio copy lives here so it can be edited without touching layout.
// Anything wrapped in [brackets] is a placeholder for a number/link only you know —
// replace it before sharing the site.

export const profile = {
  name: "Nada Ahmed",
  role: "AI & Growth Product Manager",
  location: "Abu Dhabi · Cairo · Remote",
  email: "nadaahmed296@gmail.com",
  linkedin: "https://linkedin.com/in/nadaah",
  cv: "/Nada_Ahmed_CV.pdf",
};

export const proof = [
  { value: "5+", label: "years shipping AI, fintech & e-com products" },
  { value: "0→1", label: "Founded Zaffa AI — MENA's first AI wedding planner" },
  { value: "Sole PM", label: "XPay V3.0 — a top-7 Egyptian payment gateway" },
  { value: "Gov-grade", label: "Law71 legal AI adopted by UAE MOFA & EDGE" },
];

export type CaseStudy = {
  id: string;
  tag: string;
  title: string;
  company: string;
  summary: string;
  headline: { value: string; label: string };
  problem: string;
  ownership: string[];
  decisions: { call: string; why: string; tradeoff: string }[];
  delivery: string[];
  results: { value: string; label: string }[];
  learned: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "zaffa",
    tag: "0 → 1 launch",
    title: "Taking an LLM wedding planner from a blank page to market",
    company: "Zaffa AI · Founder & CEO",
    summary:
      "No team, no product, no category in MENA. I validated the problem, designed the conversational AI, built the automations and took it to market.",
    headline: { value: "0 → 1", label: "first AI wedding planner in MENA" },
    problem:
      "Planning a wedding in MENA means juggling dozens of vendors over WhatsApp, fragmented budgets and family-driven timelines. Existing tools are Western directories that ignore how decisions are actually made here — collectively, in Arabic, over chat.",
    ownership: [
      "Product vision, roadmap and monetisation model",
      "Conversational AI journey design and prompt engineering",
      "Lead capture → qualification → nurture → conversion automation",
      "Go-to-market and every business outcome",
    ],
    decisions: [
      {
        call: "Chat-first, not a directory",
        why: "Couples already plan in WhatsApp threads; meeting them there removes a behaviour change.",
        tradeoff: "Harder to evaluate LLM quality than a static catalogue — needed a validation loop from day one.",
      },
      {
        call: "Automate vendor-side ops before building more couple features",
        why: "Supply liquidity was the real bottleneck; a planner with no responsive vendors is useless.",
        tradeoff: "Slower visible progress on the consumer UI in the first sprints.",
      },
      {
        call: "Ship with no-code automation (n8n / Make) before custom backend",
        why: "Learn which workflows matter before paying engineering cost for them.",
        tradeoff: "Accepted some scaling debt, with a clear threshold for when to rebuild.",
      },
    ],
    delivery: [
      "Mapped the couple journey (discovery → budget → vendors → timeline) and designed AI flows for each stage",
      "Built vendor matching, budget planning and timeline management as conversational skills",
      "Wired an automated funnel across lead capture, qualification, nurturing and conversion",
      "Designed in Figma and shipped the front end with AI-assisted code (Cursor / Lovable / v0)",
    ],
    results: [
      { value: "[X]", label: "couples onboarded" },
      { value: "[X]", label: "vendors in network" },
      { value: "[X]%", label: "lead → qualified conversion" },
    ],
    learned:
      "In 0→1, the fastest route to signal is doing things that don't scale — then automating only what the data proves is worth keeping.",
  },
  {
    id: "xpay",
    tag: "Clarity without a playbook",
    title: "Being the only PM on a payment gateway rebuild",
    company: "XPay Egypt · Lead Technical PM",
    summary:
      "Joined as sole PM with no roadmap, no PRD culture and an ambitious V3.0. Created the operating system, then shipped the MVP on schedule.",
    headline: { value: "On time", label: "XPay V3.0 MVP delivered as scheduled" },
    problem:
      "XPay needed V3.0 — balances, transaction processing, merchant dashboards and a developer hub — but had no product function: requests came from everywhere, priorities shifted weekly, and nobody could say what 'done' meant.",
    ownership: [
      "Entire product lifecycle, discovery through post-launch optimisation",
      "Setting up the product process from scratch (PRDs, backlog, cadence)",
      "Competitive positioning vs. Stripe and Paymob",
      "Coaching product owners to run it without me",
    ],
    decisions: [
      {
        call: "Write the scope down before writing the roadmap",
        why: "A one-page MVP definition ended the 'everything is P0' debates faster than any framework.",
        tradeoff: "Explicitly deferred features some stakeholders wanted in V3.0.",
      },
      {
        call: "Benchmark against Stripe & Paymob to pick where to be different",
        why: "Parity on core rails, differentiation on merchant experience and developer hub.",
        tradeoff: "Chose not to chase every competitor feature.",
      },
      {
        call: "Instrument before optimising (PostHog + Mixpanel, feature flags)",
        why: "Turned opinion-driven debates into funnel data.",
        tradeoff: "Spent early sprint capacity on tracking rather than features.",
      },
    ],
    delivery: [
      "Introduced PRD templates, a single prioritised backlog and a predictable delivery cadence",
      "Shipped balance management, transaction processing, merchant dashboards and developer hub",
      "Ran funnel tracking, feature flags and A/B tests across merchant touchpoints",
      "Mentored POs on discovery, PRD writing and prioritisation",
    ],
    results: [
      { value: "V3.0", label: "MVP launched on schedule" },
      { value: "[X]%", label: "merchant activation lift" },
      { value: "[X]", label: "product owners mentored" },
    ],
    learned:
      "When there's no playbook, the first product is the process. Clarity is a deliverable.",
  },
  {
    id: "law71",
    tag: "Government stakeholders",
    title: "Shipping legal AI to a ministry and a defence group",
    company: "LocAI (Al71) · Technical Product Lead / Scrum Master",
    summary:
      "Law71 had to satisfy the UAE Ministry of Foreign Affairs, EDGE Group, legal teams and engineers at once — with zero tolerance for wrong AI answers.",
    headline: { value: "MOFA + EDGE", label: "adopted Law71 legal AI" },
    problem:
      "Government and defence clients each had their own compliance rules, review cycles and definition of 'correct'. Legal wanted accuracy, security wanted control, leadership wanted speed — and an LLM that hallucinates is a non-starter in legal work.",
    ownership: [
      "Product quality and delivery for Law71",
      "Sprint execution and backlog across multi-stakeholder programs",
      "LLM output validation strategy",
      "Aligning agencies, legal teams and defence organisations",
    ],
    decisions: [
      {
        call: "Make quality measurable: automated LLM output validation",
        why: "Replaced subjective 'it feels wrong' feedback with evidence every stakeholder could trust.",
        tradeoff: "Built a Selenium-based validation framework before new features.",
      },
      {
        call: "One shared backlog, visible to every stakeholder",
        why: "Competing priorities became explicit trade-offs instead of side-channel escalations.",
        tradeoff: "More upfront negotiation in planning; far fewer surprises later.",
      },
      {
        call: "Compliance requirements as acceptance criteria, not a final gate",
        why: "Avoided late rejections in government review cycles.",
        tradeoff: "Longer story definitions.",
      },
    ],
    delivery: [
      "Built Selenium-based LLM output validation for high-stakes legal workflows",
      "Ran sprints and backlog across agencies, legal and defence stakeholders",
      "Translated compliance and security needs into testable criteria",
      "Delivered a platform adopted by UAE MOFA and EDGE Group",
    ],
    results: [
      { value: "2", label: "government-grade clients (MOFA, EDGE)" },
      { value: "[X]%", label: "validated output accuracy" },
      { value: "[X]", label: "stakeholder groups aligned" },
    ],
    learned:
      "Difficult stakeholders are usually stakeholders without shared evidence. Give them a common source of truth and the politics shrink.",
  },
];

export const builds = [
  {
    name: "Testify",
    kind: "AI product · built solo",
    blurb:
      "AI platform that verifies requirements and generates testing & dev checklists for testers, POs and engineers. ITIDA national competition semi-finalist.",
    stack: ["LLM", "Prompt eng.", "Figma", "Full-stack"],
    link: "[link]",
  },
  {
    name: "Zaffa lead engine",
    kind: "Automation workflow",
    blurb:
      "n8n / Make pipeline: lead capture → AI qualification → WhatsApp nurture → CRM hand-off. Runs the funnel without a sales team.",
    stack: ["n8n", "Make", "WhatsApp API", "GPT"],
    link: "[link]",
  },
  {
    name: "LLM validation harness",
    kind: "QA tooling",
    blurb:
      "Selenium-driven framework that checks LLM answers against expected legal outputs, turning quality into a pass/fail signal.",
    stack: ["Selenium", "Python", "LLM eval"],
    link: "[link]",
  },
  {
    name: "This portfolio",
    kind: "Figma → code",
    blurb:
      "Designed, then vibe-coded in Next.js + Tailwind. The decision simulator below is a real, working component — view the source.",
    stack: ["Next.js", "Tailwind", "Claude", "Cursor"],
    link: "https://github.com/NadaAhmed97/AIProductManager",
  },
];

export const experience = [
  { when: "2026 —", org: "Smart Bricks", role: "Senior AI & Growth PM (contract)", note: "a16z-backed agentic AI proptech" },
  { when: "2026 —", org: "Yalla Development", role: "Senior AI PM (freelance)", note: "YallaGain AI fitness coach MVP" },
  { when: "2025 —", org: "XPay Egypt", role: "Lead Technical PM", note: "Sole PM, V3.0 launch" },
  { when: "2025 —", org: "Zaffa AI", role: "Founder & CEO", note: "0→1 AI wedding planning" },
  { when: "2023–24", org: "LocAI (Al71)", role: "Technical Product Lead", note: "Legal AI for MOFA & EDGE" },
  { when: "2023–24", org: "Mumzworld", role: "Product Manager", note: "Mobile app, 5M+ users, QA → PM in 4 months" },
  { when: "2020–24", org: "Engineering roots", role: "Software & QC Engineer", note: "Novomind, Pleny, Blink 22" },
];
