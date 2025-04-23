import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-500/40 dark:from-blue-700/30 via-transparent to-transparent text-white p-6 md:p-16 lg:p-28">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-primary font-bold mb-4">
              Promote Your Store to Thousands of Buyers
            </h1>
            <p className="text-base sm:text-lg text-primary opacity-90 mb-6 max-w-lg mx-auto md:mx-0">
              Get noticed with our affordable advertising options. Reach active shoppers looking for products like yours and increase your store's visibility on MarketHub.
            </p>
            <Button
              variant="outline"
              className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg border-primary text-primary rounded-xl"
            >
              Advertise Today <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Image/Visual Block */}
          <div className="flex-1 w-full h-60 sm:h-72 md:h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm sm:text-base">
            <span>Advertising Campaign Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}
