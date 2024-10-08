import type { Character } from "@/types";

export const extractIdFromUrl = (url: string): string | null => {
  const matches = url.match(/\/(\d+)\/$/);
  return matches ? matches[1] : null;
};

export const shouldShowNoResults = (
  searchTerm: string,
  isLoading: boolean,
  characters: Character[],
  filteredCharacters: Character[]
): boolean => {
  const includesCharacter = filteredCharacters.some((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    !includesCharacter &&
    !isLoading &&
    characters.length > 0 &&
    filteredCharacters.length === 0
  );
};

export const capitalizeWords = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export function debounce<T extends (...args: string[]) => void>(
  func: T,
  wait: number
) {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => func(...args), wait);
  };
}
