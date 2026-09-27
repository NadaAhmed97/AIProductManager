"use client";

import { useEffect, useState } from "react";

// Stop-motion loop for the /whiteshield hero: a CV becomes skills, a gap, a course, and a hire.
// Frames advance on an uneven beat with a slight jitter so it reads as hand-animated.

const frames = ["CV uploaded", "Skills extracted", "Gap found", "Course matched", "Hired"];
const beat = [900, 700, 900, 800, 1600];

export default function WsStopMotion() {
  const [f, setF] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setF(4); return; }
    const t = setTimeout(() => setF((x) => (x + 1) % frames.length), beat[f]);
    return () => clearTimeout(t);
  }, [f]);
  const jit = [[0, 0, 0], [1, -1, -1], [-1, 1, 0.6], [0, 1, -0.5], [1, 0, 0.8]][f];

  return (
    <div className="relative mx-auto w-full max-w-[360px] animate-rise [animation-delay:.9s]">
      <div className="card overflow-hidden p-4" style={{ transform: `translate(${jit[0]}px,${jit[1]}px) rotate(${jit[2]}deg)` }}>
        <svg viewBox="0 0 320 240" className="w-full">
          <rect width="320" height="240" rx="12" fill="rgba(54,194,244,.05)" />
          {/* CV sheet, always present, slides left as the story moves on */}
          <g transform={`translate(${f === 0 ? 110 : 18} 30)`} style={{ transition: "none" }}>
            <rect width="100" height="130" rx="6" fill="#E6F7FF" />
            <circle cx="22" cy="24" r="10" fill="#36C2F4" />
            {[48, 62, 76, 90, 104].map((y, i) => <rect key={y} x="12" y={y} width={i % 2 ? 60 : 76} height="6" rx="3" fill="#9FB3C8" />)}
          </g>
          {/* skill chips pop out */}
          {f >= 1 && ["Excel", "SQL", "Reporting"].map((s, i) => (
            <g key={s} transform={`translate(${140 + (f === 1 ? i * 4 : 0)} ${34 + i * 30})`}>
              <rect width="78" height="22" rx="11" fill="#36C2F4" />
              <text x="39" y="15" textAnchor="middle" fontSize="11" fontWeight="700" fill="#06142E">{s} ✓</text>
            </g>
          ))}
          {/* the gap */}
          {f >= 2 && (
            <g transform="translate(140 124)">
              <rect width="78" height="22" rx="11" fill="none" stroke="#F87171" strokeDasharray="4 3" strokeWidth="2" />
              <text x="39" y="15" textAnchor="middle" fontSize="11" fontWeight="700" fill="#F87171">Python ?</text>
            </g>
          )}
          {/* course fills the gap */}
          {f >= 3 && (
            <g transform={`translate(${f === 3 ? 236 : 228} 118)`}>
              <rect width="70" height="34" rx="6" fill="#FCD34D" />
              <text x="35" y="15" textAnchor="middle" fontSize="9" fontWeight="700" fill="#06142E">COURSE</text>
              <text x="35" y="27" textAnchor="middle" fontSize="9" fill="#06142E">6 weeks</text>
            </g>
          )}
          {/* hired stamp */}
          {f === 4 && (
            <g transform="translate(160 200) rotate(-8)">
              <rect x="-70" y="-18" width="140" height="36" rx="6" fill="none" stroke="#36C2F4" strokeWidth="3" />
              <text y="7" textAnchor="middle" fontSize="18" fontWeight="800" fill="#36C2F4" letterSpacing="3">HIRED</text>
            </g>
          )}
        </svg>
        <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider">
          <span className="text-accent">{String(f + 1).padStart(2, "0")} · {frames[f]}</span>
          <span className="flex gap-1">{frames.map((_, i) => <span key={i} className={`h-1.5 w-4 rounded-full ${i <= f ? "bg-accent" : "bg-white/10"}`} />)}</span>
        </div>
      </div>
    </div>
  );
}
