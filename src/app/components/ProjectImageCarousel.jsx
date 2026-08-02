"use client";

import { useState } from "react";
import Image from "next/image";

function Arrow({ dir }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-sage-ink"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={dir === "prev" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  );
}

/**
 * `variant="card"` fills a fixed aspect box (gallery cards) with the controls
 * floating over the image. `variant="full"` letterboxes the whole screenshot
 * with the dots below it (the /projects detail page).
 */
export default function ProjectImageCarousel({ pics, title, variant = "full" }) {
  const [current, setCurrent] = useState(0);
  const total = pics.length;
  const hasMultiple = total > 1;
  const card = variant === "card";

  const go = (delta) => (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrent((i) => (i + delta + total) % total);
  };

  return (
    <div
      className={`relative flex h-full w-full flex-col bg-sage-50 ${
        card ? "" : "min-h-[220px]"
      }`}
    >
      <div className={`relative flex-1 ${card ? "" : "min-h-[180px]"}`}>
        <Image
          src={pics[current]}
          alt={`${title} — image ${current + 1} of ${total}`}
          fill
          sizes={card ? "(max-width: 900px) 100vw, 340px" : "(max-width: 860px) 100vw, 320px"}
          className={card ? "object-cover" : "object-contain p-3"}
        />
      </div>

      {hasMultiple && (
        <>
          <button
            onClick={go(-1)}
            aria-label="Previous image"
            className={`absolute left-2 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card/85 shadow-soft transition-[background-color,opacity] hover:bg-card ${
              card ? "h-7 w-7 opacity-0 focus-visible:opacity-100 group-hover/card:opacity-100" : "h-7 w-7"
            }`}
          >
            <Arrow dir="prev" />
          </button>

          <button
            onClick={go(1)}
            aria-label="Next image"
            className={`absolute right-2 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card/85 shadow-soft transition-[background-color,opacity] hover:bg-card ${
              card ? "h-7 w-7 opacity-0 focus-visible:opacity-100 group-hover/card:opacity-100" : "h-7 w-7"
            }`}
          >
            <Arrow dir="next" />
          </button>

          <div
            className={
              card
                ? "absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full border border-line bg-card/85 px-2 py-1"
                : "flex justify-center gap-1.5 py-2"
            }
          >
            {pics.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setCurrent(i);
                }}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === current}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === current ? "bg-sage-ink" : "bg-sage-200"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
