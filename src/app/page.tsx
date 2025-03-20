import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";

// [url(/bg.jpg)] 

export default function Home() {
  return (
    <main className="bg-black md:px-16 h-full bg-cover bg-no-repeat ">
      <div>
        <Navbar />
        <HeroSection />
        <About />
        <Projects />
        <div className="flex justify-center gap-7">
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        </div>
      </div>
    </main>
  );
}
  