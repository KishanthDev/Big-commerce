import { render, screen } from '@testing-library/react';
import Page from './page'; // Adjust the import path according to your project structure
import '@testing-library/jest-dom';

// Mocking the components used in the Page
jest.mock('@/components/seller/Hero', () => () => <div>Hero Section</div>);
jest.mock('@/components/seller/WhySell', () => () => <div>Why Sell Section</div>);
jest.mock('@/components/seller/HowItWorks', () => () => <div>How It Works Section</div>);
jest.mock('@/components/seller/CtaSection', () => () => <div>CTA Section</div>);
jest.mock('@/components/footer/Footer', () => () => <div>Footer</div>);
jest.mock('@/components/header/Header', () => () => <div>Header</div>);

describe('SellerPage Component', () => {
  it('should render Header, Hero, WhySell, HowItWorks, CtaSection, and Footer', () => {
    // Render the Page component
    render(<Page />);

    // Check if each mocked section is rendered
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Hero Section')).toBeInTheDocument();
    expect(screen.getByText('Why Sell Section')).toBeInTheDocument();
    expect(screen.getByText('How It Works Section')).toBeInTheDocument();
    expect(screen.getByText('CTA Section')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
