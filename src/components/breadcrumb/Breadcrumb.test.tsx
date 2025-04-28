import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import Breadcrumb from "./Breadcrumb";
import { Category, Subcategory } from "../../../types/category";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Breadcrumb Component", () => {
  const mockCategory: Category = {
    category: "Electronics",
    subcategories: [{ name: "Laptops", businesses: [] }],
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
      "/subcategory/electronics"
    );
  });

  it("should render subcategory name if provided", () => {
    render(
      <Breadcrumb category={mockCategory} subcategory={mockSubcategory} />
    );
    expect(screen.getByText(mockSubcategory.name)).toBeInTheDocument();
  });

  it("should render the category icon and name when on the category page", () => {
    (usePathname as jest.Mock).mockReturnValue("/subcategory/electronics");

    render(<Breadcrumb category={mockCategory} />);
    
    const categoryNameElement = screen.getByText(mockCategory.category);
    
    const iconElement = categoryNameElement.previousElementSibling;
    
    expect(iconElement).toHaveClass("mx-2");  
  });
});
