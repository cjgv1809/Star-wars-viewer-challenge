import type { Character } from "@/types";

export const fetchCharacters = async (
  page: number
): Promise<{
  count: number;
  results: Character[];
}> => {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const data = await response.json();

  return data;
};
