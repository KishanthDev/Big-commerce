import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-blue-600 dark:bg-black text-white py-16">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Unique Products</h1>
            <p className="text-lg opacity-90 mb-6 max-w-lg">
              Shop directly from independent creators and boutique stores all in one place. Support local businesses while finding products you'll love.
            </p>
            <button className="bg-white dark:bg-gray-300 text-blue-600 px-5 py-2 rounded-md font-medium hover:bg-gray-100 transition inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="flex-1 bg-gray-200 h-80 rounded-lg flex items-center justify-center text-gray-500">
            {/* Replace with actual image */}
            <span>Shopping Experience Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}