import { render, screen } from "@testing-library/react";
import HowItWorks from "./HowItWorks";
import "@testing-library/jest-dom";

describe("HowItWorks component", () => {
  beforeEach(() => {
    render(<HowItWorks />);
  });

  test("renders section heading", () => {
    expect(
      screen.getByRole("heading", { name: /How It Works: 3 Simple Steps/i }),
    ).toBeInTheDocument();
  });

  test("renders all 3 step numbers", () => {
    ["1", "2", "3"].forEach((num) => {
      expect(screen.getByText(num)).toBeInTheDocument();
    });
  });

  test("renders all step titles", () => {
    ["Sign Up", "Upload Products", "Start Selling"].forEach((title) => {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    });
  });

  test("renders all step descriptions", () => {
    const descriptions = [
      /Create your free account/i,
      /Add your inventory/i,
      /Begin recieving orders/i,
    ];

    descriptions.forEach((desc) => {
      expect(screen.getByText(desc)).toBeInTheDocument();
    });
  });
});
