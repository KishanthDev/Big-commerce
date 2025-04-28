import React from 'react';
import { render, screen } from '@testing-library/react';
import ContentSection from './ContentSection';
import contactData from '../../../data/content_section_data.json';

// Mock the child components
jest.mock('./BlogPostCard', () => ({
  __esModule: true,
  default: ({ title }: { title: string }) => <div data-testid="blog-post-card">{title}</div>,
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe('ContentSection Component', () => {
  const { blogPosts, categories, featuredPosts } = contactData;

  test('renders all blog posts', () => {
    render(<ContentSection />);
    
    const blogPostCards = screen.getAllByTestId('blog-post-card');
    expect(blogPostCards).toHaveLength(blogPosts.length);
    
    blogPosts.forEach(post => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });

  test('renders categories section correctly', () => {
    render(<ContentSection />);
    
    expect(screen.getByText('Categories')).toBeInTheDocument();
    
    const categoryLinks = screen.getAllByTestId('category-link');
    expect(categoryLinks).toHaveLength(categories.length);
    
    categories.forEach(category => {
      expect(screen.getByText(category.name)).toBeInTheDocument();
      expect(screen.getByText(category.count.toString())).toBeInTheDocument();
    });
  });

  test('renders popular articles section correctly', () => {
    render(<ContentSection />);
    
    expect(screen.getByText('Popular Articles')).toBeInTheDocument();
    
    const featuredPostItems = screen.getAllByTestId('featured-post');
    expect(featuredPostItems).toHaveLength(featuredPosts.length);
    
    featuredPosts.forEach(post => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.getByText(post.date)).toBeInTheDocument();
    });
  });

  test('applies correct responsive layout', () => {
    render(<ContentSection />);
    
    const mainContent = screen.getByTestId('main-content');
    expect(mainContent).toHaveClass('lg:w-3/4');
    
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass('lg:w-1/4');
  });

  test('renders placeholder when no image in featured posts', () => {
    const mockFeaturedPosts = [...featuredPosts];
    (mockFeaturedPosts[0].image as string | undefined) = undefined;
    
    jest.mock('../../../data/content_section_data.json', () => ({
      blogPosts: [],
      categories: [],
      featuredPosts: mockFeaturedPosts,
    }));
    
    render(<ContentSection />);
    
    expect(screen.getByText('Pic')).toBeInTheDocument();
  });

  test('renders image when available in featured posts', () => {
    render(<ContentSection />);
    
    const images = screen.getAllByRole('img');
    const featuredPostWithImage = featuredPosts.find(post => post.image);
    
    if (featuredPostWithImage) {
      expect(images.length).toBeGreaterThan(0);
    }
  });

  test('applies correct styling to all sections', () => {
    render(<ContentSection />);
    
    const categorySection = screen.getByTestId('categories-section');
    expect(categorySection).toHaveClass(
      'bg-white',
      'rounded-lg',
      'shadow-sm',
      'p-6',
      'mb-8'
    );
    
    const featuredSection = screen.getByTestId('featured-section');
    expect(featuredSection).toHaveClass(
      'bg-white',
      'rounded-lg',
      'shadow-sm',
      'p-6'
    );
  });
});