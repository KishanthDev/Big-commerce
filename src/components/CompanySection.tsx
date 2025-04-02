import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

const YourCompanySection = () => {
  return (
    <section className="text-center px-8 py-16">
      <h2 className="text-4xl font-medium text-gray-900">
        Your company is in some seriously great company.
      </h2>
      <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
        Stack your tech — with total freedom to integrate your preferred partners.
      </p>
      <div className="flex justify-center">
        <Button variant="default" className="mt-6 px-32 py-6 text-white font-semibold rounded-lg sm:rounded-xl shadow-md transition flex items-center gap-2">
          VIEW ALL PARTNERS <FaArrowRight />
        </Button>
      </div>
    </section>
  );
};

export default YourCompanySection;
