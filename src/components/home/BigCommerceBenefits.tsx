import React from "react";

const benefits = [
  {
    title: "Grow revenue faster.",
    description: "Powerful built-in tools accelerate your ecommerce growth.",
    icon: "📈",
  },
  {
    title: "Convert more shoppers.",
    description:
      "An industry-leading checkout turns website visitors into customers.",
    icon: "🛍️",
  },
  {
    title: "Save on rates.",
    description:
      "Preferred payment providers offer competitive rates — and no additional fees.",
    icon: "💲",
  },
  {
    title: "Build your way.",
    description:
      "Platform flexibility means you have the freedom to customize.",
    icon: "⚙️",
  },
  {
    title: "Boost B2B sales.",
    description: "Robust B2B features ensure you can scale online sales.",
    icon: "📊",
  },
  {
    title: "Access reliable support.",
    description: "24x7 live, US-based support solves any ecommerce challenge.",
    icon: "🛠️",
  },
];

const BigCommerceBenefits = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
        What you can achieve with BigCommerce.
      </h2>
      <hr className="border-t border-gray-300 dark:border-gray-600 mb-8" />
      <div
        role="group"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-900 shadow-sm rounded-xl flex flex-col items-start hover:shadow-md transition"
          >
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
              {benefit.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-1">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BigCommerceBenefits;
