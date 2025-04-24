import { render, screen, fireEvent } from '@testing-library/react';
import CtaSection from './CtaSection';
import { ArrowRight, Play, Check } from 'lucide-react';

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  ArrowRight: jest.fn(() => <svg data-testid="arrow-right" />),
  Play: jest.fn(() => <svg data-testid="play" />),
  Check: jest.fn(() => <svg data-testid="check" />),
}));

describe('CtaSection', () => {
  const mockBenefits = [
    "Free shipping on orders over $30",
    "Easy returns within 30 days",
    "Secure payment processing",
    "Direct communication with sellers",
    "24/7 customer support",
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<CtaSection />);
    expect(screen.getByText('Ready to Discover Amazing Products?')).toBeInTheDocument();
  });

  test('displays all benefits with check icons', () => {
    render(<CtaSection />);
    const benefitItems = screen.getAllByTestId('check');
    expect(benefitItems).toHaveLength(mockBenefits.length);
    mockBenefits.forEach(benefit => {
      expect(screen.getByText(benefit)).toBeInTheDocument();
    });
  });

  test('renders both action buttons correctly', () => {
    render(<CtaSection />);
    expect(screen.getByRole('button', { name: /Start Shopping Today/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Watch Demo/i })).toBeInTheDocument();
  });

  test('includes correct icons in buttons', () => {
    render(<CtaSection />);
    expect(ArrowRight).toHaveBeenCalled();
    expect(Play).toHaveBeenCalled();
  });

  test('has proper accessibility attributes', () => {
    render(<CtaSection />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Ready to Discover Amazing Products?');
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Shopper Benefits');
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<CtaSection />);
    expect(asFragment()).toMatchSnapshot();
  });
});