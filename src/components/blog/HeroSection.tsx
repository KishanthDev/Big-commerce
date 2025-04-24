import React from "react";

function HeroSection() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-500/40 dark:from-blue-700/30 via-transparent to-transparent text-white p-6 md:p-16 lg:p-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <h1 className="text-3xl text-primary md:text-4xl font-bold mb-4">
                Insights and Tips for Sellers and Buyers
              </h1>
              <p className="text-lg text-primary opacity-90">
                Stay informed with the latest marketplace trends, selling
                strategies, and shopping guides to make the most of your
                MarketHub experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
