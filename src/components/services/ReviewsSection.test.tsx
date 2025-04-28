import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReviewsSection from "./ReviewsSection";
import type { Review } from "../../../types/data";

describe("ReviewsSection", () => {
  const mockReviews: Review[] = [
    {
      author: "John Doe",
      rating: 5,
      comment: "Excellent service and friendly staff!",
    },
    {
      author: "Jane Smith",
      rating: 4,
      comment: "Very good experience overall.",
    },
  ];

  it("renders the heading, all reviews with author, rating stars, and comments", () => {
    render(<ReviewsSection reviews={mockReviews} />);

    // Check heading
    const heading = screen.getByRole("heading", { name: /customer reviews/i });
    expect(heading).toBeInTheDocument();

    // Check each review author, stars, and comment
    mockReviews.forEach(({ author, rating, comment }) => {
      expect(screen.getByText(author)).toBeInTheDocument();
      expect(screen.getByText(comment)).toBeInTheDocument();
      // Rating stars (★ repeated)
      expect(screen.getByText("★".repeat(rating))).toBeInTheDocument();
    });
  });
});
