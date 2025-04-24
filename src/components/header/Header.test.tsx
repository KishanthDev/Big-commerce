/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { usePathname } from "next/navigation";

// Mocks
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock("next/link", () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

jest.mock("@/components/ui/button", () => ({
  Button: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
}));

jest.mock("./ModeToggle", () => ({
  DarkModeToggle: () => <div data-testid="darkmode-toggle" />,
}));

jest.mock("./FullScreenToggle", () => ({
  __esModule: true,
  default: () => <div data-testid="fullscreen-toggle" />,
}));

jest.mock("./LocationModal", () => () => <div data-testid="location-modal" />);

describe("Header Component", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/");
  });

  it("renders nav links", () => {
    render(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Sellers")).toBeInTheDocument();
    expect(screen.getByText("Buyers")).toBeInTheDocument();
    expect(screen.getByText("Advertising")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders contact/help info and country selector", () => {
    render(<Header />);
    expect(screen.getByText(/Help Center/i)).toBeInTheDocument();
    expect(screen.getByText(/Developer Center/i)).toBeInTheDocument();
    expect(screen.getByText(/Call Sales/)).toBeInTheDocument();
    expect(screen.getByText(/Log In/)).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders Sign Up / Sign In button", () => {
    render(<Header />);
    expect(screen.getAllByText(/Sign Up \/ Sign In/i)[0]).toBeInTheDocument();
  });
});
