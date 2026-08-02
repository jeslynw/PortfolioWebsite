import { skillGroups } from "@/app/data/skills";
import { Reveal, SectionHead } from "./ui";

export default function Toolkit() {
  return (
    <section id="skills" className="scroll-mt-14 pt-[42px]">
      <SectionHead title="Tools" note="What I build with." />

      <div className="grid gap-5">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.name}
            delay={0.08 + i * 0.04}
            className="grid grid-cols-[132px_minmax(0,1fr)] items-baseline gap-2.5 max-[900px]:grid-cols-1 max-[900px]:gap-2.5"
          >
            <span className="text-[0.8125rem] text-muted">
              {group.name}
            </span>

            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-[4px] border border-line bg-card px-[11px] py-1 text-[0.8125rem] transition-[transform,border-color,background-color,color] duration-200 hover:-translate-y-0.5 hover:border-sage-200 hover:bg-sage-50 hover:text-sage-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
