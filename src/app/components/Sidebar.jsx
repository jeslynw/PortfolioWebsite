"use client";

import { sections } from "@/app/data/site";
import Icon from "./Icon";
import { scrollToId, useActiveSection } from "./nav";
import ScrollCup from "./ScrollCup";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  const active = useActiveSection(sections);

  return (
    <aside
      className="sticky top-0 z-30 flex h-screen flex-col gap-4 overflow-y-auto border-r border-side-line bg-side px-2 pb-3 pt-3.5 text-side-ink
                 max-[900px]:h-auto max-[900px]:flex-row max-[900px]:items-center max-[900px]:gap-2.5 max-[900px]:overflow-x-auto max-[900px]:overflow-y-hidden max-[900px]:border-b max-[900px]:border-r-0 max-[900px]:px-3 max-[900px]:py-2"
    >
      <div className="flex shrink-0 items-center gap-[9px] rounded-[5px] px-2 py-1.5">
        <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-[5px] bg-card text-[0.6875rem] font-bold text-sage-ink">
          JW
        </span>
        <span className="text-[0.8125rem] font-semibold max-[900px]:hidden">
          Jeslyn&rsquo;s Portfolio
        </span>
      </div>

      <nav
        className="flex flex-col gap-px max-[900px]:flex-row max-[900px]:gap-0.5"
        aria-label="Sections"
      >
        <p className="px-2 pb-1.5 pt-1 text-[0.6875rem] uppercase tracking-[0.06em] text-side-muted max-[900px]:hidden">
          Pages
        </p>

        {sections.map(({ id, label, short, icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => scrollToId(id)}
              aria-current={isActive}
              className={`flex items-center gap-2 whitespace-nowrap rounded-[5px] px-2 py-[5px] text-left text-[0.8125rem] transition-colors ${
                isActive
                  ? "bg-side-hover font-semibold text-side-ink"
                  : "text-side-muted hover:bg-side-hover hover:text-side-ink"
              }`}
            >
              <Icon name={icon} />
              <span className="max-[900px]:hidden">{label}</span>
              <span className="hidden max-[900px]:inline">{short}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-0.5 border-t border-side-line pt-2.5 max-[900px]:ml-auto max-[900px]:mt-0 max-[900px]:border-t-0 max-[900px]:pt-0">
        <ScrollCup />
        <ThemeToggle />
      </div>
    </aside>
  );
}
