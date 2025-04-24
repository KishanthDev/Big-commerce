import { render, screen, fireEvent } from "@testing-library/react";
import CtaSection from "./CtaSection";
import { ArrowRight, Play, Check } from "lucide-react";

// Mock lucide-react icons
jest.mock("lucide-react", () => ({
  ArrowRight: jest.fn(() => <span data-testid="arrow-right" />),
  Play: jest.fn(() => <span data-testid="play-icon" />),
  Check: jest.fn(() => <span data-testid="check-icon" />),
}));

describe("CtaSection Component", () => {
  const mockBenefits = [
    "No commision fees",
    "Easy-to-use dashboard",
    "local customers targeting",
    "Secure payment processing",
    "24/7 seller support",
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(<CtaSection />);
    expect(screen.getByRole("region")).toBeInTheDocument();
  });

  test("displays the main heading", () => {
    render(<CtaSection />);
    expect(
      screen.getByRole("heading", {
        name: /Ready to Discover Amazing Products?/i,
      }),
    ).toBeInTheDocument();
  });

  test("shows the subheading text", () => {
    render(<CtaSection />);
    expect(
      screen.getByText(
        /Join thousands of sellers who are thriving on our platform/i,
      ),
    ).toBeInTheDocument();
  });

  test("renders both action buttons", () => {
    render(<CtaSection />);
    expect(
      screen.getByRole("button", { name: /Start Selling Today/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Watch Demo/i }),
    ).toBeInTheDocument();
  });

  test("includes correct icons in buttons", () => {
    render(<CtaSection />);
    expect(screen.getByTestId("arrow-right")).toBeInTheDocument();
    expect(screen.getByTestId("play-icon")).toBeInTheDocument();
  });

  test("displays all benefits with check icons", () => {
    render(<CtaSection />);
    const checkIcons = screen.getAllByTestId("check-icon");
    expect(checkIcons).toHaveLength(mockBenefits.length);
    mockBenefits.forEach((benefit) => {
      expect(screen.getByText(benefit)).toBeInTheDocument();
    });
  });

  test("has correct dark mode classes", () => {
    render(<CtaSection />);
    const section = screen.getByRole("region");
    expect(section).toHaveClass("dark:bg-black");

    const benefitsCard = screen.getByTestId("benefits-card");
    expect(benefitsCard).toHaveClass("dark:bg-gray-300");
  });

  test("primary button has correct styling", () => {
    render(<CtaSection />);
    const primaryButton = screen.getByRole("button", {
      name: /Start Selling Today/i,
    });
    expect(primaryButton).toHaveClass("bg-white");
    expect(primaryButton).toHaveClass("dark:bg-gray-300");
    expect(primaryButton).toHaveClass("text-blue-600");
    expect(primaryButton).toHaveClass("hover:bg-gray-300");
  });

  test("secondary button has correct styling", () => {
    render(<CtaSection />);
    const secondaryButton = screen.getByRole("button", { name: /Watch Demo/i });
    expect(secondaryButton).toHaveClass("border");
    expect(secondaryButton).toHaveClass("border-white");
    expect(secondaryButton).toHaveClass("dark:hover:bg-gray-600");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<CtaSection />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("has proper accessibility attributes", () => {
    render(<CtaSection />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Ready to Discover Amazing Products?",
    );
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Shopper Benefits",
    );
  });
});
