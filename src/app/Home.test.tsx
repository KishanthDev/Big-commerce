import { render, screen } from "@testing-library/react";
import Home from "./page";
import React from "react";

jest.mock("@/components/hero/Hero", () => {
  const HeroMock = () => <div data-testid="hero-section">HeroSection</div>;
  HeroMock.displayName = "HeroMock";
  return HeroMock;
});

jest.mock("@/components/header/Header", () => {
  const HeaderMock = () => <div data-testid="header">Header</div>;
  HeaderMock.displayName = "HeaderMock";
  return HeaderMock;
});

jest.mock("@/components/Stats", () => {
  const StatsMock = () => <div data-testid="stats-section">StatsSection</div>;
  StatsMock.displayName = "StatsMock";
  return StatsMock;
});

jest.mock("@/components/BigCommerceBenefits", () => {
  const BigCommerceBenefitsMock = () => <div data-testid="big-commerce-benefits">BigCommerceBenefits</div>;
  BigCommerceBenefitsMock.displayName = "BigCommerceBenefitsMock";
  return BigCommerceBenefitsMock;
});

jest.mock("@/components/footer/Footer", () => {
  const FooterMock = () => <div data-testid="footer">Footer</div>;
  FooterMock.displayName = "FooterMock";
  return FooterMock;
});

describe("Home Component", () => {
  it("renders all child components correctly", () => {
    render(<Home />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("stats-section")).toBeInTheDocument();
    expect(screen.getByTestId("big-commerce-benefits")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();

    expect(screen.getByTestId("hero-section")).toHaveTextContent("HeroSection");
    expect(screen.getByTestId("stats-section")).toHaveTextContent("StatsSection");
    expect(screen.getByTestId("big-commerce-benefits")).toHaveTextContent("BigCommerceBenefits");
    expect(screen.getByTestId("footer")).toHaveTextContent("Footer");
  });
});
