"use client";

import { useEffect } from "react";
import { Mark } from "./ui";

export default function ThemeToggle() {
  useEffect(() => {
    try {
      const saved = localStorage.getItem("jw-theme");
      if (saved) document.documentElement.setAttribute("data-theme", saved);
    } catch (e) {}
  }, []);
  function toggle() {
    const root = document.documentElement;
    const current =
      root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("jw-theme", next);
    } catch (e) {
      /* private browsing — the choice just won't persist */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex items-center gap-[9px] whitespace-nowrap rounded-[5px] px-2 py-[5px] text-left text-[0.875rem] text-side-muted transition-colors hover:bg-side-hover hover:text-side-ink"
    >
      <Mark kind="petal" />
      <span className="label-to-dark">Dark mode</span>
      <span className="label-to-light">Light mode</span>
    </button>
  );
}
