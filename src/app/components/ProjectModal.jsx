"use client";

import { useEffect, useRef } from "react";
import ProjectImageCarousel from "./ProjectImageCarousel";
import { ArrowLink, Chip } from "./ui";

function linkLabel(href) {
  return href.includes("github.com") ? "See the code" : "Read the write-up";
}

/** Full project details in a popup: images, full description, every tool, links. */
export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const { number, month_year, category, title, description, pics, skills, achievement, link, mediumLink } = project;

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/55 p-4 max-[600px]:p-2"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[90vh] w-full max-w-[860px] overflow-y-auto rounded-[10px] border border-line bg-card shadow-lift"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-card/90 text-ink shadow-soft transition-colors hover:bg-sage-100"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="h-[320px] border-b border-line-soft bg-sage-50 max-[600px]:h-[230px]">
          <ProjectImageCarousel pics={pics} title={title} variant="full" />
        </div>

        <div className="flex flex-col gap-3 px-6 pb-6 pt-5 max-[600px]:px-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[0.75rem] font-bold text-sage-ink tnum">{number}</span>
            <span className="text-[0.75rem] text-faint tnum">{month_year}</span>
            <span className="text-[0.75rem] text-faint">{category}</span>
            {achievement && (
              <Chip tone="sakura" wrap>
                {achievement}
              </Chip>
            )}
          </div>

          <h3 id="project-modal-title" className="font-hand text-[1.375rem] font-semibold leading-[1.35] text-ink">
            {title}
          </h3>

          <p className="m-0 max-w-[68ch] text-[0.9375rem] leading-[1.7] text-muted">{description}</p>

          <div className="flex flex-wrap gap-1.5">
            {skills.filter(Boolean).map((skill) => (
              <Chip key={skill}>{skill}</Chip>
            ))}
          </div>

          {(link || mediumLink) && (
            <div className="flex flex-wrap items-center gap-4 pt-1">
              {link && <ArrowLink href={link}>{linkLabel(link)}</ArrowLink>}
              {mediumLink && <ArrowLink href={mediumLink}>Medium article</ArrowLink>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
