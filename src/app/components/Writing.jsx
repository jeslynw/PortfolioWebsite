import { Mark, Reveal, SectionHead } from "./ui";

const articles = [
  {
    title: "Building Dumpling: An Agentic RAG System for Personal Knowledge Management",
    url: "https://medium.com/@YOUR_HANDLE/your-article-slug",
    tag: "Agentic AI",
    date: "2025",
    blurb: "How I built a retrieval system that corrects itself — from chunking strategy to agentic loops.",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="scroll-mt-14 pt-[42px]">
      <SectionHead title="Writing" note="Sometimes I write about what I build — here's one that made it to Medium." />

      <div className="grid gap-4">
        {articles.map((a) => (
          <Reveal key={a.url} delay={0.08}>
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-[8px] border border-line bg-card shadow-soft transition-all hover:border-sakura hover:shadow-hi"
            >
              <div className="absolute inset-y-0 left-0 w-[4px] bg-sakura transition-all group-hover:w-[6px]" />

              <div className="px-7 py-6 pl-8">
                <div className="mb-3 flex items-center gap-2">
                  <Mark kind="petal" />
                  <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-sakura-ink">
                    Featured article
                  </span>
                </div>

                <h3 className="mb-2 text-[1.125rem] font-bold leading-snug text-ink transition-colors group-hover:text-sakura-ink">
                  {a.title}
                </h3>

                <p className="mb-4 text-[0.8125rem] leading-relaxed text-muted">
                  {a.blurb}
                </p>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 rounded-sm bg-sakura-100 px-[9px] py-[3px] text-[0.6875rem] font-medium text-sakura-ink">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                    Medium
                  </span>
                  <span className="rounded-sm bg-sage-100 px-[9px] py-[3px] text-[0.6875rem] font-medium text-sage-ink">
                    {a.tag}
                  </span>
                  <span className="text-[0.6875rem] text-faint">Published on MITB &middot; {a.date}</span>
                  <span className="ml-auto flex items-center gap-1 text-[0.75rem] font-medium text-faint transition-colors group-hover:text-sakura-ink">
                    Read article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
