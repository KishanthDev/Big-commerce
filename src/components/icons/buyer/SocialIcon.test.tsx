// social-icons.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from './SocialIcons'; // Update the import path as needed

describe('Social Icons', () => {
  const testCases = [
    { name: 'FacebookIcon', Component: FacebookIcon },
    { name: 'InstagramIcon', Component: InstagramIcon },
    { name: 'TwitterIcon', Component: TwitterIcon },
    { name: 'YoutubeIcon', Component: YoutubeIcon },
  ];


 

  test.each(testCases)(
    '$name forwards additional props to svg element',
    ({ Component }) => {
      const dataTestId = 'social-icon-test';
      render(<Component data-testid={dataTestId} />);
      const svg = screen.getByTestId(dataTestId);
      expect(svg).toBeInTheDocument();
    }
  );

  // Individual icon snapshot tests
  test.each(testCases)(
    '$name matches snapshot',
    ({ Component }) => {
      const { asFragment } = render(<Component />);
      expect(asFragment()).toMatchSnapshot();
    }
  );
});