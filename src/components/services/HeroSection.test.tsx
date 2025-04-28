import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection'; // adjust import path as needed
import { Button } from '@heroui/button';

// Mock the Button component
jest.mock('@heroui/button', () => ({
  Button: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <button className={className}>{children}</button>
  ),
}));

describe('HeroSection Component', () => {
  const mockProps = {
    title: 'Professional Auto Services',
    description: 'Quality repairs for all vehicle makes and models',
  };

  test('renders with default values when no props provided', () => {
    render(<HeroSection title="" description="" />);
    
    expect(screen.getByText('Welcome to Our Auto Repair Shop')).toBeInTheDocument();
    expect(screen.getByText(/We provide top-notch auto repair services/)).toBeInTheDocument();
  });

  test('renders with provided props', () => {
    render(<HeroSection {...mockProps} />);
    
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  test('has correct layout and styling', () => {
    render(<HeroSection {...mockProps} />);
    
    const section = screen.getByTestId('hero-section');
    expect(section).toHaveClass(
      'h-[400px]',
      'md:h-[400px]',
      'bg-cover',
      'bg-center',
      'relative',
      'flex',
      'flex-col',
      'justify-center',
      'items-center',
      'text-white',
      'text-center',
      'p-4',
      'dark:text-gray-200'
    );
  });

  test('renders overlay with correct styling', () => {
    render(<HeroSection {...mockProps} />);
    
    const overlay = screen.getByTestId('hero-overlay');
    expect(overlay).toHaveClass(
      'dark:bg-gray-900',
      'bg-gray-400',
      'bg-opacity-50',
      'absolute',
      'inset-0',
      'z-0'
    );
  });

  test('renders rating section', () => {
    render(<HeroSection {...mockProps} />);
    
    expect(screen.getByText('★★★★★')).toBeInTheDocument();
    expect(screen.getByText('4.8/5 based on 127 reviews')).toBeInTheDocument();
  });

  test('renders both buttons', () => {
    render(<HeroSection {...mockProps} />);
    
    const scheduleButton = screen.getByRole('button', { name: 'Schedule Service' });
    expect(scheduleButton).toBeInTheDocument();
    expect(scheduleButton).toHaveClass('bg-red-600', 'rounded-2xl', 'text-white');
    
    const quoteButton = screen.getByRole('button', { name: 'Request Quote' });
    expect(quoteButton).toBeInTheDocument();
    expect(quoteButton).toHaveClass('bg-white', 'rounded-2xl', 'dark:bg-gray-100');
  });

  test('applies dark mode classes correctly', () => {
    render(<HeroSection {...mockProps} />);
    
    const section = screen.getByTestId('hero-section');
    expect(section).toHaveClass('dark:text-gray-200');
    
    const overlay = screen.getByTestId('hero-overlay');
    expect(overlay).toHaveClass('dark:bg-gray-900');
    
    const quoteButton = screen.getByRole('button', { name: 'Request Quote' });
    expect(quoteButton).toHaveClass('dark:bg-gray-100', 'dark:text-black');
  });

  test('content container has correct styling', () => {
    render(<HeroSection {...mockProps} />);
    
    const container = screen.getByTestId('hero-content');
    expect(container).toHaveClass(
      'relative',
      'z-10',
      'max-w-4xl',
      'px-4'
    );
  });

  test('title has correct styling', () => {
    render(<HeroSection {...mockProps} />);
    
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveClass(
      'text-3xl',
      'text-primary',
      'sm:text-4xl',
      'md:text-5xl',
      'font-bold',
      'mb-2',
      'md:mb-4'
    );
  });

  test('description has correct styling', () => {
    render(<HeroSection {...mockProps} />);
    
    const description = screen.getByText(mockProps.description);
    expect(description).toHaveClass(
      'text-base',
      'text-primary',
      'sm:text-lg',
      'md:text-xl',
      'max-w-[800px]'
    );
  });
});