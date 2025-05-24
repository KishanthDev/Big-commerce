"use client";
import * as React from "react";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CarouselDemo() {
  const images = [
    "/slider/photo1.webp",
    "/slider/photo2.jpeg",
    "/slider/photo3.jpeg",
    "/slider/photo4.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full mx-auto">
      <Carousel className="w-full">
        <CarouselContent
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
            display: "flex",
          }}
        >
          {images.map((src, index) => (
            <CarouselItem key={index} className="w-full flex-shrink-0">
              <Card className="overflow-hidden py-0">
                <CardContent className="p-0 relative">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[600px] object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Custom navigation buttons */}
      <Button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2"
        size="icon"
        variant="ghost"
      >
        <ChevronLeft />
      </Button>
      <Button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2"
        size="icon"
        variant="ghost"
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
