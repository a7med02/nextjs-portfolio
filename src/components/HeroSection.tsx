"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlareCard } from "./ui/glare-card";
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";
export default function HeroSection() {
    const words = ["full-stack devloper", "front-end devloper", "back-end devloper", "software engineer student"];
    return (
        <div className="bg-gray-900  grid  md:grid-cols-2">
            
            <div className="border-4 w-full py-8">

                    <div className="text-4xl text-white font-bold text-center">
                        Hi, I'm <span className="text-indigo-500">Medex</span>
                    </div>
                    <div className="text-2xl text-white font-semibold text-center mt-20 ">
                        I'm a  <FlipWords words={words}/> 
                    </div>
                    <div className="text-white text-center text-lg flex justify-center mt-20 gap-4 md:gap-20 ">
                        
                        <button className="border-white border-2 text-2xl font-semibold rounded-3xl py-3 hover:bg-indigo-500">
                            <Link href="/contact">
                                 Contact Me 
                            </Link>
                        </button>
                        <button className="border-white border-2 text-2xl font-semibold rounded-3xl py-3 hover:bg-indigo-500">
                            <Link href="/projects">
                                View Projects 
                            </Link>
                        </button>
                    </div>
            </div>
            <div className="flex justify-center items-center">
                <GlareCard className="">
                <Image
                    className=""
                    src="/img.jpg"
                    alt="Picture of the devloper"
                    width={600}
                    height={600}
                    />
                    </GlareCard>
            </div>
        </div>
    );
}