import { render, screen } from '@testing-library/react';
import Page from './page'; // Adjust the import path according to your project structure
import '@testing-library/jest-dom';

// Mocking the components used in the Page
jest.mock('@/components/contact/HeroSection', () => () => <div>Hero Section</div>);
jest.mock('@/components/contact/ContactPage', () => () => <div>Contact Page</div>);
jest.mock('@/components/contact/FAQSection', () => () => <div>FAQ Section</div>);
jest.mock('@/components/footer/Footer', () => () => <div>Footer</div>);
jest.mock('@/components/header/Header', () => () => <div>Header</div>);

describe('ContactPage Component', () => {
  it('should render Header, HeroSection, ContactPage, FAQSection, and Footer', () => {
    // Render the Page component
    render(<Page />);

    // Check if each mocked section is rendered
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Hero Section')).toBeInTheDocument();
    expect(screen.getByText('Contact Page')).toBeInTheDocument();
    expect(screen.getByText('FAQ Section')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
