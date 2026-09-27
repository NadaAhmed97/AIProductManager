// Private interview page (/whiteshield). Facts come from public sources (listed at the bottom).
// Everything marked as a hypothesis is an assumption to validate with Whiteshield's real data.

export const facts = [
  { label: "Founded", value: "2011, by Fadi Farra" },
  { label: "Based", value: "Dubai (DIFC) and Riyadh" },
  { label: "Category", value: "AI-powered policy intelligence for governments, multilaterals and enterprises" },
  { label: "Engine", value: "XShield, a sovereign AI engine combining data, analytics and AI for government decision-making" },
  { label: "Platforms", value: "QuantumEd (human capital), Quantum Leap (economic indicators), Quantum Navigator (social indicators), Jobs Navigator suite" },
  { label: "Reach", value: "20M+ citizens and 550K students reached, 200K jobs supported, trade work across 37 countries" },
  { label: "Partners", value: "Google Cloud: products listed on Google Cloud Marketplace" },
  { label: "Latest", value: "US$15M private credit from Ruya Partners (July 2026)" },
  { label: "Research", value: "Global Labour Resilience Index, with Google" },
];

export const navigatorFeatures = [
  "Skills-first AI job matching (beyond keywords)",
  "Career test and CV upload to match jobs to a skills profile",
  "Skills-gap analysis with tailored upskilling pathways",
  "24/7 personal career AI assistant",
  "Company partnerships with verified employers",
  "One-touch access to subsidies and benefits",
  "Analytics for governments to optimise policy and measure impact",
  "Jobs data API for developers",
];

// The two customers Career Navigator has to win at the same time.
export const customers = [
  {
    who: "The citizen (job seeker, student, graduate)",
    job: "\"Help me find a job I can actually get, and show me what to learn to get a better one.\"",
    wins: "A job offer, faster, with less guessing",
  },
  {
    who: "The government buyer (ministry, labour agency)",
    job: "\"Prove my employment programmes are working, and show me where to intervene next.\"",
    wins: "Verified outcomes and policy evidence they can defend",
  },
  {
    who: "The employer",
    job: "\"Send me candidates who are ready, not a pile of CVs.\"",
    wins: "Pre-matched, skills-verified shortlists and hiring subsidies",
  },
];

// Metric tree: from the north star down to the levers a PM can move.
export const metricTree = {
  northStar: { name: "Verified hires per 1,000 active job seekers", why: "It's the outcome both the citizen and the government pay for. Sign-ups and page views don't prove impact; hires confirmed by the employer do." },
  drivers: [
    { name: "Activation", metric: "% of sign-ups with a complete skills profile in 24h", levers: ["CV parsing", "Shorter career test", "Arabic-first onboarding"] },
    { name: "Match quality", metric: "% of matches the user saves or applies to", levers: ["Explainable 'why this job'", "Better skills taxonomy", "Location & salary fit"] },
    { name: "Conversion", metric: "Applications → interviews → offers", levers: ["Gap-to-hire plans", "Verified employer pipelines", "Interview prep"] },
    { name: "Outcome proof", metric: "% of hires confirmed by the employer or payroll data", levers: ["Employer confirmation loop", "Benefits-linked verification", "90-day retention check"] },
  ],
  guardrails: ["Match fairness across gender, nationality and region", "Arabic vs English answer quality parity", "Citizen data never leaves the sovereign environment"],
};

export type Proposal = {
  id: string;
  name: string;
  oneLiner: string;
  problem: string;
  valueProp: { citizen: string; government: string; employer?: string };
  metrics: { leading: string; lagging: string };
  impact: number; // 1-5
  confidence: number; // 1-5
  effort: number; // 1-5 (higher = more work)
  risk: number; // 1-5 (higher = riskier)
  riskNote: string;
  scalability: string[];
  ai: { level: "Assist" | "Recommend" | "Act (with a human)"; how: string; guardrail: string };
  competitor: string;
  experiment: string;
};

export const proposals: Proposal[] = [
  {
    id: "passport",
    name: "60-second skills passport",
    oneLiner: "Upload a CV (or answer 5 questions by voice, in Arabic or English) and get a verified skills profile instantly.",
    problem: "Hypothesis: the career test and profile set-up are where most sign-ups drop off. Without a complete profile, matching can't work, so every later metric suffers.",
    valueProp: {
      citizen: "Useful matches in one minute instead of a long form",
      government: "Richer skills data on the whole population, not only the people who finish the test",
    },
    metrics: { leading: "Profile completion within 24h of sign-up", lagging: "Matches viewed per active user in week 1" },
    impact: 5, confidence: 4, effort: 2, risk: 2,
    riskNote: "Parsing errors on Arabic CVs and non-standard formats. Mitigate with a review step before the profile is saved.",
    scalability: ["Same flow for every country; only the skills taxonomy is configured per market", "Cost per profile is one model call, cacheable", "Works for students with no CV (voice questions)"],
    ai: { level: "Assist", how: "An LLM extracts skills, education and experience from the CV and maps them to the skills taxonomy.", guardrail: "The user confirms every extracted skill; nothing is inferred silently." },
    competitor: "LinkedIn and Bayt make profile-building slow and English-first. National portals ask for long forms.",
    experiment: "A/B test CV-upload onboarding against the current test for new sign-ups. Success = +X pts profile completion with no drop in match quality.",
  },
  {
    id: "why",
    name: "\"Why this job\" and a gap-to-hire plan",
    oneLiner: "Every match explains itself: the skills you have, the 1–2 you're missing, and the shortest course to close the gap.",
    problem: "Hypothesis: users don't trust or act on opaque matches. A match score without a reason doesn't change behaviour.",
    valueProp: {
      citizen: "I know why I fit, and exactly what to learn next",
      government: "Upskilling spend is targeted at the real gaps that block hiring",
      employer: "Candidates arrive having already closed the gap",
    },
    metrics: { leading: "% of matches saved or applied to", lagging: "Interview rate per application" },
    impact: 5, confidence: 3, effort: 3, risk: 2,
    riskNote: "Explanations that are wrong damage trust more than no explanation. Generate them from the matching data, never free-form.",
    scalability: ["Course catalogue plugs in per country (national academies, Coursera, Google)", "Explanations are templated from structured data, so they translate cleanly to Arabic"],
    ai: { level: "Recommend", how: "The matching model scores skills overlap; an LLM turns the structured gap into a plain-language plan.", guardrail: "Every sentence traces back to a field in the match; the LLM can't invent skills or courses." },
    competitor: "Most job boards show a match % with no reason. Skills platforms show gaps but aren't tied to live jobs.",
    experiment: "Show explanations to 50% of users. Measure apply rate per match and course enrolment from the gap plan.",
  },
  {
    id: "outcomes",
    name: "Verified outcome loop",
    oneLiner: "Close the loop after every application: employer confirmation, benefits data and a 90-day check turn 'applied' into 'hired and still employed'.",
    problem: "Hypothesis: the platform knows who applied, but not reliably who got hired or stayed. Without that, governments can't prove ROI, and matching can't learn.",
    valueProp: {
      citizen: "Nudges at the right moment (\"How did the interview go?\") and help if it didn't work out",
      government: "Defensible, verified employment outcomes to report and fund against",
      employer: "One click to confirm a hire and unlock subsidies",
    },
    metrics: { leading: "% of applications with a known outcome", lagging: "Verified hires and 90-day retention" },
    impact: 5, confidence: 4, effort: 3, risk: 3,
    riskNote: "Depends on employer and government data integrations. Start with employer self-confirmation tied to subsidies, then add payroll or social-insurance data.",
    scalability: ["Integration adapters per country (payroll, social insurance, benefits systems)", "The same outcome schema across markets enables cross-country benchmarks"],
    ai: { level: "Act (with a human)", how: "An agent follows up with users and employers and reconciles outcomes from multiple sources.", guardrail: "Any conflicting outcome goes to a human; nothing is reported to a ministry unverified." },
    competitor: "This is the gap commercial job boards don't fill: they are paid per posting, not per hire. It's Whiteshield's strongest moat.",
    experiment: "Pilot with 10–20 partner employers. Success = outcome coverage above X% of applications within 60 days.",
  },
  {
    id: "cockpit",
    name: "Ministry skills cockpit",
    oneLiner: "A live view for policymakers: where skills supply and employer demand diverge, by region and sector, and what each programme is achieving.",
    problem: "Hypothesis: the rich citizen and job data sits in the product, but ministries receive it as periodic reports, too late to steer programmes.",
    valueProp: {
      citizen: "Better-targeted programmes and courses in their region",
      government: "Decide where to fund training or incentives, and see the effect within weeks",
    },
    metrics: { leading: "Weekly active policy users; decisions logged from the cockpit", lagging: "Contract renewals and expansions" },
    impact: 4, confidence: 3, effort: 4, risk: 3,
    riskNote: "Numbers shown to ministers must be auditable. Use deterministic models for every figure; AI only explains and summarises.",
    scalability: ["One cockpit, configured per country: regions, sectors, languages", "Feeds into XShield so policy teams can ask questions across datasets"],
    ai: { level: "Recommend", how: "AI writes plain-language briefs (\"Demand for data analysts in Region X grew 30% while graduates grew 5%\") from the models' outputs.", guardrail: "AI reasons, models calculate, humans decide. Every number links to its source and model run." },
    competitor: "Lightcast and national statistics offices provide labour-market data, but not tied to a live citizen product and verified outcomes.",
    experiment: "Co-design with one ministry team. Success = the cockpit used in a real funding or programme decision within one quarter.",
  },
  {
    id: "whatsapp",
    name: "Career assistant on WhatsApp, in dialect",
    oneLiner: "Meet job seekers where they already are: job alerts, gap-to-hire nudges and interview prep on WhatsApp, in Arabic dialects and English.",
    problem: "Hypothesis: many target users (early-career, less digital) won't return to a web app, but they live in WhatsApp.",
    valueProp: {
      citizen: "No app to remember; help arrives in the language they speak",
      government: "Reach underserved groups that web portals miss, improving inclusion metrics",
    },
    metrics: { leading: "Weekly active users on WhatsApp; nudge response rate", lagging: "Applications and hires from WhatsApp users" },
    impact: 4, confidence: 3, effort: 3, risk: 4,
    riskNote: "Dialect quality and data-privacy rules vary by country. Launch in one market with strict consent and a dialect evaluation set.",
    scalability: ["Same conversation engine; channel and language configured per market", "Messaging cost per user must stay under the value of a verified hire"],
    ai: { level: "Assist", how: "A conversational assistant answers career questions and sends personalised nudges from the user's profile and gap plan.", guardrail: "It never promises jobs or benefits; eligibility answers come from rules, not the LLM." },
    competitor: "National portals and job boards are web-first. WhatsApp-native career support in Arabic dialects is rare.",
    experiment: "Opt-in pilot for one cohort. Compare 30-day retention and applications with web-only users.",
  },
];

export const competitors = [
  { name: "LinkedIn / Bayt / Naukrigulf", type: "Commercial job boards", strength: "Huge job inventory and employer reach", gap: "Paid per posting, not per hire; weak on outcomes and upskilling; English-first", angle: "Win on verified outcomes and skills-first matching" },
  { name: "Nafis (UAE), Jadarat (KSA), national portals", type: "Government employment platforms", strength: "Mandate, subsidies and citizen trust", gap: "Often transactional; limited AI guidance and analytics", angle: "Partner, don't compete: power them with matching, gap plans and analytics" },
  { name: "Lightcast", type: "Labour-market intelligence", strength: "Deep job-posting and skills data", gap: "Data and insight, but no citizen-facing product or verified outcomes", angle: "Own the loop from insight to action to outcome" },
  { name: "Eightfold, Gloat, Workday Skills", type: "Talent intelligence (enterprise)", strength: "Strong skills AI inside companies", gap: "Built for employers' internal talent, not national labour markets", angle: "Nation-scale, sovereign deployment for governments" },
  { name: "Coursera, Google Career Certificates", type: "Upskilling", strength: "Content and credentials", gap: "Not tied to live local jobs or hiring", angle: "Plug in as the course layer of gap-to-hire plans" },
];

export const scalabilityChecks = [
  { q: "Does it work in a new country with configuration, not code?", why: "Whiteshield sells to many governments. Each new market should be a set-up, not a rebuild." },
  { q: "Does it work in Arabic and English with equal quality?", why: "For regional governments, Arabic is the primary language, not a translation." },
  { q: "Can it run inside a sovereign environment?", why: "Citizen data often must stay in-country. The design must not depend on sending data out." },
  { q: "Does unit cost stay below the value it creates?", why: "AI calls, messaging and data costs per user must stay well below the value of a verified hire." },
  { q: "Does it get better with more users?", why: "The best features feed the data flywheel: more outcomes, better matching, stronger evidence for governments." },
];

export const aiLadder = [
  { level: "Assist", desc: "AI does the tedious part, a human confirms.", example: "CV parsing into a skills profile" },
  { level: "Recommend", desc: "AI suggests, with reasons a person can check.", example: "Why this job, and the gap-to-hire plan" },
  { level: "Act (with a human)", desc: "AI takes routine actions; exceptions go to people.", example: "Outcome follow-ups and reconciliation" },
];

export const aiQuestions = [
  "What's the user's job to be done, and where is it slow, confusing or manual?",
  "Can AI remove that step, or only speed it up?",
  "What happens when the AI is wrong, and who notices?",
  "Which numbers must be deterministic and auditable?",
  "How will we evaluate it: an Arabic and English test set, fairness checks, human review rate?",
];

export const measurement = [
  { step: "Baseline", detail: "Instrument the funnel end to end (sign-up → profile → match → apply → interview → hire → 90 days) before changing anything." },
  { step: "Hypothesis", detail: "Each feature states the metric it moves, by how much, and why. If we can't name the metric, we don't build it." },
  { step: "Experiment", detail: "A/B or cohort pilots with guardrails (fairness, Arabic parity, complaint rate). Decide the success threshold before launch." },
  { step: "Readout", detail: "Weekly metric reviews: flag dips and spikes against the trailing average, and write down the decision each time." },
  { step: "Scale or stop", detail: "Scale what beats the threshold in one market, then roll it out by configuration. Stop what doesn't, and record why." },
];

export const plan = [
  { phase: "Days 1–30: Learn", items: ["Meet the product, data and engineering teams, and 2–3 government clients", "Map the real funnel and baseline every step", "Listen to users: 10+ job-seeker and employer interviews in Arabic and English"] },
  { phase: "Days 31–60: Focus", items: ["Pick the 2 highest-scoring bets with the team, using agreed impact, effort and risk weights", "Write the PRDs with success metrics and guardrails", "Prototype them myself with AI tools and test with users before engineering starts"] },
  { phase: "Days 61–90: Ship & prove", items: ["Ship the first bet to one market as an experiment", "Stand up a weekly metrics review with Slack alerts", "Report results to leadership and a client, with the next bets ready"] },
];

export const questionsForThem = [
  "Where does Career Navigator lose the most users today, and how do you know?",
  "How do you currently verify that a match led to a hire?",
  "Who is the buyer vs the user in a typical government contract, and what do they renew on?",
  "How is XShield shared across Jobs Navigator, QuantumEd and the other platforms?",
  "What does 'sovereign' require in practice: hosting, models, data residency?",
];

export const sources = [
  { label: "Whiteshield X", url: "https://whiteshield.ai/whiteshield-x/" },
  { label: "Career Navigator", url: "https://career.whiteshield.com/" },
  { label: "Google Cloud partnership", url: "https://whiteshield.ai/insights/whiteshield-announces-global-partnership-with-google-cloud/" },
  { label: "Ruya Partners investment (Zawya)", url: "https://www.zawya.com/en/press-release/companies-news/ruya-partners-backs-whiteshield-with-us15mln-private-credit-investment-330209" },
  { label: "Ruya Partners investment (Wamda)", url: "https://www.wamda.com/2026/07/whiteshield-secures-15-million-private-credit-ruya-partners" },
  { label: "Global Labour Resilience Index", url: "https://www.consultancy-me.com/news/10109/whiteshield-and-google-present-the-worlds-most-resilient-labour-markets" },
  { label: "Product Manager, Data & AI role", url: "https://apply.workable.com/whiteshield/j/886CD20448/" },
];
