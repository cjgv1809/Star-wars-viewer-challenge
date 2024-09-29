import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders the footer with links", () => {
    render(<Footer />);
    expect(screen.getByText("Designed and developed by")).toBeInTheDocument();
    expect(screen.getByText("cjgv1809")).toBeInTheDocument();
  });

  it("has correct links", () => {
    render(<Footer />);
    expect(screen.getByText("cjgv1809").closest("a")).toHaveAttribute(
      "href",
      "https://github.com/cjgv1809"
    );
  });
});
