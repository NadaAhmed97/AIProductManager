// Illustrated mock-ups for Build lab cards, used until real screenshots are added.
// Each is a tiny SVG "screen" in the card's colour. Hovering the card animates it.

export type MockType =
  | "dashboard" | "report" | "alerts" | "phone" | "flow" | "chat" | "doc"
  | "kanban" | "avatar" | "email" | "tour" | "agent" | "code" | "checklist";

const byName: Record<string, MockType> = {
  "CS command centre": "dashboard",
  "Call insights": "report",
  "Metrics watchdog": "alerts",
  "Guided product tour": "tour",
  "Decision log listener": "doc",
  "AI marketing content engine": "flow",
  "Email campaigns & product sequence": "email",
  "Wearing the marketing hat": "report",
  "Company playbook": "doc",
  "Kudos bot": "chat",
  "Competitor intel bot": "chat",
  "Feedback-to-Jira bot": "kanban",
  "Metrics pipeline": "flow",
  "Jira reporting automation": "kanban",
  "Dependency maps": "flow",
  "AI flagging & recommendation scoring": "alerts",
  "YallaGain mobile web app": "phone",
  "Digital-twin avatar & form correction": "avatar",
  "Aria": "agent",
  "Platform features & Figma designs": "code",
  "Underwriting prototype": "dashboard",
  "Zeki": "phone",
  "LLM validation harness": "checklist",
  "Testify": "checklist",
  "This portfolio": "code",
};

export const mockFor = (name: string): MockType => byName[name] ?? "dashboard";

const soft = "rgba(255,255,255,.12)";
const softer = "rgba(255,255,255,.06)";

export default function Mockup({ type, color: c }: { type: MockType; color: string }) {
  return (
    <svg viewBox="0 0 320 110" className="mock h-full w-full" aria-hidden>
      {/* window chrome */}
      <rect x="40" y="10" width="240" height="92" rx="8" fill="#0d0d0d" stroke={soft} />
      <circle cx="52" cy="20" r="2.5" fill={soft} /><circle cx="60" cy="20" r="2.5" fill={soft} /><circle cx="68" cy="20" r="2.5" fill={soft} />

      {type === "dashboard" && (
        <g>
          <rect x="50" y="30" width="44" height="64" rx="4" fill={softer} />
          {[36, 46, 56, 66].map((y) => <rect key={y} x="55" y={y} width="30" height="4" rx="2" fill={soft} />)}
          {[0, 1, 2].map((i) => <rect key={i} x={102 + i * 58} y="30" width="52" height="22" rx="4" fill={softer} />)}
          <rect x="107" y="36" width="20" height="4" rx="2" fill={c} opacity=".8" />
          <rect x="165" y="36" width="26" height="4" rx="2" fill={c} opacity=".5" />
          <rect x="223" y="36" width="16" height="4" rx="2" fill={c} opacity=".7" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect key={i} className="bar" style={{ transformOrigin: `${108 + i * 22}px 94px`, animationDelay: `${i * 60}ms` }}
              x={104 + i * 22} y={94 - (12 + ((i * 37) % 28))} width="12" height={12 + ((i * 37) % 28)} rx="2" fill={c} opacity={0.35 + (i % 3) * 0.2} />
          ))}
        </g>
      )}

      {type === "report" && (
        <g>
          <rect x="54" y="30" width="120" height="6" rx="3" fill={c} opacity=".8" />
          {[44, 54, 64, 74, 84].map((y, i) => <rect key={y} x="54" y={y} width={140 - i * 14} height="4" rx="2" fill={soft} />)}
          <circle cx="238" cy="60" r="24" fill="none" stroke={softer} strokeWidth="10" />
          <circle cx="238" cy="60" r="24" fill="none" stroke={c} strokeWidth="10" strokeDasharray="95 151" transform="rotate(-90 238 60)" className="ring" />
        </g>
      )}

      {type === "alerts" && (
        <g>
          <polyline className="draw" points="52,80 80,72 104,76 128,50 150,62 176,40 200,70 224,64 250,36 270,44" fill="none" stroke={c} strokeWidth="2.5" />
          <circle cx="176" cy="40" r="5" fill="none" stroke="#F87171" strokeWidth="2" className="blip" />
          <circle cx="200" cy="70" r="5" fill="none" stroke="#FBBF24" strokeWidth="2" className="blip" style={{ animationDelay: ".4s" }} />
          <rect x="196" y="82" width="74" height="14" rx="7" fill={c} opacity=".2" />
          <text x="233" y="92" textAnchor="middle" fontSize="8" fill={c} fontFamily="var(--font-mono)">→ Slack</text>
        </g>
      )}

      {type === "phone" && (
        <g>
          <rect x="136" y="14" width="48" height="86" rx="8" fill="#111" stroke={soft} />
          <rect x="142" y="24" width="36" height="6" rx="3" fill={c} />
          <rect x="142" y="36" width="36" height="22" rx="4" fill={softer} />
          <rect x="142" y="62" width="16" height="16" rx="3" fill={softer} />
          <rect x="162" y="62" width="16" height="16" rx="3" fill={softer} />
          <rect x="142" y="84" width="36" height="8" rx="4" fill={c} className="pulse-soft" />
          <rect x="60" y="40" width="54" height="8" rx="4" fill={soft} />
          <rect x="206" y="60" width="54" height="8" rx="4" fill={soft} />
        </g>
      )}

      {type === "flow" && (
        <g>
          {[70, 140, 210, 262].map((x, i) => (
            <g key={x}>
              <rect x={x - 18} y="46" width="36" height="24" rx="6" fill={i === 3 ? c : softer} opacity={i === 3 ? 0.8 : 1} stroke={soft} />
              {i < 3 && <path d={`M${x + 18} 58 H${[140, 210, 262][i] - 18}`} stroke={c} strokeWidth="2" strokeDasharray="3 5" className="flow" />}
            </g>
          ))}
        </g>
      )}

      {type === "chat" && (
        <g>
          <rect x="54" y="30" width="110" height="16" rx="8" fill={softer} />
          <rect x="120" y="52" width="140" height="16" rx="8" fill={c} opacity=".25" className="msg" />
          <rect x="54" y="74" width="90" height="16" rx="8" fill={softer} className="msg" style={{ animationDelay: ".25s" }} />
          <text x="130" y="63" fontSize="9" fill={c} fontFamily="var(--font-mono)">★ bot</text>
        </g>
      )}

      {type === "doc" && (
        <g>
          <rect x="54" y="30" width="70" height="6" rx="3" fill={c} opacity=".8" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <circle cx="58" cy={48 + i * 12} r="3" fill={c} opacity=".6" />
              <rect x="66" y={46 + i * 12} width={150 - i * 22} height="4" rx="2" fill={soft} className="line" style={{ animationDelay: `${i * 90}ms` }} />
            </g>
          ))}
          <rect x="226" y="30" width="44" height="60" rx="4" fill={softer} />
        </g>
      )}

      {type === "kanban" && (
        <g>
          {[0, 1, 2].map((col) => (
            <g key={col}>
              <rect x={52 + col * 76} y="30" width="68" height="64" rx="4" fill={softer} />
              {[0, 1, 2].slice(0, 3 - col).map((r) => (
                <rect key={r} x={57 + col * 76} y={36 + r * 18} width="58" height="13" rx="3" fill={r === 0 && col === 0 ? c : soft} opacity={r === 0 && col === 0 ? 0.6 : 1} className={r === 0 && col === 0 ? "card-move" : ""} />
              ))}
            </g>
          ))}
        </g>
      )}

      {type === "avatar" && (
        <g stroke={c} strokeWidth="2.5" strokeLinecap="round" fill="none" className="sway" style={{ transformOrigin: "160px 95px" }}>
          <circle cx="160" cy="30" r="7" />
          <path d="M160 37 V66 M160 44 L140 58 M160 44 L182 36 M160 66 L146 92 M160 66 L176 92" />
          {[[160, 44], [140, 58], [182, 36], [160, 66], [146, 92], [176, 92]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="3" fill={c} stroke="none" />)}
          <path d="M182 36 L190 50" stroke="#F87171" strokeDasharray="3 3" />
        </g>
      )}

      {type === "email" && (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i} className="msg" style={{ animationDelay: `${i * 0.15}s` }}>
              <rect x={62 + i * 70} y={36 + i * 6} width="56" height="38" rx="4" fill={softer} stroke={soft} />
              <path d={`M${62 + i * 70} ${36 + i * 6} l28 20 l28 -20`} fill="none" stroke={c} strokeWidth="1.5" />
            </g>
          ))}
          <text x="160" y="96" textAnchor="middle" fontSize="8" fill={c} fontFamily="var(--font-mono)">day 1 → day 3 → day 7</text>
        </g>
      )}

      {type === "tour" && (
        <g>
          <rect x="54" y="30" width="212" height="62" rx="4" fill={softer} />
          <rect x="70" y="42" width="60" height="30" rx="4" fill="none" stroke={c} strokeWidth="2" className="pulse-soft" />
          <rect x="140" y="46" width="96" height="30" rx="6" fill="#1a1a1a" stroke={c} />
          <rect x="148" y="54" width="60" height="4" rx="2" fill={soft} />
          <rect x="148" y="62" width="40" height="4" rx="2" fill={soft} />
          <text x="228" y="70" fontSize="8" fill={c} fontFamily="var(--font-mono)">1/4</text>
        </g>
      )}

      {type === "agent" && (
        <g>
          <circle cx="160" cy="58" r="14" fill={c} opacity=".25" className="pulse-soft" />
          <circle cx="160" cy="58" r="7" fill={c} />
          {[[80, 36], [80, 80], [240, 36], [240, 80]].map(([x, y]) => (
            <g key={`${x}${y}`}>
              <path d={`M160 58 L${x} ${y}`} stroke={c} strokeDasharray="3 5" className="flow" />
              <rect x={x - 20} y={y - 8} width="40" height="16" rx="4" fill={softer} stroke={soft} />
            </g>
          ))}
        </g>
      )}

      {type === "code" && (
        <g fontFamily="var(--font-mono)" fontSize="9">
          {["<Hero />", "  <StopMotion />", "  <Blueprint />", "<Ship />"].map((t, i) => (
            <text key={t} x="58" y={40 + i * 14} fill={i % 3 === 0 ? c : "rgba(255,255,255,.45)"} className="line" style={{ animationDelay: `${i * 90}ms` }}>{t}</text>
          ))}
          <rect x="200" y="30" width="66" height="62" rx="4" fill={softer} />
          <rect x="208" y="38" width="50" height="8" rx="2" fill={c} opacity=".7" />
          <rect x="208" y="52" width="50" height="30" rx="2" fill={soft} />
        </g>
      )}

      {type === "checklist" && (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <g key={i} className="line" style={{ animationDelay: `${i * 90}ms` }}>
              <rect x="56" y={32 + i * 15} width="10" height="10" rx="2" fill="none" stroke={i < 3 ? c : "#F87171"} />
              {i < 3 ? <path d={`M58 ${37 + i * 15} l2.5 2.5 l4 -5`} stroke={c} fill="none" strokeWidth="1.5" /> : <path d={`M58 ${34 + i * 15} l6 6 M64 ${34 + i * 15} l-6 6`} stroke="#F87171" strokeWidth="1.5" />}
              <rect x="74" y={35 + i * 15} width={120 - i * 12} height="4" rx="2" fill={soft} />
            </g>
          ))}
          <text x="232" y="70" textAnchor="middle" fontSize="18" fontWeight="700" fill={c} fontFamily="var(--font-mono)">3/4</text>
        </g>
      )}
    </svg>
  );
}
