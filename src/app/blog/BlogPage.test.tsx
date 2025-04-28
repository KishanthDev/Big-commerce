import { render, screen } from '@testing-library/react';
import Page from './page';
import '@testing-library/jest-dom';

// Mocking the components used in the Page (with display names)
jest.mock('@/components/header/Header', () => {
  const HeaderMock = () => <div>Header</div>;
  HeaderMock.displayName = 'HeaderMock';
  return HeaderMock;
});
jest.mock('@/components/blog/HeroSection', () => {
  const HeroSectionMock = () => <div>HeroSection</div>;
  HeroSectionMock.displayName = 'HeroSectionMock';
  return HeroSectionMock;
});
jest.mock('@/components/blog/ContentSection', () => {
  const ContentSectionMock = () => <div>ContentSection</div>;
  ContentSectionMock.displayName = 'ContentSectionMock';
  return ContentSectionMock;
});
jest.mock('@/components/blog/FeatureSection', () => {
  const FeatureSectionMock = () => <div>FeatureSection</div>;
  FeatureSectionMock.displayName = 'FeatureSectionMock';
  return FeatureSectionMock;
});
jest.mock('@/components/blog/NewsLetter', () => {
  const NewsLetterMock = () => <div>NewsLetter</div>;
  NewsLetterMock.displayName = 'NewsLetterMock';
  return NewsLetterMock;
});
jest.mock('@/components/footer/Footer', () => {
  const FooterMock = () => <div>Footer</div>;
  FooterMock.displayName = 'FooterMock';
  return FooterMock;
});

describe('BlogPage Component', () => {
  it('should render all child components', () => {
    render(<Page />);

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('HeroSection')).toBeInTheDocument();
    expect(screen.getByText('ContentSection')).toBeInTheDocument();
    expect(screen.getByText('FeatureSection')).toBeInTheDocument();
    expect(screen.getByText('NewsLetter')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
