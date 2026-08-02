"use client";

import { useEffect, useState } from "react";

export default function TopBar() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-20 flex items-center gap-2.5 border-b px-4 py-[11px] text-[0.8125rem] text-muted backdrop-blur-md transition-colors ${
        stuck ? "border-line" : "border-transparent"
      }`}
      style={{ background: "color-mix(in srgb, var(--page) 88%, transparent)" }}
    >
      <span className="text-ink">Jeslyn Wangsa</span>
      <span className="text-faint">/</span>
      <span>Portfolio</span>
      <span className="rounded-[4px] border border-line px-[7px] py-px text-[0.6875rem]">
        Public
      </span>
      <span className="ml-auto text-[0.6875rem] text-faint">Updated 2026</span>
    </div>
  );
}
