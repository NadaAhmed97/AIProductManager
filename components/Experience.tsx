import { experience } from "@/data/content";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" index="05" eyebrow="Track record"
      title="From writing tests to owning the product.">
      <div className="flex flex-wrap items-start gap-3">
        {experience.map((e, i) => (
          <button
            key={e.org + e.role}
            type="button"
            className="group animate-rise rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-left transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/[0.05] focus:border-accent/50 focus:outline-none"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <span className="flex items-baseline gap-2">
              <span className="font-semibold group-hover:text-accent group-focus:text-accent">{e.org}</span>
              <span className="font-mono text-[10px] text-neutral-600">{e.when}</span>
            </span>
            <span className="block text-sm text-neutral-400">{e.role}</span>
            {/* detail expands on hover or tap */}
            <span className="grid grid-rows-[0fr] transition-all duration-300 group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr]">
              <span className="overflow-hidden">
                <span className="mt-2 block w-0 min-w-full text-xs leading-relaxed text-neutral-500">{e.note}</span>
              </span>
            </span>
          </button>
        ))}
      </div>
      <p className="mt-8 text-sm text-neutral-500">
        Women in AI Ambassador — Egypt · ITIDA semi-finalist (Testify) · B.Eng. Computer &amp; Communications, Alexandria University
      </p>
    </Section>
  );
}
