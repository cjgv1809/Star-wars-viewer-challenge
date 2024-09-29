import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Pagination from "@/components/Pagination";

describe("Pagination", () => {
  const handleOnPageChange = vi.fn();

  const renderComponent = (page: number, totalPages: number) => {
    render(
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handleOnPageChange}
      />
    );
  };

  it("renders without crashing", () => {
    renderComponent(1, 5);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders the correct number of pages", () => {
    renderComponent(1, 5);
    const pageLinks = screen.getAllByRole("link");
    expect(pageLinks).toHaveLength(5);
  });

  it("calls onPageChange with correct arguments when a page link is clicked", () => {
    renderComponent(1, 5);
    const pageLinks = screen.getAllByRole("link");
    fireEvent.click(pageLinks[2]);
    expect(handleOnPageChange).toHaveBeenCalledWith(3);
  });

  it("calls handleOnPageChange with correct arguments when next page button is clicked", () => {
    renderComponent(1, 5);
    const nextPageButton = screen.getByRole("button", { name: /next page/i });
    fireEvent.click(nextPageButton);
    expect(handleOnPageChange).toHaveBeenCalledWith(2);
  });

  it("calls handleOnPageChange with correct arguments when previous page button is clicked", () => {
    renderComponent(2, 5);
    const previousPageButton = screen.getByRole("button", {
      name: /previous page/i,
    });
    fireEvent.click(previousPageButton);
    expect(handleOnPageChange).toHaveBeenCalledWith(1);
  });
});
