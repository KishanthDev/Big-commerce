"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import ImageSlider from "./ImageSlider";

const YourCompanySection = () => {
  return (
    <section className="mt-10 text-center px-8 py-16 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <h2 className="text-4xl font-medium text-gray-900 dark:text-white">
        Your company is in some seriously great company.
      </h2>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
        Stack your tech — with total freedom to integrate your preferred partners.
      </p>

      <div className="flex justify-center">
        <Button
          variant="default"
          className="mt-6 px-32 py-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg sm:rounded-xl shadow-md transition flex items-center gap-2"
        >
          VIEW ALL PARTNERS <FaArrowRight />
        </Button>
      </div>

      <ImageSlider />
    </section>
  );
};

export default YourCompanySection;
