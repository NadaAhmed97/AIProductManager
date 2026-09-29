"use client";

import { useEffect, useState } from "react";

// Nada's prep booklet for the Hugo Zlotowski interview. Private, unlinked, noindex.
// Written to be the only resource she needs: context, concepts, stories, Q&A and the run sheet.

const toc = [
  ["cheat", "1-page cheat sheet"],
  ["stage", "Where you are & how this round goes"],
  ["hugo", "Who Hugo is"],
  ["ws", "Whiteshield in 5 minutes"],
  ["role", "The role"],
  ["genai", "GenAI concepts"],
  ["ml", "Classic ML & data science"],
  ["geo", "Satellite & alternative data"],
  ["econ", "Economics & causal inference"],
  ["gov", "Government AI: trust & sovereignty"],
  ["aipm", "How to run an AI product"],
  ["stories", "Your stories"],
  ["qa", "Q&A: 32 likely questions"],
  ["cases", "Mini-cases, worked"],
  ["ask", "Questions to ask Hugo"],
  ["run", "Running the 45 minutes"],
  ["facts", "Facts to remember"],
];

function S({ id, n, title, children }: { id: string; n: number; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="bk-sec scroll-mt-20 border-t border-white/10 py-12">
      <p className="font-mono text-xs text-accent">{String(n).padStart(2, "0")}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      <div className="bk mt-6">{children}</div>
    </section>
  );
}

// Glossary term: the concept, then how to say it in the interview.
function T({ t, children, say }: { t: string; children: React.ReactNode; say?: string }) {
  return (
    <div className="bk-card rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <p className="font-semibold text-white">{t}</p>
      <p className="mt-1 text-sm text-neutral-300">{children}</p>
      {say && <p className="mt-2 border-l-2 border-accent pl-3 text-sm italic text-accent/90">Say: “{say}”</p>}
    </div>
  );
}

function QA({ q, a, tag }: { q: string; a: React.ReactNode; tag: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bk-card rounded-xl border border-white/10 bg-white/[0.03]">
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-start gap-3 p-4 text-left">
        <span className="mt-0.5 shrink-0 rounded-full border border-accent/40 px-2 py-0.5 font-mono text-[10px] uppercase text-accent">{tag}</span>
        <span className="flex-1 font-semibold text-white">{q}</span>
        <span className="bk-noprint text-neutral-500">{open ? "−" : "+"}</span>
      </button>
      <div className={`bk-ans px-4 pb-4 text-sm text-neutral-300 ${open ? "" : "hidden"}`}>{a}</div>
    </div>
  );
}

const Grid = ({ children }: { children: React.ReactNode }) => <div className="grid gap-3 md:grid-cols-2">{children}</div>;
const Note = ({ children }: { children: React.ReactNode }) => (
  <div className="my-4 rounded-xl border border-amber-400/30 bg-amber-500/10 p-4 text-sm text-amber-100">{children}</div>
);

export default function HugoBooklet() {
  const [all, setAll] = useState(false);
  useEffect(() => {
    document.querySelectorAll(".bk-ans").forEach((el) => el.classList.toggle("hidden", !all));
  }, [all]);

  return (
    <div className="ws min-h-screen">
      <header className="bk-noprint sticky top-0 z-30 border-b border-white/10 bg-ink/90 backdrop-blur">
        <div className="container-x flex h-12 items-center justify-between gap-3 text-sm">
          <a href="/hugo/" className="font-semibold">← Nada × Hugo</a>
          <span className="flex gap-2">
            <button onClick={() => setAll((a) => !a)} className="rounded-full border border-white/15 px-3 py-1 text-xs">{all ? "Collapse answers" : "Expand all answers"}</button>
            <button onClick={() => { setAll(true); setTimeout(() => window.print(), 100); }} className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink">Print / PDF</button>
          </span>
        </div>
      </header>

      <main className="container-x grid gap-10 pb-24 lg:grid-cols-[220px_1fr]">
        <nav className="bk-noprint hidden lg:block">
          <div className="sticky top-16 space-y-1 pt-12 text-sm">
            {toc.map(([id, l], i) => (
              <a key={id} href={`#${id}`} className="block text-neutral-400 hover:text-white"><span className="font-mono text-[10px] text-accent">{String(i + 1).padStart(2, "0")}</span> {l}</a>
            ))}
          </div>
        </nav>

        <div className="min-w-0 max-w-3xl">
          <div className="pt-12">
            <p className="eyebrow">Private · interview prep booklet</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Interview with <span className="shimmer">Hugo Zlotowski</span></h1>
            <p className="mt-4 text-lg text-neutral-400">AI Innovation Lead &amp; Quantum Leap Lead, Whiteshield. Everything you need is in here: read the cheat sheet the morning of, and the rest in the days before.</p>
          </div>

          {/* 1 */}
          <S id="cheat" n={1} title="1-page cheat sheet">
            <div className="grid gap-3 md:grid-cols-2">
              {[
                ["Who he is", "AI + economics researcher. Leads AI Innovation and the Quantum Leap platform. Computer vision, macro forecasting, satellite data. Ex-Esade professor, ex-founder. Technical, academic, builder."],
                ["What he's testing", "Can you make AI products for governments reliable, not just demos? Can you work with his data scientists and economists? Can you own a 0→1 product through ambiguity?"],
                ["Your one-line positioning", "“I'm the PM who understands AI well enough to design products governments can trust, bridges researchers, engineers and clients, and prototypes things myself.”"],
                ["Your core principle", "“AI reasons, deterministic engines calculate, humans decide.” Say it once, then show it in examples."],
                ["Best stories for him", "Smart Bricks (agentic AI for investors, deterministic engines) · Law71 (legal AI, MOFA & EDGE, Arabic quality) · Your prototypes (you build)."],
                ["Evals answer (memorise)", "Golden test set built with domain experts → automatic checks (grounding, citations, format) → expert review on samples → compare to baseline → monitor in production → every failure becomes a new test."],
                ["Don't", "Overclaim ML depth. Say “we”. Criticise their products. Ramble. Promise dates."],
                ["Ask him", "“What's the early-stage product, and where is it today?” and “How does product work with your research team?”"],
              ].map(([t, d]) => (
                <div key={t} className="bk-card rounded-xl border border-accent/30 bg-accent/[0.05] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-accent">{t}</p>
                  <p className="mt-2 text-sm text-neutral-200">{d}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-neutral-400"><b className="text-white">Answer format, every time:</b> answer in one sentence → one specific example (what <i>I</i> owned and decided) → the outcome. 60–90 seconds. Then stop.</p>
          </S>

          {/* 2 */}
          <S id="stage" n={2} title="Where you are & how this round goes">
            <ol className="space-y-2 text-sm text-neutral-300">
              <li>✅ <b className="text-white">Earlier application:</b> aptitude test and one-way video passed. First interview, then no follow-up.</li>
              <li>✅ <b className="text-white">Alex Elliot (recruiter) approached you</b> with two options: a 3-month contract on an early-stage product (could become permanent as clients sign), or a permanent PM role across government digital products.</li>
              <li>✅ <b className="text-white">Fouad Homsy (Principal, public policy):</b> passed. He checked policy fit, client handling and structure.</li>
              <li>👉 <b className="text-white">Hugo Zlotowski (AI Innovation Lead):</b> the product and AI round. Very likely the person who owns the early-stage product, or the one you'd work with daily.</li>
              <li>⏭ <b className="text-white">Likely next:</b> a partner or leadership conversation (their final rounds are known to be the hardest), maybe a case or take-home, then the offer.</li>
            </ol>
            <h3 className="mt-8 font-semibold text-white">How this kind of round usually goes</h3>
            <p className="mt-2 text-sm text-neutral-300">There are no public reviews of Whiteshield PM interviews specifically (reviews cover their consulting track: aptitude tests, video, several policy cases, a hard partner round). For an AI-lead round at an AI-for-government company, expect a mix of:</p>
            <Grid>
              <T t="1. Your background (5–10 min)">A walk through your CV, focused on AI products. He'll probe what <i>you</i> did vs the team.</T>
              <T t="2. AI depth, from a product angle (10–15 min)">RAG, agents, evaluation, hallucinations, cost and latency, when not to use an LLM. Current AI PM interviews test whether you can reason about how AI products work and fail without an engineer translating.</T>
              <T t="3. A product or design case (10–15 min)">“A ministry wants X. How would you approach it?” Often related to his product (forecasting, simulation, satellite). They reward getting to a simple version fast, saying trade-offs out loud, and raising production-readiness before being asked.</T>
              <T t="4. Working style (5 min)">How you'd work with data scientists and economists, handle ambiguity, and deal with clients.</T>
              <T t="5. Your questions (5 min)">Use these to learn about the early-stage product. Good questions are part of the evaluation.</T>
              <T t="What he's really deciding">“Can I hand this person a messy client problem and a research team, and trust them to turn it into a product that works in production?”</T>
            </Grid>
          </S>

          {/* 3 */}
          <S id="hugo" n={3} title="Who Hugo is">
            <Grid>
              <T t="Now">AI Innovation Lead at Whiteshield, and Quantum Leap Lead. Develops AI-based products, leads research in computer vision and macroeconomics, works with public-sector clients on AI projects.</T>
              <T t="Path at Whiteshield">Senior Associate Consultant (public policy strategy) → Policy Advisor in the AI Economics unit → Manager, AI Economics (multidisciplinary team, AI use cases for Middle East governments) → AI Innovation Lead.</T>
              <T t="Research">Macroeconomic forecasting and computer vision, with patented research. Has led teams of 20+ experts to deliver nation-scale AI platforms. Founded the Data-Driven Decision Lab in 2025.</T>
              <T t="Academic & founder">Former Assistant Professor at Esade, teaching AI for public policy and public-sector AI use cases. Founded a music startup, INSOLITE, so he knows 0→1 first-hand.</T>
            </Grid>
            <h3 className="mt-8 font-semibold text-white">His article (April 2024): “Bridging the Data Gap in Policymaking: The Role of AI and Alternative Data”</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-300">
              <li>Governments are far behind private companies at gathering and using data.</li>
              <li>National statistics offices struggle to produce granular, timely data. Government data availability in MENA is <b className="text-white">44% lower than the global average</b> and 54% lower than the G20.</li>
              <li>Answer: alternative data (satellite imagery, remote sensing) plus AI and <b className="text-white">nowcasting</b> to estimate current conditions when official figures are late or missing. Remote sensing gives high-level economic analysis in days.</li>
              <li>Question it raises: can generative AI help level the playing field for governments?</li>
            </ul>
            <Note><b>How to use this:</b> mention it once, naturally: “I read your piece on the data gap. The 44% figure stuck with me. It's why I think the product's job is not just to show data but to say how confident it is.”</Note>
            <h3 className="mt-6 font-semibold text-white">What he probably values</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-300">
              <li>Rigour: sources, uncertainty, validation. He's an academic; vague claims will cost you.</li>
              <li>Respect for the research team's work, and a PM who makes it usable, not one who overrides it.</li>
              <li>Speed and building: he's a founder. Your prototypes speak his language.</li>
              <li>Client reality: nation-scale platforms mean procurement, sovereignty and adoption matter.</li>
            </ul>
          </S>

          {/* 4 */}
          <S id="ws" n={4} title="Whiteshield in 5 minutes">
            <Grid>
              <T t="What they are">An AI-native “sovereign intelligence” company for governments. Founded 2011, from the Harvard and OECD communities. Started as public-policy consulting; now consulting + a product platform. Helps governments move “from periodic policymaking to continuous adaptation”.</T>
              <T t="Where">Principal operations in UAE and KSA: Dubai (DIFC, ICD Brookfield Place), Abu Dhabi (Al Bateen), Riyadh. Work across the Middle East, Europe, Africa, Eurasia and Asia.</T>
              <T t="Funding (July 2026)">US$15M <b>senior secured private credit</b> facility from Ruya Partners (debt, not an equity round). For: expanding the tech platform, deploying more AI solutions, international expansion. Ruya's first “sovereign intelligence” investment.</T>
              <T t="Tech partner">The platform is “cloud-powered by Google” (Google Cloud), built on secure, sovereign infrastructure for the public sector.</T>
            </Grid>
            <h3 className="mt-8 font-semibold text-white">The products</h3>
            <div className="mt-3 space-y-3">
              <T t="Quantum Leap (Hugo's product)" say="Quantum Leap forecasts and simulates a decision's consequences before and after it's made. The product challenge is making that trustworthy enough for a minister to act on.">
                “Agentic strategy platform for decision-makers.” Multi-model AI infrastructure. Forecasts, monitors and simulates the human and economic consequences of a decision, before and after. Modules: trade policy simulation (partners, tariffs, scenarios), regional impact mapping with spatial and satellite intelligence, fiscal strategy (revenue and cost vs benefit), financing structure and risk. AI models tailored by policy domain; AI agents for scenario simulation, forecasting and advisory.
              </T>
              <T t="XShield">Whiteshield's AI agent platform and “sovereign AI engine”: a secure knowledge base that turns an organisation's data into grounded, cited answers inside its own perimeter. Understands the real intent of a question, retrieves internal documents and trusted sources with hybrid search. Bank-grade encryption, SOC 2.</T>
              <T t="QuantumEd · Quantum Navigator">QuantumEd: human capital analysis and development. Quantum Navigator: monitoring social and community indicators. (Career / Jobs Navigator is the citizen-facing labour-market product you prototyped.)</T>
              <T t="AI Economics / AI Satellite Navigator">Satellite imagery, live footage and photos turned into economic intelligence. Data scientists and economists build an economic activity score per map tile. Example: classifying orchards, crops and cattle farming to guide crop selection. Nowcasting fills data gaps.</T>
              <T t="QuantumX">Branded “Policy as a Service”.</T>
            </div>
          </S>

          {/* 5 */}
          <S id="role" n={5} title="The role">
            <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-300">
              <li><b className="text-white">Option 1:</b> 3-month contract on an early-stage product; can become permanent as clients sign.</li>
              <li><b className="text-white">Option 2:</b> permanent PM across government digital products and transformation programmes.</li>
              <li><b className="text-white">What the recruiter said they need:</b> true 0→1 in a fast, messy, unstructured environment. No polished product, roadmap or full requirements. Take an unclear client problem, create structure, drive it from discovery to launch. Very client-facing, including government. Listen, challenge respectfully, explain technical decisions clearly.</li>
              <li><b className="text-white">Data &amp; AI PM listings at Whiteshield ask for:</b> data pipelines, metrics, experimentation (A/B testing), product analytics, ML concepts. PMs sit with AI engineers, software engineers and designers building the Quantum suite and XShield, “the products behind every engagement”.</li>
            </ul>
            <Note><b>If asked contract vs permanent:</b> “I'm happy to start with the contract. It lets me prove value on the product quickly, and I'd aim to make it the case for the permanent role.” (Only if true for you. Visa and location questions go to Alex, not Hugo.)</Note>
          </S>

          {/* 6 */}
          <S id="genai" n={6} title="GenAI concepts (know these cold)">
            <div className="space-y-3">
              <T t="LLM (large language model)" say="An LLM predicts the next word very well. That makes it great at reading and writing, and unreliable at facts and arithmetic unless we ground it.">A model trained on huge amounts of text to predict the next token. Good at language, summarising, reasoning over text. Not a database: can be confidently wrong.</T>
              <T t="Tokens · context window">Models read and write in tokens (roughly ¾ of an English word; Arabic often uses more tokens per word, so it costs more). The context window is how much text the model can consider at once. Cost and latency scale with tokens.</T>
              <T t="Temperature">A setting for randomness. Low = consistent, factual tasks. High = creative variety. For government outputs, keep it low.</T>
              <T t="Embeddings · vector database" say="Embeddings turn meaning into numbers, so we can find documents that mean the same thing even when the words differ.">An embedding is a list of numbers representing meaning. Similar meanings sit close together. A vector database stores them for fast “find similar” search.</T>
              <T t="RAG (retrieval-augmented generation)" say="RAG means the model answers from our documents, not its memory, and we can show exactly which document it used.">1) Retrieve relevant passages from your own documents, 2) give them to the model, 3) the model answers from them with citations. Reduces hallucination, keeps data current, gives an audit trail. This is what XShield does.</T>
              <T t="Hybrid search · reranking · chunking">Hybrid search combines keyword search (exact terms, names, law numbers) with semantic search (meaning). A reranker re-orders results by relevance. Chunking = splitting documents into pieces; bad chunking is a top cause of bad RAG answers.</T>
              <T t="Grounding · citations">The answer must be supported by retrieved sources, with a link to each. A “groundedness” check tests whether each claim appears in the sources.</T>
              <T t="Hallucination" say="I design so the model never has to invent: it answers from sources, says 'I don't know' when they're missing, and numbers come from calculation, not generation.">A fluent but false output. Reduce it with RAG, citations, constrained outputs, refusing when evidence is missing, deterministic tools for numbers, and human review.</T>
              <T t="Prompting vs RAG vs fine-tuning" say="Start with prompting, add RAG for knowledge, fine-tune only for style or a narrow task where we have lots of good examples.">Prompting: instructions, cheapest, try first. RAG: gives the model knowledge it doesn't have. Fine-tuning: trains the model on examples to change behaviour or style; expensive, needs good data, doesn't reliably add facts.</T>
              <T t="Agents · tool use · orchestration" say="An agent is an LLM that can plan and call tools. The product question is which steps it's allowed to take alone, and which need a human.">An agent is an LLM that plans steps, calls tools (search, a calculator, a forecasting model, an API) and uses the results. Orchestration coordinates several agents or tools. Quantum Leap uses agents for simulation, forecasting and advice.</T>
              <T t="Probabilistic vs deterministic">LLMs are probabilistic: the same input can give different outputs. Deterministic systems (a formula, an economic model, SQL) always give the same answer. Your Smart Bricks principle: probabilistic for reasoning and language, deterministic for numbers.</T>
              <T t="MCP (Model Context Protocol)">An open standard for connecting AI models to tools and data sources in a consistent way. Useful vocabulary if integrations come up.</T>
              <T t="Guardrails">Rules around the model: input filters, output checks (format, banned content, PII), limits on which tools an agent can call, human approval steps.</T>
              <T t="Prompt injection">An attack where text inside a document or input tries to instruct the model (“ignore previous instructions…”). Matters for RAG and agents that read external content. Mitigate with tool permissions, separation of instructions and data, and output checks.</T>
              <T t="Evals (evaluation)" say="Evals are the unit tests of AI. I'd rather ship a narrower product with strong evals than a broad one we can't measure.">How you measure AI quality. Golden set: questions with expert-approved answers. Automatic metrics: groundedness, citation accuracy, exact match, format. LLM-as-judge: a model grades outputs against a rubric (checked against human grades). Human expert review on samples. Run evals on every change; add every production failure as a test.</T>
              <T t="Cost · latency">Every call costs money (per token) and time. Bigger models are slower and pricier. Levers: smaller models for simple steps, caching, shorter context, batching. A minister's dashboard can precompute; a chat must answer in seconds.</T>
              <T t="Open-weight vs closed models">Closed (e.g. via an API): strongest, easiest, but data leaves your environment unless hosted in-region. Open-weight (downloadable): can run in-country on your own infrastructure, more control, more work. Sovereignty often pushes government work toward in-region hosting or open weights.</T>
              <T t="Arabic">Dialects vs Modern Standard Arabic, right-to-left layout, mixed Arabic-English text, fewer high-quality datasets, more tokens per word. Evaluate Arabic separately; don't assume English quality carries over. (Your Law71 story.)</T>
            </div>
          </S>

          {/* 7 */}
          <S id="ml" n={7} title="Classic ML & data science">
            <div className="space-y-3">
              <T t="Supervised vs unsupervised">Supervised: learn from labelled examples (this tile is farmland). Unsupervised: find patterns without labels (group similar regions).</T>
              <T t="Classification vs regression">Classification predicts a category (crop type). Regression predicts a number (GDP growth).</T>
              <T t="Training · validation · test sets">Train on one part of the data, tune on another, judge on data the model has never seen. Otherwise you fool yourself.</T>
              <T t="Overfitting" say="A model that's perfect on history and wrong on next quarter is overfitted, so I'd always ask how it did on held-out periods.">The model memorises the training data and fails on new data.</T>
              <T t="Precision · recall · F1" say="For a ministry, which mistake is worse decides the threshold, and that's a product decision, not just a data-science one.">Precision: of what the model flagged, how much was right. Recall: of what really existed, how much it found. F1 balances both. The trade-off is a product choice: missing a crisis (low recall) vs false alarms (low precision).</T>
              <T t="Confusion matrix">A table of true/false positives and negatives. Shows which mistakes a classifier makes.</T>
              <T t="Error metrics for forecasts">MAE: average absolute error. RMSE: punishes big errors more. MAPE: error as a percentage. Always compare with a simple baseline (e.g. “same as last quarter”).</T>
              <T t="Baseline">The simplest reasonable approach. A model is only valuable if it beats the baseline by enough to matter.</T>
              <T t="Data drift · model monitoring">The world changes, so data changes and accuracy decays. Monitor inputs and accuracy in production; retrain on a schedule or on alerts.</T>
              <T t="Uncertainty · confidence intervals" say="I'd never show a forecast as one number; I'd show a range and what drives it.">A range that likely contains the true value. Wider range = less certainty. Showing it honestly builds trust.</T>
              <T t="Feature · label · ground truth">Features are inputs (night-light intensity). Label is the answer to learn (GDP). Ground truth is the verified real value used to check the model.</T>
              <T t="Explainability">Showing why a model gave an output (which features mattered). Important for accountability in government.</T>
            </div>
          </S>

          {/* 8 */}
          <S id="geo" n={8} title="Satellite & alternative data (Hugo's specialty)">
            <div className="space-y-3">
              <T t="Alternative data">Anything beyond official statistics: satellite images, night lights, mobile/mobility data, job postings, card transactions, web data, shipping (AIS) data. Faster and more granular; noisier and needs validation.</T>
              <T t="Remote sensing · computer vision">Remote sensing: observing Earth from satellites or aircraft. Computer vision: models that interpret images. Tasks: <b>classification</b> (what is this tile?), <b>object detection</b> (count ships, cars, buildings), <b>segmentation</b> (outline fields, roads, urban areas pixel by pixel), <b>change detection</b> (what changed between two dates).</T>
              <T t="Resolution · revisit · cloud cover">Spatial resolution: size of one pixel on the ground (Sentinel-2 ≈ 10 m, free; commercial can be under 1 m, paid). Revisit: how often a satellite passes (days). Cloud cover blocks optical images; radar (SAR) sees through clouds and at night.</T>
              <T t="Night lights · NDVI">Night-time light intensity is a classic proxy for economic activity. NDVI measures vegetation health from near-infrared light: used for agriculture and drought.</T>
              <T t="Economic activity score per tile">Whiteshield's approach: divide the map into tiles, combine signals (buildings, lights, vehicles, land use) into a formula built by data scientists and economists, and visualise activity by region.</T>
              <T t="Nowcasting" say="Nowcasting answers 'what is happening now?' when official data will only arrive in months. The product's job is to show that estimate with its uncertainty.">Estimating the present (e.g. this quarter's GDP) before official figures are out, using fast alternative data. Different from forecasting, which predicts the future.</T>
              <T t="Validation of alternative data">Check against ground truth where it exists (official stats, surveys, field checks), back-test on past periods, and be explicit about where the signal is weak (e.g. informal economy, cloudy regions).</T>
            </div>
            <Note><b>Product angle to show Hugo:</b> the hard part isn't the model; it's turning a tile score into a decision a minister trusts. That means showing sources and freshness, confidence ranges, what the model can't see, and a clear “so what” for policy.</Note>
          </S>

          {/* 9 */}
          <S id="econ" n={9} title="Economics & causal inference">
            <div className="space-y-3">
              <T t="Forecast vs simulation vs scenario">Forecast: what will likely happen. Simulation: what would happen under a specific change (“raise tariff by 10%”). Scenario: a set of assumptions compared side by side (optimistic / base / pessimistic).</T>
              <T t="CGE model">Computable General Equilibrium: an economy-wide model of how sectors, households, government and trade interact. Used to simulate policies like tariffs or taxes. Deterministic given its assumptions.</T>
              <T t="Input-output model">Shows how sectors buy from and sell to each other, so you can trace ripple effects (a new factory → suppliers → jobs).</T>
              <T t="Multiplier">How much total economic activity one unit of spending creates.</T>
              <T t="Fiscal impact · cost-benefit">Revenue and cost to government vs social and economic benefit, over time. Discounting makes future benefits worth less today.</T>
              <T t="Correlation vs causation" say="The product should never imply causation from a correlation. If we claim impact, we need a comparison.">Two things moving together doesn't mean one caused the other.</T>
              <T t="RCT">Randomised controlled trial: randomly assign who gets the programme. Gold standard, often impractical in policy.</T>
              <T t="Difference-in-differences">Compare the change over time in a treated group with the change in a similar untreated group.</T>
              <T t="Matching · synthetic control">Matching: compare each participant with a similar non-participant. Synthetic control: build a weighted “twin” of a region from other regions to estimate what would have happened without the policy.</T>
              <T t="Staggered rollout">Launch region by region; later regions act as a comparison for earlier ones. A practical way to measure impact in government products.</T>
            </div>
          </S>

          {/* 10 */}
          <S id="gov" n={10} title="Government AI: trust & sovereignty">
            <div className="space-y-3">
              <T t="Sovereign AI · data residency" say="Sovereignty isn't a feature at the end. It decides the architecture from day one: where data lives, which models we can use, who holds the keys.">Data and models stay under the country's control, often physically in-country, with the government holding encryption keys. Drives choices on cloud region, model hosting and vendors.</T>
              <T t="Security & compliance vocabulary">SOC 2 (independent audit of security controls; XShield cites it), encryption at rest and in transit, role-based access, audit logs, PII handling. In the UAE: national data protection law (PDPL), plus federal and emirate-level government security standards; free zones like DIFC and ADGM have their own data protection laws.</T>
              <T t="Human in the loop">A human reviews or approves before an AI output is used. Levels: AI suggests / human decides; AI acts / human can override; AI acts alone (rare in government).</T>
              <T t="Audit trail">Record of every input, source, model version, output and approval. Lets a ministry explain a decision later.</T>
              <T t="Adoption realities">Procurement cycles are long; champions change; data sharing between agencies is political; Arabic first; senior users want a clear answer and a way to defend it, not a tool to explore.</T>
            </div>
          </S>

          {/* 11 */}
          <S id="aipm" n={11} title="How to run an AI product (your framework)">
            <ol className="space-y-3 text-sm text-neutral-300">
              {[
                ["Frame the decision", "Who decides what, how often, and what they do today. Define the outcome (e.g. tariff decision made with regional impact understood) before the model."],
                ["Check data reality", "What data exists, how fresh, who owns it, can we legally use it, what's missing. Most AI projects fail here."],
                ["Choose the simplest method", "Rules or a formula → classic ML → LLM → agent. Use the least complex method that works; mix them (deterministic numbers, LLM for language)."],
                ["Define evals before building", "Golden set with domain experts, success thresholds, baseline. This is the acceptance criteria for AI."],
                ["Prototype fast with real users", "Clickable prototype or a thin working slice in days. Test with the actual decision-maker or their analyst."],
                ["Design for trust", "Sources, freshness, confidence ranges, what the model can't see, easy correction, human approval."],
                ["Pilot, measure, scale", "One client, one use case, clear success metric. Monitor quality, cost and latency. Expand once it's proven."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-3"><span className="font-mono text-accent">{i + 1}</span><span><b className="text-white">{t}.</b> {d}</span></li>
              ))}
            </ol>
            <h3 className="mt-8 font-semibold text-white">Metrics for an AI decision product</h3>
            <Grid>
              <T t="Quality">Forecast error vs baseline; groundedness and citation accuracy; expert agreement rate; “I don't know” rate when evidence is missing.</T>
              <T t="Adoption & value">Decisions or briefs that used the platform; weekly active decision-makers and analysts; time from question to approved brief; repeat use.</T>
              <T t="Trust">Share of outputs approved without edits; edits per brief; escalations; user trust surveys.</T>
              <T t="Operations">Cost per query or per brief; latency (p95); data freshness; uptime.</T>
            </Grid>
          </S>

          {/* 12 */}
          <S id="stories" n={12} title="Your stories (answer → example → outcome)">
            <div className="space-y-3">
              <T t="Smart Bricks: 0→1 agentic AI (lead story for Hugo)">
                <b>Problem:</b> AI underwriting product for institutional investors; a domain new to you, few requirements, almost no real documents. <b>You owned:</b> the whole vertical: discovery with many investors, flow maps, agent research, test plan, roadmap, GTM. <b>Decided:</b> researched probabilistic vs deterministic agents; set “AI reasons, deterministic engines calculate, humans authorise capital”; narrowed v1 to underwriting. Discovery showed speed wasn't the pain, so you reframed the value to a fund's “company brain”. <b>Delivered:</b> Product Definition v2.0, v1 roadmap, competitor analysis, GTM, and a nine-screen prototype you built. <b>Outcome:</b> an investor-validated v1 and a stronger value proposition; the CEO agreed to the change.
              </T>
              <T t="Law71: government legal AI, Arabic quality">
                <b>Problem:</b> a ministry (UAE MOFA), a defence group (EDGE), legal teams and engineers, each with their own definition of “correct”. <b>You owned:</b> sprint delivery and backlog as Scrum Master, and Arabic quality as the only Arabic speaker. <b>Decided:</b> one visible backlog; compliance in acceptance criteria; automated quality checks as shared evidence. <b>Outcome:</b> adopted by MOFA and EDGE Group; Arabic brought to English-level quality despite dialects and messier data; fewer late escalations.
              </T>
              <T t="XPay: clarity with no playbook">
                Sole PM, no documentation, weekly priority changes during a payment-core rebuild. Set up Linear + GitHub, Slack feedback triage, PostHog. Migrated live merchants in reversible stages. <b>Outcome:</b> 100% uptime; took part in Central Bank of Egypt licensing.
              </T>
              <T t="MUAB: requirements & a senior stakeholder">
                CEO's wishes had drifted far from the spec. Rebuilt the PRD live in the review; five architecture decisions locked in one session, no rework. Hands-on audit found payment and login failures the roadmap said worked; presented them as one launch blocker. <b>Outcome:</b> caught before launch; the CEO trusted your challenges because they came with evidence.
              </T>
              <T t="Mumzworld: cross-functional at scale">
                Sole app product lead for 5M+ users, from Egypt, synced with a UAE web team of 3–4 PMs. No documentation mid-migration: built end-to-end docs and dependency maps. <b>Outcome:</b> 99.9% uptime through Black Friday; promoted from QA to PM in four months.
              </T>
              <T t="Building with AI (your edge)">
                You vibe-code tools and prototypes: a CS command centre with next-best actions and AI-written talking points per user, a call-insights tool, a metrics watchdog, Slack bots, Testify (finds gaps in requirements, writes dev checklists and QA tests), Zeki (bilingual kids' AI app), YallaGain's app (Figma Make, Copilot, Supabase), and the Career Navigator prototype for Whiteshield. <b>Point:</b> clients react to something real in days.
              </T>
            </div>
          </S>

          {/* 13 */}
          <S id="qa" n={13} title="Q&A: 32 likely questions">
            <p className="bk-noprint mb-4 text-sm text-neutral-400">Tap a question to reveal the answer. Say it out loud before you look.</p>
            <div className="space-y-2">
              <QA tag="open" q="Tell me about yourself." a={<p>“I'm a 0→1 product manager who started as a software and QA engineer. My focus is AI products that senior decision-makers trust. Most recently at Smart Bricks I defined an agentic AI underwriting product for institutional investors from a blank page. Before that I shipped legal AI adopted by the UAE Ministry of Foreign Affairs and EDGE Group. I prototype myself, which is why I rebuilt Career Navigator for my conversation with Fouad. I'm excited about this role because Quantum Leap sits exactly where I want to work: AI that helps governments make better decisions.”</p>} />
              <QA tag="open" q="Why Whiteshield, and why this role?" a={<p>“The hard part of AI for government isn't the model; it's turning research into something a ministry trusts and uses. Whiteshield has both the policy depth and the AI research, and it's now scaling the platform. That's where a product manager adds the most: connecting your research team, engineers and clients, and getting from pilot to production.”</p>} />
              <QA tag="AI" q="How would you evaluate an LLM or agent feature?" a={<><p>“Evals first, like acceptance criteria:</p><ol className="list-decimal pl-5"><li>A golden set of real questions with expert-approved answers, built with the domain experts.</li><li>Automatic checks on every change: groundedness, citation accuracy, format, refusal when evidence is missing.</li><li>LLM-as-judge for scale, calibrated against human grades.</li><li>Expert review of samples before each release.</li><li>Compare against a baseline (the current process or a simpler model).</li><li>In production: monitor quality, cost, latency; every failure becomes a new test case.”</li></ol><p>Example: at Law71 we used automated quality checks as shared evidence with the ministry, and I evaluated Arabic separately from English.</p></>} />
              <QA tag="AI" q="How do you reduce hallucinations?" a={<p>“Design so the model never needs to invent. Ground answers in retrieved sources with citations; let it say ‘I don't have evidence for that’; keep numbers out of the LLM (calculated by deterministic models or tools); constrain outputs to a structure; low temperature; groundedness checks; and human review for anything that reaches a decision-maker. At Smart Bricks the product showed a range and what was missing instead of inventing a number.”</p>} />
              <QA tag="AI" q="RAG, fine-tuning or prompting: how do you choose?" a={<p>“Prompting first, because it's cheapest and fastest to test. RAG when the model needs knowledge it doesn't have or that changes, like policies or internal reports; it also gives citations. Fine-tuning only for a narrow, stable task where we have lots of good examples, or for style and format; it's not a reliable way to add facts. Often the answer is prompting plus RAG, with deterministic tools for numbers.”</p>} />
              <QA tag="AI" q="What is an agent, and when would you not use one?" a={<p>“An LLM that plans steps and calls tools, like search, a forecasting model or a database. I'd use one when the task genuinely needs several steps chosen dynamically, like ‘assess this tariff change’: gather data, run the trade model, map regional impact, draft the brief. I wouldn't when a fixed workflow does the job: a fixed pipeline is cheaper, faster, and easier to test and audit. In government, I'd limit which tools an agent can call alone and put a human approval before anything leaves the building.”</p>} />
              <QA tag="AI" q="How would you design Quantum Leap's agents to be trustworthy?" a={<p>“Separate roles: the LLM understands the question, plans, and explains; deterministic economic models produce every number; retrieval supplies cited evidence. Every output shows sources, data freshness and a confidence range, and flags conflicting or missing data. Humans approve before a brief goes to a minister, with a full audit trail of sources, model versions and assumptions. And evals per policy domain, reviewed by your economists.”</p>} />
              <QA tag="AI" q="How would you explain embeddings to a minister?" a={<p>“It's how the system understands meaning, not just words. It turns every document into coordinates on a map of ideas, so ‘youth unemployment’ and ‘jobs for graduates’ land close together, and the system finds both.”</p>} />
              <QA tag="AI" q="How do you think about cost and latency?" a={<p>“They're product constraints, not just engineering ones. I'd match the model to the step (a small model for classifying the question, a larger one only for the final brief), precompute heavy analysis for dashboards, cache common queries, and set targets like p95 latency and cost per brief. A minister's briefing can take minutes; an interactive chat can't.”</p>} />
              <QA tag="AI" q="How do you handle Arabic?" a={<p>“Treat it as its own product, not a translation. Separate evals for Arabic, native reviewers, attention to dialect vs MSA, mixed-language queries, right-to-left layout and tokenisation cost. At Law71 I was the only Arabic speaker and brought the Arabic legal portal to the same quality as English despite messier data and different retrieval behaviour.”</p>} />
              <QA tag="AI" q="What does ‘sovereign AI’ mean to you as a PM?" a={<p>“It's an architecture decision from day one: data stays in-country, the client controls access and keys, models are hosted in-region or open-weight where needed, and everything is auditable. It affects which models we can use and how fast we can ship, so I'd make it explicit in the roadmap, not discover it at procurement.”</p>} />
              <QA tag="data" q="A model is 90% accurate. Is that good?" a={<p>“It depends: compared with what, and which 10% is wrong? I'd ask for the baseline, how it does on data it hasn't seen, precision vs recall, and whether errors cluster in one region or group. For a ministry, a model that's right on average but wrong in the regions that matter most is a problem.”</p>} />
              <QA tag="data" q="How would you validate satellite-based economic estimates?" a={<p>“Back-test against official figures where they exist, check against surveys or field data, compare with a simple baseline, and test regions separately, since cloud cover, informal activity or sparse areas can weaken the signal. Then show the confidence range and data freshness in the product, and label where the signal is weak.”</p>} />
              <QA tag="data" q="Forecast vs nowcast vs simulation?" a={<p>“Nowcast: what's happening now, before official data arrives. Forecast: what's likely to happen. Simulation: what would happen if we make a specific change. Quantum Leap does the last two, and a nowcast can feed them the current starting point.”</p>} />
              <QA tag="data" q="How would you prove a product or policy had impact?" a={<p>“Design for attribution from the start. Ideally a comparison group: a staggered rollout by region, matching participants with similar non-participants, or difference-in-differences. Report the uplift with its uncertainty, not just totals. I'd rather report a smaller number we can defend.”</p>} />
              <QA tag="product" q="How would you work with data scientists and economists?" a={<p>“They own the methods; I own the problem, the user and whether it works in production. I bring them a sharp question and the user's decision, agree evals and a baseline with them, and translate their work into something a minister understands. I protect their time from ad-hoc client requests and make trade-offs visible. I started as an engineer, so I'm comfortable in technical detail without pretending to be the expert.”</p>} />
              <QA tag="product" q="How do you take a research prototype to production?" a={<p>“Define who uses it and for which decision; harden the data pipeline and refresh cadence; set evals and monitoring; design the interface for trust (sources, uncertainty); handle security and sovereignty; pilot with one client and a clear success metric; then scale. The gap is usually data reliability and user trust, not the model.”</p>} />
              <QA tag="product" q="A ministry asks for a feature next month. What do you do?" a={<p>“Find the objective behind it: what decision or announcement is it for? Then offer options: a thin version by the date, the full version later, and what would slip. The client decides with the trade-off visible, and it goes in writing. At Law71 one visible backlog turned competing demands into shared decisions.”</p>} />
              <QA tag="product" q="How do you prioritise with no roadmap?" a={<p>“Agree the decision criteria first (impact on the client's outcome, confidence, effort, risk) and then score options openly. It turns opinion fights into one trade-off. At XPay, with no documentation and weekly priority changes, I built the operating system first: one backlog, a feedback channel, and data.”</p>} />
              <QA tag="product" q="What would you do in your first 90 days?" a={<p>“Days 1–30: listen: sit with the research team and clients, learn the product and data, turn my assumptions into hypotheses. Days 31–60: pick one measurable outcome with one client, prototype, test with real users, agree evals. Days 61–90: ship the smallest version that produces evidence, with monitoring from day one.”</p>} />
              <QA tag="product" q="How would you measure Quantum Leap's success?" a={<p>“Ultimately: decisions made with it and whether they held up. Leading indicators: decision-makers and analysts using it weekly, briefs approved without heavy edits, time from question to approved brief, forecast error vs baseline, and renewals or expansion to new policy domains.”</p>} />
              <QA tag="product" q="What would you not build?" a={<p>“Anything where AI generates the numbers; features a client asked for that don't serve the decision; and broad chat interfaces before we've proven one high-value use case with strong evals.”</p>} />
              <QA tag="product" q="How do you write requirements for an AI feature?" a={<p>“Like a normal PRD plus: the decision it supports, the data and its freshness, which parts are AI vs deterministic, eval criteria and thresholds, failure behaviour (what it does when unsure), human approval points, and cost and latency targets.”</p>} />
              <QA tag="behav" q="Tell me about a 0→1 product you owned." a={<p>Smart Bricks story (section 12). Lead: “My hardest 0→1 was an AI underwriting product for institutional investors, in a domain new to me, which I owned alone from the first investor conversation to the v1 roadmap.” End with the reframing and the CEO agreeing.</p>} />
              <QA tag="behav" q="A time you found the real problem, not the proposed solution." a={<p>“At Smart Bricks the CEO's pitch was ‘we make underwriting faster’. Investors told me underwriting already doesn't take long. The real pain was memory and trust across deals, so I reframed it as a fund's company brain: memory of every deal, checked calculations, surfacing gaps and conflicts. The CEO agreed and v1 was built around it.”</p>} />
              <QA tag="behav" q="A difficult senior stakeholder." a={<p>MUAB: “I listen first, then challenge with evidence.” The roadmap said payments worked; your audit showed they didn't; you presented it as one launch blocker; critical failures were caught before launch.</p>} />
              <QA tag="behav" q="A time you were wrong." a={<p>Pick a real one and keep it short: what you believed, what data changed your mind, what you changed. (Suggested: the Smart Bricks value proposition: you started from ‘speed’ like the CEO, and discovery corrected you.)</p>} />
              <QA tag="behav" q="How do you use AI tools in your own work?" a={<p>“Every day. I prototype with Figma, Claude Code, Cursor, Lovable or v0, and I build internal tools: a CS command centre, a call-insights tool, a metrics watchdog, Slack bots, and Testify, which finds gaps in requirements and writes QA test cases. It means clients and teams react to something real within days.”</p>} />
              <QA tag="behav" q="You're not a data scientist. Is that a problem?" a={<p>“I don't need to be; your team is excellent at that. What I bring is understanding AI well enough to ask the right questions, design for trust, and turn research into a product clients adopt. I started as an engineer, so I'm comfortable in the technical detail.”</p>} />
              <QA tag="product" q="A minister wants one number, not a range. What do you do?" a={<p>“Give a clear headline and keep the honesty underneath: ‘most likely around 2,400 jobs’, with the range one click away and the main assumption in plain words. Decision-makers need a clear answer, but a single number with no range sets them up to be embarrassed later, and that destroys trust in the product. I'd agree the format with the analyst team who briefs the minister.”</p>} />
              <QA tag="role" q="Contract or permanent: what do you prefer?" a={<p>“I'm open to starting with the contract. It lets me prove value on the product quickly, and I'd aim to make that the case for the permanent role.” (Only if true. Visa and location → Alex.)</p>} />
              <QA tag="role" q="What questions do you have for me?" a={<p>See section 15. Always ask about the early-stage product first.</p>} />
            </div>
          </S>

          {/* 14 */}
          <S id="cases" n={14} title="Mini-cases, worked">
            <p className="text-sm text-neutral-400">Structure out loud before filling in: <b className="text-white">objective → users & decision → data → approach (simplest first) → trust & evals → pilot & metrics → risks.</b> Ask one clarifying question first.</p>
            <div className="mt-4 space-y-3">
              <T t="Case A: “A ministry wants to know the regional impact of a new tariff. Design the product.”">
                <b>Clarify:</b> who decides, by when, which regions and sectors? <b>Users:</b> the minister (needs a clear answer and defence), policy analysts (need to explore). <b>Data:</b> trade flows, sector employment by region, firm locations, satellite activity for industrial zones, freshness of each. <b>Approach:</b> the LLM turns the question into a plan; the trade model (deterministic) simulates the change; regional mapping allocates impact using firm and satellite data; the LLM drafts a brief citing every source. <b>Trust:</b> ranges not single numbers; assumptions listed and editable; missing data flagged; analyst approves before the minister sees it. <b>Evals:</b> back-test on past tariff changes; economists review a sample of briefs. <b>Pilot:</b> one sector, one ministry; metric: brief used in the decision, analyst edits, time to brief. <b>Risks:</b> false precision, stale data, political sensitivity of regional results.
              </T>
              <T t="Case B: “Our satellite activity index is accurate, but clients don't use it. Why, and what do you do?”">
                <b>Hypotheses:</b> it doesn't answer a decision they have; they don't trust it (no sources or ranges); it doesn't fit their workflow (monthly reports, Arabic); results aren't explained. <b>Do:</b> interview 5–8 users about their last decision; watch them use it; find one decision it could change. <b>Then:</b> ship a thin workflow for that decision (e.g. monthly regional brief with explanation and confidence), measure repeat use.
              </T>
              <T t="Case C: “Design an assistant that answers ministry staff questions from internal policy documents.” (XShield-like)">
                <b>Users & questions:</b> collect 50 real questions first. <b>Approach:</b> RAG with hybrid search (keyword for law numbers and names, semantic for meaning), reranking, citations to the paragraph. <b>Access:</b> respect document permissions per user. <b>Trust:</b> refuse when no source; show sources; Arabic and English evaluated separately. <b>Evals:</b> golden set from the 50 questions with expert answers; groundedness and citation accuracy. <b>Pilot:</b> one department; metrics: answer acceptance, time saved, escalations. <b>Risks:</b> outdated documents, prompt injection, leaking restricted documents.
              </T>
              <T t="Case D: “Prioritise three client requests with one team.”">
                Agree criteria with the stakeholders (impact on the client's outcome, confidence, effort, risk, contractual commitment), score openly, show what slips for each option, let the owner decide, write it down. Mention your XPay/Law71 approach.
              </T>
            </div>
          </S>

          {/* 15 */}
          <S id="ask" n={15} title="Questions to ask Hugo (pick 3)">
            <ol className="list-decimal space-y-2 pl-5 text-sm text-neutral-300">
              <li><b className="text-white">“Alex mentioned an early-stage product. What is it, and what stage is it at?”</b> (Ask this early if you can.)</li>
              <li>“How does product work with your research and AI engineering teams today? Where does a PM add most value?”</li>
              <li>“Where does Quantum Leap struggle most with clients: data, trust, or adoption?”</li>
              <li>“How do you evaluate the quality of Quantum Leap's forecasts and agents today?”</li>
              <li>“What would make someone in this role a success in the first 3 months, from your side?”</li>
              <li>“How do sovereignty requirements shape which models and infrastructure you use?”</li>
              <li>“What are the next steps after our conversation?” (Always ask at the end.)</li>
            </ol>
          </S>

          {/* 16 */}
          <S id="run" n={16} title="Running the 45 minutes">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead className="text-xs text-neutral-500"><tr><th className="py-2">Min</th><th>What happens</th><th>Screen</th></tr></thead>
                <tbody className="text-neutral-300">
                  {[
                    ["0–3", "Rapport. Agenda: “I've prepared a short concept around Quantum Leap if useful, but happy to follow your lead.”", "None"],
                    ["3–5", "60-second intro (Q&A #1)", "None"],
                    ["5–25", "His questions: AI depth, stories, maybe a case", "None"],
                    ["25–35", "/hugo deck and the concept demo, if invited or if time allows", "/hugo"],
                    ["35–40", "Discussion: “Where would this break with a real client?”", "Demo"],
                    ["40–45", "Your questions, next steps, close", "None"],
                  ].map(([a, b, c]) => <tr key={a} className="border-t border-white/10"><td className="py-2 pr-3 font-mono text-accent">{a}</td><td className="pr-3">{b}</td><td>{c}</td></tr>)}
                </tbody>
              </table>
            </div>
            <Grid>
              <T t="Before">Test camera, mic and screen sharing. Open /hugo and /hugo?meet=1 in tabs. Zoom 110%. Notifications off. Water. This booklet on your phone, not on the shared screen.</T>
              <T t="During">Answer first. Pause after 60–90 s. If you don't know: “I don't know, but here's how I'd find out.” Take a note when he describes a problem; you can offer a short proposal on it.</T>
              <T t="Close">“Is there anything from today that makes you unsure I'm the right fit? I'd rather address it now.” Then: “What are the next steps?”</T>
              <T t="After">Same-day thank-you: one thing he said, the /hugo link, and (if offered) what proposal you'll send and when. Update Alex.</T>
            </Grid>
          </S>

          {/* 17 */}
          <S id="facts" n={17} title="Facts to remember">
            <ul className="grid gap-2 text-sm text-neutral-300 md:grid-cols-2">
              {[
                "Whiteshield founded 2011; Harvard & OECD roots",
                "Offices: Dubai (DIFC), Abu Dhabi, Riyadh",
                "July 2026: US$15M private credit from Ruya Partners",
                "Platform cloud-powered by Google",
                "Quantum Leap: agentic strategy platform: trade, regional impact (satellite), fiscal, financing & risk",
                "XShield: sovereign AI agent platform: grounded, cited answers; hybrid search; SOC 2",
                "QuantumEd (human capital) · Quantum Navigator (social indicators)",
                "MENA government data availability: 44% below global average, 54% below G20",
                "Hugo: AI Innovation Lead + Quantum Leap Lead; ex-Esade; computer vision & macro forecasting; Data-Driven Decision Lab (2025)",
                "Fouad Homsy: Principal, public policy (you passed his round)",
                "Your principle: AI reasons · engines calculate · humans decide",
                "Your proof: Law71 (MOFA, EDGE) · Smart Bricks · XPay 100% uptime · Mumzworld 99.9% at Black Friday",
              ].map((f) => <li key={f} className="rounded-lg border border-white/10 p-3">{f}</li>)}
            </ul>
            <p className="mt-6 font-mono text-xs text-neutral-500">Sources: whiteshield.ai (Quantum Leap, XShield, AI Satellite Navigator, AI Economics, people pages, “Bridging the Data Gap in Policymaking”); The Org; Zawya, Wamda and Ruya Partners (July 2026 financing); Glassdoor and PrepLounge (process); AI PM interview guides (IGotAnOffer, Northeastern, KORE1). Hugo's personal site was not accessible to verify.</p>
          </S>
        </div>
      </main>
    </div>
  );
}
