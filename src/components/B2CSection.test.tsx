import { render, screen } from "@testing-library/react";
import B2CSection from "./B2CSection";

describe("B2CSection Component", () => {
  test("renders all B2C cards with correct titles, descriptions, and images", () => {
    render(<B2CSection />);

    const cards = [
      {
        title: "You Are Now Free to Grow",
        description:
          "Launch a fully optimized storefront in just one click with Catalyst. Create stunning visual experiences with Makeswift. Add new brands. Expand into new geos. Shine with new channels, unique storefronts — and more freedom.",
        alt: "You Are Now Free to Grow",
      },
      {
        title: "Convert More Customers",
        description:
          "Create a frictionless shopper experience with the best one-page checkout UX, 130+ leading payment providers, dynamic wallet placement, and more (so much more). Turn your shoppers into customers. They're always right, after all.",
        alt: "Convert More Customers",
      },
      {
        title: "One Word: Value",
        description:
          "That's a word we don't throw around. To us, value is reducing maintenance and increasing efficiency. Lowering costs while boosting ROI. Unmatched threat intelligence, compliance, and payment security. All designed so you can pocket more.",
        alt: "One Word: Value",
      },
    ];

    cards.forEach((card) => {
      expect(screen.getByText(card.title)).toBeInTheDocument();
    });

    cards.forEach((card) => {
      expect(screen.getByText(card.description)).toBeInTheDocument();
    });

    cards.forEach((card) => {
      const image = screen.getByAltText(card.alt);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("alt", card.alt);
    });
  });
});
