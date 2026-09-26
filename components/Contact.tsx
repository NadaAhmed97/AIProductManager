import { profile } from "@/data/content";

export default function Contact() {
  return (
    <footer className="border-t border-white/10 py-24 md:py-32">
      <div className="container-x">
        <p className="eyebrow"><span className="text-accent">05</span> / Next step</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
          Have a messy 0→1 problem and no playbook? <span className="text-accent">That&apos;s my favourite kind.</span>
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="rounded-full bg-accent px-6 py-3 font-semibold text-ink hover:brightness-110">
            {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:border-white">
            LinkedIn ↗
          </a>
          <a href={profile.cv} className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:border-white">
            Download CV
          </a>
        </div>
        <p className="mt-20 font-mono text-xs text-neutral-600">
          Designed & built by {profile.name} with Next.js, Tailwind and AI pair-programming.
        </p>
      </div>
    </footer>
  );
}
