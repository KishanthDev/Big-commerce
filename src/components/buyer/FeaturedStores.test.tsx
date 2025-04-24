import { render, screen } from "@testing-library/react";
import FeaturedStores from "./FeaturedStores";

describe("FeaturedStores", () => {
  const mockStores = [
    {
      name: "Woodland Crafts",
      description:
        "Handcrafted wooden home accessories made from sustainable materials.",
      rating: "4.9 (128 reviews)",
      location: "Portland, OR",
    },
    {
      name: "Modern Threads",
      description:
        "Minimalist clothing with a focus on quality fabrics and ethical production.",
      rating: "4.7 (93 reviews)",
      location: "Austin, TX",
    },
    {
      name: "Tech Innovations",
      description:
        "Unique tech accessories and gadgets for the modern lifestyle.",
      rating: "4.8 (215 reviews)",
      location: "San Francisco, CA",
    },
  ];

  test("renders without crashing", () => {
    render(<FeaturedStores />);
    expect(screen.getByText("Featured Stores")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<FeaturedStores />);
    expect(asFragment()).toMatchSnapshot();
  });
});
