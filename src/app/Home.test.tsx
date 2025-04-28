// Home.test.tsx
import { render, screen } from "@testing-library/react";
import Home from "./page";  // Adjust the import path as needed
import React from "react";

// Mock the components to simplify the test
jest.mock("@/components/hero/Hero", () => () => <div data-testid="hero-section">HeroSection</div>);
jest.mock("@/components/header/Header", () => () => <div data-testid="header">Header</div>);
jest.mock("@/components/Stats", () => () => <div data-testid="stats-section">StatsSection</div>);
jest.mock("@/components/BigCommerceBenefits", () => () => <div data-testid="big-commerce-benefits">BigCommerceBenefits</div>);
jest.mock("@/components/footer/Footer", () => () => <div data-testid="footer">Footer</div>);

describe("Home Component", () => {
  it("renders all child components correctly", () => {
    render(<Home />);

    // Check if all mocked components are rendered
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("stats-section")).toBeInTheDocument();
    expect(screen.getByTestId("big-commerce-benefits")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();

    // Optionally, check for some specific content if you want more detailed tests
    expect(screen.getByTestId("hero-section")).toHaveTextContent("HeroSection");
    expect(screen.getByTestId("stats-section")).toHaveTextContent("StatsSection");
    expect(screen.getByTestId("big-commerce-benefits")).toHaveTextContent("BigCommerceBenefits");
    expect(screen.getByTestId("footer")).toHaveTextContent("Footer");
  });
});
