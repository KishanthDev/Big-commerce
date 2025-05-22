import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AdditionalInfoSection from "./AdditionalInfoSection";

describe("AdditionalInfoSection", () => {
  it("renders the section with heading and information", () => {
    render(<AdditionalInfoSection />);

    // Check heading
    const heading = screen.getByRole("heading", {
      name: /Additional Information/i,
    });
    expect(heading).toBeInTheDocument();

    expect(screen.getByText(/Makes Serviced:/i)).toBeInTheDocument();
    expect(
      screen.getByText(/All domestic and foreign vehicles/i),
    ).toBeInTheDocument();

    expect(screen.getByText(/Warranty:/i)).toBeInTheDocument();
    expect(
      screen.getByText(/24-month \/ 24,000 mile warranty on parts and labor/i),
    ).toBeInTheDocument();

    expect(screen.getByText(/Shuttle Service:/i)).toBeInTheDocument();
    expect(screen.getByText(/Available within 5 miles/i)).toBeInTheDocument();

    expect(screen.getByText(/Loaner Cars:/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Available for major repairs \(reservation required\)/i),
    ).toBeInTheDocument();

    expect(screen.getByText(/Languages:/i)).toBeInTheDocument();
    expect(screen.getByText(/English, Spanish/i)).toBeInTheDocument();
  });
});
