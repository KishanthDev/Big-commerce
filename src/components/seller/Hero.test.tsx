import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
import "@testing-library/jest-dom";

describe("Hero component", () => {
  test("renders heading", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /Grow Your Business/i }),
    ).toBeInTheDocument();
  });

  test("renders paragraph text", () => {
    render(<Hero />);
    expect(
      screen.getByText(/connects local sellers with nearby customers/i),
    ).toBeInTheDocument();
  });

  test("renders the Get Started button with icon", () => {
    render(<Hero />);
    const button = screen.getByRole("button", { name: /Get Started/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("text-primary");
  });

  test("renders the placeholder image section", () => {
    render(<Hero />);
    expect(screen.getByText(/Selling Experience Image/i)).toBeInTheDocument();
  });
});
