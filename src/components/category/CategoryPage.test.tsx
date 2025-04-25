import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./CategoryPage";

type LinkProps = { children: React.ReactNode; href: string };
const LinkMock = ({ children, href }: LinkProps) => <a href={href}>{children}</a>;
LinkMock.displayName = "LinkMock";

jest.mock("next/link", () => LinkMock);

jest.mock("@/app/lib/slugify", () => ({
  slugify: (str: string) => str.toLowerCase().replace(/\s+/g, "-"),
}));

jest.mock("../breadcrumb/Breadcrumb", () => {
  const MockBreadcrumb = () => <div data-testid="breadcrumb">Breadcrumb</div>;
  MockBreadcrumb.displayName = "MockBreadcrumb";
  return MockBreadcrumb;
});

describe("CategoryPage", () => {
  it("renders the search input", () => {
    render(<Home />);
    const input = screen.getByPlaceholderText(/search categories, businesses, or services/i);
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
