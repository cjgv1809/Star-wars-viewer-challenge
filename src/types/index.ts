export interface Character {
  name: string;
  height: string;
  birthYear: string;
  mass: string;
  gender: string;
  url: string;
}

export interface CharacterResponse {
  results: Character[];
  count: number;
}

export interface HeroListProps {
  characters: Character[];
}

export interface HeroCardProps {
  hero: Character;
  image?: string;
}

export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
