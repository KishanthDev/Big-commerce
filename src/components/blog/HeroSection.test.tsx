import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renders the main heading", () => {
    render(<HeroSection />);
    expect(
      screen.getByText("Insights and Tips for Sellers and Buyers"),
    ).toBeInTheDocument();
  });

  it("renders the description paragraph", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/Stay informed with the latest marketplace trends/i),
    ).toBeInTheDocument();
  });

  it("uses correct styling classes", () => {
    const { container } = render(<HeroSection />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("bg-gradient-to-br");
    expect(section).toHaveClass("p-6");
    expect(section).toHaveClass("text-white");
  });
});
