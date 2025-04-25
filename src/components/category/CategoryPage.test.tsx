import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./CategoryPage";

jest.mock("next/link", () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

jest.mock("@/app/lib/slugify", () => ({
  slugify: (str: string) => str.toLowerCase().replace(/\s+/g, "-"),
}));

jest.mock("../breadcrumb/Breadcrumb", () => () => <div data-testid="breadcrumb">Breadcrumb</div>);

describe("Home", () => {
  it("renders the search input", () => {
    render(<Home />);
    const input = screen.getByPlaceholderText(
      /search categories, businesses, or services/i
    );
    expect(input).toBeInTheDocument();
  });

  it("renders the breadcrumb", () => {
    render(<Home />);
    expect(screen.getByTestId("breadcrumb")).toBeInTheDocument();
  });

  it("renders the Explore Categories heading", () => {
    render(<Home />);
    expect(screen.getByText("Explore Categories")).toBeInTheDocument();
  });

});
