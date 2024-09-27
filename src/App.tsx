import React, { useState, useEffect } from "react";
import { useSearch } from "./hooks/useSearch";
import { fetchCharacters } from "./services/fetchCharacters";
import HeroList from "./components/HeroList";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import type { Character } from "./types";

const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { searchTerm } = useSearch();

  const fetchCharactersData = async (page: number) => {
    setIsLoading(true);
    try {
      const data = await fetchCharacters(page);
      setCharacters(data.results);
      setFilteredCharacters(data.results);
      setTotalPages(Math.ceil(data.count / 10));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharactersData(page);
  }, [page]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredCharacters(characters); // Reset if search term is empty
    } else {
      const filtered = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCharacters(filtered);
    }
  }, [searchTerm, characters]);

  if (characters?.length === 0 && !isLoading) {
    return (
      <div>
        <h1>Star Wars Heroes</h1>
        <p>There are no characters to display.</p>
      </div>
    );
  }

  return (
    <>
      <Logo />
      <main className="app__container">
        <SearchBar />
        {isLoading && <Loading />}
        <HeroList characters={filteredCharacters} />
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
