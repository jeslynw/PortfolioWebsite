"use client";

import { useEffect, useRef } from "react";

/**
 * Sakura petals drifting down the cover banner. Canvas rather than DOM nodes so
 * it stays cheap, and it never starts at all under reduced-motion.
 */
export default function Petals() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const petals = [];
    let w = 0;
    let h = 0;
    let raf;

    function resize() {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!petals.length && w > 0) {
        const count = w < 520 ? 10 : 18;
        for (let i = 0; i < count; i++) {
          petals.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: 3 + Math.random() * 4,
            fall: 0.15 + Math.random() * 0.3,
            spin: Math.random() * Math.PI * 2,
            sway: 0.4 + Math.random() * 0.5,
          });
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255, 255, 255, 0.34)";

      for (const p of petals) {
        p.y += p.fall;
        p.spin += 0.01;
        p.x += Math.sin(p.spin) * p.sway;

        if (p.y - p.r > h) {
          p.y = -p.r;
          p.x = Math.random() * w;
        }
        if (p.x > w + 10) p.x = -10;
        else if (p.x < -10) p.x = w + 10;

        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.r, p.r * 0.66, p.spin, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 block h-full w-full" aria-hidden="true" />;
}
