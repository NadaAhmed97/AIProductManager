// Present mode: a guided interview walkthrough. Each chapter answers one question
// hiring teams ask about 0→1 PMs: lead with the answer, give one example, finish with the outcome.
// caseId opens the full case study behind the example.

export type TourChapter = {
  id: string;
  kind: "intro" | "answer" | "blueprint" | "close";
  question?: string;
  answer?: string;
  example?: {
    project: string;
    problem: string;
    owned: string;
    decided: string;
    delivered: string;
    outcome: string;
  };
  alsoSee?: string[];
  caseId?: string;
};

export const tour: TourChapter[] = [
  { id: "intro", kind: "intro" },
  {
    id: "zero-to-one",
    kind: "answer",
    question: "A product you personally took from 0 to 1",
    answer:
      "I took an AI underwriting product for institutional investors from a founder's PRD to a buyer-tested definition and a working prototype, and I was the only owner.",
    example: {
      project: "Smart Bricks · AI underwriting for private-equity firms and funds",
      problem: "After a pivot to institutional capital there was no spec, no validated buyer, and buyers who won't trust an AI that guesses at numbers.",
      owned: "The whole new B2B vertical: project plan, requirements, discovery and prototype.",
      decided: "AI reasons, deterministic engines calculate, humans authorise capital. And I narrowed the MVP to underwriting only.",
      delivered: "Product Definition v2.0, a versioned MVP PRD and a nine-screen clickable prototype I built myself.",
      outcome: "A stakeholder-ready product that answers the buyer's trust objection before they raise it.",
    },
    alsoSee: ["Zaffa AI: founded it and launched Nour, an AI wedding planner", "Zeki: a bilingual kids' AI app I built solo"],
    caseId: "underwriting",
  },
  {
    id: "clarity",
    kind: "answer",
    question: "Creating clarity without a roadmap or playbook",
    answer: "When there's no playbook, the first thing I build is the operating system: documentation, one backlog, and one place for feedback.",
    example: {
      project: "XPay · one of Egypt's top payment gateways",
      problem: "I was the only PM. There was no documentation and no process, and priorities changed weekly, all during a rebuild of the payment core.",
      owned: "The product process end to end, as sole PM.",
      decided: "Set up the system before scaling output: Linear connected to GitHub, feedback triage in Slack, and PostHog for data.",
      delivered: "Full documentation, a traceable delivery flow, and a migration to the new core in reversible stages.",
      outcome: "Live merchants moved over with 100% uptime, and I took part in securing the Central Bank of Egypt licence.",
    },
    alsoSee: ["Mumzworld: documented a 5M-user app that had no documentation, mid-migration"],
    caseId: "xpay",
  },
  {
    id: "real-problem",
    kind: "answer",
    question: "Finding the real user problem, not the proposed solution",
    answer: "I dig until I find what's actually broken. The request is usually a symptom.",
    example: {
      project: "Smart Bricks · product analytics",
      problem: "Leadership wanted better reports, but nobody trusted the numbers in any report.",
      owned: "The company's metric definitions and the reporting pipeline, which I coded myself.",
      decided: "Fix the definitions and data quality first: one agreed meaning of 'active user', with internal traffic removed.",
      delivered: "A 36-event metric standard, an automated pipeline, and three silent data bugs fixed.",
      outcome: "The first trusted baseline, which then exposed a funnel dropping to zero that I traced to a broken lead form.",
    },
    alsoSee: ["MUAB: the roadmap said payouts worked; I checked, and they didn't"],
    caseId: "analytics",
  },
  {
    id: "requirements",
    kind: "answer",
    question: "Translating client needs into product requirements",
    answer: "I turn conversations into decisions engineering can build against, and I keep the document alive as those decisions change.",
    example: {
      project: "MUAB · ed-tech platform connecting creators and learners",
      problem: "What the CEO wanted had drifted far from the written spec. The real roadmap lived in the founder's head.",
      owned: "The full consolidated PRD across nine feature areas.",
      decided: "Rebuild the spec live in the review, so decisions were locked in the room rather than over weeks of back-and-forth.",
      delivered: "Developer-ready specs, a three-step restriction model, and change logs showing what changed and why.",
      outcome: "Five architecture decisions locked in one session, with no rework afterwards.",
    },
    alsoSee: ["Smart Bricks: four discovery sessions consolidated into Product Definition v2.0"],
    caseId: "prd",
  },
  {
    id: "stakeholders",
    kind: "answer",
    question: "Prioritising competing stakeholder demands",
    answer: "I make the trade-offs visible and shared, so priorities become a decision we make together, not a political fight.",
    example: {
      project: "Law71 · legal AI for the UAE Ministry of Foreign Affairs and EDGE Group",
      problem: "A ministry, a defence group, legal teams and engineers each had their own priorities and definition of 'correct'.",
      owned: "Sprint delivery and backlog as Scrum Master, and Arabic quality as the only Arabic speaker on the team.",
      decided: "One backlog visible to everyone, and compliance written into acceptance criteria instead of a last-minute review.",
      delivered: "A platform where every stakeholder could see the trade-offs and the evidence.",
      outcome: "Adopted by MOFA and EDGE Group, with fewer late escalations.",
    },
    alsoSee: ["MUAB: prioritised by blast radius, putting payments and security before cosmetic bugs"],
    caseId: "law71",
  },
  {
    id: "cross-functional",
    kind: "answer",
    question: "Working across engineering, design, data and QA",
    answer: "I started as an engineer and QA, so I speak each team's language, and I build the processes that connect them.",
    example: {
      project: "Mumzworld · the Middle East's largest family e-commerce app (5M+ users)",
      problem: "No documentation, many connected tools, and a platform migration underway.",
      owned: "The app as its sole product leader, working with squads, QA engineers, design and data.",
      decided: "Map the system before changing it: end-to-end documentation and dependency charts.",
      delivered: "Guides for every integration, dependency maps, and the team's onboarding process.",
      outcome: "99.9% uptime through Black Friday peak traffic, and promotion from QA to PM in four months.",
    },
    alsoSee: ["Novomind: automated Jira reporting, introduced rotating squads and a weighted quality score"],
    caseId: "mumzworld",
  },
  {
    id: "ai-tools",
    kind: "answer",
    question: "Using AI tools to prototype and accelerate delivery",
    answer: "I prototype before I ask for a sprint. AI tools let me test an idea with users in days instead of months.",
    example: {
      project: "Zeki · and the Smart Bricks prototype · and this portfolio",
      problem: "Ideas are cheap to debate and expensive to build. I wanted evidence before engineering time.",
      owned: "Design and build, end to end, using Claude Code, Cursor and Figma.",
      decided: "Keep AI prototypes lean and throwaway, and aim them at the riskiest assumption.",
      delivered: "A bilingual kids' app, a nine-screen underwriting prototype, an LLM testing framework, and this site, with its assistant, animations and system map.",
      outcome: "Faster validation with buyers and users, and specs that engineering trusted because they'd already been tested.",
    },
    caseId: "zeki",
  },
  {
    id: "difficult",
    kind: "answer",
    question: "Managing a difficult client or senior stakeholder",
    answer: "I listen first, then challenge respectfully with evidence, and I'm willing to say the uncomfortable thing early.",
    example: {
      project: "MUAB · CEO alignment and pre-launch audit",
      problem: "A founder moving fast, with a roadmap that claimed things worked that didn't.",
      owned: "The PRD, and a hands-on audit of how money and logins actually flowed.",
      decided: "Push back where the logic didn't hold, and present payment and security failures as one launch blocker, not scattered tickets.",
      delivered: "A reversed decision on capping learner interests, and a clear launch-blocker briefing to the CEO.",
      outcome: "Critical failures caught before launch, and a CEO who trusted my challenges because they came with evidence.",
    },
    alsoSee: ["Law71: kept government and defence clients aligned with shared evidence"],
    caseId: "audit",
  },
  { id: "blueprint", kind: "blueprint" },
  { id: "close", kind: "close" },
];
