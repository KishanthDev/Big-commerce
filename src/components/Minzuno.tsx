import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Mizuno = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-12 mt-12 gap-12">
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <div className="mb-6">
          <Image
            src="/mizuno_logo.svg"
            alt="Mizuno Logo"
            width={150}
            height={50}
            className="dark:invert mx-auto md:mx-0"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Mizuno USA Goes Composable for Big Growth.
        </h1>

        <div className="mt-6 flex flex-col sm:flex-row gap-6 text-gray-700 dark:text-gray-300">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-2xl font-bold text-black dark:text-white">90%</span>
            <span className="text-sm">Decrease in time to complete checkout</span>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-2xl font-bold text-black dark:text-white">12%</span>
            <span className="text-sm">Increase in average order value</span>
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-semibold text-gray-800 dark:text-blue-300">
          SOLUTIONS
        </h2>

        <ul className="mt-4 space-y-3">
          {[
            { src: "/mira-commerce-logomark.svg", label: "Mira Commerce" },
            { src: "/deck-commerce-logomark.svg", label: "Deck Commerce" },
            { src: "/bolt-logomark.svg", label: "Bolt" },
          ].map(({ src, label }, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <Image
                src={src}
                alt={label}
                width={40}
                height={40}
                className="dark:invert rounded-md"
              />
              <span className="text-lg text-gray-800 dark:text-gray-200">{label}</span>
            </li>
          ))}
        </ul>

        <Button className="mt-6 px-6 py-5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          READ THEIR STORY
        </Button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/minzuno.png"
          alt="Mizuno transformation"
          width={550}
          height={550}
          className="rounded-2xl object-cover w-auto h-auto"
        />
      </div>
    </section>
  );
};

export default Mizuno;
