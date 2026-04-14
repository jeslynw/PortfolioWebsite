"use client"
import { useState } from "react"
import Image from "next/image"

export default function ProjectImageCarousel({ pics, title }) {
    const [current, setCurrent] = useState(0)
    const total = pics.length
    const hasMultiple = total > 1

    const prev = (e) => {
        e.stopPropagation()
        setCurrent((i) => (i - 1 + total) % total)
    }
    const next = (e) => {
        e.stopPropagation()
        setCurrent((i) => (i + 1) % total)
    }

    return (
        <div className="relative h-full w-full min-h-[220px] bg-[#f5f0ff] flex flex-col">
            {/* Image */}
            <div className="relative flex-1 min-h-[180px]">
                <Image
                    src={pics[current]}
                    alt={`${title} – image ${current + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain p-3"
                />
            </div>

            {/* Controls — only shown when multiple images */}
            {hasMultiple && (
                <>
                    {/* Prev button */}
                    <button
                        onClick={prev}
                        aria-label="Previous image"
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                                   w-7 h-7 rounded-full bg-white/80 hover:bg-white shadow
                                   flex items-center justify-center transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#9dc5ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Next button */}
                    <button
                        onClick={next}
                        aria-label="Next image"
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                                   w-7 h-7 rounded-full bg-white/80 hover:bg-white shadow
                                   flex items-center justify-center transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#9dc5ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-1.5 py-2">
                        {pics.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                                aria-label={`Go to image ${i + 1}`}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                    i === current ? "bg-[#9dc5ee]" : "bg-[#9dc5ee]/30"
                                }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
