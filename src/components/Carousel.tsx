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
    "/slider/photo1.webp",
    "/slider/photo2.jpeg",
    "/slider/photo3.jpeg",
    "/slider/photo4.jpeg",
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
                <CardContent className="p-0 relative">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[600px] object-cover"
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
