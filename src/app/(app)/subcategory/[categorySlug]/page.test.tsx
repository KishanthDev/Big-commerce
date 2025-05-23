import { notFound } from "next/navigation";
import { render } from "@testing-library/react";
import Page, { generateMetadata, generateStaticParams } from "./page";
import categoriesData from "../../../../data/detailed_categories_with_subcategories.json";
import { slugify } from "../../lib/slugify";
import SubcategoryPage from "./SubcategoryPage";

// Mock dependencies
jest.mock(
  "../../../../data/detailed_categories_with_subcategories.json",
  () => [
    {
      category: "Electronics",
      subcategories: [{ name: "Phones" }, { name: "Laptops" }],
    },
    {
      category: "Books",
      subcategories: [],
    },
  ],
);

jest.mock("../../lib/slugify", () => ({
  slugify: jest.fn((str: string): string => str.toLowerCase()), // Explicit type
}));

jest.mock("./SubcategoryPage", () => ({
  __esModule: true,
  default: jest.fn(() => <div>Mocked SubcategoryPage</div>),
}));

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

describe("Subcategory Page", () => {
  const mockedSlugify = slugify as jest.Mock;
  const mockedNotFound = notFound as unknown as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockedSlugify.mockImplementation((str) => str.toLowerCase());
  });

  describe("generateStaticParams", () => {
    it("should generate static params for all categories", () => {
      const result = generateStaticParams();
      expect(result).toEqual([
        { categorySlug: "electronics" },
        { categorySlug: "books" },
      ]);
      expect(mockedSlugify).toHaveBeenCalledTimes(2);
    });
  });

  describe("generateMetadata", () => {
    it("should return correct metadata for found category", async () => {
      const metadata = await generateMetadata({
        params: Promise.resolve({ categorySlug: "electronics" }),
      });

      expect(metadata).toEqual({
        title: "Electronics Subcategories",
        description: "SubCategory was found Electronics.",
      });
    });

    it("should return not found metadata for missing category", async () => {
      const metadata = await generateMetadata({
        params: Promise.resolve({ categorySlug: "unknown" }),
      });

      expect(metadata).toEqual({
        title: "Category Not Found",
        description: "Category not found",
      });
    });
  });

  describe("Page Component", () => {
    it("should render SubcategoryPage for valid category", async () => {
      const params = Promise.resolve({ categorySlug: "electronics" });
      const PageComponent = await Page({ params });

      const { container } = render(PageComponent);
      expect(container).toMatchSnapshot();
      expect(SubcategoryPage).toHaveBeenCalledWith(
        { category: categoriesData[0] },
        {},
      );
    });

    it("should call notFound for invalid category", async () => {
      const params = Promise.resolve({ categorySlug: "unknown" });

      await expect(async () => {
        await Page({ params });
      }).rejects.toThrow(); // Next.js notFound throws an error

      expect(mockedNotFound).toHaveBeenCalled();
    });

    it("should handle params promise correctly", async () => {
      const params = Promise.resolve({ categorySlug: "books" });
      const PageComponent = await Page({ params });

      const { container } = render(PageComponent);
      expect(container).toMatchSnapshot();
      expect(SubcategoryPage).toHaveBeenCalledWith(
        { category: categoriesData[1] },
        {},
      );
    });
  });
});
