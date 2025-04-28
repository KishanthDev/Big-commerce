import { render, waitFor } from '@testing-library/react';
import BusinessPage, { generateStaticParams } from './page';
import { notFound } from 'next/navigation';
import { slugify } from '@lib/slugify';

// Mock the imported JSON data
jest.mock('../../../../../../data/detailed_categories_with_subcategories.json', () => [
  {
    category: 'Home Services',
    subcategories: [
      {
        name: 'Plumbing',
        businesses: [
          {
            businessName: 'Ace Plumbing',
            description: 'Top plumbing services',
            services: ['Pipe Repair', 'Drain Cleaning'],
            reviews: [{ rating: 5, comment: 'Great service' }],
            location: {
              address: '123 Main St',
              city: 'Springfield',
              state: 'IL',
              postalCode: '62701',
            },
            contact: {
              phone: '555-1234',
              email: 'contact@aceplumbing.com',
              website: 'https://aceplumbing.com',
            },
          },
        ],
      },
    ],
  },
]);

jest.mock('../../../../../../data/data.json', () => ({
  businessHours: {
    Monday: '9:00 AM - 5:00 PM',
  },
  certifications: ['Licensed Plumber'],
  images: ['image1.jpg'],
}));

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

// Mock all components
jest.mock('@components/services/Navbar', () => ({
  Navbar: ({ businessName }: { businessName: string }) => (
    <div data-testid="navbar">{businessName}</div>
  ),
}));

jest.mock('@components/services/HeroSection', () => ({
  default: ({ title, description }: { title: string; description: string }) => (
    <div data-testid="hero-section">
      {title} - {description}
    </div>
  ),
}));

jest.mock('@components/services/ServicesSection', () => ({
  default: ({ services }: { services: string[] }) => (
    <div data-testid="services-section">{services.join(', ')}</div>
  ),
}));

jest.mock('@components/services/CertificationsSection', () => ({
  default: ({ certifications }: { certifications: string[] }) => (
    <div data-testid="certifications-section">{certifications.join(', ')}</div>
  ),
}));

jest.mock('@components/services/ReviewsSection', () => ({
  default: ({ reviews }: { reviews: { rating: number; comment: string }[] }) => (
    <div data-testid="reviews-section">{reviews[0].comment}</div>
  ),
}));

jest.mock('@components/services/GallerySection', () => ({
  default: ({ images }: { images: string[] }) => (
    <div data-testid="gallery-section">{images.join(', ')}</div>
  ),
}));

jest.mock('@components/services/ContactSection', () => ({
  default: ({
    address,
    city,
    state,
    postalCode,
    phone,
    email,
    website,
  }: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    phone: string;
    email: string;
    website: string;
  }) => (
    <div data-testid="contact-section">
      {address}, {city}, {state} {postalCode}, {phone}, {email}, {website}
    </div>
  ),
}));

jest.mock('@components/services/BusinessHoursSection', () => ({
  default: ({ businessHours }: { businessHours: Record<string, string> }) => (
    <div data-testid="business-hours-section">{businessHours.Monday}</div>
  ),
}));

jest.mock('@components/services/AdditionalInfoSection', () => ({
  default: () => <div data-testid="additional-info-section">Info</div>,
}));

jest.mock('@/components/services/Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));

// Mock slugify
jest.mock('../../../../lib/slugify', () => ({
  slugify: jest.fn((str: string) => str.toLowerCase().replace(/\s+/g, '-')),
}));

describe('BusinessPage', () => {
  const params = {
    categorySlug: 'home-services',
    subcategorySlug: 'plumbing',
    businessSlug: 'ace-plumbing',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('generateStaticParams', () => {
    it('generates static params for all businesses', async () => {
      const result = await generateStaticParams();
      expect(result).toEqual([
        {
          categorySlug: 'home-services',
          subcategorySlug: 'plumbing',
          businessSlug: 'ace-plumbing',
        },
      ]);
      expect(slugify).toHaveBeenCalledTimes(3); // Once for category, subcategory, business
    });
  });

  describe('BusinessPage Component', () => {

    it('calls notFound when category is not found', async () => {
      const invalidParams = {
        ...params,
        categorySlug: 'invalid-category',
      };
      render(<BusinessPage params={Promise.resolve(invalidParams)} />);

      await waitFor(() => {
        expect(notFound).toHaveBeenCalled();
      });
    });

    it('calls notFound when business is not found', async () => {
      const invalidParams = {
        ...params,
        businessSlug: 'invalid-business',
      };
      render(<BusinessPage params={Promise.resolve(invalidParams)} />);

      await waitFor(() => {
        expect(notFound).toHaveBeenCalled();
      });
    });
  });
});