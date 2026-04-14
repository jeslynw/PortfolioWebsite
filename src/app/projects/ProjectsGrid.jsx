"use client"
import { motion } from "framer-motion"
import { projectList } from "@/app/data/projects"
import ProjectImageCarousel from "@/app/components/ProjectImageCarousel"

function ProjectCard({ project, index }) {
    return (
        <motion.div
            className="bg-white rounded-[20px] overflow-hidden grid grid-cols-1 md:grid-cols-[3fr_2fr]
                       shadow-[0_8px_32px_rgba(157,197,238,0.18)]
                       hover:shadow-[0_12px_40px_rgba(157,197,238,0.35)] transition-shadow duration-300"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
        >
            {/* LEFT: content */}
            <div className="p-7 sm:p-9 flex flex-col justify-between gap-6">
                <div>
                    {/* Header: number left, year + achievement right */}
                    <div className="flex items-start gap-4 mb-4">
                        {/* Number badge */}
                        <div className="w-10 h-10 shrink-0 rounded-full border-2 border-[#9dc5ee] flex items-center justify-center">
                            <span className="font-alegreya text-lg font-bold text-[#9dc5ee]">{project.number}</span>
                        </div>
                        {/* Meta stack */}
                        <div className="flex flex-col gap-1.5 pt-0.5">
                            <p className="font-noto text-xs text-gray-400 uppercase tracking-widest">
                                {project.year} &bull; {project.category}
                            </p>
                            {project.achievement && (
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                                                bg-amber-50 border border-amber-200 text-amber-600
                                                font-noto text-xs font-semibold w-fit">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.798 49.798 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clipRule="evenodd" />
                                    </svg>
                                    {project.achievement}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="font-alegreya text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                        {project.title}
                    </h2>

                    {/* Description — full text, no line-clamp */}
                    <p className="font-noto text-sm text-gray-500 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div>
                    {/* Skill tags */}
                    {project.skills[0] !== "" && (
                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 rounded-full text-xs font-noto bg-[#eaf3fc] text-[#6cb6ff] border border-[#9dc5ee]/30"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* CTA */}
                    {project.link ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                                       border border-[#9dc5ee] font-noto text-xs font-semibold uppercase
                                       tracking-widest text-[#6cb6ff] hover:bg-[#9dc5ee] hover:text-white
                                       transition-all duration-200"
                        >
                            View Full Project &rarr;
                        </a>
                    ) : (
                        <span className="font-noto text-xs font-semibold uppercase tracking-widest text-gray-300 select-none">
                            {/* Private / In Progress */}
                        </span>
                    )}
                </div>
            </div>

            {/* RIGHT: image gallery */}
            <div className="relative h-64 md:h-auto min-h-[220px] rounded-b-[20px] md:rounded-b-none md:rounded-r-[20px] overflow-hidden">
                <ProjectImageCarousel pics={project.pics} title={project.title} />
            </div>
        </motion.div>
    )
}

export default function ProjectsGrid() {
    return (
        <div className="flex flex-col gap-8 xl:px-14">
            {projectList.map((project, index) => (
                <ProjectCard key={project.number} project={project} index={index} />
            ))}
        </div>
    )
}
