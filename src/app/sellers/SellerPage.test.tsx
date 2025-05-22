import { render, screen } from "@testing-library/react";
import Page from "./page";
import "@testing-library/jest-dom";

// Mocking the components used in the Page (with display names)
jest.mock("@/components/seller/Hero", () => {
  const HeroMock = () => <div>Hero Section</div>;
  HeroMock.displayName = "HeroMock";
  return HeroMock;
});

jest.mock("@/components/seller/WhySell", () => {
  const WhySellMock = () => <div>Why Sell Section</div>;
  WhySellMock.displayName = "WhySellMock";
  return WhySellMock;
});

jest.mock("@/components/seller/HowItWorks", () => {
  const HowItWorksMock = () => <div>How It Works Section</div>;
  HowItWorksMock.displayName = "HowItWorksMock";
  return HowItWorksMock;
});

jest.mock("@/components/seller/CtaSection", () => {
  const CtaSectionMock = () => <div>CTA Section</div>;
  CtaSectionMock.displayName = "CtaSectionMock";
  return CtaSectionMock;
});

jest.mock("@/components/footer/Footer", () => {
  const FooterMock = () => <div>Footer</div>;
  FooterMock.displayName = "FooterMock";
  return FooterMock;
});

jest.mock("@/components/header/Header", () => {
  const HeaderMock = () => <div>Header</div>;
  HeaderMock.displayName = "HeaderMock";
  return HeaderMock;
});

describe("SellerPage Component", () => {
  it("should render Header, Hero, WhySell, HowItWorks, CtaSection, and Footer", () => {
    render(<Page />);

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Hero Section")).toBeInTheDocument();
    expect(screen.getByText("Why Sell Section")).toBeInTheDocument();
    expect(screen.getByText("How It Works Section")).toBeInTheDocument();
    expect(screen.getByText("CTA Section")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
