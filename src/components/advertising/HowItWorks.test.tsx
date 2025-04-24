import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HowItWorks from "./HowItWorks";

// Mock the advertising.json import
jest.mock("../../../data/advertising.json", () => ({
  steps: [
    {
      number: 1,
      title: "Choose Your Plan",
      description: "Pick the advertising plan that best suits your store's goals.",
    },
    {
      number: 2,
      title: "Submit Your Content",
      description: "Provide the visuals and messaging for your ad campaign.",
    },
    {
      number: 3,
      title: "Launch & Monitor",
      description: "Start reaching customers and track your results.",
    },
  ],
}));

describe("HowItWorks Component", () => {
  beforeEach(() => {
    render(<HowItWorks />);
  });

  test("renders the section title", () => {
    expect(
      screen.getByRole("heading", { name: /How Advertising Works/i })
    ).toBeInTheDocument();
  });

  test("renders all steps", () => {
    const steps = screen.getAllByRole("heading", { level: 3 });
    expect(steps).toHaveLength(3);
    expect(steps[0]).toHaveTextContent("Choose Your Plan");
    expect(steps[1]).toHaveTextContent("Submit Your Content");
    expect(steps[2]).toHaveTextContent("Launch & Monitor");
  });

  test("renders the correct step numbers", () => {
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("renders all step descriptions", () => {
    expect(
      screen.getByText(/Pick the advertising plan that best suits/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Provide the visuals and messaging/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Start reaching customers and track/i)
    ).toBeInTheDocument();
  });
});
