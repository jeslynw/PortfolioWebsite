import Link from "next/link";
import Icon from "@/app/components/Icon";
import ThemeToggle from "@/app/components/ThemeToggle";
import ProjectsGrid from "./ProjectsGrid";
import { projectList } from "@/app/data/projects";

export const metadata = {
  title: "Project Database | Jeslyn Wangsa",
  description: "Project database by Jeslyn Wangsa — AI, web apps, and hackathons.",
};

export default function ProjectsPage() {
  return (
    <div className="grid min-h-screen grid-cols-[244px_minmax(0,1fr)] items-start max-[900px]:grid-cols-1">
      <aside
        className="sticky top-0 z-30 flex h-screen flex-col gap-4 overflow-y-auto border-r border-side-line bg-side px-2 pb-3 pt-3.5 text-side-ink
                   max-[900px]:h-auto max-[900px]:flex-row max-[900px]:items-center max-[900px]:gap-2.5 max-[900px]:overflow-x-auto max-[900px]:overflow-y-hidden max-[900px]:border-b max-[900px]:border-r-0 max-[900px]:px-3 max-[900px]:py-2"
      >
        <div className="flex shrink-0 items-center gap-[9px] rounded-[5px] px-2 py-1.5">
          <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-[5px] bg-card text-[0.6875rem] font-bold text-sage-ink">
            JW
          </span>
          <span className="text-[0.8125rem] font-semibold max-[900px]:hidden">
            Jeslyn&rsquo;s Portfolio
          </span>
        </div>

        <nav className="flex flex-col gap-px" aria-label="Pages">
          <p className="px-2 pb-1.5 pt-1 text-[0.6875rem] uppercase tracking-[0.06em] text-side-muted max-[900px]:hidden">
            Pages
          </p>
          <Link
            href="/"
            className="flex items-center gap-2 whitespace-nowrap rounded-[5px] px-2 py-[5px] text-[0.8125rem] text-side-muted no-underline transition-colors hover:bg-side-hover hover:text-side-ink"
          >
            <Icon name="overview" />
            Portfolio
          </Link>
          <span className="flex items-center gap-2 whitespace-nowrap rounded-[5px] bg-side-hover px-2 py-[5px] text-[0.8125rem] font-semibold text-side-ink">
            <Icon name="projects" />
            Project Database
          </span>
        </nav>

        <div className="mt-auto flex flex-col gap-0.5 border-t border-side-line pt-2.5 max-[900px]:ml-auto max-[900px]:mt-0 max-[900px]:border-t-0 max-[900px]:pt-0">
          <ThemeToggle />
        </div>
      </aside>

      <div className="paper min-h-screen shadow-paper max-[900px]:shadow-none">
        <div className="sticky top-0 z-20 flex items-center gap-2.5 border-b border-line px-4 py-[11px] text-[0.8125rem] text-muted backdrop-blur-md">
          <Link href="/" className="text-ink no-underline hover:underline hover:underline-offset-[3px]">
            Jeslyn Wangsa
          </Link>
          <span className="text-faint">/</span>
          <span>Project Database</span>
          <span className="ml-auto text-[0.6875rem] text-faint tnum">
            {projectList.length} entries
          </span>
        </div>

        <div className="h-[clamp(96px,14vh,132px)] bg-[radial-gradient(120%_140%_at_15%_0%,var(--sakura-200),transparent_55%),linear-gradient(105deg,#6E8159_0%,var(--sage)_55%,var(--sage-mid)_100%)]" />

        <div className="mx-auto max-w-wide px-[22px] pb-24">
          <div className="relative -mt-[30px] mb-3 grid h-[58px] w-[58px] place-items-center rounded-[10px] border-[3px] border-page bg-sage-100 shadow-soft">
            <span className="leaf" aria-hidden="true" />
          </div>

          <h1 className="mb-2.5 font-hand text-[clamp(1.75rem,5vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
            Project Database
          </h1>
          <p className="mb-8 font-hand text-[1.0625rem] italic text-muted">
            The long version &mdash; every screen, every write-up.
          </p>

          <ProjectsGrid />

          <div className="mt-12 border-t border-line pt-[18px]">
            <Link
              href="/"
              className="text-[0.8125rem] text-sage-ink no-underline hover:underline hover:underline-offset-[3px]"
            >
              &larr; Back to the portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
