import { render, screen, fireEvent } from "@testing-library/react";
import BusinessSolutions from "@/components/BusinessSolutions";

describe("BusinessSolutions Component", () => {
  it("renders heading and description correctly", () => {
    render(<BusinessSolutions />);

    expect(
      screen.getByText("Because your unique business needs are exactly that — yours.")
    ).toBeInTheDocument();

    expect(
      screen.getByText("We offer powerful, flexible solutions for every need, no matter the complexity. Simply put, we're built to scale. That means more growth for you.")
    ).toBeInTheDocument();
  });

  it("renders B2B section by default", () => {
    render(<BusinessSolutions />);
    
    expect(screen.getByRole("button", { name: "B2B" })).toHaveClass("bg-primary");
    expect(screen.getByRole("button", { name: "B2C" })).not.toHaveClass("bg-primary");
  });

  it("switches to B2C section when the B2C button is clicked", () => {
    render(<BusinessSolutions />);

    fireEvent.click(screen.getByRole("button", { name: "B2C" }));

    expect(screen.getByRole("button", { name: "B2C" })).toHaveClass("bg-primary");
    expect(screen.getByRole("button", { name: "B2B" })).not.toHaveClass("bg-primary");
  });

  it("switches back to B2B section when the B2B button is clicked", () => {
    render(<BusinessSolutions />);

    fireEvent.click(screen.getByRole("button", { name: "B2C" }));
    
    fireEvent.click(screen.getByRole("button", { name: "B2B" }));

    expect(screen.getByRole("button", { name: "B2B" })).toHaveClass("bg-primary");
    expect(screen.getByRole("button", { name: "B2C" })).not.toHaveClass("bg-primary");
  });
});
