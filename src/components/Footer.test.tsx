import { render, screen, fireEvent ,waitFor} from "@testing-library/react";
import Footer from "@/components/Footer";
import "@testing-library/jest-dom";

describe("Footer Component", () => {
  it("renders all section titles", () => {
    render(<Footer />);

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

    sectionTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("renders social media icons", () => {
    render(<Footer />);

    expect(screen.getByRole("img", { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /youtube/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /pinterest/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /instagram/i })).toBeInTheDocument();
  });

  it("renders the copyright text", () => {
    render(<Footer />);
    expect(
      screen.getByText("© Copyright 2003 - 2025 BigCommerce Pty. Ltd.")
    ).toBeInTheDocument();
  });

  it("renders privacy policy and legal links", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", { name: /privacy policy/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /website terms of use/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /master services agreement/i })
    ).toBeInTheDocument();
  });

  it("toggles sections in mobile view", async () => {
    render(<Footer />);
  
    const productButton = screen.getByRole("button", { name: "PRODUCT" });
    fireEvent.click(productButton);
  
    // Wait for the element to be visible
    await waitFor(() => {
      expect(screen.getByText("Features")).toBeVisible();
    });
  
    fireEvent.click(productButton);
  
    // Wait for the element to be hidden
    await waitFor(() => {
      expect(screen.getByText("Features")).not.toBeVisible();
    });
  });
  it("toggles sections in mobile view", async () => {
    render(<Footer />);
  
    const productButton = screen.getByRole("button", { name: "PRODUCT" });
    fireEvent.click(productButton);
  
    // Wait for the element to be visible
    await waitFor(() => {
      expect(screen.getByText("Features")).toBeVisible();
    });
  
    fireEvent.click(productButton);
  
    await waitFor(() => {
        expect(screen.queryByText("Features")).not.toBeVisible();
      });
      
  });
    
});
