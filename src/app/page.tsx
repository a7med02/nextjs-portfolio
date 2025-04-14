'use client'

import { useRef } from 'react'
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { SectionRefs } from '@/types' // Import from types file

export default function Home() {
  const homeRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  
  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    skills: skillsRef,
    contact: contactRef
  } as SectionRefs
  
  return (
    <main className="bg-black md:px-16 h-full bg-cover bg-repeat">
      <Navbar sectionRefs={sectionRefs} />
      
    
      <div className="flex flex-col justify-center items-center pt-16">
        <section
          id="home"
          ref={homeRef}
          className="w-full min-h-screen"
        >
          <HeroSection />
        </section>
        
        <section
          id="about"
          ref={aboutRef}
          className="w-full min-h-screen py-20"
        >
          <About />
        </section>
        
        <section
          id="projects"
          ref={projectsRef}
          className="w-full min-h-screen py-20"
        >
          <Projects />
        </section>
        
        <section
          id="skills"
          ref={skillsRef}
          className="w-full min-h-screen py-20"
        >
          <Skills />
          <Skills />
          <Skills />
        </section>
        
        <section
          id="contact"
          ref={contactRef}
          className="w-full min-h-screen py-20"
        >
          {/* Add your Contact component here */}
        </section>
      </div>
    </main>
  );
}