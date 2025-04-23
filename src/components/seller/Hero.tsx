import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-500/40 dark:from-blue-700/30 via-transparent to-transparent text-white p-6 md:p-16 lg:p-28">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary font-bold mb-4">
              Grow Your Business
            </h1>
            <p className="text-base sm:text-lg text-primary opacity-90 mb-6 max-w-md mx-auto md:mx-0">
              Join the platform that connects local sellers with nearby
              customers, all without a hassle
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                variant="outline"
                className="px-6 py-4 sm:px-8 sm:py-6 text-lg sm:text-xl border-primary text-primary rounded-xl"
              >
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          <div className="flex-1 bg-gray-200 h-60 sm:h-72 md:h-80 rounded-lg flex items-center justify-center text-gray-500 text-sm sm:text-base">
            <span>Selling Experience Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}
