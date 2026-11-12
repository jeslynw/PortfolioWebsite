"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projectList } from "@/app/data/projects";
import ProjectImageCarousel from "./ProjectImageCarousel";
import ProjectModal from "./ProjectModal";
import { ArrowLink, Chip, Reveal, SectionHead } from "./ui";

const PAGE_SIZE = 6;
const MAX_CHIPS = 4;

function linkLabel(href) {
  return href.includes("github.com") ? "See the code" : "Read the write-up";
}

function GalleryCard({ project, delay, onOpen, extraClass = "" }) {
  const { number, month_year, category, title, description, pics, skills, achievement, link, mediumLink } = project;

  return (
    <Reveal
      delay={delay}
      className={`${extraClass} group/card flex flex-col gap-2.5 max-[600px]:w-[84%] max-[600px]:shrink-0 max-[600px]:snap-start rounded-[7px] border border-line bg-card px-[9px] pb-[15px] pt-[9px] transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-[3px] hover:border-sage-200 hover:shadow-lift`}
    >
      <div
        className="relative aspect-[16/10] cursor-pointer overflow-hidden rounded-[4px] border border-line-soft bg-sage-50"
        onClick={onOpen}
      >
        <ProjectImageCarousel pics={pics} title={title} variant="card" />
        {pics.length > 1 && (
          <span className="pointer-events-none absolute right-1.5 top-1.5 z-10 rounded-[3px] bg-[rgba(0,0,0,0.55)] px-1.5 py-px text-[0.6875rem] text-white">
            View details
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 px-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[0.75rem] font-bold text-sage-ink tnum">{number}</span>
          <span className="text-[0.75rem] text-faint tnum">{month_year}</span>
          {achievement && (
            <Chip tone="sakura" wrap>
              {achievement}
            </Chip>
          )}
        </div>

        <h3 className="clamp-2 min-h-[2.9em] font-hand text-[1rem] font-semibold leading-[1.45] text-ink">
          <button
            type="button"
            onClick={onOpen}
            aria-haspopup="dialog"
            className="cursor-pointer border-0 bg-transparent p-0 text-left font-[inherit] text-inherit hover:text-sage-ink"
          >
            {title}
          </button>
        </h3>

        <p onClick={onOpen} className="clamp-3 m-0 min-h-[5.1em] font-sans text-[0.875rem] text-muted">{description}</p>

        <div className="flex flex-wrap gap-1.5">
          {skills.filter(Boolean).slice(0, MAX_CHIPS).map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
          {skills.filter(Boolean).length > MAX_CHIPS && (
            <Chip tone="grey">
              <span aria-hidden="true">&hellip;</span>
              <span className="sr-only">and {skills.filter(Boolean).length - MAX_CHIPS} more</span>
            </Chip>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-1">
          {link ? (
            <ArrowLink href={link}>{linkLabel(link)}</ArrowLink>
          ) : (
            <span className="text-[0.75rem] text-faint">{category}</span>
          )}
          {mediumLink && (
            <ArrowLink href={mediumLink}>Medium article</ArrowLink>
          )}
        </div>
      </div>
    </Reveal>
  );
}

function TableView() {
  return (
    <Reveal className="overflow-x-auto">
      <table className="w-full min-w-[820px] table-fixed border-collapse text-[0.875rem]">
        {/* Fixed proportions: titles get room, Links never gets squeezed off. */}
        <colgroup>
          <col className="w-[27%]" />
          <col className="w-[6%]" />
          <col className="w-[14%]" />
          <col className="w-[16%]" />
          <col className="w-[28%]" />
          <col className="w-[9%]" />
        </colgroup>
        <thead>
          <tr>
            {["Project", "Year", "Type", "Result", "Tech stack", "Links"].map((h) => (
              <th
                key={h}
                className="border-b border-line pb-[7px] pr-3 pt-[7px] text-left text-[0.75rem] font-normal text-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {projectList.map((p) => (
            <tr key={p.number} className="transition-colors hover:bg-[var(--hover)]">
              <td className="border-b border-line-soft py-2.5 pr-3 align-top font-semibold">
                {p.title}
              </td>
              <td className="border-b border-line-soft py-2.5 pr-3 align-top text-[0.75rem] text-muted tnum">
                {p.month_year}
              </td>
              <td className="border-b border-line-soft py-2.5 pr-3 align-top">
                <Chip tone="grey" wrap>
                  {p.category.replace("Coursework: ", "")}
                </Chip>
              </td>
              <td className="border-b border-line-soft py-2.5 pr-3 align-top">
                {p.achievement ? (
                  <Chip tone="sakura" wrap>
                    {p.achievement}
                  </Chip>
                ) : (
                  <span className="text-[0.75rem] text-muted">&mdash;</span>
                )}
              </td>
              <td className="border-b border-line-soft py-2.5 pr-3 align-top">
                <div className="flex flex-wrap gap-1.5">
                  {p.skills.filter(Boolean).map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </td>
              <td className="border-b border-line-soft py-2.5 pr-3 align-top">
                <div className="flex flex-col gap-1">
                  {p.link ? (
                    <ArrowLink href={p.link}>
                      {p.link.includes("github.com") ? "GitHub" : "Write-up"}
                    </ArrowLink>
                  ) : (
                    <span className="text-[0.75rem] text-muted">&mdash;</span>
                  )}
                  {p.mediumLink && (
                    <ArrowLink href={p.mediumLink}>Medium</ArrowLink>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}

export default function Projects() {
  const [view, setView] = useState("gallery");
  const [page, setPage] = useState(1);
  const [openProject, setOpenProject] = useState(null);
  const rowRef = useRef(null);
  const [bar, setBar] = useState({ thumb: 0.3, progress: 0 });

  // Scroll line under the phone swipe row: thumb size = how much is visible, position = how far along.
  function measure() {
    const el = rowRef.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    setBar({
      thumb: el.clientWidth / el.scrollWidth,
      progress: el.scrollLeft / (el.scrollWidth - el.clientWidth),
    });
  }
  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [view]);

  const pageCount = Math.ceil(projectList.length / PAGE_SIZE);
  const pageStart = (page - 1) * PAGE_SIZE;

  function goToPage(n) {
    setPage(n);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }

  return (
    <section id="projects" className="scroll-mt-14 pt-[42px] max-[600px]:pt-5">
      <SectionHead title="Projects" note="Things I've built, broken, and shipped." />

      <Reveal
        delay={0.08}
        className="mb-[18px] flex flex-wrap items-center gap-0.5 border-b border-line"
      >
        {[
          { id: "gallery", label: "Gallery", mark: "leaf" },
          { id: "table", label: "Table", mark: "petal" },
        ].map(({ id, label, mark }) => {
          const on = view === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setView(id)}
              className={`-mb-px inline-flex items-center gap-[7px] border-b-2 px-2.5 py-[7px] text-[0.875rem] transition-colors ${
                on
                  ? "border-[var(--text)] font-semibold text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              <span className={mark} aria-hidden="true" />
              {label}
              <span className="text-faint tnum">{projectList.length}</span>
            </button>
          );
        })}
      </Reveal>

      {view === "gallery" ? (
        <>
          <div ref={rowRef} onScroll={measure} className="grid grid-cols-[repeat(auto-fill,minmax(258px,1fr))] relative items-stretch gap-3.5 max-[600px]:-mx-5 max-[600px]:flex max-[600px]:snap-x max-[600px]:snap-mandatory max-[600px]:overflow-x-auto max-[600px]:px-5 max-[600px]:pb-3 max-[600px]:scroll-pl-5 max-[600px]:[scrollbar-width:none] max-[600px]:[&::-webkit-scrollbar]:hidden">
            {projectList.map((project, i) => {
              const onPage = i >= pageStart && i < pageStart + PAGE_SIZE;
              return (
                <GalleryCard
                  key={project.number}
                  project={project}
                  delay={0.1 + (i % PAGE_SIZE) * 0.04}
                  onOpen={() => setOpenProject(project)}
                  extraClass={onPage ? "" : "hidden max-[600px]:flex"}
                />
              );
            })}
          </div>

          {/* Phones: a scroll line instead of page buttons */}
          <div className="mt-1 hidden h-[3px] rounded-full bg-sage-100 max-[600px]:block" aria-hidden="true">
            <div
              className="h-full rounded-full bg-sage-ink transition-[margin] duration-100"
              style={{ width: `${bar.thumb * 100}%`, marginLeft: `${bar.progress * (1 - bar.thumb) * 100}%` }}
            />
          </div>

          {pageCount > 1 && (
            <nav aria-label="Project pages" className="mt-6 flex items-center justify-center gap-1.5 max-[600px]:hidden">
              <button
                type="button"
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
                className="rounded-[5px] border border-line px-3 py-1.5 text-[0.875rem] text-muted transition-colors hover:bg-sage-50 hover:text-sage-ink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-muted"
              >
                &larr; Prev
              </button>

              {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => goToPage(n)}
                  aria-label={`Page ${n}`}
                  aria-current={n === page ? "page" : undefined}
                  className={`h-8 min-w-8 rounded-[5px] border px-2 text-[0.875rem] tnum transition-colors ${
                    n === page
                      ? "border-sage-ink bg-sage-ink font-semibold text-card"
                      : "border-line text-muted hover:bg-sage-50 hover:text-sage-ink"
                  }`}
                >
                  {n}
                </button>
              ))}

              <button
                type="button"
                onClick={() => goToPage(page + 1)}
                disabled={page === pageCount}
                aria-label="Next page"
                className="rounded-[5px] border border-line px-3 py-1.5 text-[0.875rem] text-muted transition-colors hover:bg-sage-50 hover:text-sage-ink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-muted"
              >
                Next &rarr;
              </button>
            </nav>
          )}

          <div className="mt-3 flex justify-center">
            <Link
              href="/projects"
              className="text-[0.875rem] text-muted underline decoration-[var(--line)] underline-offset-[3px] transition-colors hover:text-sage-ink hover:decoration-[var(--sage-ink)]"
            >
              Open the project database
            </Link>
          </div>
        </>
      ) : (
        <TableView />
      )}

      {openProject && (
        <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </section>
  );
}
