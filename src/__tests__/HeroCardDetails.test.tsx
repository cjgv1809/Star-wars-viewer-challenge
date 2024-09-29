import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { HeroCardDetailsProps } from "@/types";
import { capitalizeWords } from "@/utils";
import { character } from "@/constants";
import HeroCardDetails from "@/components/HeroCardDetails";

vi.mock("@/utils", () => ({
  capitalizeWords: vi.fn((str) => str.charAt(0).toUpperCase() + str.slice(1)),
}));

const mockOnClose = vi.fn();
const mockBackgroundImage = "https://example.com/background.jpg";

const renderComponent = (props: Partial<HeroCardDetailsProps> = {}) => {
  const defaultProps: HeroCardDetailsProps = {
    isOpen: false,
    onClose: mockOnClose,
    character: character,
    backgroundImage: mockBackgroundImage,
    ...props,
  };
  render(<HeroCardDetails {...defaultProps} />);
};

describe("HeroCardDetails", () => {
  it("does not render when isOpen is false", () => {
    renderComponent({ isOpen: false });
    expect(screen.queryByText(character.name)).not.toBeInTheDocument();
  });

  it("renders when isOpen is true", () => {
    renderComponent({ isOpen: true });
    expect(screen.getByText(character.name)).toBeInTheDocument();
  });

  it("renders the background image correctly", () => {
    renderComponent({ isOpen: true });
    const backdrop = screen.getByTestId("hero-card-details-backdrop");
    expect(backdrop).toHaveStyle(
      `background-image: url(${mockBackgroundImage})`
    );
  });

  it("calls onClose when the close button is clicked", () => {
    renderComponent({ isOpen: true });
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("renders character details correctly", () => {
    renderComponent({ isOpen: true });
    expect(screen.getByTestId("hero-card-details-title")).toBeInTheDocument();
    expect(
      screen.getByTestId("hero-card-details-description")
    ).toBeInTheDocument();
    expect(screen.getByText(character.name)).toBeInTheDocument();
    expect(screen.getByText(character.height)).toBeInTheDocument();
    expect(screen.getByText(character.mass)).toBeInTheDocument();
    expect(screen.getByText(character.birth_year)).toBeInTheDocument();
    expect(
      screen.getByText(capitalizeWords(character.gender))
    ).toBeInTheDocument();
    expect(
      screen.getByText(capitalizeWords(character.hair_color))
    ).toBeInTheDocument();
    expect(
      screen.getByText(capitalizeWords(character.eye_color))
    ).toBeInTheDocument();
  });
});
