import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/header/Header";
import "@testing-library/jest-dom";


/* 
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock("next/link", () => ({ children, href }: { children: React.ReactNode; href: string }) => (
  <a href={href}>{children}</a>
)); */

describe("Header Component", () => {
  test("renders header with logo and navigation links", () => {
    render(<Header />);

    expect(screen.getByAltText("Logo")).toBeInTheDocument();

    const navLinks = ["Platform", "Services", "Resources", "Pricing"];
    navLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });

    expect(screen.getByText("REQUEST A DEMO")).toBeInTheDocument();
  });

  test("toggles mobile menu when menu button is clicked", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", { name: "menu" });

    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();
  });




  test("renders dropdown for country selection", () => {
    render(<Header />);

    // Select dropdown should exist
    expect(screen.getByLabelText("Select country")).toBeInTheDocument();
  });
});
