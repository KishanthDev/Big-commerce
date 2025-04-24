import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CTA from "./Cta";

describe("CTA Component", () => {
  beforeEach(() => {
    render(<CTA />);
  });

  test("renders the main heading", () => {
    expect(
      screen.getByRole("heading", { name: /advertise your store/i }),
    ).toBeInTheDocument();
  });

  test("renders the supporting paragraph", () => {
    expect(
      screen.getByText(/Join hundreds of successful sellers/i),
    ).toBeInTheDocument();
  });

  test("renders the call-to-action button", () => {
    const button = screen.getByRole("button", { name: /get started today/i });
    expect(button).toBeInTheDocument();
  });

  test("renders the arrow inside the button", () => {
    expect(screen.getByText("→")).toBeInTheDocument();
  });
});
