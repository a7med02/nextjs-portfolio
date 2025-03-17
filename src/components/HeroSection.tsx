"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlareCard } from "./ui/glare-card";
import Link from "next/link";
export default function HeroSection() {
    return (
        <div className="bg-gray-900  grid  md:grid-cols-2">
            <div className="">
                <GlareCard className="w-80">
                <Image
                    src="/img.jpg"
                    alt="Picture of the devloper"
                    width={500}
                    height={500}
                    />
                    </GlareCard>
            </div>
            <div className="border-4 w-full py-8">

                    <div className="text-4xl text-white font-bold text-center">
                        Hi, I'm <span className="text-indigo-500">Medex</span>
                    </div>
                    <div className="text-2xl text-white font-semibold text-center">
                        I'm a Full-Stack Developer
                    </div>
                    <div className="text-white text-center text-lg flex justify-center mt-20 gap-2.5 ">
                        
                        <button className="border-white border-2 text-2xl font-semibold rounded-3xl py-3">
                            <Link href="/contact">
                                 Contact Me 
                            </Link>
                        </button>
                        <button className="border-white border-2 text-2xl font-semibold rounded-3xl py-3">
                            <Link href="/projects">
                                View Projects 
                            </Link>
                        </button>
                    </div>
            </div>
        </div>
    );
}