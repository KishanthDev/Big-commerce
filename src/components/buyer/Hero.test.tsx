import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
import { ArrowRight } from "lucide-react";

jest.mock("lucide-react", () => ({
  ArrowRight: jest.fn(() => <svg data-testid="arrow-right" />),
}));

describe("Hero Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("displays the main heading", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /Discover Unique Products/i }),
    ).toBeInTheDocument();
  });

  test("shows the subheading text", () => {
    render(<Hero />);
    expect(
      screen.getByText(
        /Shop directly from independent creators and boutique stores/i,
      ),
    ).toBeInTheDocument();
  });

  test("renders the CTA button with correct text", () => {
    render(<Hero />);
    const button = screen.getByRole("button", { name: /Get Started/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Get Started");
  });

  test("includes ArrowRight icon in the button", () => {
    render(<Hero />);
    expect(ArrowRight).toHaveBeenCalled();
    expect(screen.getByTestId("arrow-right")).toBeInTheDocument();
  });

  test("renders the image placeholder", () => {
    render(<Hero />);
    expect(screen.getByText(/Shopping Experience Image/i)).toBeInTheDocument();
  });

  test("button has correct styling classes", () => {
    render(<Hero />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("border-primary");
    expect(button).toHaveClass("text-primary");
    expect(button).toHaveClass("rounded-xl");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Hero />);
    expect(asFragment()).toMatchSnapshot();
  });
});
