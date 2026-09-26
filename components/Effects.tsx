"use client";

import { useEffect, useState } from "react";

// Site-wide motion: a scroll progress bar, reveal-on-scroll for [data-reveal] elements,
// and a cursor spotlight on .card elements. Everything respects prefers-reduced-motion via CSS.
export default function Effects() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight));
    };
    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest?.(".card") as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && (en.target.classList.add("revealed"), io.unobserve(en.target))),
      { threshold: 0.12 },
    );
    const observe = () => document.querySelectorAll("[data-reveal]:not(.revealed)").forEach((el) => io.observe(el));
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-0.5">
      <div className="h-full origin-left bg-accent" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
