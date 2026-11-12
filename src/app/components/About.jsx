"use client";

import React, { useEffect, useState } from "react";
import { profile } from "@/app/data/site";
import { currently } from "@/app/data/currently";
import { Figure, Mark, PhoneClamp, Reveal, SectionHead } from "./ui";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function useTheme() {
  const [scheme, setScheme] = useState("light");
  useEffect(() => {
    const root = document.documentElement;
    setScheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
    const obs = new MutationObserver(() => {
      setScheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
    });
    obs.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);
  return scheme;
}

function ArticleCard({ article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-[8px] border border-sakura-200 bg-sakura-100 shadow-soft transition-all hover:shadow-hi"
    >
      <div className="h-[3px] bg-gradient-to-r from-sakura to-sakura-200" />

      <div className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <Mark kind="petal" />
          <span className="text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-sakura-ink">
            Latest article
          </span>
        </div>

        <p className="mb-2 text-[0.875rem] font-bold leading-snug text-ink transition-colors group-hover:text-sakura-ink max-[600px]:line-clamp-2">
          {article.title}
        </p>

        <p className="mb-3 text-[0.8125rem] leading-relaxed text-muted max-[600px]:mb-2 max-[600px]:line-clamp-3">
          {article.blurb}
        </p>

        <div className="mt-3 flex items-center gap-1 text-[0.8125rem] font-medium text-sakura-ink/60 transition-colors group-hover:text-sakura-ink">
          Read article
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>
    </a>
  );
}

function NowPlaying({ embed }) {
  if (embed) {
    return (
      <div className="overflow-hidden rounded-[6px] max-[600px]:flex max-[600px]:items-center">
        {/* Phones: the large player scaled to about 72%, a size between Spotify's compact and large layouts. */}
        <div className="max-[600px]:h-[254px] max-[600px]:w-full max-[600px]:overflow-hidden max-[600px]:rounded-[6px]">
          <iframe
            src={embed}
            title="Now playing"
            width="100%"
            height="352"
            frameBorder="0"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="block h-[352px] max-[600px]:w-[139%] max-[600px]:origin-top-left max-[600px]:scale-[0.72]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-2.5 rounded-[6px] border border-line bg-card p-3">
      <div className="flex items-center gap-[11px]">
        <span className="disc h-11 w-11 shrink-0 rounded-[5px] border border-line-soft" aria-hidden="true" />
        <span>
          <span className="block text-[0.875rem] font-bold leading-tight">Now playing</span>
          <span className="text-[0.8125rem] text-muted">while I build things</span>
        </span>
      </div>
      <div className="h-[3px] overflow-hidden rounded-sm bg-sage-100" aria-hidden="true">
        <i className="block h-full w-[38%] bg-sage" />
      </div>
      <p className="font-hand text-[0.8125rem] italic text-faint">
        Spotify embed slot &mdash; drop a playlist here.
      </p>
    </div>
  );
}

export default function About() {
  const { article, tiles, spotifyEmbed, quote } = currently;
  const colorScheme = useTheme();
  // The calendar is client-only (it fetches in the browser), so skip it on the
  // server render to keep server and client HTML identical.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const quoteBlock = (
    <blockquote className="m-0 rounded-r-[5px] border-l-2 border-sage-mid bg-sage-50 px-4 py-[14px] max-[600px]:flex max-[600px]:items-center">
            <p className="mb-2 font-hand text-[1.0625rem] italic leading-[1.55] text-ink max-[600px]:mb-0">
              &ldquo;{quote.text}&rdquo;
            </p>
          </blockquote>
  );

  const interestBlock = (
          <div>
          <p className="mt-3 mb-2 text-[0.875rem] font-bold text-ink max-[600px]:mt-0">Interest</p>
          <div className="grid grid-cols-3 gap-3">
            {tiles.map((tile, i) => (
              <Figure
                key={i}
                src={tile.src}
                alt={tile.caption}
                caption={tile.caption}
                taped={false}
                ratio="aspect-square max-[580px]:aspect-video"
                sizes="(max-width: 900px) 25vw, 140px"
              />
            ))}
          </div>
          </div>
  );

  return (
    <section id="about" className="scroll-mt-14 pt-[42px] max-[600px]:pt-5">
      <SectionHead
        title="About me"
        note="A little bit about how I got here."
      />

      {/* Bio text on squared notepaper */}
      <div className="group relative">
        <span
          className="absolute -left-[30px] top-[1.4em] select-none text-[0.875rem] tracking-[-1px] text-faint opacity-0 transition-opacity group-hover:opacity-60 max-[900px]:hidden"
          aria-hidden="true"
        >
          ⋮⋮
        </span>

        <Reveal
          delay={0.08}
          className="squares rounded-[8px] border border-line px-6 py-[22px] font-sans text-[0.9375rem] leading-[1.75] shadow-soft max-[900px]:px-4 max-[600px]:py-4 max-[600px]:text-[0.875rem] max-[600px]:leading-[1.65]"
        >
          <PhoneClamp collapsed="max-[600px]:max-h-[10rem]" fade="from-card">
            {profile.about.map((para, i) => (
              <p key={i} className="mb-[1.1em] last:mb-0">
                {para}
              </p>
            ))}
          </PhoneClamp>
        </Reveal>
      </div>

      {/* Currently section */}
      <div className="mt-8 grid grid-cols-[25%_50%_25%] items-start gap-3 max-[900px]:grid-cols-2 max-[600px]:-mx-5 max-[600px]:mt-5 max-[600px]:flex max-[600px]:snap-x max-[600px]:snap-mandatory max-[600px]:overflow-x-auto max-[600px]:px-5 max-[600px]:pb-2 max-[600px]:scroll-pl-5 max-[600px]:gap-3 max-[600px]:items-stretch max-[600px]:[scrollbar-width:none] max-[600px]:[&::-webkit-scrollbar]:hidden">
        <Reveal delay={0.08} className="min-w-0 grid gap-3 max-[600px]:content-start max-[600px]:w-[84%] max-[600px]:shrink-0 max-[600px]:snap-start">
          <ArticleCard article={article} />

          <div className="hidden max-[600px]:block">{interestBlock}</div>
          <div className="max-[600px]:hidden">{quoteBlock}</div>
        </Reveal>

        <Reveal delay={0.12} className="min-w-0 grid gap-3 max-[600px]:w-[84%] max-[600px]:shrink-0 max-[600px]:snap-start">
          <div className="overflow-hidden rounded-[6px] border border-line bg-card p-4">
            <p className="mb-3 flex items-center justify-between text-[0.875rem] font-bold text-ink">
              GitHub Activity
              <a href="https://github.com/jeslynw" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-sage-ink">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </p>
            {mounted ? (
              <GitHubCalendar
                username="jeslynw"
                colorScheme={colorScheme}
                blockSize={10}
                blockMargin={3}
                fontSize={11}
                hideColorLegend
                hideMonthLabels={false}
                theme={{
                  light: ["#ddd", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
                  dark: ["#333", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
                renderBlock={(block, activity) =>
                  React.cloneElement(block, {
                    "data-tooltip-id": "gh-tooltip",
                    "data-tooltip-content": `${activity.count} contribution${activity.count !== 1 ? "s" : ""} on ${activity.date}`,
                  })
                }
              />
            ) : (
              <div className="h-[110px]" aria-hidden="true" />
            )}
            <ReactTooltip id="gh-tooltip" />
          </div>

          <div className="max-[600px]:hidden">{interestBlock}</div>
          <div className="hidden max-[600px]:block">{quoteBlock}</div>
        </Reveal>

        <Reveal delay={0.16} className="min-w-0 grid gap-3 max-[600px]:w-[84%] max-[600px]:shrink-0 max-[600px]:snap-start">
          <NowPlaying embed={spotifyEmbed} />
        </Reveal>
      </div>
    </section>
  );
}
