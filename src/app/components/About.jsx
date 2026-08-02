import { links, profile } from "@/app/data/site";
import { Callout, Reveal, SectionHead } from "./ui";

export default function About() {
  return (
    <section id="about" className="scroll-mt-14 pt-[42px]">
      <SectionHead
        title="About me"
        note="From liking neat interfaces, to wanting to know how they work, to teaching machines to help."
      />

      <div className="group relative">
        <span
          className="absolute -left-[30px] top-[1.4em] select-none text-[0.8125rem] tracking-[-1px] text-faint opacity-0 transition-opacity group-hover:opacity-60 max-[900px]:hidden"
          aria-hidden="true"
        >
          ⋮⋮
        </span>

        {/* written on squared notepaper */}
        <Reveal
          delay={0.08}
          className="squares rounded-[8px] border border-line px-6 py-[22px] font-sans text-[0.9375rem] leading-[1.75] shadow-soft max-[900px]:px-4"
        >
          {profile.about.map((para, i) => (
            <p key={i} className="mb-[1.1em] last:mb-0">
              {para}
            </p>
          ))}
        </Reveal>
      </div>

      <Reveal delay={0.16} className="mt-4">
        <a
          href={links.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-sakura px-5 py-[10px] text-[0.8125rem] font-bold text-white shadow-soft transition-all hover:shadow-hi hover:brightness-110"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Open CV
        </a>
      </Reveal>

    </section>
  );
}
