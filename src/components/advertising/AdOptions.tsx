import advertising from "@/data/advertising.json";

export default function AdOptions() {
  const { adOptions } = advertising;
  return (
    <section className="bg-gray-50 dark:bg-black py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-semibold text-center dark:text-white mb-12">
          Advertising Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {adOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-3 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3 className="text-xl font-semibold dark:text-white mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {option.description}
              </p>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                {option.price}
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <div className="text-left w-full space-y-3 mb-6">
                {option.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 text-lg">
                      ✓
                    </span>
                    <span className="text-gray-700 dark:text-gray-200 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
