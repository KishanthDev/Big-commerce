import { render, screen } from "@testing-library/react";
import FeaturedStores from "./FeaturedStores";

describe("FeaturedStores", () => {

  test("renders without crashing", () => {
    render(<FeaturedStores />);
    expect(screen.getByText("Featured Stores")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<FeaturedStores />);
    expect(asFragment()).toMatchSnapshot();
  });
});
