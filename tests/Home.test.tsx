import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

jest.mock('@/components/Header', () => () => <div>Header Mock</div>);
jest.mock('@/components/Hero', () => () => <div>Hero Section Mock</div>);
jest.mock('@/components/Stats', () => () => <div>Stats Section Mock</div>);
jest.mock('@/components/BusinessSolutions', () => () => <div>Business Solutions Mock</div>);
jest.mock('@/components/Business', () => () => <div>Business Mock</div>);
jest.mock('@/components/CompanySection', () => () => <div>Company Section Mock</div>);
jest.mock('@/components/Services', () => () => <div>Services Mock</div>);
jest.mock('@/components/Minzuno', () => () => <div>Minzuno Mock</div>);
jest.mock('@/components/Contact', () => () => <div>Contact Mock</div>);
jest.mock('@/components/Footer', () => () => <div>Footer Mock</div>);

describe('Home Page Component', () => {
  test('should render all sections', () => {
    render(<Home />);

    expect(screen.getByText(/Header Mock/i)).toBeInTheDocument();
    expect(screen.getByText(/Hero Section Mock/i)).toBeInTheDocument();
    expect(screen.getByText(/Stats Section Mock/i)).toBeInTheDocument();
    expect(screen.getByText(/Business Solutions Mock/i)).toBeInTheDocument();
    expect(screen.getByText(/Business Mock/i)).toBeInTheDocument();
    expect(screen.getByText(/Company Section Mock/i)).toBeInTheDocument();
    expect(screen.getByText(/Services Mock/i)).toBeInTheDocument();
    expect(screen.getByText(/Minzuno Mock/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Mock/i)).toBeInTheDocument();
    expect(screen.getByText(/Footer Mock/i)).toBeInTheDocument();
  });
});
