"use client";

import Image from "next/image";

const B2C_CARDS = [
  {
    title: "You Are Now Free to Grow",
    description:
      "Launch a fully optimized storefront in just one click with Catalyst. Create stunning visual experiences with Makeswift. Add new brands. Expand into new geos. Shine with new channels, unique storefronts — and more freedom.",
    image: "/b2c-left.png",
    alt: "You Are Now Free to Grow",
  },
  {
    title: "Convert More Customers",
    description:
      "Create a frictionless shopper experience with the best one-page checkout UX, 130+ leading payment providers, dynamic wallet placement, and more (so much more). Turn your shoppers into customers. They're always right, after all.",
    image: "/b2c-middle.png",
    alt: "Convert More Customers",
  },
  {
    title: "One Word: Value",
    description:
      "That's a word we don't throw around. To us, value is reducing maintenance and increasing efficiency. Lowering costs while boosting ROI. Unmatched threat intelligence, compliance, and payment security. All designed so you can pocket more.",
    image: "/b2c-right.png",
    alt: "One Word: Value",
  },
];

export default function B2CSection() {
  return (
    <section className="w-full overflow-hidden px-4 md:px-8">
      <div className="container mx-auto flex flex-col mt-8 items-center text-center max-w-[1200px]">
        <div className="flex flex-col md:flex-row justify-center items-start w-full gap-8">
          {B2C_CARDS.map((card, index) => (
            <div
              key={index}
              data-testid="b2c-card"
              className="flex-1 flex flex-col items-center md:items-start text-left max-w-sm"
            >
              <div className="w-full">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={600}
                  height={600}
                  loading="eager"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
              <h3 className="text-3xl mt-6 font-bold">{card.title}</h3>
              <p className="mt-4 text-lg text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
