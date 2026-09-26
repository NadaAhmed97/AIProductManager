"use client";

import { useEffect, useState } from "react";

// Illustrated stop-motion: a sketch on paper becomes a shipped product, frame by frame.
// Frames play at a low frame rate with a little jitter so it feels hand-animated.
// To swap in real photos later, replace the <Frame> drawing with an <image href="/stopmotion/01.jpg" />.

const captions = ["a problem", "sticky notes", "a rough sketch", "a wireframe", "a detailed wireframe", "vibe-coding it", "a real product", "shipped."];
const HOLD_LAST = 4; // extra ticks to linger on the final frame

const ink = "#E5E5E5";
const accent = "#C6FF3D";

function Frame({ n }: { n: number }) {
  return (
    <g fill="none" stroke={ink} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      {/* frame 0: a question on the page */}
      {n === 0 && (
        <text x="160" y="130" textAnchor="middle" fontSize="64" fill={ink} stroke="none" fontFamily="var(--font-mono)">?</text>
      )}
      {/* sticky notes appear */}
      {n >= 1 && n <= 2 && (
        <>
          <rect x="40" y="40" width="70" height="60" fill="#FDE68A" stroke="none" transform="rotate(-4 75 70)" />
          <rect x="125" y="50" width="70" height="60" fill="#FBCFE8" stroke="none" transform="rotate(3 160 80)" />
          {n === 2 && <rect x="210" y="38" width="70" height="60" fill="#BFDBFE" stroke="none" transform="rotate(-2 245 68)" />}
          <path d="M52 62 h40 M52 74 h30" stroke="#78350F" />
          <path d="M137 72 h40 M137 84 h25" stroke="#831843" />
          {n === 2 && <path d="M222 60 h40 M222 72 h32" stroke="#1E3A8A" />}
        </>
      )}
      {/* rough sketch */}
      {n === 2 && <path d="M60 150 q20 -10 40 0 t40 0 t40 0 t40 0" strokeDasharray="4 6" />}
      {n === 3 && (
        <>
          <path d="M70 40 l180 2 l-2 160 l-178 -2 z" />
          <path d="M84 60 l150 1" />
          <path d="M84 80 l70 1 M84 95 l90 0" strokeDasharray="3 5" />
          <path d="M84 120 l60 0 l0 40 l-60 0 z M160 120 l60 0 l0 40 l-60 0 z" />
          <path d="M84 176 l50 0" />
        </>
      )}
      {n === 4 && (
        <>
          <path d="M70 40 h180 v160 h-180 z" />
          <rect x="84" y="56" width="150" height="10" rx="3" fill={ink} fillOpacity={0.3} stroke="none" />
          <path d="M84 80 h70 M84 95 h90" />
          <rect x="84" y="118" width="60" height="42" rx="6" />
          <rect x="160" y="118" width="60" height="42" rx="6" />
          <rect x="84" y="172" width="60" height="16" rx="8" fill={accent} stroke="none" />
          <text x="258" y="72" fontSize="11" fill={ink} stroke="none" fontFamily="var(--font-mono)">nav</text>
          <text x="226" y="145" fontSize="11" fill={ink} stroke="none" fontFamily="var(--font-mono)">cards</text>
        </>
      )}
      {n === 5 && (
        <>
          <path d="M70 40 h180 v160 h-180 z" strokeOpacity={0.35} />
          <text x="160" y="135" textAnchor="middle" fontSize="54" fill={accent} stroke="none" fontFamily="var(--font-mono)">{"</>"}</text>
          <path d="M92 170 h40 M92 182 h70 M180 170 h30" stroke={accent} strokeOpacity={0.6} />
        </>
      )}
      {n >= 6 && (
        <>
          <rect x="110" y="24" width="100" height="192" rx="16" fill="#0A0A0A" />
          <rect x="120" y="42" width="80" height="10" rx="3" fill={accent} stroke="none" />
          <rect x="120" y="62" width="80" height="44" rx="6" fill="#262626" stroke="none" />
          <rect x="120" y="114" width="38" height="36" rx="6" fill="#262626" stroke="none" />
          <rect x="162" y="114" width="38" height="36" rx="6" fill="#262626" stroke="none" />
          <rect x="120" y="178" width="80" height="18" rx="9" fill={accent} stroke="none" />
        </>
      )}
      {n === 7 && (
        <g transform="rotate(-12 232 168)">
          <rect x="190" y="148" width="92" height="38" rx="6" stroke={accent} strokeWidth={3} />
          <text x="236" y="174" textAnchor="middle" fontSize="18" fontWeight="700" fill={accent} stroke="none" fontFamily="var(--font-mono)">SHIPPED</text>
        </g>
      )}
    </g>
  );
}

export default function StopMotion({ className = "" }: { className?: string }) {
  const total = captions.length;
  const [tick, setTick] = useState(0);
  const [jitter, setJitter] = useState({ r: 0, x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTick(total - 1);
      return;
    }
    const id = setInterval(() => {
      setTick((t) => (t + 1) % (total + HOLD_LAST));
      setJitter({ r: Math.random() * 2 - 1, x: Math.random() * 3 - 1.5, y: Math.random() * 3 - 1.5 });
    }, 420);
    return () => clearInterval(id);
  }, [total]);

  const n = Math.min(tick, total - 1);
  const caption = captions[n];

  return (
    <figure className={`select-none ${className}`} aria-label="Stop-motion: a problem becomes sticky notes, a sketch, a wireframe, code and a shipped product">
      <div className="relative rounded-2xl border border-white/10 bg-[#141414] p-3 shadow-2xl">
        {/* film-strip perforations */}
        <div className="absolute inset-y-3 left-1 flex flex-col justify-between">
          {Array.from({ length: 8 }).map((_, i) => <span key={i} className="h-2 w-1.5 rounded-sm bg-white/10" />)}
        </div>
        <div className="absolute inset-y-3 right-1 flex flex-col justify-between">
          {Array.from({ length: 8 }).map((_, i) => <span key={i} className="h-2 w-1.5 rounded-sm bg-white/10" />)}
        </div>
        <svg viewBox="0 0 320 240" className="mx-2 block rounded-lg bg-[#1c1c1a]"
          style={{ transform: `rotate(${jitter.r}deg) translate(${jitter.x}px, ${jitter.y}px)` }}>
          {/* paper texture lines */}
          {Array.from({ length: 9 }).map((_, i) => (
            <path key={i} d={`M0 ${24 + i * 24} H320`} stroke="#ffffff" strokeOpacity={0.03} />
          ))}
          <Frame n={n} />
        </svg>
      </div>
      <figcaption className="mt-3 flex items-center justify-between font-mono text-xs text-neutral-500">
        <span>
          frame {String(n + 1).padStart(2, "0")}/{String(total).padStart(2, "0")} · <span className="text-neutral-300">{caption}</span>
        </span>
        <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />rec</span>
      </figcaption>
    </figure>
  );
}
