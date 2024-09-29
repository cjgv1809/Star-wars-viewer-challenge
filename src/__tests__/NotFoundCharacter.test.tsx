import { render, screen } from "@testing-library/react";
import NotFoundCharacter from "@/components/NotFoundCharacter";

describe("NotFoundCharacter", () => {
  it("renders without crashing", () => {
    render(<NotFoundCharacter />);
  });

  it("contains the correct image element", () => {
    render(<NotFoundCharacter />);
    const imgElement = screen.getByRole("img", { name: /not found/i });
    expect(imgElement).toBeInTheDocument();
  });

  it("has the correct src attribute for the image", () => {
    render(<NotFoundCharacter />);
    const imgElement = screen.getByRole("img", { name: /not found/i });
    expect(imgElement).toHaveAttribute("src", "/not-found.gif");
  });

  it("has the correct alt attribute for the image", () => {
    render(<NotFoundCharacter />);
    const imgElement = screen.getByRole("img", { name: /not found/i });
    expect(imgElement).toHaveAttribute("alt", "Not found");
  });

  it("contains the correct heading text", () => {
    render(<NotFoundCharacter />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toHaveTextContent(
      "Ups! It seems that the character you are looking for got lost in a very far galaxy..."
    );
  });

  it("contains the correct paragraph text", () => {
    render(<NotFoundCharacter />);
    const paragraphElement = screen.getByText(
      "Try searching for another character"
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it("applies the correct class names", () => {
    render(<NotFoundCharacter />);
    const sectionElement = screen.getByRole("region");
    expect(sectionElement).toHaveClass("app__no-results");
    const imgElement = screen.getByRole("img", { name: /not found/i });
    expect(imgElement).toHaveClass("app__no-results--img");
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toHaveClass("app__no-results--heading");
    const paragraphElement = screen.getByText(
      "Try searching for another character"
    );
    expect(paragraphElement).toHaveClass("app__no-results--text");
  });
});
