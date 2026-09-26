import { builds } from "@/data/content";
import Section from "./Section";

const pipeline = ["Problem", "Figma", "Prompt / Cursor", "Ship", "Measure"];

export default function BuildLab() {
  return (
    <Section
      id="build"
      index="02"
      eyebrow="Vibe-code & build lab"
      title="Things I built myself — no engineering ticket required."
      intro="An engineering background plus AI tooling means I can prototype, automate and validate before asking for a single sprint."
    >
      <div className="mb-10 flex flex-wrap items-center gap-2 font-mono text-xs text-neutral-400">
        {pipeline.map((p, i) => (
          <span key={p} className="flex items-center gap-2">
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5">{p}</span>
            {i < pipeline.length - 1 && <span className="text-accent">→</span>}
          </span>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {builds.map((b) => {
          const live = b.link.startsWith("http");
          return (
            <article key={b.name} className="card group relative overflow-hidden p-7 hover:border-white/25">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold">{b.name}</h3>
                <span className="font-mono text-[11px] text-neutral-500">{b.kind}</span>
              </div>
              <p className="mt-3 text-sm text-neutral-400">{b.blurb}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {b.stack.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
              {live && (
                <a href={b.link} target="_blank" rel="noreferrer"
                  className="mt-6 inline-block text-sm text-accent hover:underline">View source ↗</a>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
