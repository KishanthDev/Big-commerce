import { render, screen } from "@testing-library/react";
import WhyShop from "./WhyShop";

describe("WhyShop Component", () => {
  const mockFeatures = [
    {
      icon: "🔍",
      title: "Unique Products",
      description:
        "Discover one-of-a-kind items you won't find in big box stores. Every product has a story.",
    },
    {
      icon: "🤝",
      title: "Support Local",
      description:
        "Your purchases directly support independent creators and small business owners in your community.",
    },
    {
      icon: "⭐",
      title: "Verified Quality",
      description:
        "Every seller is vetted for quality and service. Shop with confidence knowing we stand behind them.",
    },
  ];

  test("displays the main heading", () => {
    render(<WhyShop />);
    expect(
      screen.getByRole("heading", { name: /Why Shop With Us?/i }),
    ).toBeInTheDocument();
  });

  test("displays correct feature information", () => {
    render(<WhyShop />);

    mockFeatures.forEach((feature) => {
      expect(screen.getByText(feature.icon)).toBeInTheDocument();
      expect(screen.getByText(feature.title)).toBeInTheDocument();
      expect(screen.getByText(feature.description)).toBeInTheDocument();
    });
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<WhyShop />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("has proper accessibility attributes", () => {
    render(<WhyShop />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Why Shop With Us?",
    );
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(
      mockFeatures.length,
    );
  });
});
