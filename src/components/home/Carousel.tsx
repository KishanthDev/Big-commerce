import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  const images = [
    "/slider/photo1.jpeg",
    "/slider/photo2.jpeg",
    "/slider/photo3.jpeg",
    "/slider/photo4.jpeg",
    "/slider/photo5.jpeg",
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full mt-18 mx-auto relative max-w-[1600px]"
    >
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2" />

      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="overflow-hidden py-0 border-none">
                <CardContent className="p-0 relative aspect-[16/9] w-full h-[600px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-100">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full bg-[#19ABDC] object-contain object-center"
                    loading="lazy"
                    srcSet={`${src}?w=800 800w, ${src}?w=1600 1600w`}
                    sizes="(max-width: 768px) 800px, 1600px"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
