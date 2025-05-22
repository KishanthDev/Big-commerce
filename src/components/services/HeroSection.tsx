import { Button } from "@heroui/button";
import React from "react";

interface HeadingProps {
  title: string;
  description: string;
}

const HeroSection: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <section
      data-testid="hero-section"
      className="h-[400px] md:h-[400px] bg-cover bg-center relative flex flex-col justify-center items-center text-white text-center p-4 dark:text-gray-200"
    >
      <div
        data-testid="hero-overlay"
        className="dark:bg-gray-900 bg-gray-400 bg-opacity-50 absolute inset-0 z-0"
      />
      <div data-testid="hero-content" className="relative z-10 max-w-4xl px-4">
        <h1 className="text-3xl text-primary sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4">
          {title || "Welcome to Our Auto Repair Shop"}
        </h1>
        <p className="text-base text-primary sm:text-lg md:text-xl max-w-[800px]">
          {description ||
            "We provide top-notch auto repair services to keep your vehicle running smoothly. Our experienced technicians are here to help you with all your automotive needs."}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-4 md:mt-6 gap-2">
          <span className="text-yellow-400 text-2xl mr-2">★★★★★</span>
          <span className="text-primary">4.8/5 based on 127 reviews</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          <Button className="bg-red-600 rounded-2xl text-white w-full sm:w-auto">
            Schedule Service
          </Button>
          <Button className="bg-white rounded-2xl text-[#333] dark:bg-gray-100 dark:text-black w-full sm:w-auto">
            Request Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
