"use client";

import { sections } from "@/app/data/site";
import { scrollToId, useActiveSection } from "./nav";
import { Mark } from "./ui";

/** The "Dashboard | Classes | Notes" link row Notion pages use as a menu. */
export default function InlineNav() {
  const active = useActiveSection(sections);

  return (
    <div className="mb-[26px] flex flex-wrap items-center gap-x-2.5 text-[0.8125rem]">
      {sections.map(({ id, short, mark }, i) => {
        const isActive = active === id;
        return (
          <span key={id} className="flex items-center gap-x-2.5">
            {i > 0 && (
              <span className="select-none text-line" aria-hidden="true">
                |
              </span>
            )}
            <button
              type="button"
              onClick={() => scrollToId(id)}
              aria-current={isActive}
              className={`inline-flex items-center gap-1.5 px-[3px] py-0.5 underline underline-offset-[3px] transition-colors ${
                isActive
                  ? "font-bold text-ink decoration-[var(--text)]"
                  : "text-sage-ink decoration-[var(--sage-200)] hover:decoration-[var(--sage-ink)]"
              }`}
            >
              {i === 0 && <Mark kind={mark} />}
              {short}
            </button>
          </span>
        );
      })}
    </div>
  );
}
