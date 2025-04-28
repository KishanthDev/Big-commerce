import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactSection from './ContactSection';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} />;
  },
}));

describe('ContactSection', () => {
  const mockProps = {
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    postalCode: '12345',
    phone: '(555) 123-4567',
    email: 'contact@example.com',
    website: 'https://example.com',
  };

  test('renders the component with title', () => {
    render(<ContactSection {...mockProps} />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Contact & Location',
      })
    ).toBeInTheDocument();
  });

  test('renders the map image with correct props', () => {
    render(<ContactSection {...mockProps} />);

    const mapImage = screen.getByAltText('Map');
    expect(mapImage).toBeInTheDocument();
    expect(mapImage).toHaveClass('w-full h-full object-cover');
    expect(mapImage).toHaveAttribute('src', '/api/placeholder/400/250');
    expect(mapImage).toHaveAttribute('height', '250');
    expect(mapImage).toHaveAttribute('width', '400');
  });
});
