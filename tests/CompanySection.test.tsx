import { render, screen } from '@testing-library/react';
import YourCompanySection from '@/components/CompanySection';

jest.mock('./ImageSlider', () => () => <div>Mock ImageSlider</div>);

describe('YourCompanySection Component', () => {
  test('should render the section with correct title and description', () => {
    render(<YourCompanySection />);

    const title = screen.getByText(/Your company is in some seriously great company./i);
    expect(title).toBeInTheDocument();

    const description = screen.getByText(/Stack your tech — with total freedom to integrate your preferred partners./i);
    expect(description).toBeInTheDocument();
  });

  test('should render the button with correct text and icon', () => {
    render(<YourCompanySection />);

    const buttonText = screen.getByText(/VIEW ALL PARTNERS/i);
    expect(buttonText).toBeInTheDocument();

    const icon = screen.getByTestId('fa-arrow-right-icon');
    expect(icon).toBeInTheDocument();
  });

  test('should render the ImageSlider component', () => {
    render(<YourCompanySection />);

    const imageSlider = screen.getByText(/Mock ImageSlider/i);
    expect(imageSlider).toBeInTheDocument();
  });
});
