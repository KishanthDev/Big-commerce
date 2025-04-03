import { render, screen } from "@testing-library/react";
import Business from "@/components/Business";

describe("Business Component", () => {
  test("renders image, heading, description, and button", () => {
    render(<Business />);

    const image = screen.getByAltText("Business Solutions");
    expect(image).toBeInTheDocument();
    
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("alt", "Business Solutions");

    expect(screen.getByText("SMALL BUSINESS")).toBeInTheDocument();

    expect(
      screen.getByText(/Every small business should think big/i)
    ).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /LEARN MORE/i });
    expect(button).toBeInTheDocument();
  });
});
