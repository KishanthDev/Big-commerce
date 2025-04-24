import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "./Hero";

describe("Hero Component", () => {
  beforeEach(() => {
    render(<Hero />);
  });

  test("renders the main heading", () => {
    expect(
      screen.getByRole("heading", {
        name: /Promote Your Store to Thousands of Buyers/i,
      })
    ).toBeInTheDocument();
  });

  test("renders the description paragraph", () => {
    expect(
      screen.getByText(/Get noticed with our affordable advertising options/i)
    ).toBeInTheDocument();
  });

  test("renders the call-to-action button", () => {
    const button = screen.getByRole("button", {
      name: /Advertise Today/i,
    });
    expect(button).toBeInTheDocument();
  });

  test("renders the campaign image placeholder", () => {
    expect(
      screen.getByText(/Advertising Campaign Image/i)
    ).toBeInTheDocument();
  });

  test("renders the arrow icon inside the button", () => {
    expect(screen.getByTestId("hero-icon")).toBeInTheDocument();
  });
});
