"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { GlareCard } from "./ui/glare-card";

const content = [
  {
    title: "👋 Who am I",
    description:
      "I'm Ahmed Bouregba, a Software Engineering student with a passion for full-stack web development. I love building web applications that are scalable and efficient.",
    content: (
        <GlareCard >

        <Image src="/pr1.jpg" width={300} height={300} className="h-full w-full object-cover" alt="devloper image" />
        </GlareCard>
    ),
  },
  {
    title: "📚 What's your background?",
    description:
      "I’m currently studying at 1337 School, where I’ve developed strong foundations in software engineering, problem solving, and teamwork. My learning journey includes both low-level systems (like C++) and high-level web technologies.",
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
    title: "🛠️ What technologies do you use?",
    description:
      "On the frontend, I work with React, Next.js, TailwindCSS, and TypeScript. For the backend, I use Django, Node.js, and PostgreSQL, with Docker for containerization and WebSockets for real-time features",
    content: (
        <GlareCard >
      <Image src="/pr3.jpg" width={300} height={300} className="h-full w-full object-cover" alt="devloper image" />
        </GlareCard>
    ),
  },
  {
    title: "🚀 What have you built?",
    description:
    "What have you built?\n" +
    "I’ve built projects like:\n\n" +
    "- Real-time chat apps using WebSockets\n" +
    "- Full authentication systems with JWT\n" +
    "- Dockerized full-stack apps with Nginx and HTTPS\n" +
    "- Custom UI/UX pages with responsive design",
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