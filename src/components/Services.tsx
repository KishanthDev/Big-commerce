import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section className="flex flex-col md:flex-row items-stretch justify-center px-6 md:px-12 mt-12">
      <div className="w-full md:w-1/2 flex">
        <div className="bg-blue-50 dark:bg-[#0d1b2a] p-8 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none flex flex-col justify-center items-center md:items-start text-center md:text-left w-full shadow-md dark:shadow-none">
          <p className="font-bold text-sm text-blue-800 dark:text-blue-300">SERVICES</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            Our experts at your service.
          </h2>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Our team of ecommerce experts are rigorously trained and passionate 
            about your success, offering end-to-end services from migration and 
            launch to growth and expansion.
          </p>
          <Button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            VIEW ALL SERVICES
          </Button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex">
        <Image
          src="/services.png"
          alt="Our expert ecommerce services visual"
          width={600}
          height={600}
          className="rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none object-cover w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Services;
