import { profile, proof } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 md:pt-48">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="container-x relative">
        <p className="eyebrow animate-rise">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
          {profile.role} · {profile.location}
        </p>
        <h1 className="mt-6 max-w-5xl animate-rise text-5xl font-extrabold leading-[1.02] tracking-tight [animation-delay:.1s] md:text-7xl lg:text-8xl">
          I don&apos;t hand off specs.
          <br />
          <span className="text-neutral-500">I ship the</span> <span className="text-accent">0 → 1</span>
          <span className="text-neutral-500">.</span>
        </h1>
        <p className="mt-8 max-w-2xl animate-rise text-lg text-neutral-400 [animation-delay:.2s] md:text-xl">
          Product manager with an engineering core. I find the problem, design it in Figma, and build the
          first version myself with AI and code — then scale it with data, not opinions.
        </p>
        <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:.3s]">
          <a href="#work" className="group rounded-full bg-accent px-6 py-3 font-semibold text-ink transition hover:brightness-110">
            View interactive case studies <span className="inline-block transition group-hover:translate-x-1">→</span>
          </a>
          <a href="#simulator" className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-white">
            Try the decision simulator
          </a>
        </div>
        <div className="mt-24 grid animate-rise grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 [animation-delay:.4s] md:grid-cols-4">
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
