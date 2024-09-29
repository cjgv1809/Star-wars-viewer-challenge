import { render, screen } from "@testing-library/react";
import Logo from "@/components/Logo";

describe("Logo", () => {
  it("renders without crashing", () => {
    render(<Logo />);
  });

  it("contains the correct image element", () => {
    render(<Logo />);
    const imgElement = screen.getByRole("img", { name: /star wars logo/i });
    expect(imgElement).toBeInTheDocument();
  });

  it("has the correct src attribute", () => {
    render(<Logo />);
    const imgElement = screen.getByRole("img", { name: /star wars logo/i });
    expect(imgElement).toHaveAttribute("src", "/star_wars_logo.webp");
  });

  it("has the correct alt attribute", () => {
    render(<Logo />);
    const imgElement = screen.getByRole("img", { name: /star wars logo/i });
    expect(imgElement).toHaveAttribute("alt", "Star Wars Logo");
  });

  it("applies the correct class names", () => {
    render(<Logo />);
    const imgElement = screen.getByRole("img", { name: /star wars logo/i });
    expect(imgElement).toHaveClass("app__logo");
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toHaveClass("app__logo-container");
  });
});
