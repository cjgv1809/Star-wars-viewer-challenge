export interface Character {
  name: string;
  height: string;
  birth_year: string;
  mass: string;
  gender: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  url?: string | null;
}

export interface CharacterResponse {
  results: Character[];
  count: number;
}

export interface HeroListProps {
  characters: Character[];
}

export interface HeroCardProps {
  character: Character;
  image?: string;
}

export interface HeroCardDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  character: {
    name: string;
    height: string;
    birth_year: string;
    gender: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
  };
  backgroundImage: string;
}

export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}
