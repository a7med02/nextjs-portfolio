"use client";

import Image from "next/image";
import { GlareCard } from "./ui/glare-card";
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";
import {  Globe } from "lucide-react";
import { motion } from "framer-motion";
export default function HeroSection() {
    const words = ["full-stack devloper", "front-end devloper", "back-end devloper", "software engineer student"];
    return (<div className="bg-gray-900 m-4 grid md:grid-cols-2 rounded-4xl ">
            
            <div className="border-4 w-full py-8">

                    <div className="text-4xl text-white font-bold text-center">
                        Hi, I'm <span className="text-indigo-500">Medex</span>
                    </div>
                    <div className="text-2xl text-white font-semibold text-center mt-20 ">
                        I'm a  <FlipWords words={words}/> 
                    </div>
                    <div className="text-center flex flex-col sm:flex-row justify-center items-center gap-6 mt-20 mb-10 px-4">
  {/* Contact Me Button - Scrolls to contact section */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="relative group border-2 border-indigo-400 dark:border-indigo-600 text-white text-xl md:text-2xl font-semibold rounded-full px-6 py-3 hover:bg-indigo-600/20 transition-all duration-300 w-full sm:w-auto max-w-xs"
  >
    <span className="relative z-10 flex items-center justify-center gap-2">
      Contact Me
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 group-hover:translate-y-1 transition-transform"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    <span className="absolute inset-0 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
  </motion.button>

  {/* View Projects Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="relative group border-2 border-indigo-400 dark:border-indigo-600 text-white text-xl md:text-2xl font-semibold rounded-full px-6 py-3 hover:bg-indigo-600/20 transition-all duration-300 w-full sm:w-auto max-w-xs"
  >
    <span className="relative z-10 flex items-center justify-center gap-2">
      View Projects
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 group-hover:translate-y-1 transition-transform"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    <span className="absolute inset-0 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
  </motion.button>
</div>
            </div>
            <div className="flex justify-center items-center relative">
                <GlareCard className="">
                <Image
                    className=""
                    src="/img.jpg"
                    alt="Picture of the devloper"
                    width={600}
                    height={600}
                    />
                    </GlareCard>
                    <div className="absolute top-1/4 left-0 w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center p-2 shadow-2xl">
                        <Globe size={24} className="text-white"/>
                    </div>
            </div>
        </div>
    );
}