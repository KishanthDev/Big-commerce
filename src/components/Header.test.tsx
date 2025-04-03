import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/Header";
import "@testing-library/jest-dom";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock("next/link", () => ({ children, href }: { children: React.ReactNode; href: string }) => (
  <a href={href}>{children}</a>
));

describe("Header Component", () => {
  test("renders header with logo and navigation links", () => {
    render(<Header />);

    // Logo
    expect(screen.getByAltText("Logo")).toBeInTheDocument();

    // Check if navigation links exist
    const navLinks = ["Platform", "Services", "Resources", "Pricing"];
    navLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });

    // Request a Demo Button
    expect(screen.getByText("REQUEST A DEMO")).toBeInTheDocument();
  });
  
  test("renders dropdown for country selection", () => {
    render(<Header />);
    
    // Select dropdown should exist
    expect(screen.getByLabelText("Select country")).toBeInTheDocument();
  });
});
