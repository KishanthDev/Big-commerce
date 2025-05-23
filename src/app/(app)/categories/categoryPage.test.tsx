import { render, screen } from "@testing-library/react";
import Page from "./page";
import "@testing-library/jest-dom";

// Mocking the components used in the Page (with display names)
jest.mock("../../components/category/CategoryPage", () => {
  const CategoryPageMock = () => <div>Categories</div>;
  CategoryPageMock.displayName = "CategoryPageMock";
  return CategoryPageMock;
});

jest.mock("../subcategory/layout", () => {
  const SidebarLayoutMock = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );
  SidebarLayoutMock.displayName = "SidebarLayoutMock";
  return SidebarLayoutMock;
});

describe("CategoryPage Component", () => {
  it("should render SidebarLayout and Categories", () => {
    render(<Page />);

    // Verify that "Categories" text is present
    expect(screen.getByText("Categories")).toBeInTheDocument();
  });
});
