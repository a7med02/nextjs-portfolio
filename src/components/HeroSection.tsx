"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GlareCard } from "./ui/glare-card";
export default function HeroSection() {
    return (
        <div className="bg-gray-900 h-96 flex gap-3.5">
            <div className="border-4 w-full py-8">

                    <div className="text-4xl text-white font-bold text-center">
                        Hi, I'm <span className="text-indigo-500">Medex</span>
                    </div>
                    <div className="text-2xl text-white font-semibold text-center">
                        I'm a Full-Stack Developer
                    </div>
            </div>
            {/* <div className="border-4 w-full"> */}
                <GlareCard className="w-80 ">
                <Image
                    src="/img.jpg"
                    alt="Picture of the devloper"
                    width={500}
                    height={500}
                    />
                    </GlareCard>
            {/* </div> */}
        </div>
    );
}