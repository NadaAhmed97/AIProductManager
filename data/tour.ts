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
      "My hardest 0→1: an AI underwriting product for institutional investors, in a domain that was new to me. I owned it alone, from first investor conversation to v1 roadmap.",
    example: {
      project: "Smart Bricks · AI underwriting for private-equity firms and funds",
      problem: "A domain new to me, few competitors and none of them public, very few requirements from the CEO, and almost no real documents to learn from.",
      owned: "The whole new B2B vertical: discovery with many institutional investors, flow maps in Figma, research into AI agents, the test plan, roadmap and GTM.",
      decided: "Researched probabilistic vs deterministic agents and set the principle: AI reasons, deterministic engines calculate, humans authorise capital. Then narrowed v1 to underwriting only.",
      delivered: "Product Definition v2.0, a v1 roadmap, competitor analysis and GTM, tested through several audit rounds, plus a nine-screen prototype I built myself.",
      outcome: "A clear, investor-validated v1 in a domain I started with no knowledge of, and a stronger value proposition than the one we started with.",
    },
    alsoSee: ["YallaGain: led the AI fitness-coach MVP, built the app myself, and moved development in-house", "Zaffa AI: founded it and launched Nour, an AI wedding planner", "Zeki: a bilingual kids' AI app I built solo"],
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
    answer: "I test the proposed solution against the people who'd use it. At Smart Bricks that changed the CEO's value proposition.",
    example: {
      project: "Smart Bricks · AI underwriting for institutional investors",
      problem: "The CEO's pitch was 'we make underwriting a deal faster'.",
      owned: "Discovery with many institutional investors, to understand their real process and pain points.",
      decided: "Investors told me underwriting already doesn't take long, so speed wasn't the pain. I reframed the product around a fund's 'company brain' instead.",
      delivered: "A new value proposition: a brain that understands how the fund works, memory of every deal, checked calculations, fast surfacing of gaps and conflicts, investment-committee memos, and collaboration with an audit trail and due diligence.",
      outcome: "The CEO agreed to the change, and v1 was built around a pain investors actually have.",
    },
    alsoSee: ["Smart Bricks analytics: leadership needed trusted numbers more than new reports", "MUAB: the roadmap said payouts worked; I checked, and they didn't"],
    caseId: "underwriting",
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
    alsoSee: ["Smart Bricks: wore the marketing and CS hats: email campaigns that raised click-through, a product email sequence, a company playbook, and UTM analytics with marketing", "Novomind: automated Jira reporting, introduced rotating squads and a weighted quality score"],
    caseId: "mumzworld",
  },
  {
    id: "ai-tools",
    kind: "answer",
    question: "Using AI tools to prototype and accelerate delivery",
    answer: "I don't wait for engineering capacity. When a team needs a tool, I build it with AI, for customer success, marketing, ops, and my own product.",
    example: {
      project: "Smart Bricks · CS command centre, and more",
      problem: "Customer success couldn't see who to contact, why, or what to say, and outreach wasn't linked to behaviour or campaigns.",
      owned: "Design and build, end to end. I vibe-coded it myself.",
      decided: "Put analytics, AI and tracking in one place: every user's activity and top journeys, a next-best action, and AI-written questions tailored to each user's behaviour and persona.",
      delivered: "A dashboard with outreach tracking, behaviour cohorts (dormant, high-intent and so on) and campaign links. Plus a call-insights tool, a metrics watchdog posting to Slack, a guided product tour, a decision-log listener, and bots for kudos, competitor intel and feedback-to-Jira.",
      outcome: "CS works from data instead of guesswork, and the team gets tools in days instead of waiting for a sprint.",
    },
    alsoSee: ["YallaGain: built the whole mobile web app with Figma Make, Copilot and Supabase", "Testify: an AI tool that finds gaps in requirements, then writes dev checklists and QA test cases", "Zeki and the nine-screen underwriting prototype, both built myself", "This portfolio: the walkthrough, assistant, animations and system map"],
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
    alsoSee: ["YallaGain: pushed leadership to move development in-house after an outsourced vendor's repeated delivery failures", "Smart Bricks: persuaded the CEO to reframe the value proposition, backed by investor research", "Law71: kept government and defence clients aligned with shared evidence"],
    caseId: "audit",
  },
  { id: "blueprint", kind: "blueprint" },
  { id: "close", kind: "close" },
];
