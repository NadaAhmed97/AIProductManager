import { profile, proof } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 md:pt-48">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="container-x relative">
        <p className="mb-6 inline-flex animate-rise items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs text-accent">
          <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-accent/70" /><span className="relative h-2 w-2 rounded-full bg-accent" /></span>
          Open to 0→1 AI product roles
        </p>
        <p className="eyebrow animate-rise">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
          {profile.role} · {profile.location}
        </p>
        <h1 className="mt-6 max-w-5xl animate-rise text-5xl font-extrabold leading-[1.02] tracking-tight [animation-delay:.1s] md:text-7xl lg:text-8xl">
          I don&apos;t hand off specs.
          <br />
          <span className="text-neutral-500">I ship the</span> <span className="whitespace-nowrap text-accent">0 → 1</span>
          <span className="text-neutral-500">.</span>
        </h1>
        <p className="mt-8 max-w-2xl animate-rise text-lg text-neutral-400 [animation-delay:.2s] md:text-xl">
          I work between strategy, users and engineering. I turn ambiguous problems into AI products that
          senior decision-makers trust, and I prototype them myself with AI and code before asking for a single sprint.
        </p>
        <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:.3s]">
          <a href="#work" className="group rounded-full bg-accent px-6 py-3 font-semibold text-ink transition hover:brightness-110">
            View interactive case studies <span className="inline-block transition group-hover:translate-x-1">→</span>
          </a>
          <a href="#thinking" className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-white">
            See how Nada thinks
          </a>
        </div>
        <div className="mt-16 animate-rise [animation-delay:.35s]">
          <p className="eyebrow">Shipped for &amp; with</p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-lg font-semibold text-neutral-500">
            {["UAE Ministry of Foreign Affairs", "EDGE Group", "a16z-backed Smart Bricks", "Mumzworld", "XPay", "MUAB"].map((n) => (
              <span key={n} className="transition hover:text-white">{n}</span>
            ))}
          </div>
        </div>
        <div className="mt-12 grid animate-rise grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 [animation-delay:.4s] md:grid-cols-3 lg:grid-cols-5">
          {proof.map((p) => (
            <div key={p.label} className="bg-ink p-6">
              <div className="text-2xl font-bold tracking-tight md:text-3xl">{p.value}</div>
              <div className="mt-2 text-sm text-neutral-500">{p.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
