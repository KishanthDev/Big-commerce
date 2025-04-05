import React from 'react';

const benefits = [
  {
    title: "Grow revenue faster.",
    description: "Powerful built-in tools accelerate your ecommerce growth.",
    icon: "📈",
  },
  {
    title: "Convert more shoppers.",
    description: "An industry-leading checkout turns website visitors into customers.",
    icon: "🛍️",
  },
  {
    title: "Save on rates.",
    description: "Preferred payment providers offer competitive rates — and no additional fees.",
    icon: "💲",
  },
  {
    title: "Build your way.",
    description: "Platform flexibility means you have the freedom to customize.",
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
    <div className="px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">What you can achieve with BigCommerce.</h2>
      <hr className="border-t border-gray-300 mb-8 w-full max-w-[1170px]" />
      <div 
      role="group"
       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg flex flex-col items-start"
          >
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold">{benefit.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigCommerceBenefits;
