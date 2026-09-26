# Nada Ahmed — 0→1 AI Product Manager portfolio

Next.js 15 (App Router, static export) + Tailwind CSS. No UI or animation libraries.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out (deploy to Vercel or GitHub Pages)
```

## Structure
| Section | File | Purpose |
|---|---|---|
| Hero + proof strip | `components/Hero.tsx` | Positioning plus 4 credibility signals |
| 01 Case studies | `components/CaseStudies.tsx` | Cards that open a side drawer, stepping through Problem → Ownership → Decisions → Delivery → Result (arrow keys, Esc) |
| 02 Build lab | `components/BuildLab.tsx` | Tools, automations and Figma-to-code work |
| 03 Decision simulator | `components/DecisionSimulator.tsx` | Live prioritisation: context presets and weight sliders re-rank a backlog against a capacity cut line |
| 04 Track record | `components/Experience.tsx` | Compact timeline |
| 05 Contact | `components/Contact.tsx` | CTA |

All copy is in **`data/content.ts`**.

## Before publishing
- Replace every `[X]` / `[link]` placeholder in `data/content.ts` with real numbers or links.

## Deploy to Vercel
1. vercel.com → **Add New… → Project** → import `NadaAhmed97/AIProductManager`.
2. Framework preset: **Next.js** (auto-detected). Leave build settings at their defaults.
3. Pick the production branch (Settings → Git) and click **Deploy**.
