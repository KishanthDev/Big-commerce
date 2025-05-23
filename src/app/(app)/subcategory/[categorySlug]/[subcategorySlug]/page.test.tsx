import { render, screen } from "@testing-library/react";
import SubcategoryBusinessesPage, {
  generateStaticParams,
  generateMetadata,
} from "./page";
import { notFound } from "next/navigation";
import categoriesData from "../../../../../data/detailed_categories_with_subcategories.json";
import { slugify } from "@/app/lib/slugify";

// Mock all dependencies
jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

jest.mock("@/components/breadcrumb/Breadcrumb", () =>
  jest.fn(({ category, subcategory }) => (
    <div data-testid="breadcrumb">
      {category.category} &gt; {subcategory.name}
    </div>
  )),
);

jest.mock("@/components/filter/FiltersBar", () =>
  jest.fn(() => <div data-testid="filters-bar">Filters Bar</div>),
);

jest.mock("@/components/icons/StarRating", () =>
  jest.fn(({ rating }) => <div data-testid="star-rating">{rating} stars</div>),
);

jest.mock("lucide-react", () => ({
  Share2: jest.fn(() => <svg data-testid="share-icon" />),
  Heart: jest.fn(() => <svg data-testid="heart-icon" />),
  Phone: jest.fn(() => <svg data-testid="phone-icon" />),
  Globe: jest.fn(() => <svg data-testid="globe-icon" />),
  MapPin: jest.fn(() => <svg data-testid="map-pin-icon" />),
}));

jest.mock("@/app/lib/slugify", () => ({
  slugify: jest.fn((str) => str.toLowerCase().replace(/\s+/g, "-")),
}));

// Define proper types
interface Review {
  rating: number;
  comment: string;
}

interface Business {
  businessName: string;
  description: string;
  ratings: number;
  reviews: Review[];
  contact: {
    phone: string;
    website: string;
  };
}

interface Subcategory {
  name: string;
  businesses: Business[];
}

interface Category {
  category: string;
  subcategories: Subcategory[];
}

describe("SubcategoryBusinessesPage", () => {
  const mockCategory: Category = categoriesData[0]; // Typed category
  const mockSubcategory: Subcategory = mockCategory.subcategories[0]; // Typed subcategory
  const mockParams = {
    categorySlug: slugify(mockCategory.category),
    subcategorySlug: slugify(mockSubcategory.name),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("generateStaticParams", () => {
    it("should generate params for all category/subcategory combinations", () => {
      const result = generateStaticParams();

      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            categorySlug: expect.any(String),
            subcategorySlug: expect.any(String),
          }),
        ]),
      );
    });
  });

  describe("generateMetadata", () => {
    it("should return correct metadata for existing subcategory", async () => {
      const metadata = await generateMetadata({
        params: Promise.resolve(mockParams),
      });

      expect(metadata).toEqual({
        title: `${mockSubcategory.name} Businesses - ${mockCategory.category}`,
      });
    });

    it("should return not found metadata for non-existent subcategory", async () => {
      const metadata = await generateMetadata({
        params: Promise.resolve({
          categorySlug: "non-existent",
          subcategorySlug: "non-existent",
        }),
      });

      expect(metadata).toEqual({
        title: "Businesses Not Found",
      });
    });
  });

  describe("Page Component", () => {
    it("should render correctly with businesses", async () => {
      const Page = await SubcategoryBusinessesPage({
        params: Promise.resolve(mockParams),
      });
      render(Page);

      // Verify main elements
      expect(screen.getByTestId("breadcrumb")).toBeInTheDocument();
      expect(screen.getByTestId("filters-bar")).toBeInTheDocument();

      // Verify title
      expect(
        screen.getByText(
          `${mockSubcategory.name} Businesses in ${mockCategory.category}`,
        ),
      ).toBeInTheDocument();

      // Verify business cards
      mockSubcategory.businesses.forEach((business) => {
        expect(screen.getByText(business.businessName)).toBeInTheDocument();
        expect(screen.getByText(business.description)).toBeInTheDocument();
        expect(
          screen.getByText(`${business.ratings} stars`),
        ).toBeInTheDocument();
        expect(
          screen.getByText(`(${business.reviews.length})`),
        ).toBeInTheDocument();

        // Verify contact info
        expect(screen.getByText(business.contact.phone)).toBeInTheDocument();
        expect(screen.getByText(business.contact.website)).toBeInTheDocument();
      });
    });

    it("should render empty state when no businesses exist", async () => {
      // Create a mock subcategory with no businesses
      const emptySubcategory: Subcategory = {
        ...mockSubcategory,
        businesses: [],
      };
      const emptyCategory: Category = {
        ...mockCategory,
        subcategories: [emptySubcategory],
      };

      // Mock the data find methods
      jest
        .spyOn(categoriesData as Category[], "find")
        .mockReturnValue(emptyCategory);
      jest
        .spyOn(emptyCategory.subcategories as Subcategory[], "find")
        .mockReturnValue(emptySubcategory);

      const Page = await SubcategoryBusinessesPage({
        params: Promise.resolve({
          categorySlug: slugify(emptyCategory.category),
          subcategorySlug: slugify(emptySubcategory.name),
        }),
      });
      render(Page);

      expect(
        screen.getByText("No businesses found for this subcategory."),
      ).toBeInTheDocument();
    });

    it("should call notFound when category does not exist", async () => {
      jest
        .spyOn(categoriesData as Category[], "find")
        .mockReturnValue(undefined);

      await SubcategoryBusinessesPage({
        params: Promise.resolve({
          categorySlug: "non-existent",
          subcategorySlug: "non-existent",
        }),
      });

      expect(notFound).toHaveBeenCalled();
    });

    it("should call notFound when subcategory does not exist", async () => {
      jest
        .spyOn(categoriesData as Category[], "find")
        .mockReturnValue(mockCategory);
      jest
        .spyOn(mockCategory.subcategories as Subcategory[], "find")
        .mockReturnValue(undefined);

      await SubcategoryBusinessesPage({
        params: Promise.resolve({
          categorySlug: mockParams.categorySlug,
          subcategorySlug: "non-existent",
        }),
      });

      expect(notFound).toHaveBeenCalled();
    });
  });
});
