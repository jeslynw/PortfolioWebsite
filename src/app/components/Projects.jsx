"use client";

import { useState } from "react";
import Link from "next/link";
import { projectList } from "@/app/data/projects";
import ProjectImageCarousel from "./ProjectImageCarousel";
import Lightbox from "./Lightbox";
import { ArrowLink, Chip, Reveal, SectionHead } from "./ui";

const VISIBLE = 3;

function linkLabel(href) {
  return href.includes("github.com") ? "See the code" : "Read the write-up";
}

function GalleryCard({ project, delay, onImageClick }) {
  const { number, year, category, title, description, pics, skills, achievement, link, mediumLink } = project;

  return (
    <Reveal
      delay={delay}
      className="group/card flex flex-col gap-2.5 rounded-[7px] border border-line bg-card px-[9px] pb-[15px] pt-[9px] transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-[3px] hover:border-sage-200 hover:shadow-lift"
    >
      <div
        className="relative aspect-[16/10] cursor-pointer overflow-hidden rounded-[4px] border border-line-soft bg-sage-50"
        onClick={() => onImageClick(pics, 0)}
      >
        <ProjectImageCarousel pics={pics} title={title} variant="card" />
        {pics.length > 1 && (
          <span className="pointer-events-none absolute right-1.5 top-1.5 z-10 rounded-[3px] bg-[rgba(0,0,0,0.55)] px-1.5 py-px text-[0.625rem] text-white">
            Click to view
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 px-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[0.6875rem] font-bold text-sage-ink tnum">{number}</span>
          <span className="text-[0.6875rem] text-faint tnum">{year}</span>
          {achievement && (
            <Chip tone="sakura" wrap>
              {achievement}
            </Chip>
          )}
        </div>

        <h3 className="text-[0.8125rem] font-bold leading-[1.45] text-ink">{title}</h3>

        <p className="clamp-3 m-0 font-sans text-[0.8125rem] text-muted">{description}</p>

        <div className="flex flex-wrap gap-1.5">
          {skills.filter(Boolean).map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-1">
          {link ? (
            <ArrowLink href={link}>{linkLabel(link)}</ArrowLink>
          ) : (
            <span className="text-[0.6875rem] text-faint">{category}</span>
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
      <table className="w-full min-w-[820px] table-fixed border-collapse text-[0.8125rem]">
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
                className="border-b border-line pb-[7px] pr-3 pt-[7px] text-left text-[0.6875rem] font-normal text-muted"
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
              <td className="border-b border-line-soft py-2.5 pr-3 align-top text-[0.6875rem] text-muted tnum">
                {p.year}
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
                  <span className="text-[0.6875rem] text-muted">&mdash;</span>
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
                    <span className="text-[0.6875rem] text-muted">&mdash;</span>
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
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const shown = expanded ? projectList : projectList.slice(0, VISIBLE);
  const hidden = projectList.length - VISIBLE;

  function collapse() {
    setExpanded(false);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }

  return (
    <section id="projects" className="scroll-mt-14 pt-[42px]">
      <SectionHead title="Projects" note="" />

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
              className={`-mb-px inline-flex items-center gap-[7px] border-b-2 px-2.5 py-[7px] pt-8 text-[0.8125rem] transition-colors ${
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
          <div className="grid grid-cols-[repeat(auto-fill,minmax(258px,1fr))] items-start gap-3.5">
            {shown.map((project, i) => (
              <GalleryCard
                key={project.number}
                project={project}
                delay={i < VISIBLE ? 0.1 + i * 0.04 : (i - VISIBLE) * 0.06}
                onImageClick={(pics, idx) => setLightbox({ pics, current: idx })}
              />
            ))}
          </div>

          {hidden > 0 && (
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => (expanded ? collapse() : setExpanded(true))}
                className="inline-flex items-center gap-[9px] rounded-[5px] border border-line px-[18px] py-2 text-[0.8125rem] text-muted transition-colors hover:border-sage-200 hover:bg-sage-50 hover:text-sage-ink"
              >
                {expanded ? "Show less" : `Show ${hidden} more`}
                <span
                  className={`text-[0.7em] transition-transform duration-300 ${
                    expanded ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  &#9660;
                </span>
              </button>
            </div>
          )}

          <div className="mt-3 flex justify-center">
            <Link
              href="/projects"
              className="text-[0.6875rem] text-muted underline decoration-[var(--line)] underline-offset-[3px] transition-colors hover:text-sage-ink hover:decoration-[var(--sage-ink)]"
            >
              Open the project database
            </Link>
          </div>
        </>
      ) : (
        <TableView />
      )}

      {lightbox && (
        <Lightbox
          pics={lightbox.pics}
          current={lightbox.current}
          onClose={() => setLightbox(null)}
          onNav={(idx) => setLightbox((prev) => ({ ...prev, current: idx }))}
        />
      )}
    </section>
  );
}
