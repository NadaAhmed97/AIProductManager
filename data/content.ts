// All portfolio copy lives here so it can be edited without touching layout.
// Anything wrapped in [brackets] is a placeholder for a number/link only you know —
// replace it before sharing the site.

export const profile = {
  name: "Nada Ahmed",
  role: "AI & Growth Product Manager",
  location: "UAE · Egypt · Remote",
  email: "nadaahmed296@gmail.com",
  linkedin: "https://linkedin.com/in/nadaah",
  cv: "/Nada_Ahmed_CV.pdf",
};

export const proof = [
  { value: "5+", label: "years shipping AI, fintech & e-com products" },
  { value: "0→1", label: "products taken from blank page to launch" },
  { value: "Sole PM", label: "at Smart Bricks, YallaGain, MUAB, XPay, Mumzworld's app and Pleny" },
  { value: "AR / EN", label: "owned Arabic localisation on every product I joined" },
  { value: "Gov AI", label: "Law71 legal AI adopted by UAE MOFA & EDGE" },
];

export type Theme = "0 → 1" | "No playbook" | "Stakeholders" | "Data & quality";
export const themes: Theme[] = ["0 → 1", "No playbook", "Stakeholders", "Data & quality"];

export type CaseStudy = {
  id: string;
  theme: Theme;
  tag: string;
  title: string;
  company: string;
  // One line for readers who have never heard of the company or project.
  context: string;
  summary: string;
  headline: { value: string; label: string };
  problem: string;
  ownership: string[];
  decisions: { call: string; why: string; tradeoff: string }[];
  delivery: string[];
  results: { value: string; label: string }[];
  learned: string;
};

// Values containing "[" are placeholders and are hidden on the live site until filled in.
export const isFilled = (v: string) => !v.includes("[");

export const caseStudies: CaseStudy[] = [
  {
    id: "underwriting",
    theme: "0 → 1",
    tag: "0 → 1 · AI product definition",
    title: "Defining an AI underwriting product for institutional investors from a blank page",
    company: "Smart Bricks · Senior AI & Growth PM",
    context:
      "Smart Bricks is an a16z-backed AI startup in Dubai building agentic AI for real-estate investing. It pivoted from retail investors to institutional capital: private-equity firms, family offices and large funds.",
    summary:
      "I'm solely responsible for introducing a new B2B product for institutional investors: plan, requirements, agentic AI orchestration and deterministic financial engines. I took it from a founder's PRD to buyer-tested definition and a clickable prototype.",
    headline: { value: "9 surfaces", label: "clickable prototype, vibe-coded solo" },
    problem:
      "After the pivot to institutional capital there was no product spec and no validated buyer, only the CEO's master PRD. Institutional investors underwrite deals worth millions. An AI that invents a number once loses them for good, so trust had to be designed in from day one rather than added later.",
    ownership: [
      "Sole owner of the new B2B institutional vertical: the project plan, requirements and everything needed to introduce it, built from the ground up",
      "Product definition end to end: four structured discovery sessions → Product Definition v2.0 → versioned MVP PRD",
      "Requirements for agentic AI harnesses and orchestration, and for complex deterministic financial engines",
      "Buyer discovery run directly with senior investors (a VP at a global alternative-asset manager, a real-estate firm founder)",
      "Competitive teardowns of AI tools for real-estate and legal professionals",
      "A clickable prototype covering nine surfaces: intake, pipeline, deal workspace, portfolio, precedents, vault, team, Ask and more",
    ],
    decisions: [
      {
        call: "AI reasons, deterministic engines calculate, humans authorise capital",
        why: "This answers the buyer's first objection (\"will it make up numbers?\") before they raise it. The LLM never produces a financial figure itself.",
        tradeoff: "More engineering than a pure-LLM approach, and less 'magic' in the demo.",
      },
      {
        call: "A layered 'brain' architecture: company intelligence → client → fund → deal",
        why: "Each layer inherits context from the one above, so the AI understands a fund's strategy when it looks at a single deal.",
        tradeoff: "A harder design problem up front in exchange for a product that grows without rework.",
      },
      {
        call: "Narrow the MVP to underwriting only",
        why: "It's the most painful and most measurable workflow, which makes it the easiest to prove ROI on.",
        tradeoff: "Portfolio management and other surfaces stay prototype-only for now.",
      },
    ],
    delivery: [
      "Ran four discovery sessions and consolidated them into Product Definition v2.0",
      "Wrote the versioned MVP PRD engineering builds against",
      "Vibe-coded the nine-surface clickable prototype to test flows with buyers before build",
      "Validated the direction in conversations with institutional buyers",
    ],
    results: [
      { value: "0 → PRD", label: "stakeholder-ready prototype and PRD" },
      { value: "[X] wks", label: "from blank page to prototype" },
      { value: "[X]", label: "design-partner conversations / LOIs" },
    ],
    learned:
      "With high-stakes buyers, trust is the product. Deciding what the AI must never do was the most important product decision.",
  },
  {
    id: "zeki",
    theme: "0 → 1",
    tag: "0 → 1 · built solo",
    title: "Building a bilingual AI-literacy app for kids, alone, from spec to working product",
    company: "Zeki · Founder & builder",
    context:
      "The UAE made AI education part of the public-school curriculum (KG–Grade 12) from the 2025–26 school year. Zeki is my self-serve, gamified app that teaches AI to children aged 6–12 in Arabic and English.",
    summary:
      "I spotted a gap nobody served, wrote the PRD and curriculum, designed the brand, and coded the MVP myself with AI-assisted development.",
    headline: { value: "Team of 1", label: "PRD, curriculum, design and code" },
    problem:
      "A national mandate created demand overnight, but the options were either general edutainment with no real AI content or expensive live coding academies. Nothing affordable, self-serve and bilingual existed for ages 6–12.",
    ownership: [
      "PRD and a full Curriculum Design Doc",
      "Visual identity: night-sky indigo palette, amber accent, child-friendly typography",
      "Front-end build: Vite, React, TypeScript, Tailwind, PWA-first",
      "Full Arabic/English support with right-to-left switching",
    ],
    decisions: [
      {
        call: "Content as data, not code",
        why: "Lessons live in typed data files, so new curriculum ships without touching a component. That removes me as the bottleneck.",
        tradeoff: "A slower first lesson in exchange for near-zero cost per lesson after it.",
      },
      {
        call: "No live LLM calls, no backend and no native app in v1",
        why: "Every call went through one filter: 'team of one, ship fast'. Premature infrastructure kills solo products before a user sees them.",
        tradeoff: "Less 'AI magic' in v1, deliberately.",
      },
      {
        call: "Position in the gap between edutainment apps and coding academies",
        why: "Avoid fighting established players head-on; own the affordable, AI-specific niche.",
        tradeoff: "A narrower market at the start.",
      },
    ],
    delivery: [
      "Designed an Explain → Do → Reflect → Reward learning loop with separate 6–8 and 9–12 age-band variants",
      "Built the MVP architecture and shipped Lesson 1 end to end",
      "Wrote a README designed to guide future AI-assisted coding sessions",
      "Planned the next steps: Supabase back end, then 8–10 lessons",
    ],
    results: [
      { value: "Lesson 1", label: "shipped end to end, bilingual" },
      { value: "0", label: "UI changes needed per new lesson" },
      { value: "[X]", label: "pilot users / schools" },
    ],
    learned:
      "Solo 0→1 is a scoping discipline more than a coding skill. What I left out mattered as much as what I built.",
  },
  {
    id: "zaffa",
    theme: "0 → 1",
    tag: "0 → 1 · founder",
    title: "Turning my own wedding chaos into MENA's first AI wedding planner",
    company: "Zaffa AI · Founder & CEO",
    context:
      "Zaffa AI is a wedding-planning platform I founded, built around Nour, an AI wedding planner. It started as a tool for planning my own wedding.",
    summary:
      "I was planning my own wedding and the tools didn't fit how weddings work in the region. I built what I needed, from dream boards to seating plans, then added Nour, an AI planner who helps emotionally, strategically and financially.",
    headline: { value: "Nour", label: "AI wedding planner: emotional, strategic, financial" },
    problem:
      "Planning a wedding in MENA means dozens of decisions, many vendors, family expectations and a budget that keeps moving, mostly managed over chats and spreadsheets. Planning my own wedding, I found no tool that handled the logistics and the emotional weight of it together.",
    ownership: [
      "Product vision, roadmap, monetisation and go-to-market, as founder",
      "Planning tools built from scratch: dream boards, invitations and seating plans",
      "Nour, the AI planner: her persona, conversation design and prompt engineering",
      "Automated flows for vendor matching, budget planning and timelines",
    ],
    decisions: [
      {
        call: "Start from my own problem and be the first user",
        why: "I was living every decision as it happened, so each feature was tested against a real wedding, not an imagined one.",
        tradeoff: "The risk of building for one person, so the next step was testing with other couples.",
      },
      {
        call: "Give the AI a persona, Nour, rather than a generic chatbot",
        why: "Wedding planning is emotional as well as logistical. People open up to a planner who supports them, not only to a checklist that tracks them.",
        tradeoff: "Persona and tone take more design and prompt work to get right.",
      },
      {
        call: "Keep emotional, strategic and financial planning in one assistant",
        why: "Wedding decisions are connected: a venue choice changes the budget, and the budget changes the guest list. One planner can reason across all of it.",
        tradeoff: "A broader scope for the AI to handle well.",
      },
    ],
    delivery: [
      "Built dream boards, invitation creation and seating plans",
      "Launched Nour to guide couples through decisions, stress and budget",
      "Designed conversational journeys for vendor matching, budgeting and timelines",
      "Automated lead capture, qualification, nurturing and conversion",
    ],
    results: [
      { value: "1st", label: "AI-powered wedding planning platform in MENA" },
      { value: "[X]", label: "couples using Zaffa" },
    ],
    learned:
      "The best 0→1 insight is a problem you're living. Being your own first user shortens every feedback loop.",
  },
  {
    id: "analytics",
    theme: "Data & quality",
    tag: "Data · built in code",
    title: "Building a startup's single source of truth for product metrics, solo, in code",
    company: "Smart Bricks · Senior AI & Growth PM",
    context:
      "An early-stage AI startup where leadership made weekly decisions on product analytics that nobody fully trusted.",
    summary:
      "No shared definition of 'active user', inflated counts and queries that timed out. I defined the metrics, coded the pipeline and fixed the data bugs underneath.",
    headline: { value: "v11.5+", label: "automated reporting pipeline I coded" },
    problem:
      "There was no agreed definition of an active user. Metrics were scattered across dashboards, internal traffic inflated the numbers, some sign-ups never reached reporting, and heavy queries failed with timeouts.",
    ownership: [
      "The company's metric definitions: a canonical 36-event set that defines monthly active users, active users and actions per user",
      "An analytics-to-spreadsheet pipeline I wrote in Apps Script, covering weekly, monthly, CTA and UTM reports",
      "UTM campaign-attribution infrastructure, built from scratch",
      "Finding and fixing the data-integrity bugs",
    ],
    decisions: [
      {
        call: "Exclude internal users and count unique people by email",
        why: "Accuracy over convenience. A metric that flatters us is worse than none.",
        tradeoff: "Smaller, less flattering numbers.",
      },
      {
        call: "Keep sales-lead clicks out of product-engagement metrics",
        why: "Sales activity shouldn't be able to inflate product health.",
        tradeoff: "Two separate reports to maintain.",
      },
      {
        call: "Fix timeouts with a pre-computed sessions table, not query tweaks",
        why: "It fixes the root cause instead of the symptom.",
        tradeoff: "More upfront work.",
      },
    ],
    delivery: [
      "Fixed three data-integrity bugs: truncated retention queries, a filter gap that silently dropped sign-ups, and query timeouts",
      "Automated reporting so nobody pulls numbers by hand",
      "Set the company's first trusted metrics baseline",
      "Used the pipeline to spot a funnel dropping to zero completions and traced it to a server error on the lead form",
    ],
    results: [
      { value: "36", label: "canonical events defining 'active'" },
      { value: "3", label: "silent data bugs found and fixed" },
      { value: "[X] hrs/wk", label: "manual reporting removed" },
    ],
    learned:
      "You can't be data-driven on numbers nobody trusts. Sometimes the highest-leverage product work is fixing the ruler.",
  },
  {
    id: "uk",
    theme: "No playbook",
    tag: "Market entry",
    title: "Launching in the UK without the data the product was built on",
    company: "Smart Bricks · Senior AI & Growth PM",
    context:
      "Smart Bricks' product was built for the UAE property market. Expanding to the UK meant launching in a market where most of that underlying data doesn't exist.",
    summary:
      "The UAE product depends on rich property lookups the UK lacks. I found a workable data source, scoped a lean MVP and designed the product so future markets plug in instead of being rebuilt.",
    headline: { value: "Live", label: "UK Explore, AI Advisor and AI Investment Memos" },
    problem:
      "The UAE product runs on detailed property lookups and dropdowns, and almost none of them exist for the UK. There was pressure to launch fast anyway.",
    ownership: [
      "UK Portfolio MVP scope and wireframes",
      "Hands-on research into UK public sale-price data",
      "UK go-to-market strategy and re-engagement plan for existing UK users",
    ],
    decisions: [
      {
        call: "One shared product core with per-country configuration",
        why: "Each new market becomes configuration, not a rebuild.",
        tradeoff: "More abstraction work in the first market.",
      },
      {
        call: "Use UK public sale-price records as the data backbone",
        why: "I confirmed myself that addresses resolve to individual units with historic prices, which is enough for valuations and trend lines.",
        tradeoff: "Less detail than the UAE data.",
      },
      {
        call: "Let users enter data where the platform has none",
        why: "Speed over completeness, so we could launch now and enrich later.",
        tradeoff: "More friction for some users at the start.",
      },
    ],
    delivery: [
      "Scoped the MVP and designed the wireframes",
      "Wrote the UK GTM strategy and re-engagement plan",
      "Launched UK Explore, the AI Advisor and AI Investment Memos",
    ],
    results: [
      { value: "3", label: "products live in the UK" },
      { value: "[X]", label: "UK users activated" },
      { value: "[X]%", label: "less build effort per new market" },
    ],
    learned:
      "Market entry is a data problem before it's a product problem. Find the minimum data that makes the product credible, then launch.",
  },
  {
    id: "prd",
    theme: "Stakeholders",
    tag: "Founder alignment",
    title: "Rewriting a product's rulebook mid-flight and getting the CEO's sign-off in one session",
    company: "MUAB · Product Manager",
    context:
      "A fast-moving ed-tech platform connecting creators with learners, preparing to launch in Saudi Arabia, where the real roadmap lived mostly in the founder's head.",
    summary:
      "The PRD had drifted far from what the CEO wanted. I rewrote it across nine feature areas, rebuilt it live as he changed direction, and pushed back where the logic didn't hold.",
    headline: { value: "5 → 0", label: "open decisions locked, no rework after" },
    problem:
      "Categories, restriction rules and account structure had all changed in conversation but never reached a document engineering could build against. That's the classic 0→1 trap: the roadmap lives in one person's head.",
    ownership: [
      "The full consolidated PRD across nine feature areas (trust, digital products, learning requests, assignments, projects, chat, circles, sessions, quizzes)",
      "Live rework of the document during the CEO review",
      "A compliance workstream for creator verification and platform liability",
      "Pushing for and introducing AI-powered features, growing the platform into an AI-enabled learning product",
    ],
    decisions: [
      {
        call: "Rebuild the spec live in the review, not afterwards",
        why: "Five mechanics changed in one sitting, and locking them in the room avoided weeks of back-and-forth.",
        tradeoff: "An intense session, and a document that had to be restructured on the spot.",
      },
      {
        call: "Push back on capping learner interests",
        why: "The cap hurt discovery and helped no one. I made the case and the decision was reversed.",
        tradeoff: "Spent credibility with the CEO, and earned it back.",
      },
      {
        call: "Treat creator liability as a formal workstream now",
        why: "In the Saudi market the platform is accountable for third-party creators' credibility, so it was better to design for it than to meet it as a legal blocker.",
        tradeoff: "Extra scope before launch.",
      },
    ],
    delivery: [
      "Wrote developer-ready specs for nine feature areas",
      "Designed a three-step restriction model (Warning → Period → Full) and a simplified category system",
      "Added change-index tables and callouts so engineering could see what changed and why",
      "Designed company accounts that sit behind a personal account",
    ],
    results: [
      { value: "1", label: "PRD replacing scattered decisions" },
      { value: "9", label: "feature areas specified" },
      { value: "5", label: "architecture decisions locked in one session" },
    ],
    learned:
      "Aligning a founder isn't about winning arguments. Make the decision visible and cheap to change, then change it with them in the room.",
  },
  {
    id: "audit",
    theme: "Data & quality",
    tag: "Pre-launch risk",
    title: "Finding the launch-blocking failures before a platform went live",
    company: "MUAB · Product Manager",
    context:
      "The same ed-tech platform was shipping more than 130 tickets per sprint and nobody had ever audited the backend end to end. The CEO couldn't see whether money actually reached creators.",
    summary:
      "I audited ~140 tickets across six sprints, then traced the real money and login paths myself. I found critical payment and security failures and took them to the CEO as launch blockers.",
    headline: { value: "4", label: "critical launch blockers found pre-launch" },
    problem:
      "The roadmap said creator payouts worked. Nobody had checked. With very high ticket volume, cosmetic bugs and business-critical failures were mixed together in the same backlog.",
    ownership: [
      "Triage of ~140 tickets across six sprints into one audit document",
      "A hands-on business-logic audit of how money and logins actually flow",
      "A 22-category quality taxonomy to separate cosmetic, structural and blocking issues",
      "A systematic comparison of what was built against the design spec, screen by screen",
    ],
    decisions: [
      {
        call: "Prioritise by blast radius, not ticket count",
        why: "Payments, checkout and authentication came first. Cosmetic issues waited.",
        tradeoff: "Some visible UI bugs stayed open longer.",
      },
      {
        call: "Present the payment findings as one launch blocker, not three tickets",
        why: "Separately they look like bugs. Together they meant the platform couldn't safely take money.",
        tradeoff: "A hard conversation with leadership right before launch.",
      },
      {
        call: "Treat security findings as release blockers, not backlog",
        why: "Access-control and data-exposure issues are not 'later' items.",
        tradeoff: "Launch scope moved.",
      },
    ],
    delivery: [
      "Delivered a single authoritative audit document",
      "Made the 22-flag taxonomy the team's standard for triage",
      "Escalated the payment and security clusters directly to the CEO",
    ],
    results: [
      { value: "~140", label: "tickets audited into one document" },
      { value: "22", label: "quality flags, now the triage standard" },
      { value: "4", label: "critical failures caught before launch" },
    ],
    learned:
      "My QA background is a product superpower. Checking whether the product actually works is the cheapest way to protect the business.",
  },
  {
    id: "law71",
    theme: "Stakeholders",
    tag: "Government stakeholders",
    title: "Shipping legal AI to a government ministry and a defence group",
    company: "LocAI (Al71) · Technical Product Lead / Scrum Master",
    context:
      "Law71 is a legal AI platform used by the UAE Ministry of Foreign Affairs and EDGE Group, a UAE defence conglomerate. Wrong answers in legal work aren't an option.",
    summary:
      "Ministry, defence, legal and engineering teams all had to be satisfied at once, with zero tolerance for wrong AI answers.",
    headline: { value: "MOFA + EDGE", label: "adopted Law71 legal AI" },
    problem:
      "Each government and defence client had its own compliance rules, review cycles and definition of 'correct'. Legal wanted accuracy, security wanted control and leadership wanted speed. An LLM that hallucinates is a non-starter in legal work.",
    ownership: [
      "Product quality and delivery for Law71",
      "Sprint execution and backlog across multi-stakeholder programmes",
      "The strategy for validating LLM output, in both English and Arabic",
      "Aligning agencies, legal teams and defence organisations",
    ],
    decisions: [
      {
        call: "Make quality measurable with automated LLM output validation",
        why: "It replaced subjective 'this feels wrong' feedback with evidence every stakeholder could trust.",
        tradeoff: "Built a validation framework before new features.",
      },
      {
        call: "One shared backlog, visible to every stakeholder",
        why: "Competing priorities became explicit trade-offs instead of side-channel escalations.",
        tradeoff: "More negotiation up front, far fewer surprises later.",
      },
      {
        call: "Compliance requirements as acceptance criteria, not a final gate",
        why: "It avoided late rejections in government review cycles.",
        tradeoff: "Longer story definitions.",
      },
    ],
    delivery: [
      "Built an automated test framework (Selenium) covering the complex platform end to end in both English and Arabic",
      "Ran sprints and backlog across agency, legal and defence stakeholders",
      "Turned compliance and security needs into testable criteria",
      "Delivered a platform adopted by UAE MOFA and EDGE Group",
    ],
    results: [
      { value: "2", label: "government-grade clients (MOFA, EDGE)" },
      { value: "AR + EN", label: "automated test coverage in both languages" },
      { value: "[X]%", label: "validated output accuracy" },
    ],
    learned:
      "Difficult stakeholders are usually stakeholders without shared evidence. Give them a common source of truth and the politics shrink.",
  },
  {
    id: "xpay",
    theme: "No playbook",
    tag: "Core migration · zero downtime",
    title: "Migrating a live payment gateway to a new core without a minute of downtime",
    company: "XPay Egypt · Lead Technical PM",
    context:
      "XPay is one of Egypt's top payment gateways, the infrastructure that lets merchants accept online payments. Payment gateways in Egypt operate under a Central Bank of Egypt (CBE) licence.",
    summary:
      "As the only PM, I led the move from XPay's legacy system to a new platform, including a rebuilt financial core, while live merchants kept transacting. I also took part in securing the Central Bank of Egypt licence.",
    headline: { value: "100%", label: "uptime for live merchants during the migration" },
    problem:
      "XPay's legacy system couldn't support where the business needed to go, so the financial engine at its core had to be rebuilt and every merchant moved to a new platform. Live clients were processing real payments the whole time, so any downtime or reconciliation error meant lost money and lost trust. There was also no product function: no roadmap, no PRDs, and priorities that shifted weekly. On top of that, the platform had to meet Central Bank of Egypt licensing requirements.",
    ownership: [
      "The whole migration from legacy system to new platform, as the only PM",
      "Requirements for the rebuilt financial engine: balances, transaction processing and settlement",
      "Keeping 100% uptime for live merchants throughout the cut-over",
      "Product input to the Central Bank of Egypt licensing process",
      "Setting up the product process from scratch (PRDs, backlog, cadence) and Arabic localisation",
    ],
    decisions: [
      {
        call: "Migrate in stages with the old and new systems running side by side",
        why: "Live merchants couldn't absorb downtime or a failed big-bang switch, so each stage had to be reversible.",
        tradeoff: "A longer migration and the cost of running two systems in parallel.",
      },
      {
        call: "Migrate the most sensitive merchants first, and verify every account by hand",
        why: "Our highest-stakes accounts got the most attention while the team was freshest. With temporary access, we checked that each one had migrated correctly before moving on.",
        tradeoff: "Slower early batches and more manual verification work.",
      },
      {
        call: "Tell merchants ourselves, before they noticed anything",
        why: "I reached out to merchants personally alongside Customer Success and Business Development, so every client knew what was happening and confirmed their account was right.",
        tradeoff: "Significant PM time spent on direct client communication.",
      },
      {
        call: "Build the financial core to regulatory requirements from day one",
        why: "Designing for the Central Bank's requirements up front avoided rework during licensing.",
        tradeoff: "Slower early feature delivery.",
      },
      {
        call: "Benchmark against Stripe and Paymob to choose where to be different",
        why: "Match them on core payment rails; stand out on merchant experience and the developer hub.",
        tradeoff: "Chose not to chase every competitor feature.",
      },
    ],
    delivery: [
      "Rebuilt the financial engine and moved merchants to the new platform in reversible stages, with zero downtime",
      "Ran migration scripts starting with the most sensitive merchants and verified each account with temporary access",
      "Coordinated with Customer Success and Business Development to align with every migrated merchant",
      "Shipped balance management, transaction processing, merchant dashboards and the developer hub",
      "Took part in obtaining the Central Bank of Egypt licence",
      "Instrumented funnels, feature flags and A/B tests in PostHog and Mixpanel",
      "Mentored product owners on discovery, PRD writing and prioritisation",
    ],
    results: [
      { value: "100%", label: "uptime through the migration" },
      { value: "CBE", label: "licence process supported" },
      { value: "[X]%", label: "merchant activation lift" },
    ],
    learned:
      "Migrating money-moving systems is like changing an engine mid-flight. The product job is to make every step reversible and invisible to the customer.",
  },
];

export const builds = [
  {
    name: "Metrics pipeline",
    glyph: "∑ → ▤",
    kind: "Data automation · Apps Script",
    blurb:
      "Pulls product analytics into automated weekly, monthly, CTA and UTM reports. It's on v11.5+ and replaced all manual reporting at an AI startup.",
    stack: ["Apps Script", "PostHog", "SQL", "Google Sheets"],
    link: "[link]",
  },
  {
    name: "Zeki",
    glyph: "ع / A",
    kind: "Kids' AI-literacy app · built solo",
    blurb:
      "Bilingual Arabic/English PWA with right-to-left switching and lessons stored as data. I wrote the spec, then vibe-coded the MVP in Claude Code.",
    stack: ["React", "TypeScript", "Tailwind", "PWA", "Claude Code"],
    link: "[link]",
  },
  {
    name: "Underwriting prototype",
    glyph: "▦ ▦ ▦",
    kind: "Clickable prototype · 9 surfaces",
    blurb:
      "An institutional real-estate underwriting workspace covering intake, pipeline, deal room, portfolio and an AI 'Ask' panel. I built it to test flows with buyers before writing a line of production code.",
    stack: ["Figma", "Vibe-coding", "Product design"],
    link: "[link]",
  },
  {
    name: "Testify",
    glyph: "✓ ✓ ✓",
    kind: "AI product · built solo",
    blurb:
      "An AI platform that checks requirements and generates testing and development checklists. Semi-finalist in ITIDA's national competition (Egypt's Ministry of Communications).",
    stack: ["LLM", "Prompt engineering", "Figma", "Full-stack"],
    link: "[link]",
  },
  {
    name: "LLM validation harness",
    glyph: "AI ⇄ ✓",
    kind: "QA tooling",
    blurb:
      "A Selenium-driven framework that checks LLM answers against expected legal outputs, turning AI quality into a pass/fail signal for a government client.",
    stack: ["Selenium", "Python", "LLM evaluation"],
    link: "[link]",
  },
  {
    name: "This portfolio",
    glyph: "</>",
    kind: "Figma → code",
    blurb:
      "Designed, then vibe-coded in Next.js and Tailwind. The chat assistant, Blueprint map and decision simulator are all real, working components.",
    stack: ["Next.js", "Tailwind", "Claude", "Cursor"],
    link: "https://github.com/NadaAhmed97/AIProductManager",
  },
];

export const experience = [
  { when: "2026 —", org: "Smart Bricks", role: "Senior AI & Growth PM (contract)", note: "Sole PM · new B2B institutional vertical" },
  { when: "2026 —", org: "Yalla Development", role: "Senior AI PM (freelance)", note: "YallaGain AI fitness coach MVP" },
  { when: "2025 —", org: "XPay Egypt", role: "Lead Technical PM", note: "Sole PM · core migration & CBE licensing" },
  { when: "2025 —", org: "Zaffa AI", role: "Founder & CEO", note: "0→1 AI wedding planning" },
  { when: "2024 —", org: "MUAB", role: "Product Manager", note: "Sole PM · ed-tech platform · led the move into AI features. Joined as QA/QC, also covering localisation & GTM" },
  { when: "2023–24", org: "LocAI (Al71)", role: "Technical Product Lead", note: "Legal AI for MOFA & EDGE" },
  { when: "2023–24", org: "Mumzworld", role: "Product Manager", note: "Sole PM of the app · 5M+ users · QA → PM in 4 months" },
  { when: "2021–22", org: "Pleny", role: "QC Engineer → Product Manager", note: "Sole PM · heavy analytics ownership · Arabic localisation" },
  { when: "2020–24", org: "Engineering roots", role: "Software & QC Engineer", note: "Novomind, Blink 22" },
];
