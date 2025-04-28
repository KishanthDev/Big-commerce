// Provider.test.tsx
import { render, screen } from "@testing-library/react";
import Provider from "./Provider"; // adjust the import as necessary
import React from "react";

global.matchMedia = jest.fn().mockImplementation(() => ({
    matches: false, // You can adjust this to true if you want to simulate dark mode
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));
  
  describe("Provider Component", () => {
    it("renders children wrapped inside ThemeProvider and HeroUIProvider", () => {
      // Render the Provider with a test child component
      render(
        <Provider>
          <div data-testid="test-child">Test Child</div>
        </Provider>
      );
  
      // Check if the child component is rendered correctly
      const childElement = screen.getByTestId("test-child");
      expect(childElement).toBeInTheDocument();
    });
  });
