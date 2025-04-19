import { ArrowRight, Play, Check } from 'lucide-react';

export default function CtaSection() {
  const benefits = [
    'Free shipping on orders over $30',
    'Easy returns within 30 days',
    'Secure payment processing',
    'Direct communication with sellers',
    '24/7 customer support'
  ];

  return (
    <section className="bg-blue-600 dark:bg-black text-white py-16">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-semibold mb-4">Ready to Discover Amazing Products?</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl">
              Join thousands of shoppers finding unique items from independent creators. Start shopping today with our 30-day satisfaction guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white dark:bg-gray-300 text-blue-600 px-5 py-3 rounded-md font-medium hover:bg-gray-100 transition flex items-center justify-center">
                Start Shopping Today <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="bg-transparent border border-white px-5 py-3 rounded-md font-medium dark:hover:bg-gray-600 hover:bg-white hover:bg-opacity-10 transition flex items-center justify-center">
                <Play className="w-4 h-4 mr-2" /> Watch Demo
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 bg-white dark:bg-gray-300 rounded-lg p-6 text-gray-900">
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