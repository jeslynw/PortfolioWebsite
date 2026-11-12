"use client";

import { useState } from "react";
import { projectList } from "@/app/data/projects";
import ProjectImageCarousel from "@/app/components/ProjectImageCarousel";
import Lightbox from "@/app/components/Lightbox";
import { ArrowLink, Chip, Label, Reveal } from "@/app/components/ui";

function ProjectEntry({ project, index, onImageClick }) {
  const { number, month_year, category, title, description, pics, skills, achievement, link } = project;

  return (
    <Reveal
      delay={index * 0.05}
      className="grid grid-cols-[minmax(0,1fr)_320px] gap-6 rounded-[7px] border border-line bg-card p-5 transition-[border-color,box-shadow] duration-300 hover:border-sage-200 hover:shadow-soft max-[860px]:grid-cols-1"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[0.75rem] font-bold text-sage-ink tnum">{number}</span>
          <span className="text-[0.75rem] text-faint tnum">{month_year}</span>
          <Chip tone="grey" wrap>
            {category}
          </Chip>
          {achievement && (
            <Chip tone="sakura" wrap>
              {achievement}
            </Chip>
          )}
        </div>

        <h2 className="font-hand text-[1.125rem] font-semibold leading-[1.4] text-ink">{title}</h2>

        <p className="m-0 font-sans text-[0.875rem] leading-[1.75] text-muted">{description}</p>

        <div>
          <Label className="mb-1.5">Tech stack</Label>
          <div className="flex flex-wrap gap-1.5">
            {skills.filter(Boolean).map((skill) => (
              <Chip key={skill}>{skill}</Chip>
            ))}
          </div>
        </div>

        {link && (
          <div className="mt-auto pt-1">
            <ArrowLink href={link}>
              {link.includes("github.com") ? "See the code" : "Read the write-up"}
            </ArrowLink>
          </div>
        )}
      </div>

      <div
        className="relative min-h-[220px] cursor-pointer overflow-hidden rounded-[5px] border border-line-soft max-[860px]:min-h-[240px]"
        onClick={() => onImageClick(pics, 0)}
      >
        <ProjectImageCarousel pics={pics} title={title} />
        {pics.length > 1 && (
          <span className="pointer-events-none absolute right-1.5 top-1.5 z-10 rounded-[3px] bg-[rgba(0,0,0,0.55)] px-1.5 py-px text-[0.6875rem] text-white">
            Click to view
          </span>
        )}
      </div>
    </Reveal>
  );
}

export default function ProjectsGrid() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <div className="flex flex-col gap-4">
        {projectList.map((project, index) => (
          <ProjectEntry
            key={project.number}
            project={project}
            index={index}
            onImageClick={(pics, idx) => setLightbox({ pics, current: idx })}
          />
        ))}
      </div>

      {lightbox && (
        <Lightbox
          pics={lightbox.pics}
          current={lightbox.current}
          onClose={() => setLightbox(null)}
          onNav={(idx) => setLightbox((prev) => ({ ...prev, current: idx }))}
        />
      )}
    </>
  );
}
