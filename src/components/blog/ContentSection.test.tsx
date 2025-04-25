import React from "react";
import { render, screen } from "@testing-library/react";
import ContentSection from "./ContentSection";
import contactData from "../../../data/content_section_data.json";
import "@testing-library/jest-dom";

// ✅ Mock Next.js Image without triggering lint
const MockNextImage = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
);
MockNextImage.displayName = "MockNextImage";

jest.mock("next/image", () => ({
  __esModule: true,
  default: MockNextImage,
}));

// ✅ Mock BlogPostCard with displayName
const MockBlogPostCard = ({ title }: { title: string }) => (
  <div data-testid="blog-post-card">{title}</div>
);
MockBlogPostCard.displayName = "MockBlogPostCard";

jest.mock("./BlogPostCard", () => MockBlogPostCard);

describe("ContentSection", () => {
  it("renders all blog posts", () => {
    render(<ContentSection />);
    contactData.blogPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });

    const cards = screen.getAllByTestId("blog-post-card");
    expect(cards.length).toBe(contactData.blogPosts.length);
  });

  it("renders categories with correct name and count", () => {
    render(<ContentSection />);
    contactData.categories.forEach((cat) => {
      expect(screen.getByText(cat.name)).toBeInTheDocument();
      expect(screen.getByText(cat.count.toString())).toBeInTheDocument();
    });
  });

  it("renders popular articles with title and date", () => {
    render(<ContentSection />);
    contactData.featuredPosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.getByText(post.date)).toBeInTheDocument();
    });
  });

  it("renders image or fallback for each popular post", () => {
    render(<ContentSection />);
    contactData.featuredPosts.forEach((post) => {
      if (post.image) {
        expect(screen.getByAltText(post.title)).toBeInTheDocument();
      } else {
        expect(screen.getAllByText("Pic").length).toBeGreaterThan(0);
      }
    });
  });

  it("renders fallback 'Pic' when featured post image is missing", async () => {
    const modifiedData = {
      ...contactData,
      featuredPosts: [
        ...contactData.featuredPosts.slice(0, 1),
        { ...contactData.featuredPosts[0], image: null },
      ],
    };

    jest.resetModules();
    jest.doMock("../../../data/content_section_data.json", () => modifiedData);

    const { default: ModifiedContentSection } = await import("./ContentSection");
    render(<ModifiedContentSection />);

    expect(screen.getByText("Pic")).toBeInTheDocument();
  });
});
