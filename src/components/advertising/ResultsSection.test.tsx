import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultsSection from "./ResultsSection";

// Mock advertising.json
jest.mock("../../../data/advertising.json", () => ({
  stats: [
    { number: "3x", label: "Increase in Store Visits" },
    { number: "2.5x", label: "More Product Views" },
    { number: "80%", label: "Boost in Engagement" },
  ],
  testimonials: [
    {
      text: "We saw amazing growth in traffic and sales after advertising!",
      avatar: "A",
      author: "Alice Doe",
      company: "Trendify",
    },
    {
      text: "Highly recommend MarketHub's ad services. Great ROI!",
      avatar: "B",
      author: "Bob Smith",
      company: "ShopMore",
    },
    {
      text: "Easy to set up and the results were almost immediate.",
      avatar: "C",
      author: "Cathy Wu",
      company: "GadgetPro",
    },
  ],
}));

describe("ResultsSection Component", () => {
  beforeEach(() => {
    render(<ResultsSection />);
  });

  test("renders section title", () => {
    expect(
      screen.getByRole("heading", { name: /Results Our Advertisers See/i }),
    ).toBeInTheDocument();
  });

  test("renders all stats with correct numbers and labels", () => {
    expect(screen.getByText("3x")).toBeInTheDocument();
    expect(screen.getByText("Increase in Store Visits")).toBeInTheDocument();
    expect(screen.getByText("2.5x")).toBeInTheDocument();
    expect(screen.getByText("More Product Views")).toBeInTheDocument();
    expect(screen.getByText("80%")).toBeInTheDocument();
    expect(screen.getByText("Boost in Engagement")).toBeInTheDocument();
  });

  test("renders all testimonials with text, author, and company", () => {
    expect(
      screen.getByText(/We saw amazing growth in traffic and sales/i),
    ).toBeInTheDocument();
    expect(screen.getByText("Alice Doe")).toBeInTheDocument();
    expect(screen.getByText("Trendify")).toBeInTheDocument();

    expect(
      screen.getByText(/Highly recommend MarketHub's ad services/i),
    ).toBeInTheDocument();
    expect(screen.getByText("Bob Smith")).toBeInTheDocument();
    expect(screen.getByText("ShopMore")).toBeInTheDocument();

    expect(
      screen.getByText(/Easy to set up and the results were almost immediate/i),
    ).toBeInTheDocument();
    expect(screen.getByText("Cathy Wu")).toBeInTheDocument();
    expect(screen.getByText("GadgetPro")).toBeInTheDocument();
  });

  test("renders avatars", () => {
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.getByText("C")).toBeInTheDocument();
  });
});
