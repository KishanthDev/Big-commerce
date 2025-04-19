import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-500/40 dark:from-blue-700/30 via-transparent to-transparent text-white py-16">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl text-primary font-bold mb-4">Grow Your Business</h1>
            <p className="text-lg text-primary opacity-90 mb-6 max-w-lg">
                Join the platform that connects local sellers with nearby customers, all without a hassle
            </p>
            <button className="bg-gray-300 dark:bg-gray-300 text-blue-600 px-5 py-2 rounded-md font-medium hover:bg-gray-400 transition inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="flex-1 bg-gray-200 h-80 rounded-lg flex items-center justify-center text-gray-500">
            <span>Selling Experience Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}