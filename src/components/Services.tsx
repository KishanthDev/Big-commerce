import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section className="flex flex-col md:flex-row items-stretch justify-center px-6 md:px-12 mt-12">
      {/* Content on Left */}
      <div className="w-full md:w-1/2 flex">
        <div className="bg-blue-50 p-8 rounded-l-2xl flex flex-col justify-center items-center md:items-start text-center md:text-left w-full">
          <h2 className="text-3xl font-bold">SERVICES</h2>
          <p className="mt-4 text-xl text-gray-700 leading-relaxed">
            Our experts at your service. <br />
            Our team of ecommerce experts are rigorously trained and passionate 
            about your success, offering end-to-end services from migration and 
            launch to growth and expansion.
          </p>
          <Button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition">
            VIEW ALL SERVICES
          </Button>
        </div>
      </div>

      {/* Image on Right */}
      <div className="w-full md:w-1/2 flex">
        <Image
          src="/services.png" 
          alt="Services"
          width={600}
          height={600}
          className="rounded-r-2xl object-cover w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Services;
