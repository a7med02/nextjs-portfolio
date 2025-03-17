import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {LampContainer} from "@/components/ui/lamp";
export default function Home() {
  return (
    <main className="px-16 font-sans bg-[url(/bg.jpg)] h-screen bg-cover ">
     
      <Navbar />
      <HeroSection />
    </main>
  );
}
  