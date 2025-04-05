import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

// [url(/bg.jpg)] 

export default function Home() {
  return (
    <main className=" bg-black md:px-16 h-full bg-cover bg-repeat ">
        <Navbar />
      <div className="flex flex-col justify-center items-center " >
        <HeroSection />
        <About />
        <Projects />
        {/* <div className=""> */}
        <Skills />
        <Skills /> 
        <Skills /> 
        {/* </div> */}
      </div>
    </main>
  );
}
  