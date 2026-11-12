import { skillGroups } from "@/app/data/skills";
import { Reveal, SectionHead } from "./ui";

export default function Toolkit() {
  return (
    <section id="skills" className="scroll-mt-14 pt-[42px] max-[600px]:pt-5">
      <SectionHead title="Tools" note="What I build with." />

      <div className="grid grid-cols-1 gap-5 max-[600px]:gap-2.5">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.name}
            delay={0.08 + i * 0.04}
            className="grid grid-cols-[132px_minmax(0,1fr)] items-baseline gap-2.5 max-[900px]:grid-cols-1 max-[900px]:gap-2.5 max-[600px]:gap-1"
          >
            <span className="text-[0.875rem] text-muted max-[600px]:text-[0.75rem] max-[600px]:uppercase max-[600px]:tracking-[0.06em] max-[600px]:text-faint">
              {group.name}
            </span>

            <div className="flex flex-wrap gap-1.5 max-[600px]:-mx-5 max-[600px]:flex-nowrap max-[600px]:overflow-x-auto max-[600px]:px-5 max-[600px]:pb-1 max-[600px]:[scrollbar-width:none] max-[600px]:[&::-webkit-scrollbar]:hidden">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="shrink-0 rounded-[4px] border border-line bg-card px-[11px] py-1 text-[0.875rem] max-[600px]:px-2 max-[600px]:py-0.5 max-[600px]:text-[0.8125rem]"
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
