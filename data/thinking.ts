// How Nada thinks: operating principles, each backed by a real example from her work.
// caseId links to a case study in data/content.ts (opens its drawer).

export type Principle = {
  id: string;
  principle: string;
  oneLiner: string;
  project: string;
  situation: string;
  move: string[];
  why: string;
  caseId?: string;
};

export const principles: Principle[] = [
  {
    id: "trust",
    principle: "Trust is the product",
    oneLiner: "AI reasons. Deterministic engines calculate. Humans decide.",
    project: "Smart Bricks · AI underwriting for institutional investors",
    situation:
      "Private-equity firms and funds were the target buyers, and they won't tolerate an AI that guesses at numbers. One invented figure and they'd never trust the product again.",
    move: [
      "Found through investor interviews that the real need wasn't speed but trust and memory: checked calculations, surfaced conflicts and a full audit trail",
      "Designed the product so the AI never produces a financial number itself",
      "Put deterministic financial engines behind every figure and kept a human approval step before capital moves",
      "Applied the same idea at Law71, where I built a framework that scored every AI answer for quality, relevance and correctness",
    ],
    why: "In high-stakes products, deciding what the AI must never do matters more than any feature.",
    caseId: "underwriting",
  },
  {
    id: "ruler",
    principle: "Fix the ruler before you read it",
    oneLiner: "Being data-driven means nothing if nobody trusts the data.",
    project: "Smart Bricks · product analytics",
    situation:
      "Leadership was making decisions from dashboards nobody trusted. 'Active user' had no definition, internal traffic inflated the numbers, and some sign-ups never showed up at all.",
    move: [
      "Wrote the company's metric definitions: one agreed set of events that counts as 'active'",
      "Coded the reporting pipeline myself and fixed three silent data bugs underneath it",
      "Once the data was trustworthy, it exposed a funnel dropping to zero, which I traced to a broken lead form",
      "Earlier, at Pleny, introduced Mixpanel analytics after a rebrand, when the team knew almost nothing about its new users",
    ],
    why: "The highest-leverage product work is sometimes invisible: making sure everyone argues from the same numbers.",
    caseId: "analytics",
  },
  {
    id: "reversible",
    principle: "Make every step reversible",
    oneLiner: "When real money is moving, the customer should never feel the change.",
    project: "XPay · payment gateway core migration",
    situation:
      "The gateway's financial core had to be rebuilt and every merchant moved to a new platform, while live clients kept processing real payments.",
    move: [
      "Migrated in stages with the old and new systems running side by side, so any step could be rolled back",
      "Started with the most sensitive merchants and checked every account by hand with temporary access",
      "Reached out to merchants personally with Customer Success and Business Development before they noticed anything",
    ],
    why: "Risk isn't removed by being careful once. It's removed by designing a process where mistakes are cheap.",
    caseId: "xpay",
  },
  {
    id: "map",
    principle: "Map the system before you change it",
    oneLiner: "You can't safely change what you can't explain.",
    project: "Mumzworld · 5M-user app, Magento 1 → 2 migration",
    situation:
      "I joined an app that had been live for years with no documentation at all, just as the platform was moving to Magento 2 with many connected tools depending on it.",
    move: [
      "Documented the whole app end to end, from scratch",
      "Wrote how-to guides for every integration: Blueshift, Mixpanel, Google Analytics, Firebase and more",
      "Built dependency charts so everyone could see what breaks if one part changes",
    ],
    why: "Documentation is how a team gets its memory back, and it turns a risky migration into a planned one.",
    caseId: "mumzworld",
  },
  {
    id: "system",
    principle: "Build the operating system first",
    oneLiner: "Before a team can move fast, work has to stop getting lost.",
    project: "XPay · payment gateway",
    situation:
      "As the only PM, I found no documentation, no shared process, and feedback from clients and other teams arriving everywhere: chats, calls, DMs.",
    move: [
      "Wrote full product documentation",
      "Set up Linear for the dev team and connected it to GitHub, so every change traced back to a ticket",
      "Built triage flows connected to Slack, so all external and internal feedback landed in one place",
      "Introduced PostHog and set it up fully, so decisions came from data",
    ],
    why: "Process isn't bureaucracy when it's designed well. It's what lets a small team handle a lot without dropping anything.",
    caseId: "xpay",
  },
  {
    id: "measure",
    principle: "Measure what you want more of",
    oneLiner: "Measure only speed and you get speed. Measure quality and you get better work.",
    project: "Novomind iShop · delivery process",
    situation:
      "Teams were growing, reporting was manual, and quality was judged by feel. Velocity alone was rewarding speed over good work.",
    move: [
      "Automated Jira from scratch to produce velocity and capacity reports",
      "Designed a weighted quality score combining points, capacity, velocity, bugs raised and bug severity",
      "Introduced rotating squads, based on Spotify's model, so bigger teams kept working like small ones",
    ],
    why: "Metrics shape behaviour. Choosing what to measure is a product decision about the team itself.",
    caseId: "novomind",
  },
  {
    id: "blast",
    principle: "Prioritise by blast radius",
    oneLiner: "The scariest bug isn't the loudest one.",
    project: "MUAB · pre-launch platform audit",
    situation:
      "More than 130 tickets per sprint, and nobody had checked whether money actually reached creators. Cosmetic bugs and business-critical failures sat in the same backlog.",
    move: [
      "Traced the real money and login flows myself instead of trusting ticket status",
      "Put payments, checkout and security ahead of everything visual",
      "Presented related payment failures to the CEO as one launch blocker, not three separate tickets",
    ],
    why: "How you frame a finding determines whether leadership acts on it.",
    caseId: "audit",
  },
  {
    id: "visible",
    principle: "Make the decision visible, then decide together",
    oneLiner: "Founders don't need convincing. They need to see the trade-off.",
    project: "MUAB · PRD rewrite with the CEO",
    situation:
      "The real roadmap lived in the founder's head. The written spec had drifted so far that engineering was building against outdated decisions.",
    move: [
      "Rewrote the full PRD, then rebuilt it live in the room as the CEO changed five decisions",
      "Pushed back on capping learner interests, and the decision was reversed",
      "Added change logs to the document so engineering could see what changed and why",
    ],
    why: "Aligning stakeholders is less about winning arguments and more about making change cheap and visible.",
    caseId: "prd",
  },
  {
    id: "credible",
    principle: "Launch with the minimum credible data",
    oneLiner: "Market entry is a data problem before it's a product problem.",
    project: "Smart Bricks · UK market entry",
    situation:
      "The UAE product depended on rich property data that barely exists in the UK, and there was pressure to launch fast anyway.",
    move: [
      "Researched UK public sale-price records myself and confirmed they were enough for valuations and trends",
      "Let users fill in data the platform didn't have, choosing speed over completeness",
      "Pushed for one shared product core with per-country settings, so the next market is configuration rather than a rebuild",
    ],
    why: "Don't wait for perfect data. Find the smallest amount that makes the product believable, then launch.",
    caseId: "uk",
  },
  {
    id: "scope",
    principle: "Scope is a strategy",
    oneLiner: "What I leave out is a decision, not a compromise.",
    project: "Zeki · kids' AI-literacy app (built solo)",
    situation:
      "As a team of one, every piece of infrastructure I added was time not spent getting the product in front of a child.",
    move: [
      "No live AI calls, no backend and no native app in version one",
      "Stored lessons as data, so new lessons ship without touching the code",
      "At Smart Bricks, narrowed the institutional MVP to underwriting only: the most painful and most measurable workflow",
    ],
    why: "Early products die from too much scope, not too little.",
    caseId: "zeki",
  },
  {
    id: "first-user",
    principle: "Be the first user",
    oneLiner: "The fastest feedback loop is a problem you're living.",
    project: "Zaffa AI · AI wedding planner",
    situation:
      "I was planning my own wedding and nothing on the market handled both the logistics and the emotional weight of it.",
    move: [
      "Built the tools I needed myself: dream boards, invitations, seating plans",
      "Designed Nour, an AI planner with a persona, because people open up to a planner rather than a checklist",
      "Tested every feature against a real wedding: mine",
    ],
    why: "Living the problem gives you insights no discovery interview can.",
    caseId: "zaffa",
  },
  {
    id: "language",
    principle: "Language is product, not translation",
    oneLiner: "Arabic users deserve a product designed for them, not one that's been translated.",
    project: "Every product I've joined · Law71, XPay, Pleny and more",
    situation:
      "In MENA, Arabic support is often added late and treated as a translation task. That's where products lose trust with users and governments.",
    move: [
      "Owned Arabic localisation on every product I joined",
      "At Law71, as the only Arabic speaker, brought the Arabic legal-AI portal to parity with English, despite dialects, messier data and different retrieval behaviour",
      "Built an automated framework that scored AI answers in both languages and flagged missing documents",
      "At Pleny, localised the entire platform into Arabic on my own",
    ],
    why: "For government and regional products, language quality is part of whether people trust the product.",
    caseId: "law71",
  },
];
