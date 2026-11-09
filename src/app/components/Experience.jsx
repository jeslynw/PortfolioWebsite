import { experienceList } from "@/app/data/experience";
import { Chip, Reveal, SectionHead } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-14 pt-[42px]">
      <SectionHead title="Experience" note="Where I've worked and what I've built." />

      <div className="grid gap-8">
        {experienceList.map((exp, i) => (
          <Reveal key={exp.company + exp.role} delay={0.08 + i * 0.06}>
            <div className="grid grid-cols-[140px_auto_1fr] gap-x-5 max-[700px]:grid-cols-[auto_1fr] max-[700px]:gap-x-4">
              {/* Left margin — date, company, location */}
              <div className="text-right max-[700px]:hidden pt-[2px]">
                <p className="text-[0.75rem] text-faint leading-[1.5]">{exp.when}</p>
                {exp.location && (
                  <p className="mt-0.5 text-[0.6875rem] text-faint">{exp.location}</p>
                )}
                {exp.current && <div className="mt-1.5 flex justify-end"><Chip tone="sakura">Current</Chip></div>}
              </div>

              {/* Metro rail + station */}
              <div className="relative flex flex-col items-center">
                <span className={`relative z-10 h-[18px] w-[18px] rounded-full border-[3px] mt-[2px] ${
                  exp.current
                    ? "border-sakura bg-page shadow-[0_0_0_3px_rgba(var(--sakura-rgb,219,112,147),0.2)]"
                    : "border-sage bg-page"
                }`} aria-hidden="true" />
                <div className="w-[3px] flex-1 rounded-full bg-gradient-to-b from-sage-200 to-sage-100" aria-hidden="true" />
              </div>

              {/* Right content */}
              <div className="min-w-0 pb-2">
                {/* Mobile-only meta */}
                <div className="hidden max-[700px]:flex flex-wrap items-center gap-1.5 mb-1 text-[0.75rem] text-faint">
                  <span>{exp.company}</span>
                  {exp.location && <><span className="text-line">·</span><span>{exp.location}</span></>}
                  <span className="text-line">·</span>
                  <span>{exp.when}</span>
                  {exp.current && <Chip tone="sakura">Current</Chip>}
                </div>

                <h3 className="text-[1.0625rem] leading-[1.3] text-ink">
                  <span className="font-bold">{exp.role}</span>
                  <span className="mx-1.5 text-faint">📍</span>
                  <span className="font-medium text-sage-ink">{exp.company}</span>
                </h3>

                <p className="mt-1.5 text-[0.8125rem] leading-[1.65] text-muted italic font-hand">
                  {exp.description}
                </p>

                {exp.bullets?.length > 0 && (
                  <ul className="mt-2.5 grid gap-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-[0.8125rem] leading-[1.7] text-muted">
                        <span className="mt-[0.6em] h-[5px] w-[5px] shrink-0 rounded-full bg-sage-mid" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.skills.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <Chip key={s} tone="grey">{s}</Chip>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
