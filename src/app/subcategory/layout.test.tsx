import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { usePathname } from "next/navigation";
import SidebarLayout from "./layout";

// Mock dependencies
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

jest.mock("../../../data/detailed_categories_with_subcategories.json", () => [
  {
    category: "Electronics",
    subcategories: [{ name: "Phones" }, { name: "Laptops" }],
  },
  {
    category: "Books",
    subcategories: [],
  },
]);

describe("SidebarLayout", () => {
  const mockUsePathname = usePathname as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUsePathname.mockReturnValue("/subcategory/electronics");
  });

  // Basic rendering tests
  it("renders sidebar and main content", () => {
    render(
      <SidebarLayout>
        <div>Main Content</div>
      </SidebarLayout>,
    );

    expect(screen.getByText("Categories")).toBeInTheDocument();
    expect(screen.getByText("Categories")).toHaveClass("text-xl");
    expect(screen.getByText("Electronics")).toBeInTheDocument();
    expect(screen.getByText("Books")).toBeInTheDocument();
    expect(screen.getByText("Main Content")).toBeInTheDocument();
  });

  // Active category highlighting
  it("highlights active category", () => {
    render(
      <SidebarLayout>
        <div>Main Content</div>
      </SidebarLayout>,
    );

    const electronicsLink = screen.getByText("Electronics").closest("div");
    expect(electronicsLink).toHaveClass("bg-blue-100");

    const booksLink = screen.getByText("Books").closest("div");
    expect(booksLink).not.toHaveClass("bg-blue-100");
  });

  // Keyboard navigation
  it("handles keyboard navigation for toggle", async () => {
    render(
      <SidebarLayout>
        <div>Main Content</div>
      </SidebarLayout>,
    );

    const electronicsButton = screen.getByText("Electronics").closest("div");

    fireEvent.keyDown(electronicsButton!, { key: "Enter" });
    await waitFor(() => {
      expect(screen.getByText("Phones")).toBeInTheDocument();
    });

    fireEvent.keyDown(electronicsButton!, { key: " " });
    await waitFor(() => {
      expect(screen.queryByText("Phones")).not.toBeInTheDocument();
    });
  });

  // Subcategory highlighting
  it("highlights active subcategory", async () => {
    mockUsePathname.mockReturnValue("/subcategory/electronics/phones");
    render(
      <SidebarLayout>
        <div>Main Content</div>
      </SidebarLayout>,
    );

    const electronicsButton = screen.getByText("Electronics").closest("div");
    fireEvent.click(electronicsButton!);

    await waitFor(() => {
      const phoneLink = screen.getByText("Phones");
      expect(phoneLink).toHaveClass("bg-blue-50");

      const laptopLink = screen.getByText("Laptops");
      expect(laptopLink).not.toHaveClass("bg-blue-50");
    });
  });

  // Categories without subcategories
  it("renders categories without subcategories", () => {
    render(
      <SidebarLayout>
        <div>Main Content</div>
      </SidebarLayout>,
    );

    const booksButton = screen.getByText("Books").closest("div");
    expect(booksButton).not.toHaveClass("bg-blue-100");
    expect(screen.queryByLabelText(/chevron/i)).not.toBeInTheDocument();
  });

  // Navigation links
  it("navigates to category and subcategory links", () => {
    render(
      <SidebarLayout>
        <div>Main Content</div>
      </SidebarLayout>,
    );

    const electronicsLink = screen.getByText("Electronics").closest("a");
    expect(electronicsLink).toHaveAttribute("href", "/subcategory/electronics");

    fireEvent.click(screen.getByText("Electronics").closest("div")!);
    const phoneLink = screen.getByText("Phones");
    expect(phoneLink).toHaveAttribute(
      "href",
      "/subcategory/electronics/phones",
    );
  });

  // Event propagation
  it("stops propagation on link click", async () => {
    render(
      <SidebarLayout>
        <div>Main Content</div>
      </SidebarLayout>,
    );

    const electronicsLink = screen.getByText("Electronics").closest("a");
    fireEvent.click(electronicsLink!);
    
    await waitFor(() => {
      expect(screen.queryByText("Phones")).not.toBeInTheDocument();
    });
  });

  // Main element styling tests
  describe("Main Content Styling", () => {
    it("applies default styling for non-business pages", () => {
      mockUsePathname.mockReturnValue("/subcategory/electronics");
      
      render(
        <SidebarLayout>
          <div>Main Content</div>
        </SidebarLayout>,
      );

      const mainElement = screen.getByRole("main");
      expect(mainElement).toHaveClass("flex-1");
      expect(mainElement).toHaveClass("overflow-y-auto");
      expect(mainElement).toHaveClass("scrollbar-hide");
      expect(mainElement).not.toHaveClass("min-h-screen");
    });
  });
});