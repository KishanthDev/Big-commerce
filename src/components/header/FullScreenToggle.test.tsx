import { render, screen, fireEvent } from "@testing-library/react";
import FullScreenToggle from "./FullScreenToggle";

// Create a mock for the fullscreen API
const mockFullscreenAPI = {
  get fullscreenElement() {
    return this._fullscreenElement;
  },
  _fullscreenElement: null as Element | null,
  requestFullscreen: jest.fn().mockResolvedValue(undefined),
  exitFullscreen: jest.fn().mockResolvedValue(undefined),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};

beforeAll(() => {
  Object.defineProperty(document, "fullscreenElement", {
    get: () => mockFullscreenAPI.fullscreenElement,
  });

  Object.defineProperty(document.documentElement, "requestFullscreen", {
    value: mockFullscreenAPI.requestFullscreen,
  });

  Object.defineProperty(document, "exitFullscreen", {
    value: mockFullscreenAPI.exitFullscreen,
  });

  // Mock event listeners
  jest
    .spyOn(document, "addEventListener")
    .mockImplementation(mockFullscreenAPI.addEventListener);
  jest
    .spyOn(document, "removeEventListener")
    .mockImplementation(mockFullscreenAPI.removeEventListener);
});

// Mock Lucide icons
jest.mock("lucide-react", () => ({
  Fullscreen: () => <span data-testid="fullscreen-icon" />,
  Minimize2: () => <span data-testid="minimize-icon" />,
}));

describe("FullScreenToggle", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockFullscreenAPI._fullscreenElement = null;
  });

  it("renders the fullscreen icon when not in fullscreen mode", () => {
    render(<FullScreenToggle />);
    expect(screen.getByTestId("fullscreen-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("minimize-icon")).not.toBeInTheDocument();
  });

  it("renders the minimize icon when in fullscreen mode", () => {
    mockFullscreenAPI._fullscreenElement = document.documentElement;
    render(<FullScreenToggle />);
    expect(screen.getByTestId("minimize-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("fullscreen-icon")).not.toBeInTheDocument();
  });

  it("calls requestFullscreen when clicked in normal mode", async () => {
    render(<FullScreenToggle />);
    const button = screen.getByRole("button", { name: /full screen/i });
    fireEvent.click(button);
    expect(mockFullscreenAPI.requestFullscreen).toHaveBeenCalled();
    expect(mockFullscreenAPI.exitFullscreen).not.toHaveBeenCalled();
  });

  it("calls exitFullscreen when clicked in fullscreen mode", async () => {
    mockFullscreenAPI._fullscreenElement = document.documentElement;
    render(<FullScreenToggle />);
    const button = screen.getByRole("button", { name: /full screen/i });
    fireEvent.click(button);
    expect(mockFullscreenAPI.exitFullscreen).toHaveBeenCalled();
    expect(mockFullscreenAPI.requestFullscreen).not.toHaveBeenCalled();
  });

  it("updates state when fullscreen changes", () => {
    const { rerender } = render(<FullScreenToggle />);

    // Initial state
    expect(screen.getByTestId("fullscreen-icon")).toBeInTheDocument();

    // Simulate entering fullscreen
    mockFullscreenAPI._fullscreenElement = document.documentElement;
    const changeHandler = mockFullscreenAPI.addEventListener.mock.calls.find(
      ([type]) => type === "fullscreenchange",
    )?.[1];
    changeHandler?.({} as Event);
    rerender(<FullScreenToggle />);

    expect(screen.getByTestId("minimize-icon")).toBeInTheDocument();

    // Simulate exiting fullscreen
    mockFullscreenAPI._fullscreenElement = null;
    changeHandler?.({} as Event);
    rerender(<FullScreenToggle />);

    expect(screen.getByTestId("fullscreen-icon")).toBeInTheDocument();
  });

  it("cleans up event listener on unmount", () => {
    const { unmount } = render(<FullScreenToggle />);

    unmount();

    expect(mockFullscreenAPI.removeEventListener).toHaveBeenCalledWith(
      "fullscreenchange",
      expect.any(Function),
    );
  });

  it("has correct styling", () => {
    render(<FullScreenToggle />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-600");
    expect(button).toHaveClass("hover:bg-blue-700");
    expect(button).toHaveClass("text-white");
    expect(button).toHaveClass("rounded-lg");
  });
});
