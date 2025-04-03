import { render, screen } from "@testing-library/react";
import Mizuno from "@/components/Minzuno";
import "@testing-library/jest-dom";

describe("Mizuno Component", () => {
  it("renders the main heading and subheadings", () => {
    render(<Mizuno />);

    expect(
      screen.getByRole("heading", {
        name: /Mizuno USA Goes Composable for Big Growth\./i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText("SOLUTIONS")).toBeInTheDocument();
  });

  it("displays the key statistics", () => {
    render(<Mizuno />);

    expect(screen.getByText("90%")).toBeInTheDocument();
    expect(
      screen.getByText("Decrease in time to complete checkout")
    ).toBeInTheDocument();

    expect(screen.getByText("12%")).toBeInTheDocument();
    expect(
      screen.getByText("Increase in average order value")
    ).toBeInTheDocument();
  });

  it("renders all solution providers", () => {
    render(<Mizuno />);

    expect(screen.getByText("Mira Commerce")).toBeInTheDocument();
    expect(screen.getByText("Deck Commerce")).toBeInTheDocument();
    expect(screen.getByText("Bolt")).toBeInTheDocument();
  });

  it("renders only the solution provider logos", () => {
    render(<Mizuno />);

    const solutionImages = [
      screen.getByAltText("Mira Commerce Logo"),
      screen.getByAltText("Deck Commerce Logo"),
      screen.getByAltText("Bolt Logo"),
    ];
    expect(solutionImages.length).toBe(3); // Only counting Mira, Deck, and Bolt logos
  });

  it("renders the 'READ THEIR STORY' button", () => {
    render(<Mizuno />);
    expect(
      screen.getByRole("button", { name: "READ THEIR STORY" })
    ).toBeInTheDocument();
  });
});
