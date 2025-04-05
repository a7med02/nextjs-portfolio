"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { GlareCard } from "./ui/glare-card";

const content = [
  {
    title: "👋 Who am I",
    description:
      "I'm Ahmed Bourghiba, a Software Engineering student with a passion for full-stack web development. I love building web applications that are scalable and efficient.",
    content: (
        <GlareCard >

        <Image src="/pr1.jpg" width={300} height={300} className="h-full w-full object-cover" alt="devloper image" />
        </GlareCard>
    ),
  },
  {
    title: "💻 What technologies am  work with",
    description:
      "I specialize in Django, React.js, TailwindCSS, PostgreSQL, and Docker. I also enjoy working with WebSockets and authentication systems like JWT & OAuth (42 API).",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <GlareCard >

        <Image
          src="/img.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
          />
          </GlareCard>
      </div>
    ),
  },
  {
    title: "🎯 What am currently working on?",
    description:
      "Right now, I’m developing ft_transcendence, a multiplayer ping-pong web app, where I’m responsible for the landing page, signup, and authentication.",
    content: (
        <GlareCard >
      <Image src="/pr3.jpg" width={300} height={300} className="h-full w-full object-cover" alt="devloper image" />
        </GlareCard>
    ),
  },
  {
    title: "🚀 What am looking for?",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
        <GlareCard >

        <Image src="/img.jpg" width={300} height={300} className="h-full w-full object-cover" alt="devloper image" />
        </GlareCard>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full h-screen py-4 flex flex-col justify-around">
        <h2 className="text-5xl font-bold mb-6 self-center text-indigo-500">About <b className="text-white"> Me </b> </h2>
      <StickyScroll content={content} />
    </div>
  );
}

export default StickyScrollRevealDemo;