# Prep: meeting with Fouad Homsy (Principal, Whiteshield)

Profile: public-policy economist (AUB economics, LSE MPP), grew up inside Whiteshield's consulting practice,
seconded to the Abu Dhabi Department of Economic Development. Expect questions on evidence, causality,
government clients, and how a PM works with policy consultants.

Format for every answer: **answer first → one specific example → outcome.** Say "I", not "we".

## 1. "How would you know the product caused the hire, not the economy?"
**Answer:** By designing for attribution from day one: verified outcomes, a comparison group, and honest reporting of uplift, not totals.
- Verify the hire through employer or social-insurance records, never a self-report.
- Compare people who followed a gap plan with similar people who didn't (same sector, experience, region, time period). Where the rollout allows it, stagger by region or cohort so there's a natural control.
- Report the *uplift* and the *cost per verified hire* by course, so a ministry can defend the budget.
**Example:** At Smart Bricks I found leadership didn't trust the numbers, so I defined the metrics and coded the reporting pipeline myself before anyone built dashboards on top of it.
**Close:** "I'd rather report a smaller number we can prove than a large one we can't."

## 2. "A ministry wants feature X next month. How do you respond?"
**Answer:** I never say a flat no. I find the objective behind the request, then offer the fastest version that serves it, with the trade-off made visible.
- Ask: what decision or announcement is this for? What happens if it's late?
- Offer options: a thin version by the date, the full version later, and what would slip.
- The client decides, with the trade-off in front of them. It goes in writing.
**Example:** At Law71, working with the UAE Ministry of Foreign Affairs and EDGE Group, I put every stakeholder on one visible backlog and wrote compliance into acceptance criteria. Priorities became shared decisions, and late escalations dropped.

## 3. "How would you work with our policy consultants, who own the client relationship?"
**Answer:** The consultants own the client and the policy question; I own turning that into a product that works and produces evidence. We need each other.
- Join client workshops early, and listen before proposing.
- Bring a prototype to the next meeting so the client reacts to something real, not a document.
- Give consultants the evidence they need for their policy recommendations (the ministry view).
**Example:** At MUAB, what the CEO wanted had drifted far from the spec. I rebuilt the PRD live in the review, and we locked five architecture decisions in one session with no rework afterwards.

## 4. "What would you *not* build?"
**Answer:** Anything that doesn't move the policy outcome or can't be measured.
- Not a WhatsApp or chatbot channel first. Trust and outcome data come before reach.
- No AI generating numbers: matches, gaps and statistics stay deterministic and auditable.
- Not every screen at once. One outcome, one client, one pilot.
**Example:** At Smart Bricks I narrowed v1 to underwriting only, and set the rule: AI reasons, deterministic engines calculate, humans authorise.

## 5. "Tell me about a time you had no roadmap." (recruiter Q2)
**Answer:** The first thing I build is the operating system.
**Example:** XPay: sole PM, no documentation, priorities changing weekly during a core rebuild. I set up Linear + GitHub, Slack feedback triage and PostHog, then migrated live merchants in reversible stages.
**Outcome:** 100% uptime through the migration, and I took part in the Central Bank of Egypt licensing.

## 6. "Why Whiteshield, and why this role?"
**Answer:** Because the hard part of government AI isn't the model. It's turning a policy objective into something citizens use and ministries can trust. That's the work I've been doing at Law71 and Smart Bricks, and Whiteshield sits exactly where policy meets product.

## 7. "You don't come from economics or labour policy."
**Answer:** True, and I'd lean on your team for that. What I bring is learning a new domain fast and building the product around it.
**Example:** Smart Bricks was a domain new to me. I ran discovery with institutional investors, found that speed wasn't their pain, and reframed the product around a fund's "company brain". The CEO agreed and v1 was built around it.

## 8. "How do you handle Arabic and local context?"
**Answer:** Arabic is my native language, and I've owned localisation on every product I've joined.
**Example:** At Law71 I was the only Arabic speaker on the team and brought the Arabic legal-AI portal to the same quality as English, despite dialects and messier data.

## 9. "How would you use AI safely in a government product?"
**Answer:** AI reasons, engines calculate, humans decide.
- AI reads CVs, picks the next onboarding question, drafts the policy brief.
- Numbers come from deterministic, auditable logic.
- The citizen confirms their profile; an analyst approves every brief. Data stays in-country, and there's an audit trail on every recommendation.

## Questions to ask him
- Which policy outcome does the client measure Career Navigator against today?
- How do consultants and the product team split ownership on a client engagement?
- What does a successful first 90 days look like to you for this role?
- Where has a product like this struggled with a government client before?

---

# Running the 45 minutes

| Min | Block | What you do | Screen |
|---|---|---|---|
| 0–3 | Open | Rapport, then agree the agenda: "I'd love 10 min to show you something I built around Career Navigator, then your questions." | None |
| 3–5 | Who I am | 60-second pitch (below) | None |
| 5–20 | His questions | Answer first → example → outcome. Say "I". | None |
| 20–32 | Walkthrough | Meeting mode 1→7, with the prototype demo at screen 3 | /whiteshield/?meet=1 |
| 32–40 | Discussion | Invite challenge: "Where am I wrong about how this works in practice?" | Leave screen 4 or ministry view up |
| 40–45 | Your questions and close | 2 questions, then close | None |

If he opens with "walk me through what you prepared", swap blocks 3 and 4.

**60-second pitch:** "I'm a 0→1 product manager who started as an engineer. My sweet spot is taking an unclear problem, often with senior or government stakeholders, and turning it into a product people trust. For example, I shipped legal AI adopted by the UAE Ministry of Foreign Affairs and EDGE Group. Most recently at Smart Bricks I defined an AI underwriting product from a blank page. And I prototype myself, which is why I've brought something to show you."

**Walkthrough script (one or two sentences per screen):**
1. "My one idea: Career Navigator can become the evidence engine for labour policy, from matches to verified hires."
2. "I started from the policy objective, not features. Everything I propose traces to this chain."
3. "Let me show you." Prototype: onboarding (20s) → CV gap with citations (30s) → gap to course (30s) → Ministry view (60s). "The citizen gets a plan; the ministry gets proof."
4. "The question I'd expect a ministry to ask is causality. Here's how I'd answer it." Pause and let him engage; this is his expertise.
5. "AI reasons, engines calculate, humans decide."
6. "My first 90 days: listen first, one outcome with one client, then ship."
7. "In short: a PM your consultants can bring into the client room."

**If he gives you a live case** (their consulting rounds are policy cases): clarify the objective and who the client is → structure the problem → state hypotheses → say what data would test them → recommend, with risks. Think aloud; say your structure before you fill it in.

**Close:** "Based on today, is there anything that makes you unsure I'm the right fit? I'd rather address it now."
