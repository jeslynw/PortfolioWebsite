import { educationList } from "@/app/data/education";
import { Chip, Label, Reveal, SectionHead } from "./ui";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-14 pt-[42px]">
      <SectionHead title="Education" note="Two programmes, one thread." />

      <div className="grid gap-2.5">
        {educationList.map((edu, i) => (
          <Reveal
            key={edu.school}
            delay={0.08 + i * 0.04}
            className="rounded-[6px] border border-line bg-card px-5 py-[18px] transition-[border-color,box-shadow] duration-200 hover:border-sage-200 hover:shadow-soft"
          >
            <div className="mb-[7px] flex flex-wrap items-center gap-[9px]">
              <span className="text-[0.6875rem] text-muted">{edu.when}</span>
              {edu.current && <Chip tone="sakura">Current</Chip>}
            </div>

            <h3 className="mb-[3px] text-[1.0625rem] font-bold leading-[1.35] text-ink">
              {edu.school}
            </h3>
            <p className="mb-[14px] text-[0.8125rem] text-sage-ink">{edu.degree}</p>

            <Label className="mb-1.5">Coursework</Label>
            <div className="flex flex-wrap gap-1.5">
              {edu.coursework.map((c) => (
                <Chip key={c} tone="grey">
                  {c}
                </Chip>
              ))}
            </div>

            {(edu.club || edu.hackathon) && (
              <div className="mt-[14px] border-t border-line-soft pt-[13px]">
                <Label className="mb-1.5">Activities</Label>
                {edu.club && (
                  <p className="font-hand text-[0.9375rem] text-muted">
                    <strong className="font-semibold text-ink">{edu.club.lead}</strong> - {" "}
                    {edu.club.text}
                  </p>
                )}
                {edu.hackathon && (
                  <div className="mt-2 font-hand text-[0.9375rem] text-muted">
                    <strong className="font-semibold text-ink">{edu.hackathon.lead}</strong>
                    <ul className="mt-1 list-disc pl-5 space-y-0.5">
                      {edu.hackathon.text.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
