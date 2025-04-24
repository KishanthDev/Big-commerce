import { ArrowRight, Play, Check } from "lucide-react";

export default function CtaSection() {
  const benefits = [
    "No commision fees",
    "Easy-to-use dashboard",
    "local customers targeting",
    "Secure payment processing",
    "24/7 seller support",
  ];

  return (
    <section
      role="region"
      data-testid="cta-section"
      className="bg-blue-600 dark:bg-black text-white py-16"
    >
      <div data-testid="cta-container" className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to Discover Amazing Products?
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl">
              Join thousands of sellers who are thriving on our platform.Start
              selling today with our risk-free 30-day trail
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white dark:bg-gray-300 text-blue-600 px-5 py-3 rounded-md font-medium hover:bg-gray-300 transition flex items-center justify-center">
                Start Selling Today <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="bg-transparent border border-white px-5 py-3 rounded-md font-medium dark:hover:bg-gray-600 hover:bg-gray-300 hover:bg-opacity-10 transition flex items-center justify-center">
                <Play className="w-4 h-4 mr-2" /> Watch Demo
              </button>
            </div>
          </div>
          <div
            data-testid="benefits-card"
            className="lg:w-1/3 bg-white dark:bg-gray-300 rounded-lg p-6 text-gray-900"
          >
            <h3 className="text-lg font-semibold mb-5">Shopper Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
