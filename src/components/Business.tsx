"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Business = () => {
  return (
    <section className="flex flex-col md:flex-row items-stretch justify-center px-6 md:px-12 mt-12 overflow-hidden">
      <div className="w-full md:w-1/2 flex">
        <Image
          src="/business.png"
          alt="Business Solutions"
          width={600}
          height={600}
          className="rounded-t-2xl md:rounded-bl-2xl md:rounded-tr-none object-cover w-full h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 flex">
        <div className="bg-amber-50 dark:bg-[#2a1e14] p-8 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none flex flex-col justify-center items-center md:items-start text-center md:text-left w-full shadow-lg dark:shadow-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-amber-100">SMALL BUSINESS</h2>
          <p className="mt-4 text-xl text-gray-700 dark:text-amber-200 leading-relaxed">
            Every small business should think big. <br />
            The right tools make the difference.
          </p>
          <Button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg sm:rounded-xl shadow-md hover:bg-blue-700 transition">
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Business;
