import React from 'react';
import { render, screen } from '@testing-library/react';
import CategoryPage from './CategoryPage';
import categoriesData from '../../../data/detailed_categories_with_subcategories.json';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import { categoryIconMap } from '@/components/icons/IconMap';
import Link from 'next/link';

// Mock the child components and dependencies
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, className }: any) => (
    <a href={href} className={className} data-testid="category-link">
      {children}
    </a>
  ),
}));

jest.mock('../breadcrumb/Breadcrumb', () => ({
  __esModule: true,
  default: () => <div data-testid="breadcrumb" />,
}));

jest.mock('@/app/lib/slugify', () => ({
  slugify: jest.fn((str) => str.toLowerCase().replace(/\s+/g, '-')),
}));

// Mock category icon map
jest.mock('@/components/icons/IconMap', () => ({
  categoryIconMap: {
    'Auto Repair': jest.fn(() => <svg data-testid="category-icon" />),
    // Add other category icons as needed
  },
}));

describe('CategoryPage Component', () => {
  const firstCategory = categoriesData[0];
  const firstSubcategory = firstCategory.subcategories[0];

  test('renders the main layout with correct structure', () => {
    render(<CategoryPage />);
    
    expect(screen.getByTestId('category-page')).toBeInTheDocument();
    expect(screen.getByTestId('main-content')).toBeInTheDocument();
  });

  test('renders breadcrumb component', () => {
    render(<CategoryPage />);
    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument();
  });

  test('renders search input', () => {
    render(<CategoryPage />);
    const searchInput = screen.getByPlaceholderText('Search categories, businesses, or services...');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveClass('dark:bg-gray-800', 'dark:border-gray-600');
  });

  test('renders category heading', () => {
    render(<CategoryPage />);
    expect(screen.getByText('Explore Categories')).toBeInTheDocument();
  });

  test('renders all categories from data', () => {
    render(<CategoryPage />);
    const categoryLinks = screen.getAllByTestId('category-link');
    expect(categoryLinks).toHaveLength(categoriesData.length);
  });

  test('renders category names and icons when available', () => {
    render(<CategoryPage />);
    
    categoriesData.forEach(category => {
      expect(screen.getByText(category.category.trim())).toBeInTheDocument();
      
      // Check if icon is rendered for categories that have one
      if (categoryIconMap[category.category.trim()]) {
        expect(screen.getAllByTestId('category-icon').length).toBeGreaterThan(0);
      }
    });
  });

  test('renders subcategories for each category', () => {
    render(<CategoryPage />);
    
    categoriesData.forEach(category => {
      category.subcategories.forEach(subcat => {
        expect(screen.getByText(subcat.name)).toBeInTheDocument();
      });
    });
  });

  test('applies correct responsive grid layout', () => {
    render(<CategoryPage />);
    const grid = screen.getByTestId('categories-grid');
    expect(grid).toHaveClass(
      'grid',
      'grid-cols-1',
      'sm:grid-cols-2',
      'md:grid-cols-3',
      'gap-6'
    );
  });

  test('applies dark mode classes correctly', () => {
    render(<CategoryPage />);
    
    const mainContainer = screen.getByTestId('category-page');
    expect(mainContainer).toHaveClass('dark:bg-black', 'dark:text-gray-100');
    
    const categoryLinks = screen.getAllByTestId('category-link');
    expect(categoryLinks[0]).toHaveClass(
      'dark:from-blue-700/30',
      'dark:bg-black',
      'dark:border-gray-700'
    );
    
    const subcategoryBadge = screen.getByText(firstSubcategory.name);
    expect(subcategoryBadge).toHaveClass('dark:bg-gray-700', 'dark:text-gray-200');
  });

  test('generates correct links for categories', () => {
    render(<CategoryPage />);
    const firstCategoryLink = screen.getAllByTestId('category-link')[0];
    expect(firstCategoryLink).toHaveAttribute(
      'href',
      `/subcategory/${firstCategory.category.toLowerCase().replace(/\s+/g, '-')}`
    );
  });

  test('applies correct styling to category cards', () => {
    render(<CategoryPage />);
    const firstCategoryLink = screen.getAllByTestId('category-link')[0];
    
    expect(firstCategoryLink).toHaveClass(
      'bg-gradient-to-tl',
      'from-blue-500/40',
      'bg-white',
      'border',
      'border-gray-300',
      'p-4',
      'rounded-md',
      'hover:shadow-md',
      'transition'
    );
  });

  test('applies correct styling to subcategory badges', () => {
    render(<CategoryPage />);
    const subcategoryBadge = screen.getByText(firstSubcategory.name);
    
    expect(subcategoryBadge).toHaveClass(
      'text-xs',
      'bg-gray-200',
      'text-gray-800',
      'px-2',
      'py-1',
      'rounded-full'
    );
  });
});