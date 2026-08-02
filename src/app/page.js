import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Cover from "./components/Cover";
import About from "./components/About";
import Currently from "./components/Currently";
import Education from "./components/Education";
import Toolkit from "./components/Toolkit";
import Projects from "./components/Projects";
// import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Petals from "./components/Petals";
import { Rule } from "./components/ui";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-cols-[244px_minmax(0,1fr)] items-start max-[900px]:grid-cols-1">
      <Sidebar />

      <div className="paper min-h-screen shadow-paper max-[900px]:shadow-none">
        <TopBar />

        {/* The Notion cover banner. The page icon below overlaps its lower edge. */}
        <div className="relative h-[clamp(120px,20vh,176px)] overflow-hidden bg-[radial-gradient(120%_140%_at_15%_0%,var(--sakura-200),transparent_55%),linear-gradient(105deg,#6E8159_0%,var(--sage)_55%,var(--sage-mid)_100%)]">
          <Petals />
        </div>

        <div className="mx-auto max-w-[1000px] px-[42px]">
          <Cover />
          <Rule />
          <About />
          <Rule />
          <Currently />
          <Rule />
          <Education />
          <Rule />
          <Toolkit />
          <Rule />
          <Projects />
          {/* <Rule />
          <Writing /> */}
          <Rule />
          <Contact />
        </div>
      </div>
    </div>
  );
}
