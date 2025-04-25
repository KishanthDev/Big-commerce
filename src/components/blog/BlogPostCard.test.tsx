import React from "react";
import { render, screen } from "@testing-library/react";
import BlogPostCard from "./BlogPostCard";
import "@testing-library/jest-dom";

const MockNextImage = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
);
MockNextImage.displayName = "MockNextImage";

jest.mock("next/image", () => ({
  __esModule: true,
  default: MockNextImage,
}));

const mockProps = {
  image: "/sample.jpg",
  date: "April 25, 2025",
  author: "Kisna",
  category: "Tech",
  title: "Understanding React Server Components",
  excerpt: "This post explores how React Server Components work in depth...",
  link: "/blog/react-server-components",
};

describe("BlogPostCard Component", () => {
  it("renders all content when image is provided", () => {
    render(<BlogPostCard {...mockProps} />);

    // Image alt text
    expect(screen.getByAltText(mockProps.title)).toBeInTheDocument();

    // Meta details
    expect(screen.getByText(`📆 ${mockProps.date}`)).toBeInTheDocument();
    expect(screen.getByText(`👤 ${mockProps.author}`)).toBeInTheDocument();
    expect(screen.getByText(`📂 ${mockProps.category}`)).toBeInTheDocument();

    // Title as link
    const titleLink = screen.getByRole("link", { name: mockProps.title });
    expect(titleLink).toHaveAttribute("href", mockProps.link);

    // Excerpt
    expect(screen.getByText(mockProps.excerpt)).toBeInTheDocument();

    // Read more link
    const readMore = screen.getByText("Read More →");
    expect(readMore).toHaveAttribute("href", mockProps.link);
  });

  it("renders placeholder when image is not provided", () => {
    const { image: _image, ...rest } = mockProps;
    render(<BlogPostCard {...rest} />);

    expect(screen.getByText("[Blog Post Image]")).toBeInTheDocument();
  });
});
