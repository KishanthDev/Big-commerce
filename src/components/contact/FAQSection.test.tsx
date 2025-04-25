import { render, screen } from "@testing-library/react";
import FAQSection from "./FAQSection";
import '@testing-library/jest-dom';
import faqs from "../../../data/faq.json";

// Mock data for testing
jest.mock("../../../data/faq.json", () => [
  {
    question: "What is your return policy?",
    answer: "You can return items within 30 days for a full refund."
  },
  {
    question: "How do I contact support?",
    answer: "You can contact support via email at support@markethub.com."
  }
]);

describe("FAQSection", () => {
  it("renders FAQ questions and answers", () => {
    render(<FAQSection />);

    // Check if the FAQ questions are rendered
    expect(screen.getByText("What is your return policy?")).toBeInTheDocument();
    expect(screen.getByText("How do I contact support?")).toBeInTheDocument();

    // Check if the FAQ answers are rendered
    expect(screen.getByText("You can return items within 30 days for a full refund.")).toBeInTheDocument();
    expect(screen.getByText("You can contact support via email at support@markethub.com.")).toBeInTheDocument();
  });



  it("displays the section title correctly", () => {
    render(<FAQSection />);

    // Check if the title "Frequently Asked Questions" is rendered
    expect(screen.getByText("Frequently Asked Questions")).toBeInTheDocument();
  });
});
