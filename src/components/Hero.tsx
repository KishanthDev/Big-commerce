"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-8 py-16 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-2xl text-center md:text-left z-10">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          It's your future.<br/> Shape it on
          <span className="text-blue-600"> your <br/>terms.</span>
        </h1>
        <p className="mt-6 text-xl text-black">
          Think big — and grow bigger — with our flexible, professional-grade ecommerce platform.
        </p>
        <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <Button className="px-8 py-6 text-xl text-white bg-blue-600 rounded-xl shadow-lg">
            Explore Platform
          </Button>
          <Button variant="outline" className="px-8 py-6 text-xl border-primary text-primary rounded-xl">
            Get Started
          </Button>
        </div>
      </div>

      <div className="relative mt-12 md:mt-0">
        <Image src="/cube.png" alt="Cube" width={900} height={900} />
      </div>
    </section>
  );
}
