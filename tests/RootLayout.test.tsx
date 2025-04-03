import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/layout';

describe('RootLayout Component', () => {
  test('should render children correctly', () => {
    render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );

    const childContent = screen.getByText(/Test Child/i);
    expect(childContent).toBeInTheDocument();
  });

  test('should apply custom font classes', () => {
    render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );

    const bodyElement = screen.getByText(/Test Child/i).closest('body');
    expect(bodyElement).toHaveClass('antialiased');
    expect(bodyElement).toHaveClass('variable--font-geist-sans');
  });
});
