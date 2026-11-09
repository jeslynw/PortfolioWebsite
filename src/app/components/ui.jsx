"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/* ---------- marks: drawn, not emoji ---------- */

const svgMarks = {
  study: (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12.5V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8.5" />
      <path d="M2 12.5h12" />
      <path d="M5.5 6.5h5M5.5 9h3" />
    </svg>
  ),
  building: (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 13.5V4l5.5-2 5.5 2v9.5" />
      <path d="M6 7h4M6 9.5h4" />
    </svg>
  ),
  pin: (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="6.5" r="2.5" />
      <path d="M8 14c-3-3.5-5-5.8-5-7.5a5 5 0 0 1 10 0c0 1.7-2 4-5 7.5Z" />
    </svg>
  ),
  target: (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6" />
      <circle cx="8" cy="8" r="3" />
      <circle cx="8" cy="8" r="0.5" fill="currentColor" />
    </svg>
  ),
};

export function Mark({ kind = "leaf", className = "" }) {
  if (svgMarks[kind]) {
    return <span className={`inline-flex shrink-0 text-muted ${className}`} aria-hidden="true">{svgMarks[kind]}</span>;
  }
  return <span className={`${kind} ${className}`} aria-hidden="true" />;
}

/* ---------- scroll reveal ---------- */

export function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 9 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.7, 0.32, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/* On-load entrance, for the cover only. */
export function Enter({ children, delay = 0, className = "", as = "div" }) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.7, 0.32, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/* ---------- text bits ---------- */

export function Chip({ tone = "sage", wrap = false, children, className = "" }) {
  const tones = {
    sage: "bg-sage-100 text-sage-ink",
    grey: "bg-[var(--hover)] text-muted",
    sakura: "bg-sakura-100 text-sakura-ink",
  };
  return (
    <span
      className={`rounded-[3px] px-2 py-[2px] text-[0.75rem] ${
        wrap ? "" : "whitespace-nowrap"
      } ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Label({ children, className = "" }) {
  return (
    <p className={`text-[0.75rem] uppercase tracking-[0.06em] text-faint ${className}`}>
      {children}
    </p>
  );
}

/* ---------- Notion callout ---------- */

export function Callout({ tone = "sage", mark = "leaf", children }) {
  const bg = tone === "sakura" ? "bg-sakura-100" : "bg-sage-100";
  const ink = tone === "sakura" ? "text-sakura-ink" : "text-sage-ink";
  return (
    <div className={`flex gap-[11px] rounded-[4px] px-4 py-[14px] ${bg}`}>
      <Mark kind={mark} className="mt-[9px]" />
      <p className={`font-hand text-[0.9375rem] italic leading-[1.6] ${ink}`}>{children}</p>
    </div>
  );
}

/* ---------- section break with a pressed leaf ---------- */

export function Rule({ className = "" }) {
  return <hr className={`rule mt-10 ${className}`} />;
}

/* ---------- section heading ---------- */

export function SectionHead({ mark = "leaf", title, note }) {
  const reduced = useReducedMotion();

  return (
    <>
      <Reveal className="mb-1.5 flex items-center gap-2.5">
        <Mark kind={mark} />
        <span className="relative w-fit pb-1.5">
          <h2 className="text-[1.75rem] font-bold leading-tight tracking-[-0.015em] text-ink">
            {title}
          </h2>

          {/* a hand-drawn underline that draws itself when scrolled into view */}
          <svg
            viewBox="0 0 200 8"
            preserveAspectRatio="none"
            className="absolute -bottom-0.5 left-0 h-[7px] w-full overflow-visible text-sage-mid"
            aria-hidden="true"
          >
            <motion.path
              d="M2 5.4 C38 1.6, 74 6.8, 110 3.2 S166 6.4, 198 2.8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={reduced ? false : { pathLength: 0, opacity: 0 }}
              whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 0.85, ease: "easeInOut", delay: 0.2 }}
            />
          </svg>
        </span>
      </Reveal>

      {note && (
        <Reveal delay={0.04}>
          <p className="mb-[22px] mt-2 font-hand text-[1.0625rem] italic text-muted">{note}</p>
        </Reveal>
      )}
    </>
  );
}

/* ---------- taped image block, with a journal caption ---------- */

export function Figure({
  src,
  alt = "",
  caption,
  ratio = "aspect-[4/5]",
  taped = true,
  sizes = "220px",
  className = "",
}) {
  return (
    <figure className={`group relative m-0 ${taped ? "taped" : ""} ${className}`}>
      <div
        className={`relative overflow-hidden rounded-[6px] border border-line shadow-soft transition-[box-shadow,transform] duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lift ${ratio} ${
          src ? "" : "slot-art grid place-items-center"
        }`}
      >
        {src ? (
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
        ) : (
          <span className="px-2.5 text-center text-[0.625rem] leading-relaxed tracking-[0.05em] text-ink opacity-50">
            add an image
          </span>
        )}
      </div>
      {caption && (
        <figcaption className="px-0.5 pt-2 text-center font-hand text-[0.875rem] italic text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ---------- link with a nudging arrow ---------- */

export function ArrowLink({ href, children, external = true, className = "" }) {
  const extra = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a
      href={href}
      {...extra}
      className={`inline-flex items-center gap-[5px] text-[0.75rem] text-sage-ink no-underline transition-[gap] duration-200 hover:gap-[9px] hover:underline hover:underline-offset-[3px] ${className}`}
    >
      {children} <span aria-hidden="true">&rarr;</span>
    </a>
  );
}
