import React from "react";
import { render, screen } from "@testing-library/react";
import BigCommerceBenefits from "@/components/BigCommerceBenefits";

describe("BigCommerceBenefits", () => {
  it("renders the heading", () => {
    render(<BigCommerceBenefits />);
    expect(
      screen.getByText("What you can achieve with BigCommerce.")
    ).toBeInTheDocument();
  });

  it("renders all benefit cards", () => {
    render(<BigCommerceBenefits />);
    const cards = screen.getAllByRole("heading", { level: 3 });
    expect(cards).toHaveLength(6);
  });

  it("renders correct benefit titles", () => {
    render(<BigCommerceBenefits />);
    expect(
      screen.getByText("Grow revenue faster.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Access reliable support.")
    ).toBeInTheDocument();
  });

  it("renders correct benefit icons", () => {
    render(<BigCommerceBenefits />);
    expect(screen.getByText("📈")).toBeInTheDocument();
    expect(screen.getByText("🛠️")).toBeInTheDocument();
  });
});
