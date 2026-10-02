# Hugo Zlotowski interview: every mock question and model answer

Frame for every answer: **one-line answer → 2–3 points → one example → the result.**
Principle: **AI reasons (and proposes), deterministic models calculate, humans decide.**

---

## Round 1 (mock interview)

### 1. Tell me about yourself, and what brings you to Whiteshield?
> "I'm a product manager who builds AI products from 0 to 1, usually for senior decision-makers. I started as a software and QA engineer, which is why I'm comfortable in technical detail and still prototype things myself.
>
> At Law71 I worked on legal AI adopted by the UAE Ministry of Foreign Affairs and EDGE Group, and owned Arabic quality as the only Arabic speaker. Most recently at Smart Bricks, I defined an agentic AI underwriting platform for institutional investors from a blank page, where I set my rule: AI reasons, deterministic engines calculate, humans decide.
>
> Why Whiteshield: the hard part of AI for government isn't the model, it's turning research into something a ministry trusts and uses. You have the policy depth and the AI research, and you're scaling the platform now. That's where I want to be."

### 2. We ship an agent that drafts policy briefs. How do you know it's good enough for a minister?
> "I'd define 'good enough' with your economists before we build, then measure it in four layers.
> 1. **Before launch:** a golden set of real policy questions with expert-approved briefs; automatic checks for groundedness, citation accuracy, and refusal when evidence is missing; and a comparison against how briefs are made today.
> 2. **By design:** the agent never produces a number. Figures come from your deterministic models.
> 3. **People:** experts review samples before each release; an analyst approves every brief.
> 4. **In production:** monitor quality, edits and escalations; every failure becomes a new test.
>
> From QA, I'd also test negative paths: conflicting sources, stale data, ambiguous questions."

### 3. Our satellite activity index is accurate, but clients don't use it. Why, and what would you do?
> "If it's accurate but unused, the problem is probably the last mile, from index to decision. The hard part is already solved.
>
> Four hypotheses: it doesn't answer a decision they have; they don't trust it enough to act (no sources, ranges or comparison with official data); it doesn't fit their workflow (they may want a monthly Arabic brief, not a platform); or usability.
>
> I'd check usage data for *where* they drop off, but mostly talk to 5–8 users about their last decision and watch them use it. Then I'd pick one decision for one client, for example a monthly regional brief with a plain-language 'so what', confidence and sources, and measure whether it's used and whether they come back."

### 4. RAG vs fine-tuning vs prompting, with a government example?
> "In order of cost: **prompting first**, when the model has what it needs in the input, like summarising a report into a one-page Arabic ministerial brief. **RAG** when it needs knowledge it doesn't have and citations matter, like Law71's legal documents. Updating knowledge means updating documents, not retraining. **Fine-tuning** only to change behaviour (style, terminology, a narrow repeated task like classifying citizen requests), never to add facts: you can't cite it and it goes stale. In government it's usually prompting plus RAG, with deterministic models for numbers."
>
> **Remember:** RAG gives the model knowledge; fine-tuning gives it habits.

### 5. A product you personally took from 0 to 1.
> "My hardest 0→1 was an AI underwriting product for institutional investors at Smart Bricks: a domain new to me, few requirements, and I owned it alone.
>
> I ran discovery sessions with investors and mapped their process end to end. Real deal documents aren't public, so I used a few real examples plus LLMs to create realistic test datasets to test and evaluate the agents.
>
> Two decisions: I set the principle that AI reasons, deterministic engines calculate, humans authorise capital. And when investors told me underwriting isn't slow, I reframed the CEO's 'faster underwriting' into a fund's 'company brain'.
>
> The CEO agreed and v1 was built around it. I delivered the product definition, v1 roadmap, go-to-market plan and a nine-screen prototype I built myself."

### 6. How would you work with my data scientists and economists, and what would you NOT do?
> "They own the methods; I own the problem, the user and whether it works in production. Decisions are made together with the evidence on the table.
>
> I bring sharp questions tied to real client decisions, we agree evals and baselines together, I bring them into client sessions, and I translate their work into something a minister can act on.
>
> I wouldn't promise clients anything they haven't validated, pass every ad-hoc request straight to them, or second-guess their methods.
>
> At Law71, legal experts defined 'correct', and I built it into acceptance criteria."

### 7. Case: regional impact of a 10% tariff on imported steel, in Quantum Leap.
> "First, who's the user and what's the decision? I'll assume analysts preparing a recommendation for the minister.
> 1. **Output:** a brief on jobs, output and prices by region, under scenarios, with a 'so what'.
> 2. **Data:** trade flows, employment by region, steel-using firms, satellite activity, each with freshness and gaps; past tariff changes for back-testing.
> 3. **How:** the agent plans; your trade model simulates; a spatial model distributes the impact across regions; the agent writes a cited brief. If history is thin, economists set assumptions from research and we show low, base and high scenarios. The LLM never invents a number or an assumption.
> 4. **Trust:** ranges, editable assumptions, gaps flagged, analyst approval.
> 5. **Pilot:** one sector, one ministry; measure whether the brief was used, how much it was edited, and time to brief.
>
> The biggest risk is false precision on a sensitive question." Then offer: *"I sketched exactly this. Can I show you?"*

### 8. Which role interests you more, and why?
> "The early-stage 0→1 product. No fixed roadmap, first clients shaping it, rapid prototyping: that's where I've done my best work, like Smart Bricks. I'm comfortable starting on the contract and earning the permanent role. I'd also be credible on established products: at Law71 I worked directly with the Ministry of Foreign Affairs and EDGE Group. I'd value your view on where I'd add the most."

### 9. You're not a data scientist. What happens when my team says a model can't do what the client wants?
> "Right, and I don't need to be. My job is to ask the right questions.
>
> I'd understand why: is it the data, the accuracy or the time? Often 'can't' means 'not to that precision'. Then we'd look for options together: a narrower version, a range, other data, or a human step. I'd go back to the client with those options, not a 'no', and never promise what the team hasn't validated.
>
> At Smart Bricks, real deal data wasn't available, so I created realistic test datasets and we still validated the agents."

### 10. Do you have questions for me?
> "Alex mentioned an early-stage product. What is it, and where is it today? What would success look like in the first three months? What's been your biggest challenge with government clients: data, trust or adoption? Is there anything from today that makes you unsure I'm the right fit? I'd rather address it now. And what are the next steps?"

---

## Round 2 (mock interview)

### 11. A ministry says 'we want an AI platform for our economic data.' Your first two weeks?
> "That's a solution, not a problem, so my first two weeks are about finding the one decision it must improve.
>
> **Week 1:** map stakeholders (decider, daily users, data owners, security sign-off); interview them about recent real decisions; check the data with our research team (what exists, freshness, ownership, legal use).
>
> **Week 2:** 2–3 candidate use cases scored on value, data readiness and effort; agree one with a success metric; bring a clickable prototype.
>
> By the end: a clear problem, an agreed first use case, a success measure and a prototype, not a generic platform."

### 12. A wrong number in an AI brief reached a minister. The next 48 hours, and after?
> "Contain, verify, correct. Top-severity incident; align with Hugo and the client relationship owner; verify the right number with the research team; check whether other briefs are affected and pause them if so. Correct quickly through the right channel, with full transparency.
>
> After: a blameless root-cause review. If the number came from the LLM, that's a design failure. Enforce numbers only from the deterministic models, plus an automatic check that every figure matches model output. Add it to the golden set. The goal: make it impossible, not just less likely."

### 13. Three or four metrics for Quantum Leap's dashboard?
> "**North star:** decisions informed, meaning real policy decisions where a brief was used.
> 1. **Trust:** briefs approved without major edits.
> 2. **Quality:** error compared with a baseline, plus back-tests.
> 3. **Habit:** weekly active analysts and decision-makers; time to an approved brief.
>
> **Business:** renewals and expansion to new policy areas or ministries. Watch cost and time per brief as a guardrail."

### 14. 'Our data cannot leave the country, and no foreign AI company can use it.' How does that change the build?
> "It makes sovereignty an architecture decision on day one. Everything is hosted in-country, either in an in-country cloud region (Google Cloud, your partner) or on the client's infrastructure. For models: open-weight models we run ourselves, or closed models hosted in-region with a no-training contract. Open-weight gives control but can be weaker in Arabic and needs GPUs and ops, so we evaluate both on our golden set.
>
> Control: client-held encryption keys, role-based access, an audit log, minimal personal data. And it affects cost, speed and features, so it goes into the roadmap and pricing early."

### 15. One team, three requests: client Arabic support, a new forecasting model, a polished sales demo.
> "I'd decide with criteria (client commitment, value, time pressure, effort) and make the trade-off visible.
> 1. **Arabic first,** if committed to an existing client; it needs its own evaluation.
> 2. **The sales demo, built by me,** with AI prototyping tools, so engineering isn't touched.
> 3. **The forecasting model next.** Research keeps validating it; engineering integrates it next sprint with a date.
>
> I'd tell each team what and when; real conflicts go to Hugo with options."

### 16. Explain to a minister in under a minute why a forecast is a range.
> "Minister, think of a weather forecast. No one says it will rain exactly 4 millimetres, but '70% chance of rain' still tells you to take an umbrella. Our forecast is the same: most likely around 2,400 new jobs, realistically between 1,600 and 3,200, because the future is uncertain and data is never perfect. The range tells you what to plan for and how bad it could get. A single number would look precise, but it would be wrong more often, and that's a risk you'd carry in public."

### 17. A time you got something wrong as a PM.
> "At Smart Bricks, I redesigned investor onboarding to collect much more detail so I could understand personas better. Completion dropped. I saw it in the funnel data within days. The mistake was mine: I optimised for what *I* wanted to learn, not what the user needed.
>
> I cut it back to the questions needed to show value immediately, and collected the rest gradually later. Now I test changes like that on a small group first and make every question justify itself, like the six-question adaptive onboarding I prototyped for Career Navigator."

### 18. One new AI product for governments in the region?
> "A **household resilience simulator** for ministries of finance and social affairs. When governments change subsidies, taxes or pensions, they rarely know in advance how it hits different households. It simulates the effect on household budgets and savings by income group and region over 2, 5 and 10 years, and recommends offsetting support. After the decision, it tracks reality against the forecast. Agents plan and explain in Arabic and English; economists' household models calculate. It fits next to Quantum Leap's fiscal module. I'd pilot it with one ministry on one policy, like a fuel subsidy change."

### 19. A client changes direction halfway. How do you keep the team and the timeline?
> "I treat it as new information, but it must be a conscious decision with visible trade-offs.
>
> **Client:** understand what's driving it, show the options (switch fully, and what that does to dates, or fit a thin version in), align with Hugo and the relationship owner, and the client decides in writing.
>
> **Team:** explain the why, re-plan together, and batch changes rather than redirecting them daily.
>
> **By design:** short cycles and prototypes, so a change costs days, not months.
>
> At XPay, priorities changed weekly during a core rebuild; we still migrated live merchants with 100% uptime."

### 20. Why should I hire you over another strong PM?
> "Because I take chaos and turn it into a product people trust.
> 1. **0→1 without a playbook:** Smart Bricks, from a blank page to an investor-validated v1.
> 2. **AI governments trust:** Law71, adopted by the Ministry of Foreign Affairs and EDGE; my QA background makes me strict about evaluating AI.
> 3. **I build what I propose:** the Career Navigator prototype and the Quantum Leap concept.
>
> I'd get your early-stage product in front of its first clients fast, in a way they can trust."

---

## 20 read-only questions

### 21. Walk me through your CV in 2 minutes.
> "Software and QA engineer, then product. Mostly sole PM in fast-moving companies: Mumzworld's app with 5M+ users, XPay's payment platform, Law71's legal AI for the UAE Ministry of Foreign Affairs and EDGE Group, and Smart Bricks, where I defined an agentic AI product from scratch. The thread: unclear problems, no playbook, AI and data products people must trust."

### 22. Biggest weakness?
> "I move fast and sometimes start building before every stakeholder is aligned. Now I put a written decision and its trade-offs in front of people early. It costs a day and saves weeks."

### 23. What kind of manager brings out your best work?
> "One who gives a clear problem and room to own it, challenges my thinking, and is available for trade-off calls. Short, regular check-ins."

### 24. Where in 3 years?
> "Leading product for an AI platform used by governments, having taken one product from first client to proven and scaled, and helping other PMs do the same."

### 25. What's an agent, and the risk?
> "An LLM that plans and calls tools. The risk is acting or stating facts without checks, so I limit its tools and require human approval before anything reaches a client."

### 26. Conflicting sources in a RAG answer?
> "Never let the model silently pick one. Show both with dates and sources, flag the conflict, apply an agreed rule (most recent or official), and let the analyst decide."

### 27. LLM-as-judge: can you trust it?
> "A model grading outputs against a rubric. Useful at scale only after checking its grades against human experts on a sample. A helper, not the final word."

### 28. An AI feature is too expensive. What do you do?
> "Smaller models for simple steps, caching, shorter context, precomputing heavy analysis, then compare cost per brief with the value it creates."

### 29. Nowcast vs forecast vs simulation?
> "Nowcast: what's happening now, before official data. Forecast: what will likely happen. Simulation: what happens if we do X. A nowcast can feed a simulation its starting point."

### 30. A model is 92% accurate. What do you ask?
> "Compared with what baseline? On unseen data? Which 8% is wrong, and does it cluster? Which mistake is worse for the client: false alarms or misses?"

### 31. Requirements for an AI feature?
> "A normal PRD plus: the decision it supports, data and freshness, AI vs deterministic parts, eval criteria and thresholds, behaviour when unsure, human approval points, cost and speed targets."

### 32. Building trust with a sceptical government client?
> "Start small and visible: one use case, sources on every output, ranges not false precision, their experts in the review loop. At Law71, shared quality checks did more than any presentation."

### 33. A client keeps adding scope.
> "One visible backlog. Score each request against the agreed goal, show what slips, the client chooses, and it's written down."

### 34. Turning a pilot into a paying contract?
> "Agree the success metric before the pilot, measure it visibly throughout, make sure a senior sponsor sees results. The case for continuing should be their own numbers."

### 35. The client's data is poor quality.
> "Be honest early, show exactly what's weak, start with the use case existing data can support, flag weak areas in the product, and make data improvement part of the roadmap."

### 36. Engineers disagree with your priority.
> "Listen first: they often see risks I don't. Share the user evidence, agree what would change our minds, decide, and move on."

### 37. What do you know about Whiteshield?
> "Founded 2011 from the Harvard and OECD communities; started in public-policy consulting, now an AI-native 'sovereign intelligence' company for governments. Dubai, Abu Dhabi, Riyadh. Products: Quantum Leap (decision simulation), XShield (grounded, cited answers on a government's own data), QuantumEd, Quantum Navigator, built on Google Cloud. In July, $15M in financing from Ruya Partners to expand the platform."

### 38. Biggest risk for a company like Whiteshield?
> "Staying a consulting firm with products attached. The PM's job is to turn repeated client needs into reusable modules, so each new ministry is faster and cheaper to serve."

### 39. Balancing custom client work with a scalable product?
> "Build for the first client, design for the next ten: shared core, configurable rather than custom, anything built twice becomes product. Track reuse vs new build per delivery."

### 40. Anything else you'd like us to know?
> "I'm genuinely excited. You're building what I want to work on, AI governments can trust, and I've already put that into practice with the Career Navigator prototype and the Quantum Leap concept. Thank you."

---

## Today's warm-up (interview day)

### 41. Tell me about yourself and why Whiteshield. (Your best version)
> "Pleasure to meet you too, Hugo, and thanks for the time.
>
> I'm a product builder who loves taking AI products from 0 to 1. I come from a software and QA background, and I prototype the tools I need myself.
>
> Most recently at Smart Bricks, I built an agentic AI underwriting platform for institutional investors from zero. Before that, at Law71, I worked on legal AI adopted by the UAE Ministry of Foreign Affairs and EDGE Group.
>
> Why Whiteshield: I want to turn policy questions into AI products governments can trust, grounded in facts and sources. It's the same approach I used at Smart Bricks: AI proposes, a deterministic engine calculates, and a human verifies the assumptions. That's exactly what a platform for government decisions needs."

### 42. Your experience of working when nothing is defined?
> "Ambiguity is where I do my best work. I create structure through discovery, prototypes and written decisions.
>
> At Smart Bricks: a new vertical, vague requirements, almost no public data. I ran discovery with institutional investors, mapped the process into flow maps for architecture discussions with engineering, built a Figma prototype, and created realistic test datasets from a few real examples plus LLMs. The key decision: investors said speed wasn't their pain, so I reframed the product around a fund's 'company brain'.
>
> Floating ideas became a signed-off PRD and roadmap the team could build on. Same pattern at XPay: no documentation, weekly priority changes."

### 43. Where's the line between what the agent does alone and what needs a human?
> "I draw the line by risk.
> - **Alone:** understand the question, plan, retrieve and cite evidence, flag gaps and contradictions, draft the explanation.
> - **Proposes, a human approves:** the assumptions behind a simulation, because they drive the numbers. Economists set or approve them, visible and editable.
> - **Never the agent:** the numbers (only from your trade, fiscal and spatial models) and any brief to a minister without analyst approval.
>
> Plus limits on which tools the agent can call, and an audit trail of every step."

### 44. A strategic client wants a big new feature and the CEO wants to say yes.
> "I wouldn't fight the yes. I'd make it an *informed* yes. Understand the need behind it (often a thinner version solves it); check feasibility with the team; put options to Hugo and the CEO: the full feature and what slips, or a thin version now. Ask whether other clients could use it; if yes, build it as a reusable module. Then go back to the client with a prototype and confirm scope and timeline in writing."

### 45. How do you keep up with AI?
> "I filter by what I'm building: does it improve quality, speed or cost for a real problem? Then I learn by building small prototypes. At Smart Bricks we chose which model to use for each agent by comparing quality, cost and speed, and I learned public benchmarks aren't enough: test on your own golden set before switching. For Whiteshield that matters especially for Arabic and policy text."

### 46. Your questions for Hugo.
> "Alex mentioned an early-stage product. Could you tell me what it is and where it is today? What would success look like in the first three months? What's been the biggest challenge with government clients on these products? Is there anything from our conversation that makes you unsure I'm the right fit? I'd rather address it now. And what are the next steps?"
