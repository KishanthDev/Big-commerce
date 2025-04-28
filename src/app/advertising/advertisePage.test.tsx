import { render, screen } from '@testing-library/react';
import Page from './page';
import '@testing-library/jest-dom';

// Mock the components used in the page
jest.mock('@/components/header/Header', () => () => <div>Header</div>);
jest.mock('@/components/advertising/Hero', () => () => <div>Hero</div>);
jest.mock('@/components/advertising/AdOptions', () => () => <div>AdOptions</div>);
jest.mock('@/components/advertising/HowItWorks', () => () => <div>HowItWorks</div>);
jest.mock('@/components/advertising/ResultsSection', () => () => <div>ResultsSection</div>);
jest.mock('@/components/advertising/Cta', () => () => <div>CTA</div>);
jest.mock('@/components/footer/Footer', () => () => <div>Footer</div>);

describe('Page Component', () => {
  it('should render all child components', () => {
    // Render the page component
    render(<Page />);

    // Check if each child component is rendered by checking their text content
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Hero')).toBeInTheDocument();
    expect(screen.getByText('AdOptions')).toBeInTheDocument();
    expect(screen.getByText('HowItWorks')).toBeInTheDocument();
    expect(screen.getByText('ResultsSection')).toBeInTheDocument();
    expect(screen.getByText('CTA')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
