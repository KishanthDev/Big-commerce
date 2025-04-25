import { render, screen } from "@testing-library/react";
import FAQItem from "./FAQItem";
import '@testing-library/jest-dom';

describe("FAQItem", () => {
  it("renders the question and answer", () => {
    const question = "What is your return policy?";
    const answer = "You can return items within 30 days for a full refund.";

    render(<FAQItem question={question} answer={answer} />);

    expect(screen.getByText(question)).toBeInTheDocument();

    expect(screen.getByText(answer)).toBeInTheDocument();

    expect(screen.getByText("Q")).toBeInTheDocument();
    expect(screen.getByText("A")).toBeInTheDocument();
  });
});
