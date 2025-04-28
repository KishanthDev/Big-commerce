import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  it('renders the section with correct Tailwind classes', () => {
    const section = screen.getByRole('region');
    expect(section).toHaveClass(
      'bg-gradient-to-br',
      'from-blue-500/40',
      'dark:from-blue-700/30',
      'via-transparent',
      'to-transparent',
      'text-white',
      'py-12',
      'md:py-16',
      'lg:py-28',
    );
  });

  it('renders the container div with correct Tailwind classes', () => {
    const container = screen.getByRole('region').firstChild;
    expect(container).toHaveClass('max-w-6xl', 'mx-auto', 'px-5', 'text-center');
  });

  it('renders the heading with correct text and Tailwind classes', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent("We're Here to Help");
    expect(heading).toHaveClass(
      'text-3xl',
      'text-primary',
      'sm:text-4xl',
      'font-bold',
      'mb-4',
    );
  });

  it('renders the paragraph with correct text and Tailwind classes', () => {
    const paragraph = screen.getByText(/Need assistance or have questions about MarketHub/);
    expect(paragraph).toHaveTextContent(
      'Need assistance or have questions about MarketHub? Our support team is ready to help you succeed.',
    );
    expect(paragraph).toHaveClass(
      'text-lg',
      'text-primary',
      'sm:text-xl',
      'max-w-2xl',
      'mx-auto',
      'opacity-90',
      'mb-6',
    );
  });
});