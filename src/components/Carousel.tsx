import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
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
      className="w-full mx-auto relative">
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2" />

      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="overflow-hidden py-0">
                <CardContent className="p-0 relative aspect-[16/9] w-full overflow-hidden h-[600px] flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="max-h-[80%] max-w-[80%] object-contain"
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
