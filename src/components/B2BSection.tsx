"use client";

import Image from "next/image";

export default function B2BSection() {
  return (
    <section className="flex flex-col mt-8 items-center text-center">
      <div className="flex flex-col md:flex-row justify-center items-start w-full gap-5">
        <div data-testid="b2b-card" className="flex flex-col items-center md:items-start text-left">
          <Image
            src="/b2bleft.png"
            alt="Built for B2B"
            width={600}
            height={600}
            className="mb-4 rounded-2xl"
          />
          <h2 className="text-3xl mt-11 font-bold text-gray-900 dark:text-white">
            Built for B2B
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            BigCommerce knows B2B. Our award-winning B2B Edition is designed specifically for the complexities of B2B ecommerce — with all the scalability, flexibility, and openness you need to transform your B2B business.
          </p>
        </div>

        <div data-testid="b2b-card" className="flex flex-col items-center md:items-start text-left">
          <Image
            src="/b2bmiddle.png"
            alt="Operational Excellence"
            width={600}
            height={600}
            className="mb-4 rounded-2xl"
          />
          <h3 className="text-3xl mt-6 font-bold text-gray-900 dark:text-white">
            Operational Excellence
          </h3>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Fully empower your sales reps with peak operational efficiency. Streamline quoting and invoicing. Localize experiences. Operate both B2B and B2C channels from one platform. All while lowering both costs and risks (seriously).
          </p>
        </div>

        <div data-testid="b2b-card" className="flex flex-col items-center md:items-start text-left">
          <Image
            src="/b2bright.png"
            alt="Better Buyer Experience"
            width={600}
            height={600}
            className="mb-4 rounded-2xl"
          />
          <h3 className="text-3xl mt-8 font-bold text-gray-900 dark:text-white">
            The Better Buyer Experience
          </h3>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Modernize every moment with our open-sourced, fully customizable Buyer Portal — designed to deliver seamless shopping experiences for B2B buyers with advanced native functionality and leading partner integrations.
          </p>
        </div>
      </div>
    </section>
  );
}
