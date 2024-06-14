import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import CloudDecoration from "./components/CloudDecoration";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <main className="flex min-h-screen flex-col bg-[#ffd6e4] overflow-hidden">
          <Navbar />
          <div className="container mt-24 mx-auto px-7 py-4">
            <HeroSection />
            <CloudDecoration />
            <AboutMe />
            <Skills />
            <Projects />
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
