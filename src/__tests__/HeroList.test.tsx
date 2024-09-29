import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { extractIdFromUrl } from "@/utils";
import { characters } from "@/constants";
import HeroList from "@/components/HeroList";

vi.mock("@/utils", () => ({
  extractIdFromUrl: vi.fn(),
}));

// Mock IntersectionObserver to prevent errors in tests
class IntersectionObserver {
  root: Element | Document | null = null;
  rootMargin: string = "";
  thresholds: ReadonlyArray<number> = [];
  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

global.IntersectionObserver = IntersectionObserver;

describe("HeroList", () => {
  beforeEach(() => {
    (extractIdFromUrl as vi.Mock).mockImplementation((url: string) => {
      const parts = url.split("/");
      return parts[parts.length - 2];
    });
  });

  it("renders without crashing", () => {
    render(<HeroList characters={characters} />);
  });

  it("renders a list of characters", () => {
    render(<HeroList characters={characters} />);
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(screen.getByText("Darth Vader")).toBeInTheDocument();
    expect(screen.getByText("Owen Lars")).toBeInTheDocument();
    expect(screen.getByText("Beru Whitesun lars")).toBeInTheDocument();
  });

  it("handles characters without a URL gracefully", () => {
    render(<HeroList characters={characters} />);
    expect(screen.queryByText("Leia Organa")).not.toBeInTheDocument();
  });
});
