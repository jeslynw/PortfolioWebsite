import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import ProjectsGrid from "./ProjectsGrid"
import Link from "next/link"

export const metadata = {
    title: "Projects | Jeslyn Wangsa",
    description: "All projects by Jeslyn Wangsa — AI, web apps, and hackathons.",
}

export default function ProjectsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#ffd6e4] overflow-hidden">
            <Navbar />
            <div className="container mt-24 mx-auto px-14 py-4">
                <div className="pt-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-noto text-lg text-white hover:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                        </svg> Back to Home
                    </Link>
                </div>

                <h1 className="text-white text-5xl sm:text-5xl 2xl:text-6xl font-alegreya pt-10 pb-14">
                    All Projects
                </h1>

                <ProjectsGrid />

                <div className="mb-20" />
            </div>
            <Footer />
        </main>
    )
}
