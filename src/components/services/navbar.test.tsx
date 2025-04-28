import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './navbar';

// Mock the HeroUI navbar components
jest.mock('@heroui/navbar', () => ({
  Navbar: ({ children, className, maxWidth, position }: any) => (
    <nav className={className} data-maxwidth={maxWidth} data-position={position}>
      {children}
    </nav>
  ),
  NavbarBrand: ({ children, as: As, className }: any) => (
    <As className={className}>{children}</As>
  ),
  NavbarContent: ({ children, className, justify }: any) => (
    <div className={className} data-justify={justify}>
      {children}
    </div>
  ),
  NavbarItem: ({ children, className }: any) => (
    <div className={className}>{children}</div>
  ),
  NavbarMenu: ({ children }: any) => <div data-testid="navbar-menu">{children}</div>,
  NavbarMenuItem: () => <div data-testid="navbar-menu-item" />,
  NavbarMenuToggle: () => <button data-testid="navbar-menu-toggle">Toggle</button>,
}));

// Mock NextLink
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, className }: any) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

// Mock DarkModeToggle
jest.mock('../header/ModeToggle', () => ({
  DarkModeToggle: () => <div data-testid="dark-mode-toggle" />,
}));

describe('Navbar Component', () => {
  const mockBusinessName = 'Auto Repair Pro';
  const mockBusinessNameWithIcon = 'Car Wash';

  test('renders with business name', () => {
    render(<Navbar businessName={mockBusinessName} />);
    expect(screen.getByText(mockBusinessName)).toBeInTheDocument();
  });


  test('does not render icon when not in categoryIconMap', () => {
    render(<Navbar businessName="Unknown Business" />);
    expect(screen.queryByTestId('category-icon')).not.toBeInTheDocument();
  });

  test('has correct navbar styling', () => {
    render(<Navbar businessName={mockBusinessName} />);
    const navbar = screen.getByRole('navigation');
    
    expect(navbar).toHaveClass(
      'h-16',
      'z-50',
      'backdrop-blur-md',
      'bg-white/30',
      'dark:bg-black/30',
      'border-b',
      'border-gray-200',
      'dark:border-gray-800'
    );
    
    expect(navbar).toHaveAttribute('data-maxwidth', 'xl');
    expect(navbar).toHaveAttribute('data-position', 'sticky');
  });

  test('renders NavbarBrand with correct link', () => {
    render(<Navbar businessName={mockBusinessName} />);
    const link = screen.getByRole('link');
    
    expect(link).toHaveAttribute('href', '/');
    expect(link).toHaveClass('flex', 'justify-start', 'items-center', 'gap-1');
  });

  test('renders desktop dark mode toggle', () => {
    render(<Navbar businessName={mockBusinessName} />);
    expect(screen.getByTestId('dark-mode-toggle')).toBeInTheDocument();
  });

  test('renders mobile menu toggle', () => {
    render(<Navbar businessName={mockBusinessName} />);
    expect(screen.getByTestId('navbar-menu-toggle')).toBeInTheDocument();
  });

  test('renders navbar menu', () => {
    render(<Navbar businessName={mockBusinessName} />);
    expect(screen.getByTestId('navbar-menu')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-menu-item')).toBeInTheDocument();
  });



  test('applies dark mode classes', () => {
    render(<Navbar businessName={mockBusinessName} />);
    const navbar = screen.getByRole('navigation');
    
    expect(navbar).toHaveClass('dark:bg-black/30', 'dark:border-gray-800');
  });
});