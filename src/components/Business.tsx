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
          className="rounded-b-lg sm:rounded-bl-2xl object-cover w-full h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 flex">
        <div className="bg-amber-50 p-8 rounded-t-lg sm:rounded-tr-2xl flex flex-col justify-center items-center md:items-start text-center md:text-left w-full shadow-lg">
          <h2 className="text-3xl font-bold">SMALL BUSINESS</h2>
          <p className="mt-4 text-xl text-gray-700 leading-relaxed">
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
