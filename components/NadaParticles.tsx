"use client";

import { useEffect, useRef, useState } from "react";

// "Chaos → structure": scattered particles (a messy problem) assemble into "Nada",
// scatter, then re-form as "ندى" (Nada in Arabic). The cursor pushes particles away.

const phases = [
  { label: "a messy, unstructured problem", target: null },
  { label: "structure", target: "Nada" },
  { label: "a messy, unstructured problem", target: null },
  { label: "structure, in both languages", target: "ندى" },
] as const;
const PHASE_MS = [1800, 3600, 1600, 3600];

type P = { x: number; y: number; vx: number; vy: number; tx: number; ty: number; hue: number };

function sampleText(text: string, w: number, h: number, step: number) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d")!;
  const arabic = /[؀-ۿ]/.test(text);
  g.fillStyle = "#fff";
  g.textAlign = "center";
  g.textBaseline = "middle";
  const size = Math.min(h * (arabic ? 0.78 : 0.62), w / (arabic ? 2.4 : 3.1));
  g.font = `800 ${size}px ${arabic ? "'Noto Sans Arabic', 'Segoe UI', Tahoma, sans-serif" : "Inter, system-ui, sans-serif"}`;
  g.fillText(text, w / 2, h / 2);
  const data = g.getImageData(0, 0, w, h).data;
  const pts: [number, number][] = [];
  for (let y = 0; y < h; y += step) for (let x = 0; x < w; x += step) if (data[(y * w + x) * 4 + 3] > 128) pts.push([x, y]);
  return pts;
}

export default function NadaParticles() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = 1, raf = 0, timer = 0, visible = true;
    let particles: P[] = [];
    const targets: Record<string, [number, number][]> = {};
    const mouse = { x: -999, y: -999 };
    let current = 0;

    const scatter = (p: P) => { p.tx = Math.random() * w; p.ty = Math.random() * h; };

    const setup = () => {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const step = w < 500 ? 5 : 6;
      targets.Nada = sampleText("Nada", Math.floor(w), Math.floor(h), step);
      targets["ندى"] = sampleText("ندى", Math.floor(w), Math.floor(h), step);
      const n = Math.max(targets.Nada.length, targets["ندى"].length, 350);
      particles = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h, vx: 0, vy: 0, tx: Math.random() * w, ty: Math.random() * h,
        hue: Math.random(),
      }));
      apply(current);
    };

    const apply = (i: number) => {
      const t = phases[i].target;
      const pts = t ? targets[t] : null;
      particles.forEach((p, k) => {
        if (pts && k < pts.length) { p.tx = pts[k][0]; p.ty = pts[k][1]; }
        else if (pts) { p.tx = Math.random() * w; p.ty = h + 40; } // spare particles drift away
        else scatter(p);
      });
    };

    const next = () => {
      current = (current + 1) % phases.length;
      setPhase(current);
      apply(current);
      timer = window.setTimeout(next, PHASE_MS[current]);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const assembled = phases[current].target !== null;
      for (const p of particles) {
        const dx = p.tx - p.x, dy = p.ty - p.y;
        p.vx += dx * (assembled ? 0.012 : 0.004);
        p.vy += dy * (assembled ? 0.012 : 0.004);
        if (!assembled) { p.vx += (Math.random() - 0.5) * 0.6; p.vy += (Math.random() - 0.5) * 0.6; }
        const mx = p.x - mouse.x, my = p.y - mouse.y, d2 = mx * mx + my * my;
        if (d2 < 3600) { const f = (3600 - d2) / 3600; p.vx += (mx / 20) * f; p.vy += (my / 20) * f; }
        p.vx *= 0.86; p.vy *= 0.86;
        p.x += p.vx; p.y += p.vy;
        ctx.fillStyle = p.hue > 0.82 ? "rgba(192,132,252,.9)" : p.hue > 0.7 ? "rgba(96,165,250,.9)" : "rgba(198,255,61,.9)";
        ctx.fillRect(p.x, p.y, 2, 2);
      }
      if (visible) raf = requestAnimationFrame(draw);
    };

    setup();
    if (reduce) {
      current = 1; setPhase(1); apply(1);
      particles.forEach((p) => { p.x = p.tx; p.y = p.ty; });
      draw(); cancelAnimationFrame(raf);
    } else {
      timer = window.setTimeout(next, PHASE_MS[0]);
      raf = requestAnimationFrame(draw);
    }

    // pause when off-screen to save battery
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
    });
    io.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -999; mouse.y = -999; };
    const onResize = () => setup();
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf); clearTimeout(timer); io.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <figure className="card relative overflow-hidden">
      <canvas ref={ref} className="block h-56 w-full touch-none md:h-72" aria-label="Particles moving from chaos into the name Nada, in English and Arabic" />
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-5 py-3 font-mono text-xs text-neutral-500">
        <span>
          <span className="text-neutral-600">now showing:</span>{" "}
          <span key={phase} className="inline-block animate-rise text-neutral-200">{phases[phase].label}</span>
        </span>
        <span className="hidden sm:inline">move your cursor through it</span>
      </figcaption>
    </figure>
  );
}
