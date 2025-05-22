"use client";
import React from "react";
import Image from "next/image";

const StatsSection = () => {
  const stats = [
    { value: "211%", text: "Return on investment in less than eight months" },
    { img: "/stat1.png", text: "Enterprise Winter 2024" },
    { value: "4.8%", text: "900+ developer time savings per year" },
    { img: "/stat2.png", text: "Top Rated 2024" },
    { value: "9.85%", text: "300% increase in site conversion by year three" },
    { img: "/stat3.png", text: "130+ leading payment providers" },
  ];

  return (
    <section
      data-testid="stats-section"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-12 bg-white/0 dark:bg-gray-950/80 rounded-xl transition-colors"
    >
      {stats.map((item, index) => (
        <div
          data-testid="stat-card"
          key={index}
          className="flex flex-col items-center text-center border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900 transition-colors"
        >
          {item.img ? (
            <Image
              src={item.img}
              alt={item.text}
              width={80}
              height={80}
              className="mb-4"
            />
          ) : (
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {item.value}
            </h2>
          )}
          <p className="mt-2 text-lg text-gray-800 dark:text-gray-300">
            {item.text}
          </p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
