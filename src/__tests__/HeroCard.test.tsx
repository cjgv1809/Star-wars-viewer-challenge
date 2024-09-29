import { render, screen } from "@testing-library/react";
import { character } from "@/constants";
import HeroCard from "@/components/HeroCard";

describe("HeroCard", () => {
  it("renders the hero card with the correct information", () => {
    render(<HeroCard character={character} />);

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  });

  it("renders a button with the label view details", () => {
    render(<HeroCard character={character} />);

    expect(screen.getByText("View details")).toBeInTheDocument();
  });

  it("renders the hero card with an image", () => {
    render(
      <HeroCard
        character={character}
        image="https://starwars-visualguide.com/assets/img/characters/1.jpg"
      />
    );

    expect(screen.getByAltText("Luke Skywalker")).toBeInTheDocument();
  });
});
