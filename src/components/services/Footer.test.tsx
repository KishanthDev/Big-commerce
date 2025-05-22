import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer"; // adjust import path as needed

describe("Footer Component", () => {
  test("renders copyright text", () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2025 Mike's Auto Service - All Rights Reserved/i),
    ).toBeInTheDocument();
  });

  test("renders payment methods heading", () => {
    render(<Footer />);
    expect(screen.getByText("We accept:")).toBeInTheDocument();
  });

  test("renders all payment icons", () => {
    render(<Footer />);
    const paymentIcons = screen.getAllByTestId("payment-icon");
    expect(paymentIcons).toHaveLength(3);
    expect(paymentIcons[0]).toHaveTextContent("V");
    expect(paymentIcons[1]).toHaveTextContent("M");
    expect(paymentIcons[2]).toHaveTextContent("A");
  });

  test("applies correct base styling", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass(
      "bg-[#1a3c6e]",
      "dark:bg-gray-900",
      "text-white",
      "text-center",
      "p-6",
      "mt-8",
      "md:mt-12",
    );
  });

  test("applies correct text styling", () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/© 2025 Mike's Auto Service/i);
    expect(copyrightText).toHaveClass("text-sm", "md:text-base");

    const paymentText = screen.getByText("We accept:");
    expect(paymentText).toHaveClass(
      "text-sm",
      "md:text-base",
      "mt-2",
      "md:mt-3",
    );
  });

  test("applies correct payment icon styling", () => {
    render(<Footer />);
    const paymentIcons = screen.getAllByTestId("payment-icon");

    paymentIcons.forEach((icon) => {
      expect(icon).toHaveClass(
        "w-8",
        "h-8",
        "md:w-10",
        "md:h-10",
        "bg-white",
        "text-black",
        "dark:bg-gray-200",
        "dark:text-gray-900",
        "flex",
        "items-center",
        "justify-center",
        "rounded",
        "text-xs",
        "md:text-sm",
        "font-bold",
        "shadow-sm",
      );
    });
  });

  test("applies correct dark mode classes", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("dark:bg-gray-900");

    const paymentIcons = screen.getAllByTestId("payment-icon");
    expect(paymentIcons[0]).toHaveClass(
      "dark:bg-gray-200",
      "dark:text-gray-900",
    );
  });

  test("payment icons container has correct layout", () => {
    render(<Footer />);
    const iconsContainer = screen.getByTestId("payment-icons-container");
    expect(iconsContainer).toHaveClass(
      "flex",
      "justify-center",
      "gap-4",
      "mt-2",
      "md:mt-3",
    );
  });
});
