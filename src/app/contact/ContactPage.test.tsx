import { render, screen } from '@testing-library/react';
import Page from './page';
import '@testing-library/jest-dom';

// Mocking the components used in the Page (with display names)
jest.mock('@/components/contact/HeroSection', () => {
  const HeroSectionMock = () => <div>Hero Section</div>;
  HeroSectionMock.displayName = 'HeroSectionMock';
  return HeroSectionMock;
});

jest.mock('@/components/contact/ContactPage', () => {
  const ContactPageMock = () => <div>Contact Page</div>;
  ContactPageMock.displayName = 'ContactPageMock';
  return ContactPageMock;
});

jest.mock('@/components/contact/FAQSection', () => {
  const FAQSectionMock = () => <div>FAQ Section</div>;
  FAQSectionMock.displayName = 'FAQSectionMock';
  return FAQSectionMock;
});

jest.mock('@/components/footer/Footer', () => {
  const FooterMock = () => <div>Footer</div>;
  FooterMock.displayName = 'FooterMock';
  return FooterMock;
});

jest.mock('@/components/header/Header', () => {
  const HeaderMock = () => <div>Header</div>;
  HeaderMock.displayName = 'HeaderMock';
  return HeaderMock;
});

describe('ContactPage Component', () => {
  it('should render Header, HeroSection, ContactPage, FAQSection, and Footer', () => {
    render(<Page />);

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Hero Section')).toBeInTheDocument();
    expect(screen.getByText('Contact Page')).toBeInTheDocument();
    expect(screen.getByText('FAQ Section')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
