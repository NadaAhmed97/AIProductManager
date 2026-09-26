"use client";

import { useState } from "react";
import { profile } from "@/data/content";

const links = [
  ["Case studies", "#work"],
  ["How I think", "#thinking"],
  ["Blueprint", "#blueprint"],
  ["Build lab", "#build"],
  ["Experience", "#experience"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/70 backdrop-blur-md">
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="text-sm font-semibold">
          Nada Ahmed<span className="hidden text-neutral-500 sm:inline"> <span className="text-accent">·</span> Sr. AI &amp; Growth Product Manager</span>
        </a>
        <div className="hidden gap-8 text-sm text-neutral-400 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-white">{label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href={`mailto:${profile.email}`}
            className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-ink transition hover:bg-accent">
            Let&apos;s talk
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}
            className="rounded-full border border-white/15 px-3 py-1.5 text-sm lg:hidden">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      {open && (
        <div className="container-x flex animate-rise flex-col gap-1 pb-4 lg:hidden">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-neutral-300 hover:bg-white/5 hover:text-white">{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
