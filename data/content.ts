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

// "Shipped for & with" strip. Logos load from each site's icon; drop an SVG into
// public/logos/<id>.svg and set logo: "/logos/<id>.svg" to use an official logo instead.
export const clients: { id: string; name: string; note?: string; url: string; domain: string; logo?: string }[] = [
  { id: "smartbricks", name: "Smart Bricks", note: "a16z-backed", url: "https://smart-bricks.com", domain: "smart-bricks.com" },
  { id: "law71", name: "Law71", note: "by AI71", url: "https://ai71.ai", domain: "ai71.ai" },
  { id: "mofa", name: "UAE Ministry of Foreign Affairs", url: "https://www.mofa.gov.ae", domain: "mofa.gov.ae" },
  { id: "edge", name: "EDGE Group", url: "https://edgegroup.ae", domain: "edgegroup.ae" },
  { id: "mumzworld", name: "Mumzworld", url: "https://www.mumzworld.com", domain: "mumzworld.com" },
  { id: "muab", name: "MUAB", url: "https://muab.info", domain: "muab.info" },
  { id: "xpay", name: "XPay", url: "https://xpay.app", domain: "xpay.app" },
  { id: "pleny", name: "Pleny", note: "social platform for foodies", url: "https://pleny.com", domain: "pleny.com" },
  { id: "gooding", name: "Gooding & Company", url: "https://www.goodingco.com", domain: "goodingco.com" },
  { id: "postscan", name: "PostScan Mail", url: "https://www.postscanmail.com", domain: "postscanmail.com" },
];

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
    tag: "0 → 1 · the hardest one",
    title: "Defining an AI underwriting product for institutional investors, in a domain that was new to me",
    company: "Smart Bricks · Senior AI & Growth PM",
    context:
      "Smart Bricks is an a16z-backed AI startup in Dubai building agentic AI for real-estate investing. It pivoted from retail investors to institutional capital: private-equity firms, family offices and large funds.",
    summary:
      "A new domain, few competitors (none of them public), very few requirements, and almost no real documents to learn from. I built the understanding from scratch, and my research showed the real pain wasn't speed. I changed the CEO's value proposition accordingly.",
    headline: { value: "Speed → Memory", label: "value proposition reframed, based on investor research" },
    problem:
      "Institutional underwriting was new to me and to the company. The few competitors don't sell publicly, so there was little to learn from. The CEO had very few clear requirements, and there were almost no real documents or models to study. Meanwhile the buyers (private-equity firms and funds) won't trust an AI that guesses at numbers.",
    ownership: [
      "The whole new B2B institutional vertical: project plan, requirements and roadmap, built from the ground up",
      "Discovery with many institutional investors to understand their process and pain points",
      "End-to-end flow maps, visualised in Figma, and brainstorming sessions with the team",
      "Research into probabilistic and deterministic AI agents, and requirements for agentic orchestration and deterministic financial engines",
      "A test plan built with very limited real documents and models",
      "The v1 roadmap, the competitor picture and the go-to-market plan",
    ],
    decisions: [
      {
        call: "Reframe the value proposition from 'faster underwriting' to a fund's memory and brain",
        why: "The CEO's pitch was speed, but investors told me underwriting already doesn't take long. Their real pain was keeping a 'company brain' that understands how the fund works, remembering every past deal, checking calculations and surfacing gaps and conflicts quickly, preparing memos for the investment committee, and collaborating with a full audit trail and due diligence. I made that case with evidence, not opinion.",
        tradeoff: "A hard conversation: asking the CEO to move away from the original idea.",
      },
      {
        call: "AI reasons, deterministic engines calculate, humans authorise capital",
        why: "Probabilistic agents are right for reasoning but wrong for financial figures. Deterministic engines behind every number answer the buyer's first objection: 'will it make up numbers?'",
        tradeoff: "More engineering than a pure-LLM approach, and less 'magic' in the demo.",
      },
      {
        call: "Audit the plan in several rounds before committing",
        why: "With so little external reference, I tested my own roadmap, competitor view and GTM repeatedly until each held up.",
        tradeoff: "Slower to a first 'final' plan, but far fewer surprises later.",
      },
      {
        call: "Narrow the MVP to underwriting only",
        why: "It's the most painful and most measurable workflow, which makes it the easiest to prove value on.",
        tradeoff: "Portfolio management and other surfaces stay prototype-only for now.",
      },
    ],
    delivery: [
      "Ran discovery with institutional investors and consolidated it into Product Definition v2.0",
      "Mapped the end-to-end flows and visualised them in Figma",
      "Built a clickable prototype of nine screens and a test plan despite limited real data",
      "Delivered the v1 roadmap, competitor analysis and GTM plan after several audit rounds",
      "Reframed the value proposition from speed to fund memory, collaboration and audit trail, with the CEO's agreement",
    ],
    results: [
      { value: "v1", label: "roadmap, PRD, prototype and GTM ready" },
      { value: "[X]", label: "institutional investors interviewed" },
    ],
    learned:
      "In a new domain, humility is a method: talk to the people who do the work, research until the picture holds, and then be confident enough to change the plan, even the CEO's.",
  },
  {
    id: "yallagain",
    theme: "0 → 1",
    tag: "0 → 1 · led and built",
    title: "Taking an AI fitness coach from MVP to in-house product, and building the app myself",
    company: "YallaGain · Senior AI PM",
    context:
      "YallaGain is one of the UAE's first AI-powered fitness-coach platforms, with adaptive workout plans, AI progress tracking and conversational coaching.",
    summary:
      "When I joined, development was outsourced and the vendor kept missing deliveries. I fought to bring development in-house, and we did. I also built the mobile web app myself and worked hands-on on the AI avatar and form correction.",
    headline: { value: "In-house", label: "development brought in after I made the case" },
    problem:
      "The MVP depended on an outsourced development company that failed to deliver several times. Every delay pushed the launch back, and the product's most important parts, AI personalisation and movement correction, were too core to leave with a partner who couldn't deliver.",
    ownership: [
      "The end-to-end MVP launch: roadmap, discovery, build and go-to-market",
      "AI personalisation: adaptive workout plans, AI progress tracking and conversational coaching",
      "The user journey from onboarding and goal-setting to daily engagement and retention, with AI nudges at each stage",
      "Building the mobile web app myself with Figma Make, Copilot and Supabase",
      "Hands-on work on the digital-twin avatar and movement correction, using body joint-point analysis",
    ],
    decisions: [
      {
        call: "Bring development in-house instead of staying with the outsourced vendor",
        why: "The vendor had failed to deliver several times, and the core of the product couldn't depend on a partner that kept missing. I pushed hard for this decision, using the delivery record as evidence, and we built in-house.",
        tradeoff: "Short-term cost and effort to set up in-house capability, and a difficult conversation with leadership.",
      },
      {
        call: "Build the mobile web app myself while the team was being set up",
        why: "Using Figma Make, Copilot and Supabase, I could get a working product in front of users without waiting.",
        tradeoff: "My time went into building as well as managing.",
      },
      {
        call: "Put AI nudges at every stage of the journey",
        why: "Fitness apps lose people in the first weeks, so onboarding, goal-setting and daily habits each needed a reason to come back.",
        tradeoff: "More journey design and more behaviour to track.",
      },
    ],
    delivery: [
      "Moved development in-house after the outsourced vendor's repeated delivery failures",
      "Built the mobile web app end to end with Figma Make, Copilot and Supabase",
      "Worked on the digital-twin avatar and joint-point-based movement correction",
      "Designed the journey, referral loops and activation triggers, tracked through activation, engagement, AI-feature adoption and retention cohorts",
    ],
    results: [
      { value: "In-house", label: "development team, replacing the failing vendor" },
      { value: "1", label: "mobile web app built by me" },
    ],
    learned:
      "Owning the outcome sometimes means challenging how the work gets done, not just what gets built. If a partner keeps failing, fixing that is the product decision.",
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
    id: "muab-ai",
    theme: "0 → 1",
    tag: "Bringing AI into a platform",
    title: "Growing an ed-tech platform into an AI-enabled one",
    company: "MUAB · Product Manager",
    context:
      "MUAB is an ed-tech platform in Saudi Arabia that connects creators, institutions and learners, where creators sell courses and digital products.",
    summary:
      "I pushed for AI and introduced it into the platform and its user journeys: an AI assistant to help creators build courses, AI-powered flagging of content and users, and a scoring system that feeds the recommendation engine.",
    headline: { value: "AI-first", label: "assistant, flagging and recommendation scoring" },
    problem:
      "Creators found it slow and hard to turn their knowledge into digital courses. As the platform grew, reviewing content and users by hand couldn't keep up, and the recommendation engine had no reliable signal about quality, only raw activity.",
    ownership: [
      "Making the case for AI and bringing it into the platform and its journeys",
      "Planning MUAB's AI assistant, which helps creators build their digital courses",
      "An AI-powered flagging system for content and users",
      "A scoring system, based on user behaviour and content quality, that feeds the recommendation engine",
    ],
    decisions: [
      {
        call: "Start with creators: an AI assistant that helps build courses",
        why: "A marketplace grows when supply is easy to create. Lowering the effort to publish a course grows everything downstream.",
        tradeoff: "Learner-facing AI features came second.",
      },
      {
        call: "Use AI to flag content and users, with people making the final call",
        why: "Manual review couldn't scale, but automatic removal would be risky for a platform accountable for creators' credibility.",
        tradeoff: "A human review step stays in the loop.",
      },
      {
        call: "Score quality as well as behaviour before feeding recommendations",
        why: "Recommending only on clicks rewards whatever is popular. Adding quality means learners are shown content that's actually good.",
        tradeoff: "A more complex scoring model to design and tune.",
      },
    ],
    delivery: [
      "Introduced AI into the platform and its core user journeys",
      "Planned the rollout of the AI course-creation assistant for creators",
      "Designed the AI flagging system for content and users",
      "Built the scoring model that feeds the recommendation engine",
    ],
    results: [
      { value: "3", label: "AI capabilities introduced: assistant, flagging, scoring" },
    ],
    learned:
      "AI earns its place when it removes the bottleneck the business actually has. For a marketplace, that's making supply easy and quality visible.",
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
      "The PRD had drifted far from what the CEO wanted. I rewrote it across nine feature areas, rebuilt it live as the CEO changed direction, and pushed back where the logic didn't hold.",
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
    id: "mumzworld",
    theme: "No playbook",
    tag: "Documentation at scale",
    title: "Documenting a 5M-user app that had never been documented, during a platform migration",
    company: "Mumzworld · Product Manager",
    context:
      "Mumzworld is the largest e-commerce platform for mothers and families in the Middle East, live for many years with over 5 million active users.",
    summary:
      "I joined a mature app with no documentation at all, in the middle of a move from Magento 1 to Magento 2. I documented the whole app end to end and mapped every integration and dependency.",
    headline: { value: "0 → full", label: "end-to-end app documentation" },
    problem:
      "The app had been live for years with 5M+ users but had no documentation. Knowledge lived in people's heads. At the same time the platform was moving from Magento 1 to Magento 2, and the app depended on many connected tools: Blueshift, Mixpanel, Google Analytics, Firebase and more. Nobody could say with confidence what would break if one part changed.",
    ownership: [
      "Full end-to-end documentation of the app, written from scratch",
      "How-to guides for every integrated tool, including how each one behaved across the Magento 1 → 2 migration",
      "Dependency charts showing how all the connected parts of the system rely on each other",
      "A new-hire onboarding process built on that documentation",
    ],
    decisions: [
      {
        call: "Document the system before changing it",
        why: "A migration without a map is guesswork. Knowing every dependency first made the risks visible before they became incidents.",
        tradeoff: "Time spent writing instead of shipping features in my first months.",
      },
      {
        call: "Map dependencies visually, not only in text",
        why: "With this many integrations, a chart shows in seconds what pages of text can't: what breaks if this changes.",
        tradeoff: "Charts have to be kept current as the system changes.",
      },
      {
        call: "Write for the next person, not just for me",
        why: "Documentation only matters if a new engineer or PM can pick it up and work from it.",
        tradeoff: "More effort per page, but it turned into our onboarding process.",
      },
    ],
    delivery: [
      "Documented the app end to end",
      "Wrote usage guides for Blueshift, Mixpanel, Google Analytics, Firebase and other integrations",
      "Built dependency charts for the connected systems during the Magento 1 → 2 move",
      "Used the documentation to create the team's onboarding and new-hire ramp-up",
    ],
    results: [
      { value: "5M+", label: "users on the app I documented" },
      { value: "1", label: "single source of truth for the app" },
    ],
    learned:
      "You can't safely change a system you can't explain. Documentation isn't admin work; it's how a team gets its memory back.",
  },
  {
    id: "pleny",
    theme: "Data & quality",
    tag: "Analytics from zero",
    title: "Introducing product analytics to a rebranded social app",
    company: "Pleny · QC Engineer → Product Manager",
    context:
      "Pleny is a social network for food lovers across Egypt, the UAE and Saudi Arabia, where people share meals, find restaurants and follow other foodies. It had just rebranded from its earlier product, Qurba.",
    summary:
      "After a full rebrand, the team knew almost nothing about who its new users were or how they behaved. I introduced product analytics with Mixpanel, and single-handedly localised the whole platform into Arabic.",
    headline: { value: "Mixpanel", label: "analytics introduced from scratch" },
    problem:
      "A rebrand resets what you know. The product had a new name, new positioning and new users, but no reliable way to see who they were, how they used the app, or where they dropped off.",
    ownership: [
      "Introducing product analytics to the company",
      "Choosing what to track and defining the events",
      "Setting up Mixpanel and the reports the team used",
      "The full Arabic localisation of the platform, on my own",
    ],
    decisions: [
      {
        call: "Track as much user detail as possible early on",
        why: "Right after a rebrand, every assumption about the audience needed checking against what users actually did.",
        tradeoff: "More events to define and maintain.",
      },
      {
        call: "Use Mixpanel for event-based product analytics",
        why: "A social app is about behaviour (posting, following, searching), which event-based analytics captures better than page views.",
        tradeoff: "Setup time and discipline in naming events.",
      },
    ],
    delivery: [
      "Defined the tracking plan for the rebranded app",
      "Set up Mixpanel and the team's core reports",
      "Gave product decisions a data foundation for the first time",
      "Localised the entire platform into Arabic, single-handedly",
    ],
    results: [
      { value: "1st", label: "product analytics setup at the company" },
      { value: "100%", label: "of the platform localised to Arabic, solo" },
    ],
    learned:
      "After a rebrand, your old knowledge about users expires. Instrument early so you learn who your new users really are.",
  },
  {
    id: "novomind",
    theme: "No playbook",
    tag: "Delivery system design",
    title: "Building a delivery system that measured quality, not just speed",
    company: "Novomind iShop · Agile & QA Process Manager",
    context:
      "Novomind is a German e-commerce software company. Its iShop teams were growing and needed a delivery process that worked for bigger teams.",
    summary:
      "I joined to run agile and QA processes. I automated Jira reporting from scratch, introduced rotating squads based on Spotify's model, and designed a weighted quality score to show where our work was slipping.",
    headline: { value: "Squads", label: "Spotify-style rotating squad model introduced" },
    problem:
      "Management had no reliable view of team velocity, capacity or quality, and pulling reports took manual effort. The process that worked for small teams was breaking as teams grew, and 'quality' was judged by feel.",
    ownership: [
      "Velocity and capacity reporting for management",
      "Jira automation, built from scratch, to calculate and produce those reports",
      "Planning poker sessions for estimation",
      "A new process for larger teams, including rotating squads",
      "A weighted quality score across sprint points, capacity, velocity, bugs raised, points completed and bug severity",
    ],
    decisions: [
      {
        call: "Automate reporting inside Jira instead of building spreadsheets",
        why: "Reports that build themselves stay accurate and free the team from manual admin.",
        tradeoff: "Upfront effort to set up the automation properly.",
      },
      {
        call: "Rotating squads, based on Spotify's model",
        why: "Rotation spreads knowledge across the team, reduces single points of failure, and keeps bigger teams working like small ones.",
        tradeoff: "Some ramp-up time each time people rotate.",
      },
      {
        call: "Measure quality with a weighted score, not one metric",
        why: "Velocity alone rewards speed. Weighting bugs and their severity against points delivered shows whether we're getting better or just faster.",
        tradeoff: "A more complex metric that needed explaining and agreement.",
      },
    ],
    delivery: [
      "Automated Jira to produce velocity, capacity and quality reports",
      "Ran planning poker sessions with the teams",
      "Designed and rolled out the rotating squad process",
      "Introduced the weighted quality score to guide improvement",
    ],
    results: [
      { value: "0", label: "manual reporting after automation" },
      { value: "6", label: "signals weighted into one quality score" },
    ],
    learned:
      "What you measure shapes how teams behave. Measure only speed and you get speed; measure quality and you get better work.",
  },
  {
    id: "law71",
    theme: "Stakeholders",
    tag: "Arabic AI · government",
    title: "Making a legal AI work as well in Arabic as in English, for a ministry and a defence group",
    company: "Law71 by AI71 · Technical Product Lead / Scrum Master",
    context:
      "Law71 is a legal AI platform built by AI71, an Abu Dhabi AI company. It was adopted by the UAE Ministry of Foreign Affairs and EDGE Group, a UAE defence group. Wrong answers in legal work aren't an option.",
    summary:
      "I was the only Arabic speaker on the team. I worked with the head of product to make the Arabic portal as good as the English one, and built an AI testing framework that checked every answer and showed where documents were missing.",
    headline: { value: "A+", label: "quality bar held in Arabic and English" },
    problem:
      "Arabic AI is much harder than English AI. There are many dialects, the data needs far more cleaning, and search and retrieval (the vector and RAG layers that find the right documents) behave differently in Arabic. Government and defence clients expected the Arabic portal to be every bit as accurate as the English one, and nobody else on the team could read it.",
    ownership: [
      "Arabic quality of the whole product, as the only Arabic speaker on the team",
      "Working with the head of product to bring the Arabic portal to parity with English",
      "An AI automation framework I built to test the quality of LLM answers",
      "Localisation, plus how-to guides and demos for stakeholders and the business development team",
      "Sprint delivery across government, legal and defence stakeholders, as Scrum Master",
    ],
    decisions: [
      {
        call: "Hold Arabic to the same bar as English, not 'good enough'",
        why: "For a UAE ministry, Arabic is the primary language, not a translation. A weaker Arabic portal would have undermined trust in the whole product.",
        tradeoff: "Much more work on data cleaning, dialects and retrieval than an English-only launch.",
      },
      {
        call: "Automate answer checking instead of reviewing by hand",
        why: "I built a framework that scored LLM answers for quality, relevance and correctness, in both languages, and flagged every issue. Quality became evidence, not opinion.",
        tradeoff: "Time spent building test tooling before new features.",
      },
      {
        call: "Use test failures to find missing data, not only bad answers",
        why: "Many wrong answers came from documents the system didn't have. The framework pointed out those gaps, so we fixed the cause, not just the symptom.",
        tradeoff: "Extra work sourcing and preparing documents.",
      },
    ],
    delivery: [
      "Brought the Arabic portal to the same quality as English with the head of product",
      "Built the automated LLM evaluation framework for quality, relevance and correctness",
      "Surfaced gaps in the document library so the team could fill them",
      "Handled localisation and created product guides and demos for stakeholders and business development",
      "Delivered a platform adopted by UAE MOFA and EDGE Group",
    ],
    results: [
      { value: "2", label: "government-grade clients (MOFA, EDGE)" },
      { value: "AR = EN", label: "Arabic portal at parity with English" },
    ],
    learned:
      "In Arabic AI, quality is hidden in the details only a native speaker can see. Owning it meant being the team's eyes and building tools so nobody had to guess.",
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
      "Setting up the product operating system from scratch: full documentation, PRDs, Linear connected to GitHub, and feedback triage connected to Slack",
      "Introducing PostHog and setting it up fully, plus Arabic localisation",
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
        call: "Build the operating system before scaling the team's output",
        why: "With no process, work got lost between people. I set up Linear connected to GitHub so every change traced back to a ticket, and built triage flows connected to Slack so feedback from clients and other teams landed in one place instead of in DMs.",
        tradeoff: "Some early friction while engineers and stakeholders adopted the new flow.",
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
      "Introduced full product documentation",
      "Set up Linear for the dev team and connected it to GitHub, so code changes followed a traceable process",
      "Built feedback triage connected to Slack for external clients and internal teams",
      "Introduced PostHog and set it up fully: funnels, feature flags and A/B tests (alongside Mixpanel)",
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

export type BuildCategory = "Customer success" | "Growth & marketing" | "Data & ops" | "Team bots" | "Product";
export const buildCategories: BuildCategory[] = ["Customer success", "Growth & marketing", "Data & ops", "Team bots", "Product"];

export type Build = {
  name: string;
  glyph: string;
  kind: string;
  category: BuildCategory;
  where?: string;
  featured?: boolean;
  blurb: string;
  stack: string[];
  link: string;
};

// "Vibe-coded" means I built it myself with AI coding tools (Claude Code, Cursor, etc.).
export const builds: Build[] = [
  {
    name: "CS command centre",
    glyph: "◎ → ✆",
    kind: "Admin dashboard · vibe-coded",
    category: "Customer success",
    where: "Smart Bricks",
    featured: true,
    blurb:
      "Shows the customer success team every user: what they've done on the platform, their top journeys, and the next-best action for approaching them. AI writes a tailored set of questions for each user based on their behaviour and persona. It also tracks whether and how often CS has reached out, places each user in a cohort (dormant, high-intent and so on), and links them to the marketing campaign that brought them in.",
    stack: ["Vibe-coded", "PostHog", "LLM", "Cohorts"],
    link: "[link]",
  },
  {
    name: "Call insights",
    glyph: "◖ ⟶ ≡",
    kind: "AI tool · vibe-coded",
    category: "Customer success",
    where: "Smart Bricks",
    featured: true,
    blurb:
      "The team uploads recordings of customer calls. AI transcribes them and produces one report of the collective feedback and pain points for Operations.",
    stack: ["Vibe-coded", "Speech-to-text", "LLM"],
    link: "[link]",
  },
  {
    name: "Metrics watchdog",
    glyph: "∿ ! ∿",
    kind: "Automation · PostHog → Sheets → Slack",
    category: "Data & ops",
    where: "Smart Bricks",
    featured: true,
    blurb:
      "Scripts that pull metrics on their own, calculate changes, flag important dips and spikes, suggest next-best actions, and post it all to a dedicated Slack channel.",
    stack: ["PostHog", "Apps Script", "Google Sheets", "Slack"],
    link: "[link]",
  },
  {
    name: "Guided product tour",
    glyph: "① ② ③",
    kind: "In-product onboarding · vibe-coded A–Z",
    category: "Growth & marketing",
    where: "Smart Bricks",
    featured: true,
    blurb: "A guided tour inside the platform that walks new users through the product, built by me from start to finish.",
    stack: ["Vibe-coded", "Onboarding", "Activation"],
    link: "[link]",
  },
  {
    name: "Decision log listener",
    glyph: "◉ ◉ → ✎",
    kind: "AI tool",
    category: "Data & ops",
    featured: true,
    blurb:
      "Listens to meetings, notes, Slack and 1:1s and keeps a running log of every decision made, so nobody has to remember who decided what and why.",
    stack: ["LLM", "Slack", "Meeting notes"],
    link: "[link]",
  },
  {
    name: "AI marketing content engine",
    glyph: "▣ → ✦",
    kind: "AI tool",
    category: "Growth & marketing",
    where: "Smart Bricks",
    blurb:
      "Takes fresh platform screenshots from a Google Drive that Claude keeps up to date automatically, and turns them into marketing content for the marketing team.",
    stack: ["Claude", "Google Drive", "Content generation"],
    link: "[link]",
  },
  {
    name: "Email campaigns & product sequence",
    glyph: "✉ ✉ ✉",
    kind: "Lifecycle marketing",
    category: "Growth & marketing",
    where: "Smart Bricks",
    blurb:
      "Email campaigns that increased click-through rates, and an email sequence that explains the product to new users step by step.",
    stack: ["Email", "Lifecycle", "Copy"],
    link: "[link]",
  },
  {
    name: "Wearing the marketing hat",
    glyph: "✦ ✦",
    kind: "Growth · alongside marketing",
    category: "Growth & marketing",
    where: "Smart Bricks",
    blurb:
      "Product-focused social media posts, reviews of marketing blog posts, and UTM campaign analytics tracked side by side with the marketing team.",
    stack: ["Social", "Content", "UTM", "Analytics"],
    link: "[link]",
  },
  {
    name: "Company playbook",
    glyph: "▤ ▤",
    kind: "Operating documentation",
    category: "Growth & marketing",
    where: "Smart Bricks",
    blurb: "A company playbook that captures how Smart Bricks works, sells and supports its customers.",
    stack: ["Documentation", "GTM"],
    link: "[link]",
  },
  {
    name: "Kudos bot",
    glyph: "★ ★ ★",
    kind: "Slack bot",
    category: "Team bots",
    blurb: "A Slack bot that lets the team give kudos to people who did a great job, to lift the team's spirit.",
    stack: ["Slack", "Bot"],
    link: "[link]",
  },
  {
    name: "Competitor intel bot",
    glyph: "◐ ⌕",
    kind: "Slack bot · weekly",
    category: "Team bots",
    blurb: "Sweeps the market every week for competitor news and posts the most important updates to the team.",
    stack: ["Slack", "LLM", "Web research"],
    link: "[link]",
  },
  {
    name: "Feedback-to-Jira bot",
    glyph: "✉ → ▥",
    kind: "Slack bot",
    category: "Team bots",
    blurb: "Picks up feedback shared in Slack and automatically creates tickets for it in a dedicated Jira backlog.",
    stack: ["Slack", "Jira", "Automation"],
    link: "[link]",
  },
  {
    name: "Metrics pipeline",
    glyph: "∑ → ▤",
    kind: "Data automation · Apps Script",
    category: "Data & ops",
    where: "Smart Bricks",
    blurb:
      "Pulls product analytics into automated weekly, monthly, CTA and UTM reports. It's on v11.5+ and replaced all manual reporting.",
    stack: ["Apps Script", "PostHog", "SQL", "Google Sheets"],
    link: "[link]",
  },
  {
    name: "Jira reporting automation",
    glyph: "⚙ → ▥",
    kind: "Process automation",
    category: "Data & ops",
    where: "Novomind",
    blurb:
      "Jira automations built from scratch to calculate velocity, capacity and a weighted quality score, so management reports produce themselves.",
    stack: ["Jira", "Automation rules", "Agile metrics"],
    link: "[link]",
  },
  {
    name: "Dependency maps",
    glyph: "◉—◉—◉",
    kind: "Systems documentation",
    category: "Data & ops",
    where: "Mumzworld",
    blurb:
      "Charts of how a 5M-user app's integrations (Magento, Blueshift, Mixpanel, GA, Firebase) depend on each other, made during a platform migration.",
    stack: ["Systems mapping", "Magento", "Integrations"],
    link: "[link]",
  },
  {
    name: "AI flagging & recommendation scoring",
    glyph: "⚑ → ★",
    kind: "AI systems design",
    category: "Product",
    where: "MUAB",
    blurb:
      "An AI-powered system that flags risky content and users, and a scoring model combining user behaviour and content quality that feeds the recommendation engine.",
    stack: ["LLM", "Moderation", "Recommendations", "Scoring"],
    link: "[link]",
  },
  {
    name: "YallaGain mobile web app",
    glyph: "▯ ⚡",
    kind: "Full app · Figma Make + Copilot + Supabase",
    category: "Product",
    where: "YallaGain",
    featured: true,
    blurb:
      "I built the whole mobile web app for YallaGain, an AI fitness-coach platform in the UAE, using Figma Make for design, Copilot for code and Supabase for the back end.",
    stack: ["Figma Make", "Copilot", "Supabase", "Mobile web"],
    link: "[link]",
  },
  {
    name: "Digital-twin avatar & form correction",
    glyph: "⟟ ⟲ ⟟",
    kind: "Computer vision · hands-on",
    category: "Product",
    where: "YallaGain",
    blurb:
      "Worked hands-on on a digital-twin avatar that mirrors the user's workout, and on movement correction: analysing body joint points to spot bad form and correct it.",
    stack: ["Pose estimation", "Joint-point analysis", "Avatar"],
    link: "[link]",
  },
  {
    name: "Aria",
    glyph: "◈ AI",
    kind: "Real-estate intelligence agent · hackathon",
    category: "Product",
    where: "Smart Bricks hackathon",
    blurb:
      "An AI agent that analyses your property portfolio, market comparables and market shifts, and helps you make the right investment decisions. Built for the Smart Bricks hackathon.",
    stack: ["AI agent", "Market data", "Portfolio analysis"],
    link: "[link]",
  },
  {
    name: "Platform features & Figma designs",
    glyph: "◧ → </>",
    kind: "Hands-on with the dev team",
    category: "Product",
    where: "Smart Bricks",
    blurb: "Full designs in Figma, and several areas of the platform vibe-coded hands-on alongside the engineering team.",
    stack: ["Figma", "Vibe-coded", "Product design"],
    link: "[link]",
  },
  {
    name: "Underwriting prototype",
    glyph: "▦ ▦ ▦",
    kind: "Clickable prototype · 9 screens",
    category: "Product",
    where: "Smart Bricks",
    blurb:
      "An institutional underwriting workspace covering intake, pipeline, deal room, portfolio and an AI 'Ask' panel, built to test flows with investors before production code.",
    stack: ["Figma", "Vibe-coded", "Product design"],
    link: "[link]",
  },
  {
    name: "Zeki",
    glyph: "ع / A",
    kind: "Kids' AI-literacy app · built solo",
    category: "Product",
    featured: true,
    blurb:
      "Bilingual Arabic/English PWA with right-to-left switching and lessons stored as data. I wrote the spec, then vibe-coded the MVP in Claude Code.",
    stack: ["React", "TypeScript", "Tailwind", "PWA", "Claude Code"],
    link: "[link]",
  },
  {
    name: "LLM validation harness",
    glyph: "AI ⇄ ✓",
    kind: "QA tooling",
    category: "Product",
    where: "Law71",
    blurb:
      "An AI automation framework that scores LLM answers for quality, relevance and correctness in Arabic and English, and flags where documents are missing.",
    stack: ["Selenium", "Python", "LLM evaluation", "RAG", "Arabic NLP"],
    link: "[link]",
  },
  {
    name: "Testify",
    glyph: "✓ ✓ ✓",
    kind: "AI product · built solo",
    category: "Product",
    blurb:
      "Takes in user stories, Jira links and documents, and helps three people at once. For the product owner, it finds gaps in stories and requirements and helps resolve them. For developers, it builds a pre-development checklist and proposes a technical approach. For QA, it writes the test cases. Semi-finalist in ITIDA's national competition (Egypt's Ministry of Communications).",
    stack: ["LLM", "Jira", "Prompt engineering", "Full-stack"],
    link: "[link]",
  },
  {
    name: "This portfolio",
    glyph: "</>",
    kind: "Figma → code",
    category: "Product",
    blurb:
      "Designed, then vibe-coded in Next.js and Tailwind. The walkthrough, chat assistant, Blueprint map, stop-motion and decision simulator are all real, working components.",
    stack: ["Next.js", "Tailwind", "Claude", "Cursor"],
    link: "https://github.com/NadaAhmed97/AIProductManager",
  },
];

export const experience = [
  { when: "2026 —", org: "Smart Bricks", role: "Senior AI & Growth PM (contract)", note: "Sole PM · new B2B institutional vertical · also wore the marketing and CS hats, and vibe-coded internal tools and bots" },
  { when: "2026 —", org: "Yalla Development", role: "Senior AI PM (freelance)", note: "YallaGain AI fitness coach · moved dev in-house · built the mobile web app myself · digital-twin avatar and movement correction" },
  { when: "2025 —", org: "XPay Egypt", role: "Lead Technical PM", note: "Sole PM · core migration & CBE licensing · built the product operating system (docs, Linear + GitHub, Slack triage, PostHog)" },
  { when: "2025 —", org: "Zaffa AI", role: "Founder & CEO", note: "0→1 AI wedding planning" },
  { when: "2024 —", org: "MUAB", role: "Product Manager", note: "Sole PM · brought AI into the platform: creator assistant, AI flagging, recommendation scoring. Joined as QA/QC, also covering localisation & GTM" },
  { when: "2023–24", org: "LocAI (acquired by AI71)", role: "Technical Product Lead", note: "Only Arabic speaker on the team · Arabic portal at parity with English · built the LLM testing framework" },
  { when: "2023–24", org: "Mumzworld", role: "Product Manager", note: "Sole PM of the app · 5M+ users · documented it end to end · QA → PM in 4 months" },
  { when: "2024", org: "Novomind iShop", role: "Agile & QA Process Manager", note: "Jira automation · rotating squads · weighted quality score" },
  { when: "2021–22", org: "Pleny", role: "QC Engineer → Product Manager", note: "Sole PM · introduced Mixpanel analytics after the rebrand · localised the whole platform to Arabic solo" },
  { when: "2020–21", org: "Engineering roots", role: "Software Engineer & Teaching Assistant", note: "Blink 22 · Alexandria University" },
];
