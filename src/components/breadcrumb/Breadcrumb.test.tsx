import { render, screen } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";
import { Category, Subcategory } from "../../../types/category";

describe("Breadcrumb Component", () => {
  const mockCategory: Category = {
    category: "Electronics",
    subcategories: [{ name: "Laptops", businesses: [] }], // Added subcategories
  };
  const mockSubcategory: Subcategory = { name: "Laptops", businesses: [] };

  it("should render the default breadcrumb when no category is passed", () => {
    render(<Breadcrumb />);
    expect(screen.getByText(/Categories/i)).toBeInTheDocument();
  });

  it("should render category link when category is provided", () => {
    render(<Breadcrumb category={mockCategory} />);
    expect(screen.getByText("Categories")).toBeInTheDocument();
    expect(screen.getByText(mockCategory.category)).toHaveAttribute(
      "href",
      "/subcategory/electronics",
    );
  });

  it("should render subcategory name if provided", () => {
    render(
      <Breadcrumb category={mockCategory} subcategory={mockSubcategory} />,
    );
    expect(screen.getByText(mockSubcategory.name)).toBeInTheDocument();
  });
});
