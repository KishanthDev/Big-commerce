import React from "react";
import { render, screen } from "@testing-library/react";
import FeatureSection from "./FeatureSection";

describe("FeatureSection", () => {
  it("renders the section title", () => {
    render(<FeatureSection />);
    expect(screen.getByText("Explore Blog Categories")).toBeInTheDocument();
  });

  it("renders all feature cards", () => {
    render(<FeatureSection />);
    expect(screen.getByText("Selling Tips")).toBeInTheDocument();
    expect(screen.getByText("Buying Guides")).toBeInTheDocument();
    expect(screen.getByText("Advertising Insights")).toBeInTheDocument();
  });

  it("renders all emojis/icons", () => {
    render(<FeatureSection />);
    expect(screen.getByText("📝")).toBeInTheDocument();
    expect(screen.getByText("🛍️")).toBeInTheDocument();
    expect(screen.getByText("📊")).toBeInTheDocument();
  });

  it("renders the 'Explore Articles' links", () => {
    render(<FeatureSection />);
    const links = screen.getAllByText("Explore Articles →");
    expect(links).toHaveLength(3);
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "#");
    });
  });
});
