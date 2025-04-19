import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-500/40 dark:from-blue-700/30 via-transparent to-transparent text-white p-28">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl text-primary font-bold mb-4">Grow Your Business</h1>
            <p className="text-lg text-primary opacity-90 mb-6 max-w-lg">
                Join the platform that connects local sellers with nearby customers, all without a hassle
            </p>
            <Button
              variant="outline"
              className="px-8 py-6 text-xl border-primary text-primary rounded-xl"
            >
              Get Started <ArrowRight className="w-4 h-4 ml-2"/>
            </Button>
          </div>
          <div className="flex-1 bg-gray-200 h-80 rounded-lg flex items-center justify-center text-gray-500">
            <span>Selling Experience Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}