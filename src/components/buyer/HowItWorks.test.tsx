import { render, screen } from "@testing-library/react";
import HowItWorks from "./HowItWorks";

describe("HowItWorks Component", () => {
  const mockSteps = [
    {
      number: "1",
      title: "Sign Up",
      description:
        "Create your free account in minutes to start browsing our curated marketplace.",
    },
    {
      number: "2",
      title: "Browse Products",
      description:
        "Explore categories and discover sellers offering unique products in your area.",
    },
    {
      number: "3",
      title: "Start Shopping",
      description:
        "Purchase directly from sellers with secure checkout and local delivery options.",
    },
  ];

  test("displays the main heading", () => {
    render(<HowItWorks />);
    expect(
      screen.getByRole("heading", { name: /How It Works: 3 Simple Steps/i }),
    ).toBeInTheDocument();
  });

  test("displays correct step information", () => {
    render(<HowItWorks />);

    mockSteps.forEach((step) => {
      expect(screen.getByText(step.number)).toBeInTheDocument();
      expect(screen.getByText(step.title)).toBeInTheDocument();
      expect(screen.getByText(step.description)).toBeInTheDocument();
    });
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<HowItWorks />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("has proper accessibility attributes", () => {
    render(<HowItWorks />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "How It Works: 3 Simple Steps",
    );
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(
      mockSteps.length,
    );
  });
});
