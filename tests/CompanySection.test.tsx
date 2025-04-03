import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import YourCompanySection from "@/components/CompanySection";

jest.mock("./ImageSlider", () => {
    const MockImageSlider = () => <div data-testid="image-slider" />;
    MockImageSlider.displayName = "MockImageSlider";
    return MockImageSlider;
  });
  

describe("YourCompanySection Component", () => {
  it("renders heading and description correctly", () => {
    render(<YourCompanySection />);

    expect(
      screen.getByText("Your company is in some seriously great company.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Stack your tech — with total freedom to integrate your preferred partners.")
    ).toBeInTheDocument();
  });

  it("renders the 'VIEW ALL PARTNERS' button", () => {
    render(<YourCompanySection />);

    const button = screen.getByRole("button", { name: /view all partners/i });
    expect(button).toBeInTheDocument();
  });

  it("renders the ImageSlider component", () => {
    render(<YourCompanySection />);
    
    expect(screen.getByTestId("image-slider")).toBeInTheDocument();
  });

  it("triggers button click event", async () => {
    render(<YourCompanySection />);

    const button = screen.getByRole("button", { name: /view all partners/i });

    await userEvent.click(button);
    expect(button).toBeInTheDocument(); // Ensures no errors on click
  });
});
