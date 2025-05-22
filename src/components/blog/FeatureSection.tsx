import React from "react";

function FeatureSection() {
  return (
    <div>
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-semibold text-primary text-center mb-12">
            Explore Blog Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-300 rounded-lg p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 text-blue-600 text-2xl">
                📝
              </div>
              <h3 className="text-lg dark:text-black font-semibold mb-2">
                Selling Tips
              </h3>
              <p className="text-gray-500 mb-4">
                Expert advice to help you grow your online business
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 transition-colors"
              >
                Explore Articles →
              </a>
            </div>
            <div className="bg-gray-50 dark:bg-gray-300 rounded-lg p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 text-blue-600 text-2xl">
                🛍️
              </div>
              <h3 className="text-lg dark:text-black font-semibold mb-2">
                Buying Guides
              </h3>
              <p className="text-gray-500 mb-4">
                Make informed decisions with our comprehensive guides
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 transition-colors"
              >
                Explore Articles →
              </a>
            </div>
            <div className="bg-gray-50 dark:bg-gray-300 rounded-lg p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 text-blue-600 text-2xl">
                📊
              </div>
              <h3 className="text-lg dark:text-black font-semibold mb-2">
                Advertising Insights
              </h3>
              <p className="text-gray-500 mb-4">
                Learn how to maximize your marketing impact
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 transition-colors"
              >
                Explore Articles →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeatureSection;
