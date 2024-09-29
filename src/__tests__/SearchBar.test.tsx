import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { useSearch } from "@/hooks/useSearch";
import SearchBar from "@/components/SearchBar";

vi.mock("@/hooks/useSearch");

describe("SearchBar", () => {
  const setSearchTerm = vi.fn();

  beforeEach(() => {
    (useSearch as vi.Mock).mockReturnValue({ setSearchTerm });
  });

  it("renders without crashing", () => {
    render(<SearchBar />);
  });

  it("displays the correct heading text", () => {
    render(<SearchBar />);
    const headingElement = screen.getByRole("heading", { level: 2 });
    expect(headingElement).toHaveTextContent(
      "Search for your favorite character"
    );
  });

  it("handles input changes correctly", () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText(
      "Search for a character..."
    );
    fireEvent.change(inputElement, { target: { value: "Luke Skywalker" } });
    expect(inputElement).toHaveValue("Luke Skywalker");
  });

  it("debounces the search term correctly", () => {
    vi.useFakeTimers();
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText(
      "Search for a character..."
    );
    fireEvent.change(inputElement, { target: { value: "Luke Skywalker" } });
    vi.advanceTimersByTime(300);
    expect(setSearchTerm).toHaveBeenCalledWith("Luke Skywalker");
    vi.useRealTimers();
  });

  it("applies the correct class names", () => {
    render(<SearchBar />);
    const sectionElement = screen.getByRole("region");
    expect(sectionElement).toHaveClass("search__container");
    const headingElement = screen.getByRole("heading", { level: 2 });
    expect(headingElement).toHaveClass("search__heading");
    const inputElement = screen.getByPlaceholderText(
      "Search for a character..."
    );
    expect(inputElement).toHaveClass("search__input");
  });
});
