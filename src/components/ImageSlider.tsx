"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/partner/algolia-logo.svg",
  "/partner/bloomreach-logo.svg",
  "/partner/fdx-logo.svg",
  "/partner/klaviyo-logo.svg",
  "/partner/makeswift-logo.svg",
  "/partner/paypal-logo.svg",
  "/partner/stripe-logo.svg",
];

const ImageSlider = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      data-testid="hover-slider"
      className="overflow-hidden w-full py-8 relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="w-full flex overflow-hidden relative">
        <motion.div
          className="flex space-x-6 min-w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: hover ? 30 : 50,
            repeat: Infinity,
          }}
        >
          {images.concat(images).map((src, index) => (
            <div
              key={index}
              className="w-52 h-32 flex-shrink-0 flex items-center justify-center bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-xl shadow-sm p-3 transition-all duration-300"
            >
              <Image
                src={src}
                alt={src}
                width={50}
                height={50}
                className="object-contain grayscale-[40%] hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ImageSlider;
