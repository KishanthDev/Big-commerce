"use client";

import { Button } from "@/components/ui/button";
import B2BSection from "@/components/B2BSection";
import B2CSection from "@/components/B2CSection";
import { useState } from "react";

export default function BusinessSolutions() {
  const [activeSection, setActiveSection] = useState<"B2B" | "B2C">("B2B");

  return (
    <section className="relative flex flex-col items-center text-center px-8 py-16 lg:px-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-3xl z-10">
        <h2 className="text-xl md:text-3xl font-bold leading-tight text-gray-900 dark:text-white">
          Because your unique business needs are <br />
          exactly that — yours.
        </h2>
        <p className="mt-6 text-xl text-gray-700 dark:text-gray-300">
          We offer powerful, flexible solutions for every need, no matter the complexity. <br />
          Simply put, we're built to scale. That means more growth for you.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Button
            variant="outline"
            className={`px-8 py-4 text-xl rounded-xl shadow-lg transition-colors ${
              activeSection === "B2B"
                ? "bg-gray-300 dark:bg-gray-800 text-black dark:text-white"
                : "bg-primary text-white"
            }`}
            onClick={() => setActiveSection("B2B")}
          >
            B2B
          </Button>
          <Button
            variant="outline"
            className={`px-8 py-4 text-xl rounded-xl shadow-lg transition-colors ${
              activeSection === "B2C"
                ? "bg-gray-300 dark:bg-gray-800 text-black dark:text-white"
                : "bg-primary text-white"
            }`}
            onClick={() => setActiveSection("B2C")}
          >
            B2C
          </Button>
        </div>
      </div>

      <div className="w-full mt-12 z-10">
        {activeSection === "B2B" && <B2BSection />}
        {activeSection === "B2C" && <B2CSection />}
      </div>
    </section>
  );
}
