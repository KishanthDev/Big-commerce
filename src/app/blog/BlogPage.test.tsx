import { render, screen } from '@testing-library/react';
import Page from './page'; // Update with the correct path to your Page component
import '@testing-library/jest-dom';

// Mocking the components used in the Page
jest.mock('@/components/header/Header', () => () => <div>Header</div>);
jest.mock('@/components/blog/HeroSection', () => () => <div>HeroSection</div>);
jest.mock('@/components/blog/ContentSection', () => () => <div>ContentSection</div>);
jest.mock('@/components/blog/FeatureSection', () => () => <div>FeatureSection</div>);
jest.mock('@/components/blog/NewsLetter', () => () => <div>NewsLetter</div>);
jest.mock('@/components/footer/Footer', () => () => <div>Footer</div>);

describe('BlogPage Component', () => {
  it('should render all child components', () => {
    // Render the Page component
    render(<Page />);

    // Check if each child component is rendered by checking their text content
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('HeroSection')).toBeInTheDocument();
    expect(screen.getByText('ContentSection')).toBeInTheDocument();
    expect(screen.getByText('FeatureSection')).toBeInTheDocument();
    expect(screen.getByText('NewsLetter')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
