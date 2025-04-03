import { render, screen } from "@testing-library/react";
import Services from "./Services";
import "@testing-library/jest-dom";

describe("Services Component", () => {
  it("renders the heading and description", () => {
    render(<Services />);
    expect(screen.getByText("SERVICES")).toBeInTheDocument();
    expect(screen.getByText("Our experts at your service.")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Our team of ecommerce experts are rigorously trained and passionate about your success, offering end-to-end services from migration and launch to growth and expansion."
      )
    ).toBeInTheDocument();
  });

  it("renders the button", () => {
    render(<Services />);
    expect(screen.getByRole("button", { name: "VIEW ALL SERVICES" })).toBeInTheDocument();
  });

  it("renders the image", () => {
    render(<Services />);
    const image = screen.getByAltText("Services");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/services.png"); // Ensures correct image path
  });
});
