"use client";

import { sections } from "@/app/data/site";
import Icon from "./Icon";
import { scrollToId, useActiveSection } from "./nav";
import ScrollCup from "./ScrollCup";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  const active = useActiveSection(sections);

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="sticky top-0 z-30 flex h-screen flex-col gap-4 overflow-y-auto border-r border-side-line bg-side px-2 pb-3 pt-3.5 text-side-ink
                   max-[900px]:hidden"
      >
        <div className="flex shrink-0 items-center gap-[9px] rounded-[5px] px-2 py-1.5">
          <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-[5px] bg-card text-[0.75rem] font-bold text-sage-ink">
            JW
          </span>
          <span className="text-[0.875rem] font-semibold">
            Jeslyn&rsquo;s Portfolio
          </span>
        </div>

        <nav className="flex flex-col gap-px" aria-label="Sections">
          <p className="px-2 pb-1.5 pt-1 text-[0.75rem] uppercase tracking-[0.06em] text-side-muted">
            Pages
          </p>

          {sections.map(({ id, label, icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollToId(id)}
                aria-current={isActive}
                className={`flex items-center gap-2 whitespace-nowrap rounded-[5px] px-2 py-[5px] text-left text-[0.875rem] transition-colors ${
                  isActive
                    ? "bg-side-hover font-semibold text-side-ink"
                    : "text-side-muted hover:bg-side-hover hover:text-side-ink"
                }`}
              >
                <Icon name={icon} />
                {label}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-0.5 border-t border-side-line pt-2.5">
          <ScrollCup />
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile bottom tab bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 hidden border-t border-side-line bg-side/95 backdrop-blur-md max-[900px]:block"
        aria-label="Sections"
      >
        <div className="mx-auto flex max-w-md items-center justify-around px-1 py-1.5">
          {sections.map(({ id, short, icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollToId(id)}
                aria-current={isActive}
                className={`flex flex-col items-center gap-0.5 rounded-lg px-1.5 py-1 transition-colors ${
                  isActive ? "text-sage-ink" : "text-side-muted"
                }`}
              >
                <Icon name={icon} className="!h-[20px] !w-[20px]" />
                <span className="text-[0.625rem] leading-none">{short}</span>
                {isActive && (
                  <span className="mt-0.5 h-[3px] w-[3px] rounded-full bg-sage-ink" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
