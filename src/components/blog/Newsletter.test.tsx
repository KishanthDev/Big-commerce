import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Newsletter from "./NewsLetter";

describe("Newsletter", () => {
  it("renders the heading", () => {
    render(<Newsletter />);
    expect(screen.getByText("Subscribe to Our Newsletter")).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Newsletter />);
    expect(
      screen.getByText(/Get the latest marketplace insights/i),
    ).toBeInTheDocument();
  });

  it("renders the email input with correct placeholder", () => {
    render(<Newsletter />);
    const input = screen.getByPlaceholderText("Enter your email");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "email");
  });

  it("renders the subscribe button", () => {
    render(<Newsletter />);
    expect(
      screen.getByRole("button", { name: /Subscribe/i }),
    ).toBeInTheDocument();
  });

  it("submits the form (simulated)", () => {
    render(<Newsletter />);
    const input = screen.getByPlaceholderText(
      "Enter your email",
    ) as HTMLInputElement;
    const button = screen.getByRole("button", { name: /Subscribe/i });

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(button);

    expect(input.value).toBe("test@example.com"); // basic form behavior
  });
});
