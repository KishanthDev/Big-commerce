import { render, screen } from '@testing-library/react';
import Page from './page'; // Adjust the import path according to your project structure
import '@testing-library/jest-dom';

// Mocking the components used in the Page
jest.mock('../../components/header/Header', () => () => <div>Header</div>);
jest.mock('../../components/buyer/Hero', () => () => <div>Hero</div>);
jest.mock('../../components/buyer/WhyShop', () => () => <div>WhyShop</div>);
jest.mock('../../components/buyer/HowItWorks', () => () => <div>HowItWorks</div>);
jest.mock('../../components/buyer/FeaturedStores', () => () => <div>FeaturedStores</div>);
jest.mock('../../components/buyer/CtaSection', () => () => <div>CtaSection</div>);
jest.mock('../../components/footer/Footer', () => () => <div>Footer</div>);

describe('BuyerPage Component', () => {
  it('should render all child components', () => {
    // Render the Page component
    render(<Page />);

    // Check if each child component is rendered by checking their text content
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Hero')).toBeInTheDocument();
    expect(screen.getByText('WhyShop')).toBeInTheDocument();
    expect(screen.getByText('HowItWorks')).toBeInTheDocument();
    expect(screen.getByText('FeaturedStores')).toBeInTheDocument();
    expect(screen.getByText('CtaSection')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
