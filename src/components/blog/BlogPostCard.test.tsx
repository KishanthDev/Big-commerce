import React from "react";
import { render, screen } from "@testing-library/react";
import BlogPostCard from "./BlogPostCard";

// Mock the next/image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} />;
  },
}));

describe("BlogPostCard", () => {
  const mockProps = {
    image: "/mock-image.jpg",
    date: "April 28, 2025",
    author: "John Doe",
    category: "Technology",
    title: "How to Test Components in React",
    excerpt: "This is an example of how to test React components using Jest and React Testing Library.",
    link: "/blog/how-to-test-react-components",
  };

  test("renders the component with image", () => {
    render(<BlogPostCard {...mockProps} />);
    
    const image = screen.getByAltText(mockProps.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProps.image);
    expect(image).toHaveClass("object-cover");
  });

  test("renders the component without image and shows fallback text", () => {
    render(<BlogPostCard {...{ ...mockProps, image: undefined }} />);
    
    const fallbackText = screen.getByText("[Blog Post Image]");
    expect(fallbackText).toBeInTheDocument();
  });

  test("renders the date, author, and category", () => {
    render(<BlogPostCard {...mockProps} />);
    
    expect(screen.getByText(`📆 ${mockProps.date}`)).toBeInTheDocument();
    expect(screen.getByText(`👤 ${mockProps.author}`)).toBeInTheDocument();
    expect(screen.getByText(`📂 ${mockProps.category}`)).toBeInTheDocument();
  });

  test("renders the title as a link", () => {
    render(<BlogPostCard {...mockProps} />);
    
    const titleLink = screen.getByRole("link", { name: mockProps.title });
    expect(titleLink).toBeInTheDocument();
    expect(titleLink).toHaveAttribute("href", mockProps.link);
  });

  test("renders the excerpt", () => {
    render(<BlogPostCard {...mockProps} />);
    
    const excerpt = screen.getByText(mockProps.excerpt);
    expect(excerpt).toBeInTheDocument();
  });

  test("renders 'Read More' link", () => {
    render(<BlogPostCard {...mockProps} />);
    
    const readMoreLink = screen.getByRole("link", { name: /Read More →/i });
    expect(readMoreLink).toBeInTheDocument();
    expect(readMoreLink).toHaveAttribute("href", mockProps.link);
  });
});
