import { render, screen } from "@testing-library/react";
import HeroSection from "./Hero";
import "@testing-library/jest-dom";

describe("HeroSection Component", () => {
  it("renders the heading and text", () => {
    render(<HeroSection />);
    expect(screen.getByText("It's your future. Shape it on")).toBeInTheDocument();
    expect(screen.getByText("your")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Think big — and grow bigger — with our flexible, professional-grade ecommerce platform."
      )
    ).toBeInTheDocument();
  });

  it("renders the buttons", () => {
    render(<HeroSection />);
    expect(screen.getByRole("button", { name: "Explore Platform" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Get Started" })).toBeInTheDocument();
  });

  it("renders the image", () => {
    render(<HeroSection />);
    const image = screen.getByAltText("Cube");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/cube.webp"); // Ensures correct image path
  });
});
