import { render, screen } from "@testing-library/react";
import Page from "./page";
import "@testing-library/jest-dom";

jest.mock("@/components/header/Header", () => {
  const HeaderMock = () => <div>Header</div>;
  HeaderMock.displayName = "HeaderMock";
  return HeaderMock;
});
jest.mock("@/components/advertising/Hero", () => {
  const HeroMock = () => <div>Hero</div>;
  HeroMock.displayName = "HeroMock";
  return HeroMock;
});
jest.mock("@/components/advertising/AdOptions", () => {
  const AdOptionsMock = () => <div>AdOptions</div>;
  AdOptionsMock.displayName = "AdOptionsMock";
  return AdOptionsMock;
});
jest.mock("@/components/advertising/HowItWorks", () => {
  const HowItWorksMock = () => <div>HowItWorks</div>;
  HowItWorksMock.displayName = "HowItWorksMock";
  return HowItWorksMock;
});
jest.mock("@/components/advertising/ResultsSection", () => {
  const ResultsSectionMock = () => <div>ResultsSection</div>;
  ResultsSectionMock.displayName = "ResultsSectionMock";
  return ResultsSectionMock;
});
jest.mock("@/components/advertising/Cta", () => {
  const CtaMock = () => <div>CTA</div>;
  CtaMock.displayName = "CtaMock";
  return CtaMock;
});
jest.mock("@/components/footer/Footer", () => {
  const FooterMock = () => <div>Footer</div>;
  FooterMock.displayName = "FooterMock";
  return FooterMock;
});

describe("Page Component", () => {
  it("should render all child components", () => {
    render(<Page />);

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Hero")).toBeInTheDocument();
    expect(screen.getByText("AdOptions")).toBeInTheDocument();
    expect(screen.getByText("HowItWorks")).toBeInTheDocument();
    expect(screen.getByText("ResultsSection")).toBeInTheDocument();
    expect(screen.getByText("CTA")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
