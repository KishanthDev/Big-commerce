import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ServicesSection from "./ServicesSection";
import type { Service } from "../../../types/data";

describe("ServicesSection", () => {
  const mockServices: Service[] = [
    {
      name: "Oil Change",
      price: "$29.99",
      description: "",
    },
    {
      name: "Brake Inspection",
      price: "$49.99",
      description: "",
    },
  ];

  it("renders the heading and all services with names and prices", () => {
    render(<ServicesSection services={mockServices} />);

    // Heading
    const heading = screen.getByRole("heading", { name: /our services/i });
    expect(heading).toBeInTheDocument();

    // Services grid exists
    const grid = screen.getByTestId("services-grid");
    expect(grid).toBeInTheDocument();

    // Services rendered
    mockServices.forEach(({ name, price }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(price)).toBeInTheDocument();
    });

    // Number of services rendered equals mock length
    const serviceTitles = screen.getAllByRole("heading", { level: 3 });
    expect(serviceTitles).toHaveLength(mockServices.length);
  });
});
