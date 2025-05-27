import { render, screen } from "@testing-library/react";
import StatsSection from "@/components/home/Stats";
import "@testing-library/jest-dom";

describe("StatsSection Component", () => {
  it("renders all statistics and their descriptions", () => {
    render(<StatsSection />);

    expect(screen.getByText("211%")).toBeInTheDocument();
    expect(screen.getByText("Return on investment in less than eight months")).toBeInTheDocument();

    expect(screen.getByText("4.8%")).toBeInTheDocument();
    expect(screen.getByText("900+ developer time savings per year")).toBeInTheDocument();

    expect(screen.getByText("9.85%")).toBeInTheDocument();
    expect(screen.getByText("300% increase in site conversion by year three")).toBeInTheDocument();

    expect(screen.getByText("Enterprise Winter 2024")).toBeInTheDocument();
    expect(screen.getByText("Top Rated 2024")).toBeInTheDocument();
    expect(screen.getByText("130+ leading payment providers")).toBeInTheDocument();
  });

  it("renders all images correctly", () => {
    render(<StatsSection />);

    expect(screen.getByAltText("Enterprise Winter 2024")).toBeInTheDocument();
    expect(screen.getByAltText("Top Rated 2024")).toBeInTheDocument();
    expect(screen.getByAltText("130+ leading payment providers")).toBeInTheDocument();
  });
});
