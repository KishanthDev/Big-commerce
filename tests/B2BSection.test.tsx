import { render, screen } from "@testing-library/react";
import B2BSection from "@/components/B2BSection";

describe("B2BSection Component", () => {
  it("renders all headings correctly", () => {
    render(<B2BSection />);

    expect(screen.getByText("Built for B2B")).toBeInTheDocument();
    expect(screen.getByText("Operational Excellence")).toBeInTheDocument();
    expect(screen.getByText("The Better Buyer Experience")).toBeInTheDocument();
  });

  it("renders all images with correct alt attributes", () => {
    render(<B2BSection />);

    expect(screen.getByAltText("Built for B2B")).toBeInTheDocument();
    expect(screen.getByAltText("Operational Excellence")).toBeInTheDocument();
    expect(screen.getByAltText("Better Buyer Experience")).toBeInTheDocument();
  });

  it("renders the correct description text", () => {
    render(<B2BSection />);

    expect(
      screen.getByText(/BigCommerce knows B2B/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Fully empower your sales reps/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Modernize every moment/i)
    ).toBeInTheDocument();
  });
});
