"use client";

import { useEffect, useState } from "react";

// Nada's prep booklet for the final Whiteshield round (CEO + VP Engineering) and the offer stage.
// Private, unlinked, noindex. Same layout as the Hugo booklet.

const toc = [
  ["cheat", "1-page cheat sheet"],
  ["stage", "Where you are"],
  ["who", "Who you're meeting"],
  ["purpose", "Whiteshield's purpose, in your words"],
  ["stories", "Your 5 winning stories"],
  ["ceo", "CEO round: Q&A"],
  ["wael", "Wael round: Q&A"],
  ["evals", "Deep dive: AI testing & evaluation"],
  ["curve", "Curveballs"],
  ["ask", "Questions to ask them"],
  ["run", "On the day"],
  ["offer", "The offer: pay & negotiation"],
  ["package", "Package & contract checklist"],
  ["visa", "Visa & documents"],
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

function T({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <div className="bk-card rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <p className="font-semibold text-white">{t}</p>
      <div className="mt-1 text-sm text-neutral-300">{children}</div>
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
      <div className={`bk-ans space-y-2 px-4 pb-4 text-sm text-neutral-300 ${open ? "" : "hidden"}`}>{a}</div>
    </div>
  );
}

const Grid = ({ children }: { children: React.ReactNode }) => <div className="grid gap-3 md:grid-cols-2">{children}</div>;
const Note = ({ children }: { children: React.ReactNode }) => (
  <div className="my-4 rounded-xl border border-amber-400/30 bg-amber-500/10 p-4 text-sm text-amber-100">{children}</div>
);
const Say = ({ children }: { children: React.ReactNode }) => <p className="border-l-2 border-accent pl-3 italic text-neutral-200">“{children}”</p>;

export default function FinalBooklet() {
  const [all, setAll] = useState(false);
  useEffect(() => {
    document.querySelectorAll(".bk-ans").forEach((el) => el.classList.toggle("hidden", !all));
  }, [all]);

  return (
    <div className="ws min-h-screen">
      <header className="bk-noprint sticky top-0 z-30 border-b border-white/10 bg-ink/90 backdrop-blur">
        <div className="container-x flex h-12 items-center justify-between gap-3 text-sm">
          <span className="font-semibold">Final round · Whiteshield</span>
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
            <p className="eyebrow">Private · final interview & offer prep</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">The <span className="shimmer">final round</span></h1>
            <p className="mt-4 text-lg text-neutral-400">Alex (CEO) and Wael (VP Engineering). Conversational, about fit, motivation and how you work with engineers. Then the offer.</p>
          </div>

          {/* 1 */}
          <S id="cheat" n={1} title="1-page cheat sheet">
            <div className="grid gap-3 md:grid-cols-2">
              {[
                ["What already impressed them", "Hands-on product experience · ownership · 0→1 · practical AI understanding · 20+ investor discovery sessions · synthetic data to test an AI assistant across dialects · proactive, goes the extra mile."],
                ["The CEO is assessing", "Cultural fit, motivation, how you'd fit the wider business, how you approach challenges. Show ownership, independence, getting things done, and that you understand Whiteshield's purpose."],
                ["Wael is assessing", "How you work with engineering, approach technical challenges, and turn complex requirements into working products. Not a technical test."],
                ["Your story for Wael", "AI testing & evaluation: synthetic test data, golden sets, dialect coverage, groundedness checks, human review. Hugo flagged this as something the team needs."],
                ["Your one line", "“I take unclear problems and turn them into AI products people trust, and I own them end to end.”"],
                ["Why Whiteshield, in one breath", "“I want to build AI that helps governments make better decisions: grounded in evidence, trusted, and actually used. That's Whiteshield's purpose, and it's the work I love.”"],
                ["Tone", "Warm, calm, confident. Conversational, not a pitch. Short answers, then pause."],
                ["Always", "Answer first → one example → the result. Say “I”. Close by asking about next steps."],
              ].map(([t, d]) => (
                <div key={t} className="bk-card rounded-xl border border-accent/30 bg-accent/[0.05] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-accent">{t}</p>
                  <p className="mt-2 text-sm text-neutral-200">{d}</p>
                </div>
              ))}
            </div>
          </S>

          {/* 2 */}
          <S id="stage" n={2} title="Where you are">
            <ol className="space-y-2 text-sm text-neutral-300">
              <li>✅ Aptitude test & video (first application)</li>
              <li>✅ Recruiter screen (Alex Elliot)</li>
              <li>✅ Fouad Homsy, Principal: policy & client fit, <b className="text-white">“really impressed”</b></li>
              <li>✅ Hugo Zlotowski, Head of Product: how you work, <b className="text-white">“really impressed”</b></li>
              <li>👉 <b className="text-white">Final: Alex (CEO) + Wael (VP Engineering)</b>, fit & engineering collaboration</li>
              <li>⏭ Offer → documents → visa → start</li>
            </ol>
            <Note>At this stage they're mostly confirming, not testing. The team already wants you. Your job is to be the same person they met, and to make the CEO and Wael comfortable saying yes.</Note>
            <Note>Confirm full names with Alex Elliot. Public sources list Fadi Farra as Whiteshield's founder and CEO, so “Alex (CEO)” may be a different title or a recent change. Don't mention this in the interview; just use the name you're given.</Note>
          </S>

          {/* 3 */}
          <S id="who" n={3} title="Who you're meeting">
            <Grid>
              <T t="Alex, CEO">
                <p>Focus: culture, motivation, fit with the wider business, how you handle challenges.</p>
                <p className="mt-2">What a CEO listens for: Do I trust this person with our clients? Will they take ownership without being chased? Do they care about what we do, or just the job?</p>
              </T>
              <T t="Wael, VP Engineering">
                <p>Engineering background, interviews all permanent hires.</p>
                <p className="mt-2">If it's Wael AbuRizq (confirm on LinkedIn): long experience in government AI in Abu Dhabi, including the TAMM government services AI assistant. He'll value clear requirements, respect for engineering constraints, and rigorous AI testing.</p>
              </T>
            </Grid>
          </S>

          {/* 4 */}
          <S id="purpose" n={4} title="Whiteshield's purpose, in your words">
            <p className="text-sm text-neutral-300">Alex Elliot specifically asked you to show you understand <b className="text-white">how technology, AI and data help governments make better decisions and deliver meaningful outcomes.</b> Have this ready:</p>
            <div className="mt-4 space-y-3">
              <Say>Governments make decisions that affect millions of people, often with data that's late, incomplete or scattered. Whiteshield turns that data into evidence a decision-maker can trust: forecasting what a policy will do before it's made, and tracking whether it worked after. The technology matters, but the real outcome is better decisions: more jobs, better-targeted support, money spent where it works.</Say>
              <Say>What I find meaningful is that a good product here doesn't just get used, it changes what happens to real people. That's a different kind of impact from most products I've built.</Say>
            </div>
            <h3 className="mt-6 font-semibold text-white">Facts to have in your pocket</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-300">
              <li>Founded 2011, from the Harvard and OECD communities; started in policy consulting, now an AI-native “sovereign intelligence” company.</li>
              <li>Products: Quantum Leap (decision simulation & forecasting), XShield (grounded, cited answers on a government's own data), QuantumEd, Quantum Navigator. Built on Google Cloud.</li>
              <li>Dubai (DIFC), Abu Dhabi, Riyadh; work across the Middle East, Africa, Europe and Asia.</li>
              <li>July 2026: US$15M financing from Ruya Partners to expand the platform and AI solutions.</li>
            </ul>
          </S>

          {/* 5 */}
          <S id="stories" n={5} title="Your 5 winning stories">
            <div className="space-y-3">
              <T t="1. 20+ discovery sessions → finding the real problem (CEO)">Smart Bricks: new vertical, vague requirements, no public data. You ran 20+ discovery sessions with institutional investors, mapped the process end to end, and found speed wasn't their pain. You reframed the product around a fund's “company brain”; the CEO agreed; v1 was built around it.</T>
              <T t="2. Synthetic data to test AI across dialects (Wael)">With little real data available, you used a few real examples plus LLMs to generate realistic test data, including different Arabic dialects, to test an AI assistant before launch. That let the team measure quality across dialects, catch failures early and fix them before users saw them.</T>
              <T t="3. Ownership & getting things done (CEO)">Sole PM repeatedly: XPay (no documentation, weekly priority changes, migrated live merchants with 100% uptime), Mumzworld app (5M+ users, 99.9% uptime through Black Friday). You build the structure nobody gave you.</T>
              <T t="4. Complex requirements → working product, with engineers (Wael)">MUAB: the CEO's wishes had drifted far from the spec. You rebuilt the PRD live in the review and locked five architecture decisions in one session with no rework. Law71: compliance written into acceptance criteria, so engineers built it right the first time.</T>
              <T t="5. You build what you propose (both)">Prototypes and internal tools: CS command centre, call-insights tool, Testify, Zeki, and the Career Navigator prototype and Quantum Leap concept for Whiteshield.</T>
            </div>
            <Note>Use your own exact numbers and details. Only say what's true. If a detail above isn't quite right, adjust it before the interview.</Note>
          </S>

          {/* 6 */}
          <S id="ceo" n={6} title="CEO round: Q&A">
            <div className="space-y-2">
              <QA tag="open" q="Tell me about yourself." a={<Say>I'm a product builder who takes AI products from 0 to 1. I started as a software and QA engineer, so I'm hands-on: I prototype and build the tools I need. Most recently at Smart Bricks I built an agentic AI underwriting platform for institutional investors from zero, and before that at Law71 I worked on legal AI adopted by the UAE Ministry of Foreign Affairs and EDGE Group. What ties it together is turning unclear problems into AI products people trust.</Say>} />
              <QA tag="motivation" q="Why Whiteshield?" a={<Say>Because the purpose is real. Governments make decisions that affect millions of people, often with incomplete data. Whiteshield turns data and AI into evidence a decision-maker can trust, and that's exactly the kind of AI I want to build: grounded, trusted and actually used. I've also loved the people I've met in this process. Fouad and Hugo both made me want to work here more.</Say>} />
              <QA tag="motivation" q="What motivates you?" a={<Say>Seeing something I built get used and change an outcome. I love the moment a vague idea becomes something real that people rely on. At Smart Bricks it was seeing investors recognise their own problem in the product. Here, it would be a ministry making a better decision because of something we built.</Say>} />
              <QA tag="ownership" q="Tell me about a time you took ownership without being asked." a={<><Say>At MUAB, the roadmap said payments and logins worked. Nobody asked me to check, but I audited how money and logins actually flowed and found critical failures. I presented them to the CEO as one launch blocker instead of scattered tickets, and we fixed them before launch.</Say><p>Point: you don't wait to be told; you find the problem and own the fix.</p></>} />
              <QA tag="challenge" q="How do you approach a challenge you've never faced before?" a={<Say>I start by understanding before solving: who's affected, what they need, what's actually known. Then I make it concrete fast, usually with a prototype, so we learn from something real. At Smart Bricks the domain was completely new to me; 20+ conversations with investors and a prototype got me from zero to a validated v1.</Say>} />
              <QA tag="independence" q="How do you work when there's little direction?" a={<Say>Comfortably. That's been most of my career as a sole PM. I create the structure: a clear problem, a backlog, written decisions, regular check-ins. I don't need constant direction, but I keep my manager informed and bring them trade-offs rather than surprises.</Say>} />
              <QA tag="fit" q="What kind of culture do you do your best work in?" a={<Say>One with ownership and trust: small teams, clear goals, people who challenge each other respectfully and move fast. That's what I've seen in this process: everyone I met was direct, thoughtful and genuinely curious, which is a big reason I'm excited.</Say>} />
              <QA tag="fit" q="What's your biggest weakness?" a={<Say>I move fast and sometimes start building before every stakeholder is aligned. I've learned to put a short written decision and its trade-offs in front of people early. It costs a day and saves weeks.</Say>} />
              <QA tag="fit" q="Why are you leaving Smart Bricks?" a={<Say>I've loved it, and there's a lot of overlap with what Whiteshield does: AI that supports big decisions. But Smart Bricks is moving into new markets I'm not planning to relocate to, and Whiteshield is where I want to grow: AI for government at real scale.</Say>} />
              <QA tag="vision" q="Where do you see AI in government going?" a={<Say>From answering questions to supporting real decisions and, carefully, taking simple actions. The governments that benefit most will be the ones that trust their AI: grounded in their own data, auditable, sovereign. That's why I think Whiteshield is in the right place.</Say>} />
              <QA tag="future" q="Where do you see yourself in 3 years?" a={<Say>Having taken a product here from its first clients to a proven, scaled offering, and leading product for an AI platform governments rely on, while helping other PMs grow.</Say>} />
              <QA tag="role" q="Contract or permanent?" a={<Say>I'm happy to start where it makes most sense for the team. If it's the early-stage product on a three-month contract, I'm comfortable earning the permanent role through results. I'm genuinely here for the long term.</Say>} />
            </div>
          </S>

          {/* 7 */}
          <S id="wael" n={7} title="Wael round: Q&A">
            <div className="space-y-2">
              <QA tag="eng" q="How do you work with engineering teams?" a={<Say>I bring clear problems, not solutions: the user, the decision, the data, and what success looks like, written down. Engineering owns the how. I started as a software and QA engineer, so I understand trade-offs and respect estimates. I protect the team from changing priorities with one visible backlog and written decisions, and I'm available fast when they're blocked.</Say>} />
              <QA tag="eng" q="How do you turn complex requirements into a working product?" a={<><Say>Break it down to the decision it serves, then into small, testable pieces. I write requirements with acceptance criteria engineers can verify, map dependencies, and prototype the risky parts first.</Say><Say>At MUAB the CEO's wishes had drifted far from the spec; I rebuilt the PRD live with stakeholders and locked five architecture decisions in one session with no rework.</Say></>} />
              <QA tag="eng" q="What's in a good requirement for an AI feature?" a={<Say>A normal PRD plus: the decision it supports, the data and its freshness, which parts are AI and which are deterministic, evaluation criteria and thresholds, what it does when it's unsure, where a human approves, and cost and latency targets.</Say>} />
              <QA tag="eng" q="Tell me about a technical challenge you helped solve." a={<Say>At Smart Bricks we had no real deal documents to test our AI agents with. Instead of waiting, I used a few real examples plus LLMs to generate realistic test data. That let engineering test inputs and validate outputs before we had client data, and kept the build on schedule.</Say>} />
              <QA tag="eng" q="How do you handle disagreements with engineers?" a={<Say>I listen first, because they often see risks I don't. Then I share the user and client evidence behind the priority. If we still disagree, we agree what would change our minds, decide, and move on. Engineers respect a clear reason more than authority.</Say>} />
              <QA tag="eng" q="How do you handle technical debt vs new features?" a={<Say>Make it visible and tie it to impact: if debt slows delivery or risks reliability, it competes on the same backlog with a clear cost. I'd rather reserve regular capacity for it than let it explode before a client launch.</Say>} />
              <QA tag="ai" q="How do you take an AI feature from prototype to production?" a={<Say>Harden the data pipeline, define evaluation and monitoring, handle security and data residency, design the interface for trust, then pilot with one client and a clear success metric. The gap is usually data reliability and trust, not the model.</Say>} />
              <QA tag="ai" q="How do you decide what's AI and what's deterministic?" a={<Say>AI reasons and explains: understanding questions, planning, drafting. Deterministic systems calculate: every number and every rule. Humans approve anything that reaches a client. It makes the product testable and auditable, which matters a lot for government.</Say>} />
            </div>
          </S>

          {/* 8 */}
          <S id="evals" n={8} title="Deep dive: AI testing & evaluation (your Wael story)">
            <p className="text-sm text-neutral-300">Hugo highlighted this as something the team could benefit from. Be ready to go 2–3 levels deep.</p>
            <ol className="mt-4 space-y-3 text-sm text-neutral-300">
              {[
                ["The problem", "An AI assistant had to work across different Arabic dialects, but there wasn't enough real data to test it."],
                ["What you did", "Took a few real examples and used LLMs to generate realistic synthetic test cases, covering dialects, phrasing, edge cases and negative cases (questions it should refuse)."],
                ["How you checked the test data", "Native speakers / domain experts reviewed a sample, so the synthetic data was realistic and not just the model testing itself."],
                ["What you measured", "Correctness against expected answers, groundedness (backed by sources), refusal when it should refuse, and quality per dialect, so weak dialects stood out."],
                ["What happened", "Failures were found and fixed before launch, and the test set became a regression suite run on every change."],
                ["The lesson", "Evaluate per language and per dialect, never assume English quality carries over, and turn every production failure into a new test."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-3"><span className="font-mono text-accent">{i + 1}</span><span><b className="text-white">{t}.</b> {d}</span></li>
              ))}
            </ol>
            <Note>Adjust to the real details: which company, which assistant, which dialects, and any result you can share. Hugo and Fouad remembered this story, so tell it the same way.</Note>
            <h3 className="mt-6 font-semibold text-white">If Wael goes deeper</h3>
            <Grid>
              <T t="“Isn't synthetic data biased?”">Yes, it can be. That's why it's seeded with real examples, reviewed by humans, mixed with real cases as soon as they exist, and never the only test.</T>
              <T t="“How do you test at scale?”">Automatic checks on every change, LLM-as-judge for volume (calibrated against human grades), expert review on samples, and a pass threshold before release.</T>
              <T t="“What about after launch?”">Monitor quality, edits, refusals, latency and cost; sample real conversations for review; add failures to the test set.</T>
              <T t="“What if the model changes?”">Re-run the full test set before switching models or versions. Public benchmarks aren't enough; our own test set decides.</T>
            </Grid>
          </S>

          {/* 9 */}
          <S id="curve" n={9} title="Curveballs">
            <Grid>
              <T t="Estimation (like Hugo's moon question)">Start from something you know → simple maths out loud → sense-check → give a number. Moon: Apollo took ~3 days at ~5,000 km/h → ~360,000 km.</T>
              <T t="“What would your last manager say about you?”">“That I take ownership, move fast, and sometimes need to slow down to bring people with me. And that I always deliver.”</T>
              <T t="“Why should we hire you?”">“I take chaos and turn it into products people trust: 0→1 at Smart Bricks, government AI at Law71, and I build what I propose.”</T>
              <T t="You don't know an answer">“I don't know, but here's how I'd find out.” Honest beats guessing.</T>
            </Grid>
          </S>

          {/* 10 */}
          <S id="ask" n={10} title="Questions to ask them">
            <Grid>
              <T t="To the CEO (pick 2)">
                <ul className="list-disc space-y-1 pl-5">
                  <li>“Where do you see the platform side of Whiteshield in two or three years?”</li>
                  <li>“What does a great product person look like here, in your eyes?”</li>
                  <li>“What's the biggest bet the company is making right now?”</li>
                </ul>
              </T>
              <T t="To Wael (pick 2)">
                <ul className="list-disc space-y-1 pl-5">
                  <li>“How do product and engineering work together today, and what would you want from a PM in the first three months?”</li>
                  <li>“What's the hardest engineering challenge in getting AI to production for government clients?”</li>
                  <li>“How does the team test and evaluate AI outputs today?”</li>
                </ul>
              </T>
            </Grid>
            <p className="mt-4 text-sm text-neutral-300">Always close with: <b className="text-white">“What are the next steps from here?”</b></p>
          </S>

          {/* 11 */}
          <S id="run" n={11} title="On the day">
            <Grid>
              <T t="Before">Breathe (in 4 · hold 4 · out 6, ×5). Water. Notifications off. Camera at eye level. This booklet on your phone, not your screen.</T>
              <T t="During">Warm and conversational. Answer first, one example, stop. Smile. If they mention a problem, show curiosity and ask a follow-up.</T>
              <T t="Close">Thank them both by name. “I've really enjoyed meeting everyone in this process. I'd love to join.” Then next steps.</T>
              <T t="After">Short thank-you to Alex Elliot the same day. Note anything they said about the role, start date or package.</T>
            </Grid>
          </S>

          {/* 12 */}
          <S id="offer" n={12} title="The offer: pay & negotiation">
            <h3 className="font-semibold text-white">Market reference (UAE, 2026, tax-free)</h3>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead className="text-xs text-neutral-500"><tr><th className="py-2">Source</th><th>Range</th></tr></thead>
                <tbody className="text-neutral-300">
                  {[
                    ["Senior PM, Dubai (Glassdoor)", "AED 28K–44K/month total · median ~34K"],
                    ["Senior PM, Abu Dhabi (Glassdoor)", "AED 21K–42K/month"],
                    ["PM, Dubai (Levels.fyi)", "Median ~AED 418K/year"],
                    ["Senior PM at regional tech (Careem, Noon, Talabat)", "AED 22K–32K/month"],
                    ["Whiteshield consulting (Glassdoor, Dubai)", "Senior Associate AED 305K–410K/yr · Manager AED 670K–856K/yr"],
                  ].map(([a, b]) => <tr key={a} className="border-t border-white/10"><td className="py-2 pr-3">{a}</td><td>{b}</td></tr>)}
                </tbody>
              </table>
            </div>
            <Note><b>Your working target:</b> roughly <b>AED 30K–40K/month</b> for a senior AI PM, depending on seniority and whether housing and allowances are included. Set your own numbers before the call: an ideal, a target and a walk-away (minimum).</Note>
            <h3 className="mt-6 font-semibold text-white">How to negotiate (kindly)</h3>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-neutral-300">
              <li><b className="text-white">Let them name a number first.</b> If asked: <i>“I'd love to understand the range for the role first. I'm sure we can find something that works.”</i></li>
              <li><b className="text-white">If you must give a number,</b> give a range anchored at your target: <i>“Based on the market for senior AI PMs in the UAE, around AED X–Y per month, depending on the full package.”</i></li>
              <li><b className="text-white">Never accept on the call.</b> <i>“Thank you, I'm really excited. Could I have the offer in writing and a day or two to review it?”</i></li>
              <li><b className="text-white">Negotiate the package, not just the salary:</b> housing, flights, start bonus, notice period, the contract-to-permanent terms.</li>
              <li><b className="text-white">Ask once, with a reason, and stay warm:</b> <i>“I'm very keen to join. Given my 0→1 AI experience and the scope of the role, would you be able to come up to X?”</i></li>
              <li><b className="text-white">For the 3-month contract,</b> the monthly rate should be higher than a permanent salary, because there's less security and fewer benefits. Ask how and when the move to permanent is decided.</li>
            </ol>
          </S>

          {/* 13 */}
          <S id="package" n={13} title="Package & contract checklist">
            <Grid>
              <T t="Pay"><ul className="list-disc pl-5"><li>Monthly salary, and the basic vs allowances split (affects end-of-service)</li><li>Bonus or performance pay</li><li>Contract monthly rate vs permanent salary</li></ul></T>
              <T t="Benefits"><ul className="list-disc pl-5"><li>Health insurance (you, and family if relevant)</li><li>Housing and transport allowance</li><li>Annual flight home</li><li>Annual leave</li></ul></T>
              <T t="Contract terms"><ul className="list-disc pl-5"><li>Employer entity: Whiteshield DIFC, Abu Dhabi/mainland, or an agency</li><li>Probation (max 6 months)</li><li>Notice period</li><li>Contract → permanent: criteria and timing</li></ul></T>
              <T t="Practical"><ul className="list-disc pl-5"><li>Office: Dubai or Abu Dhabi; hybrid or on-site</li><li>Start date (leave time for documents and visa)</li><li>Relocation support: flights, temporary housing</li><li>Who pays for the visa and medicals</li></ul></T>
            </Grid>
            <h3 className="mt-6 font-semibold text-white">DIFC vs mainland in one look</h3>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead className="text-xs text-neutral-500"><tr><th className="py-2"></th><th>DIFC (Dubai office)</th><th>Mainland (likely Abu Dhabi)</th></tr></thead>
                <tbody className="text-neutral-300">
                  {[
                    ["Annual leave", "20 working days", "~30 calendar days"],
                    ["End of service", "DEWS savings: 5.83% of basic monthly (8.33% after 5 yrs)", "Gratuity: ~21 days' basic per year (first 5 yrs)"],
                    ["Probation", "Max 6 months", "Max 6 months"],
                    ["Notice", "30 days (3 months–5 years of service)", "30–90 days"],
                  ].map(([a, b, c]) => <tr key={a} className="border-t border-white/10"><td className="py-2 pr-3 text-white">{a}</td><td className="pr-3">{b}</td><td>{c}</td></tr>)}
                </tbody>
              </table>
            </div>
          </S>

          {/* 14 */}
          <S id="visa" n={14} title="Visa & documents">
            <h3 className="font-semibold text-white">You already have ✅</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-300">
              <li>UAE-attested engineering degree and transcript</li>
              <li>UAE-attested equivalency for your graduate certificate</li>
              <li>Valid passport</li>
            </ul>
            <h3 className="mt-6 font-semibold text-white">Likely still needed</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-300">
              <li><b className="text-white">Police clearance certificate:</b> required for Egyptians applying for UAE residency since April 2026. Wait for Alex/HR to confirm which attestation they need before paying.</li>
              <li>Recent passport photos (white background) and a colour scan of the passport, including the cover.</li>
              <li>CV and experience letters (useful, sometimes requested).</li>
              <li>Signed offer / contract.</li>
            </ul>
            <h3 className="mt-6 font-semibold text-white">Likely flow for an Egyptian national</h3>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-neutral-300">
              <li>Offer signed → employer applies for the work permit and entry permit.</li>
              <li>If sponsored by DIFC (or another free zone using the Cairo consular route): medical exam at an approved centre in Egypt, then the UAE visa service centre in Cairo (submit passport, then collect it with the visa). This matches your previous ADGM experience.</li>
              <li>Travel → medical test in the UAE if required → Emirates ID → residency visa.</li>
            </ol>
            <Note>Rules change often and public sources conflict. Ask Whiteshield's visa officer: “As an Egyptian national, will my visa go through the Cairo visa centre with a pre-entry medical, and which entity sponsors me?” Also check that your previous UAE residency was cancelled when the ADGM job ended.</Note>
            <p className="mt-6 font-mono text-xs text-neutral-500">Sources: Alex Elliot's briefing; Glassdoor, Levels.fyi and Indeed (salaries); DIFC Courts and law-firm guides (employment law); Fragomen, BAL and 2026 visa guides (Egyptian nationals). Guidance only, not legal advice.</p>
          </S>
        </div>
      </main>
    </div>
  );
}
