"use client";

import { useEffect, useState } from "react";
import { buildCategories, builds, type Build, type BuildCategory } from "@/data/content";
import Section from "./Section";
import Mockup, { mockFor } from "./Mockup";

const pipeline = ["Problem", "Figma", "Prompt / Cursor", "Ship", "Measure"];
const hues: Record<BuildCategory, string> = {
  "Customer success": "#60A5FA",
  "Growth & marketing": "#F472B6",
  "Data & ops": "#C6FF3D",
  "Team & culture": "#FBBF24",
  Product: "#C084FC",
};

type Tab = "Featured" | BuildCategory;

export default function BuildLab() {
  const [tab, setTab] = useState<Tab>("Featured");
  const [viewing, setViewing] = useState<Build | null>(null);
  const shown = builds.filter((b) => (tab === "Featured" ? b.featured : b.category === tab));
  const tabs: Tab[] = ["Featured", ...buildCategories];

  return (
    <Section
      id="build"
      index="04"
      eyebrow="Vibe-code & build lab"
      title="Tools I built myself, for every team around me."
      intro="I don't stop at the product. When customer success, marketing, ops or my own team needed a tool, I built it with AI: dashboards, AI tools, automations and bots."
    >
      <div className="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs text-neutral-400">
        {pipeline.map((p, i) => (
          <span key={p} className="flex items-center gap-2">
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5">{p}</span>
            {i < pipeline.length - 1 && <span className="text-accent">→</span>}
          </span>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {tabs.map((t) => {
          const count = t === "Featured" ? builds.filter((b) => b.featured).length : builds.filter((b) => b.category === t).length;
          const on = tab === t;
          return (
            <button key={t} onClick={() => setTab(t)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${on ? "border-accent bg-accent text-ink" : "border-white/15 text-neutral-400 hover:border-white/40"}`}>
              {t === "Featured" ? "★ Featured" : t}
              <span className="ml-1.5 font-mono text-[10px] opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((b, i) => {
          const c = hues[b.category];
          const live = b.link.startsWith("http");
          return (
            <article key={tab + b.name} className={`card group flex animate-rise flex-col overflow-hidden p-6 hover:border-white/25 ${b.image ? "cursor-zoom-in" : ""}`}
              onClick={() => b.image && setViewing(b)}
              style={{ animationDelay: `${i * 0.05}s` }}>
              {/* placeholder visual until real screenshots are added */}
              <div className="grid-bg relative -mx-6 -mt-6 mb-5 flex h-28 items-center justify-center overflow-hidden border-b border-white/10"
                style={{ background: `radial-gradient(circle at 30% 20%, ${c}33, transparent 60%), radial-gradient(circle at 80% 90%, ${c}22, transparent 50%)` }}>
                {b.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={b.image} alt={`${b.name} screenshot`} loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-left-top transition duration-700 group-hover:scale-105" />
                ) : (
                  <Mockup type={mockFor(b.name)} color={c} />
                )}
              </div>
              {b.image && (
                <span className="-mt-3 mb-3 self-start rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] text-neutral-400">
                  ▣ {b.gallery ? `${b.gallery.length} screenshots` : "screenshot"} · click to view
                </span>
              )}
              <p className="font-mono text-[11px]" style={{ color: c }}>{b.category.toUpperCase()}{b.where ? ` · ${b.where}` : ""}</p>
              <h3 className="mt-1 text-lg font-semibold">{b.name}</h3>
              <p className="font-mono text-[11px] text-neutral-500">{b.kind}</p>
              <p className="mt-3 flex-1 text-sm text-neutral-400">{b.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {b.stack.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
              {live && (
                <a href={b.link} target="_blank" rel="noreferrer" className="mt-5 inline-block text-sm text-accent hover:underline">View source ↗</a>
              )}
            </article>
          );
        })}
      </div>
      {viewing && <Gallery build={viewing} onClose={() => setViewing(null)} />}
      <p className="mt-6 text-sm text-neutral-500">{builds.length} builds in total. Switch tabs to see them all.</p>
    </Section>
  );
}

function Gallery({ build, onClose }: { build: Build; onClose: () => void }) {
  const shots = build.gallery ?? [{ src: build.image!, caption: build.name }];
  const [i, setI] = useState(0);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((x) => (x + 1) % shots.length);
      if (e.key === "ArrowLeft") setI((x) => (x - 1 + shots.length) % shots.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose, shots.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={build.name} onClick={onClose}>
      <figure className="flex max-h-full w-full max-w-5xl animate-rise flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="font-semibold">{build.name} <span className="font-mono text-xs text-neutral-500">{build.where ? `· ${build.where}` : ""}</span></p>
          <button onClick={onClose} className="rounded-full border border-white/20 px-3 py-1 text-sm hover:border-white">Esc</button>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img key={shots[i].src} src={shots[i].src} alt={shots[i].caption} className="min-h-0 animate-rise rounded-xl border border-white/10 object-contain" style={{ maxHeight: "75vh" }} />
        <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-neutral-400">
          <span>{shots[i].caption}</span>
          {shots.length > 1 && (
            <span className="flex shrink-0 gap-2">
              <button onClick={() => setI((i - 1 + shots.length) % shots.length)} className="rounded-full border border-white/15 px-3 py-1 hover:border-white">←</button>
              <span className="font-mono text-xs leading-7">{i + 1}/{shots.length}</span>
              <button onClick={() => setI((i + 1) % shots.length)} className="rounded-full border border-white/15 px-3 py-1 hover:border-white">→</button>
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  );
}
