import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WhyShop from "./WhySell";

describe("WhyShop component", () => {
  beforeEach(() => {
    render(<WhyShop />);
  });

  test("renders section heading", () => {
    expect(screen.getByRole("heading", { name: /Why Sell With Us\?/i })).toBeInTheDocument();
  });

  test("renders all feature titles", () => {
    const titles = ["No Commissions", "Affordable Rentals", "Local Customers"];
    titles.forEach((title) => {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    });
  });

  test("renders all feature descriptions", () => {
    const descriptions = [
      /Keep 100% of your sales/i,
      /Low monthly subscription/i,
      /Connect with customers in your area/i,
    ];
    descriptions.forEach((desc) => {
      expect(screen.getByText(desc)).toBeInTheDocument();
    });
  });
});
