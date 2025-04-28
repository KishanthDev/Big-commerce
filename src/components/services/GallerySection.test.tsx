import React from 'react';
import { render, screen } from '@testing-library/react';
import GallerySection from './GallerySection'; // adjust import path if needed
import { GalleryImage } from '../../../types/data';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} />;
  },
}));

describe('GallerySection Component', () => {
  const mockImages: GalleryImage[] = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
  ];

  test('renders the component with title', () => {
    render(<GallerySection images={mockImages} />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Our Shop Gallery',
      })
    ).toBeInTheDocument();
  });

  test('renders all gallery images', () => {
    render(<GallerySection images={mockImages} />);
    const images = screen.getAllByTestId('image-container');
    expect(images).toHaveLength(mockImages.length);
  });

  test('applies correct grid layout', () => {
    render(<GallerySection images={mockImages} />);
    const grid = screen.getByTestId('gallery-grid');
    expect(grid).toHaveClass(
      'grid',
      'grid-cols-2',
      'sm:grid-cols-4',
      'gap-3',
      'md:gap-4',
      'mt-4',
      'md:mt-6'
    );
  });

  test('each image container has correct styling', () => {
    render(<GallerySection images={mockImages} />);
    const containers = screen.getAllByTestId('image-container');

    containers.forEach((container) => {
      expect(container).toHaveClass(
        'aspect-square',
        'overflow-hidden',
        'rounded-lg',
        'bg-gray-100',
        'dark:bg-gray-700',
        'shadow-md'
      );
    });
  });

  test('images have correct props and styling', () => {
    render(<GallerySection images={mockImages} />);
    const images = screen.getAllByRole('img');

    images.forEach((img, idx) => {
      expect(img).toHaveAttribute('alt', `Gallery ${idx + 1}`);
      expect(img).toHaveAttribute('src', mockImages[idx]);
      expect(img).toHaveClass(
        'w-full',
        'h-full',
        'object-cover',
        'transition-transform',
        'hover:scale-105'
      );
    });
  });

  test('applies dark mode classes correctly', () => {
    render(<GallerySection images={mockImages} />);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveClass('dark:text-white');

    const containers = screen.getAllByTestId('image-container');
    expect(containers[0]).toHaveClass('dark:bg-gray-700');
  });

  test('renders empty state when no images provided', () => {
    render(<GallerySection images={[]} />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.queryAllByTestId('image-container')).toHaveLength(0);
  });

  test('images have correct dimensions', () => {
    render(<GallerySection images={mockImages} />);
    const images = screen.getAllByRole('img');

    images.forEach((img) => {
      expect(img).toHaveAttribute('height', '200');
      expect(img).toHaveAttribute('width', '200');
    });
  });
});
