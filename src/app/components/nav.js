"use client";

import { useEffect, useState } from "react";

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}

/**
 * Which section is currently in view. Pass a stable array (a module-level
 * constant) so the listener isn't torn down on every render.
 */
export function useActiveSection(sections) {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    function onScroll() {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40;
      if (atBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      const mark = window.innerHeight * 0.3;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= mark) current = id;
      }
      setActive(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  return active;
}
