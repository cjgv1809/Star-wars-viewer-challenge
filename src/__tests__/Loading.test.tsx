import { render, screen } from "@testing-library/react";
import Loading from "@/components/Loading";

describe("Loading", () => {
  it("renders without crashing", () => {
    render(<Loading />);
  });

  it("contains the correct SVG elements", () => {
    render(<Loading />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("viewBox", "-50 -50 700 700");
    expect(svgElement).toHaveClass("loader__svg");
  });

  it("applies the correct class names", () => {
    render(<Loading />);
    const wrapperDiv = screen.getByRole("presentation");
    expect(wrapperDiv).toBeInTheDocument();
    expect(wrapperDiv).toHaveClass("loader__wrapper");
  });
});
