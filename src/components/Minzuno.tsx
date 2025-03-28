import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Mizuno = () => {
  return (
    <section className="flex flex-col md:flex-row items-stretch justify-center px-6 md:px-12 mt-12">
      {/* Content on Left */}
      <div className="w-full md:w-1/2 flex">
        <div className="p-8 rounded-l-2xl flex flex-col justify-center items-center md:items-start text-center md:text-left w-full">
          {/* Mizuno Logo */}
          <div className="mb-4">
            <Image src="/mizuno_logo.svg" alt="Mizuno Logo" width={150} height={50} />
          </div>

          <h2 className="text-3xl font-bold">Mizuno USA</h2>
          <p className="mt-4 text-xl text-gray-700 leading-relaxed">
            Goes composable for big growth.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            <span className="font-bold">↓</span> Decrease in time to complete checkout
          </p>
          <h3 className="mt-6 text-2xl font-semibold">SOLUTIONS</h3>
          <ul className="mt-2 text-lg text-gray-700">
            <li>Mira Commerce</li>
            <li>(Z) Deck Commerce</li>
            <li>Bolt</li>
          </ul>
          <p className="mt-2 text-lg text-gray-600">
            <span className="font-bold">↑</span> Increase in average order value (AOV)
          </p>
          <Button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition">
            READ THEIR STORY
          </Button>
        </div>
      </div>

      {/* Image on Right */}
      <div className="w-full md:w-1/2 flex">
        <Image
          src="/minzuno.png"
          alt="Mizuno Growth"
          width={600}
          height={600}
          className="rounded-r-2xl object-cover w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Mizuno;
