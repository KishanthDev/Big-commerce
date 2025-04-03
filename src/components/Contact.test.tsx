import { render, screen } from "@testing-library/react";
import Contact from "@/components/Contact";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: any) => <img {...props} />,
  }));


describe("Contact Component", () => {
  it("renders the main heading", () => {
    render(<Contact />);
    expect(screen.getByText("Better tools mean better results.")).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Contact />);
    expect(
      screen.getByText(
        "Our numbers speak for themselves (but we'd rather speak with you). Connect with our team, and let's talk about your unique goals."
      )
    ).toBeInTheDocument();
  });

  it("renders the 'Contact Us' button", () => {
    render(<Contact />);
    const button = screen.getByRole("link", { name: /contact us/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "#");
  });

  it("renders partner logos and descriptions", () => {
    render(<Contact />);
    
    expect(screen.getByAltText("feedonomics")).toBeInTheDocument();
    expect(screen.getByAltText("makeswift")).toBeInTheDocument();

    expect(
      screen.getByText(
        "The market leader in product feed management. Reach more people, drive more sales, sync, automate, and optimize your data across 150+ leading marketplaces, social commerce, and advertising channels."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "The intuitive visual editor that your whole team will love. Use your design system and custom components in our drag-and-drop builder to create stunning websites, landing pages, and digital experiences."
      )
    ).toBeInTheDocument();
  });

  it("renders 'Learn More' links for each partner", () => {
    render(<Contact />);
    const links = screen.getAllByRole("link", { name: /learn more/i });
    expect(links).toHaveLength(2); // Should have two "Learn More" links
  });
});
