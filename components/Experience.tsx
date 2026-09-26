import { experience } from "@/data/content";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" index="04" eyebrow="Track record"
      title="From writing tests to owning the product.">
      <div className="divide-y divide-white/10 border-y border-white/10">
        {experience.map((e) => (
          <div key={e.org + e.role}
            className="group grid gap-1 py-5 transition hover:bg-white/[0.02] md:grid-cols-[120px_1fr_1fr_1.3fr] md:items-center md:gap-6 md:px-2">
            <span className="font-mono text-xs text-neutral-500">{e.when}</span>
            <span className="font-semibold group-hover:text-accent">{e.org}</span>
            <span className="text-sm text-neutral-300">{e.role}</span>
            <span className="text-sm text-neutral-500">{e.note}</span>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-neutral-500">
        Women in AI Ambassador — Egypt · ITIDA semi-finalist (Testify) · B.Eng. Computer & Communications, Alexandria University
      </p>
    </Section>
  );
}
