import { profile } from "@/data/content";

const links = [
  ["Case studies", "#work"],
  ["Build lab", "#build"],
  ["Simulator", "#simulator"],
  ["Experience", "#experience"],
];

export default function Nav() {
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
        <a href={`mailto:${profile.email}`}
          className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-ink transition hover:bg-accent">
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
