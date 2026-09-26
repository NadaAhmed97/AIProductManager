"use client";

import { clients, profile, proof } from "@/data/content";
import StopMotion from "./StopMotion";
import LogoMark from "./LogoMark";
import { openTour } from "./Tour";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 md:pt-48">
      <div className="orb left-[-10%] top-[-10%] h-[420px] w-[420px] bg-accent/40" />
      <div className="orb right-[-5%] top-[20%] h-[360px] w-[360px] bg-purple-500/40 [animation-delay:-6s]" />
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="container-x relative">
        <div className="grid items-center gap-12 xl:grid-cols-[1fr_380px]">
        <div>
        <p className="mb-6 inline-flex animate-rise items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs text-accent">
          <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-accent/70" /><span className="relative h-2 w-2 rounded-full bg-accent" /></span>
          Open to 0→1 AI product roles
        </p>
        <p className="eyebrow animate-rise">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
          {profile.role} · {profile.location}
        </p>
        <h1 className="mt-6 max-w-5xl animate-rise text-5xl font-extrabold leading-[1.02] tracking-tight [animation-delay:.1s] md:text-7xl lg:text-8xl xl:text-7xl">
          I don&apos;t hand off specs.
          <br />
          <span className="text-neutral-500">I ship the</span> <span className="shimmer whitespace-nowrap">0 → 1</span>
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
          <button onClick={openTour} className="rounded-full px-4 py-3 font-semibold text-neutral-400 transition hover:text-accent">
            ▶ 10-minute walkthrough
          </button>
        </div>
        </div>
        <StopMotion className="mx-auto w-full max-w-[380px] animate-rise [animation-delay:.3s]" />
        </div>
        <div className="mt-16 animate-rise [animation-delay:.35s]">
          <p className="eyebrow">Shipped for &amp; with</p>
          <div className="marquee mt-4 overflow-hidden">
            <div className="marquee-track gap-10">
              {[0, 1].map((k) =>
                clients.map((c) => (
                  <a key={c.id + k} href={c.url} target="_blank" rel="noreferrer" aria-hidden={k === 1} tabIndex={k === 1 ? -1 : 0}
                    className="group flex shrink-0 items-center gap-3 whitespace-nowrap pr-10 text-lg font-semibold text-neutral-500 transition hover:text-white">
                    <LogoMark src={c.logo ?? `https://www.google.com/s2/favicons?domain=${c.domain}&sz=64`} name={c.name} />
                    {c.name}
                    {c.note && <span className="font-mono text-[11px] font-normal text-neutral-600">{c.note}</span>}
                  </a>
                )),
              )}
            </div>
          </div>
        </div>
        <div className="mt-12 grid animate-rise grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 [animation-delay:.4s] md:grid-cols-3">
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
