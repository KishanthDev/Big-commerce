import { render, screen } from '@testing-library/react';
import Page from './page';
import '@testing-library/jest-dom';

// Mocking the components used in the Page (with display names)
jest.mock('../../components/header/Header', () => {
  const HeaderMock = () => <div>Header</div>;
  HeaderMock.displayName = 'HeaderMock';
  return HeaderMock;
});
jest.mock('../../components/buyer/Hero', () => {
  const HeroMock = () => <div>Hero</div>;
  HeroMock.displayName = 'HeroMock';
  return HeroMock;
});
jest.mock('../../components/buyer/WhyShop', () => {
  const WhyShopMock = () => <div>WhyShop</div>;
  WhyShopMock.displayName = 'WhyShopMock';
  return WhyShopMock;
});
jest.mock('../../components/buyer/HowItWorks', () => {
  const HowItWorksMock = () => <div>HowItWorks</div>;
  HowItWorksMock.displayName = 'HowItWorksMock';
  return HowItWorksMock;
});
jest.mock('../../components/buyer/FeaturedStores', () => {
  const FeaturedStoresMock = () => <div>FeaturedStores</div>;
  FeaturedStoresMock.displayName = 'FeaturedStoresMock';
  return FeaturedStoresMock;
});
jest.mock('../../components/buyer/CtaSection', () => {
  const CtaSectionMock = () => <div>CtaSection</div>;
  CtaSectionMock.displayName = 'CtaSectionMock';
  return CtaSectionMock;
});
jest.mock('../../components/footer/Footer', () => {
  const FooterMock = () => <div>Footer</div>;
  FooterMock.displayName = 'FooterMock';
  return FooterMock;
});

describe('BuyerPage Component', () => {
  it('should render all child components', () => {
    render(<Page />);

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Hero')).toBeInTheDocument();
    expect(screen.getByText('WhyShop')).toBeInTheDocument();
    expect(screen.getByText('HowItWorks')).toBeInTheDocument();
    expect(screen.getByText('FeaturedStores')).toBeInTheDocument();
    expect(screen.getByText('CtaSection')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
