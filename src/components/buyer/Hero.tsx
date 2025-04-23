import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-500/40 dark:from-blue-700/30 via-transparent to-transparent text-white p-6 md:p-16 lg:p-28">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary font-bold mb-4">
              Discover Unique Products
            </h1>
            <p className="text-base sm:text-lg text-primary opacity-90 mb-6 max-w-lg mx-auto md:mx-0">
              Shop directly from independent creators and boutique stores all in
              one place. Support local businesses while finding products you'll
              love.
            </p>
            <Button
              variant="outline"
              className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg border-primary text-primary rounded-xl"
            >
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full h-60 sm:h-72 md:h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm sm:text-base">
            <span>Shopping Experience Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}
