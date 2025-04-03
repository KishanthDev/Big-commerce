import { render, screen, fireEvent } from '@testing-library/react';
import ImageSlider from '@/components/ImageSlider';



describe('ImageSlider Component', () => {
  test('should render images correctly', () => {
    render(<ImageSlider />);

    const imageElements = screen.getAllByRole('img');
    expect(imageElements.length).toBe(12);
  });

  test('should change animation duration on hover', () => {
    render(<ImageSlider />);

    const slider = screen.getByRole('presentation');

    expect(slider).toHaveStyle('transition-duration: 50s');

    fireEvent.mouseEnter(slider);

    expect(slider).toHaveStyle('transition-duration: 30s');

    fireEvent.mouseLeave(slider);

    expect(slider).toHaveStyle('transition-duration: 50s');
  });

  test('should match the snapshot', () => {
    const { asFragment } = render(<ImageSlider />);
    expect(asFragment()).toMatchSnapshot();
  });
});
