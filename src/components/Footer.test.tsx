import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Footer from "@/components/Footer";
import "@testing-library/jest-dom";


jest.mock("react-icons/fa", () => ({
  FaFacebookF: () => <svg data-testid="facebook-icon" />,
  FaLinkedinIn: () => <svg data-testid="linkedin-icon" />,
  FaYoutube: () => <svg data-testid="youtube-icon" />,
  FaPinterestP: () => <svg data-testid="pinterest-icon" />,
  FaInstagram: () => <svg data-testid="instagram-icon" />,
  FaChevronUp: () => <svg data-testid="chevron-up-icon" />,
  FaChevronDown: () => <svg data-testid="chevron-down-icon" />,
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: query.includes("max-width: 768px"),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  })),
});

const sectionTitles = [
  "PRODUCT",
  "PARTNERS",
  "CUSTOMERS",
  "RESOURCES",
  "USE CASE SOLUTIONS",
  "INDUSTRY SOLUTIONS",
  "COMPANY",
  "HELP CENTER",
];

const footerLinks = [
  "Features",
  "Services",
  "Enterprise Pricing",
  "Request a Demo",
  "Overview",
  "Become a Partner",
  "Find an Agency Partner",
  "Find a Technology Partner",
  "Affiliates",
  "Case Studies",
  "Store Examples",
  "Articles",
  "Guides & White Papers",
  "Webinars",
  "Podcast",
  "Reports",
  "Events",
  "Ecommerce Blog",
  "Developer Blog",
  "Free Tools",
  "Multi-Storefront",
  "Headless Commerce",
  "82B Wholesale",
  "Omnichannel",
  "International",
  "Commerce-as-a-Service",
];

describe("Footer Component", () => {
  it("renders all section titles in desktop view", () => {
    render(<Footer />);

    sectionTitles.forEach((title, index) => {
      expect(screen.getByTestId(`heading-${index}`)).toBeInTheDocument();
    });
  });

  it("renders social media icons", () => {
    render(<Footer />);
    
    expect(screen.getByTestId("facebook-icon")).toBeInTheDocument();
    expect(screen.getByTestId("linkedin-icon")).toBeInTheDocument();
    expect(screen.getByTestId("youtube-icon")).toBeInTheDocument();
    expect(screen.getByTestId("pinterest-icon")).toBeInTheDocument();
    expect(screen.getByTestId("instagram-icon")).toBeInTheDocument();
  });

  it("renders the copyright text", () => {
    render(<Footer />);
    expect(
      screen.getByText(/© Copyright 2003 - 2025 BigCommerce Pty. Ltd./i)
    ).toBeInTheDocument();
  });

  it("renders privacy policy and legal links", () => {
    render(<Footer />);

    const links = [
      "Privacy Policy",
      "Website Terms of Use",
      "Master Services Agreement",
      "Legal Archives",
      "Sitemap",
      "Cookie Settings",
    ];

    links.forEach((link) => {
      expect(screen.getByRole("link", { name: new RegExp(link, "i") })).toBeInTheDocument();
    });
  });

  it("renders footer links correctly", () => {
    render(<Footer />);

    footerLinks.forEach((link) => {
      expect(screen.getByTestId(`link-${link}`)).toBeInTheDocument();
    });
  });

  it("toggles sections in mobile view", async () => {
    Object.defineProperty(window, "innerWidth", { writable: true, value: 375 });
    window.dispatchEvent(new Event("resize"));

    render(<Footer />);

    const productButton = screen.getByTestId("toggle-0"); 
    fireEvent.click(productButton);

    expect(screen.getByTestId("link-Features")).toBeVisible();

    fireEvent.click(productButton);

    await waitFor(() => {
      expect(screen.queryByTestId("link-Features")).not.toBeInTheDocument();
    });
  });
});
