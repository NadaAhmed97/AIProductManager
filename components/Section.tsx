export default function Section({
  id, index, eyebrow, title, intro, children,
}: {
  id: string; index: string; eyebrow: string; title: string; intro?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-white/10 py-24 md:py-32">
      <div className="container-x">
        <p className="eyebrow"><span className="text-accent">{index}</span> / {eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
        {intro && <p className="mt-5 max-w-2xl text-lg text-neutral-400">{intro}</p>}
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
