import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AdOptions from "./AdOptions";

// Mock the JSON data
jest.mock("../../../data/advertising.json", () => ({
  adOptions: [
    {
      icon: "📢",
      title: "Basic Ad",
      description: "Ideal for small businesses",
      price: "$10",
      features: ["1 featured listing", "1 week duration"],
    },
    {
      icon: "🔥",
      title: "Pro Ad",
      description: "For serious sellers",
      price: "$25",
      features: [
        "3 featured listings",
        "2 weeks duration",
        "Priority placement",
      ],
    },
    {
      icon: "🚀",
      title: "Elite Ad",
      description: "Maximum visibility",
      price: "$50",
      features: [
        "Unlimited listings",
        "1 month duration",
        "Top placement",
        "Social media shoutout",
      ],
    },
  ],
}));

describe("AdOptions Component", () => {
  beforeEach(() => {
    render(<AdOptions />);
  });

  test("renders section heading", () => {
    expect(
      screen.getByRole("heading", { name: /advertising options/i }),
    ).toBeInTheDocument();
  });

  test("renders all ad option titles", () => {
    expect(screen.getByText("Basic Ad")).toBeInTheDocument();
    expect(screen.getByText("Pro Ad")).toBeInTheDocument();
    expect(screen.getByText("Elite Ad")).toBeInTheDocument();
  });

  test("renders all ad option descriptions", () => {
    expect(screen.getByText(/Ideal for small businesses/i)).toBeInTheDocument();
    expect(screen.getByText(/For serious sellers/i)).toBeInTheDocument();
    expect(screen.getByText(/Maximum visibility/i)).toBeInTheDocument();
  });

  test("renders all prices with /month", () => {
    expect(screen.getByText(/\$10/)).toBeInTheDocument();
    expect(screen.getByText(/\$25/)).toBeInTheDocument();
    expect(screen.getByText(/\$50/)).toBeInTheDocument();
    expect(screen.getAllByText("/month").length).toBe(3);
  });

  test("renders feature list items", () => {
    expect(screen.getByText("1 featured listing")).toBeInTheDocument();
    expect(screen.getByText("1 week duration")).toBeInTheDocument();
    expect(screen.getByText("Priority placement")).toBeInTheDocument();
    expect(screen.getByText("Social media shoutout")).toBeInTheDocument();
  });

  test("renders all 'Get Started' buttons", () => {
    const buttons = screen.getAllByRole("button", { name: /get started/i });
    expect(buttons.length).toBe(3);
  });
});
