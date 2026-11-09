"use client";

import { useEffect, useRef } from "react";

/**
 * Reading progress, as a cup of matcha filling up. Writes to the DOM through a
 * ref rather than state so scrolling never triggers a React render.
 */
export default function ScrollCup() {
  const fillRef = useRef(null);
  const pctRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (fillRef.current) fillRef.current.style.height = `${pct * 100}%`;
      if (pctRef.current) pctRef.current.textContent = `${Math.round(pct * 100)}%`;
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="flex items-center gap-3 px-2 py-1.5 max-[900px]:hidden" aria-hidden="true">
      <div className="cup-wrap">
        <div className="steam">
          <i />
          <i />
          <i />
        </div>
        <div className="cup">
          <div ref={fillRef} className="cup-fill" />
        </div>
        <span className="cup-handle" />
      </div>

      <span className="text-[0.75rem] text-side-muted">
        read <span ref={pctRef} className="tnum">0%</span>
      </span>
    </div>
  );
}
