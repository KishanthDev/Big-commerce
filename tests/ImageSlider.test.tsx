import { render, screen, fireEvent } from '@testing-library/react';
import ImageSlider from '@/components/ImageSlider';

describe('ImageSlider Component', () => {
  test('should render all images correctly', () => {
    render(<ImageSlider />);
    const imageElements = screen.getAllByRole('img');
    expect(imageElements.length).toBe(14);
  });

  test('should trigger hover handlers without crashing', () => {
    render(<ImageSlider />);
    const hoverDiv = screen.getByTestId('hover-slider');

    fireEvent.mouseEnter(hoverDiv);

    fireEvent.mouseLeave(hoverDiv);

    expect(hoverDiv).toBeInTheDocument();
  });

  test('should match the snapshot', () => {
    const { asFragment } = render(<ImageSlider />);
    expect(asFragment()).toMatchSnapshot();
  });
});
