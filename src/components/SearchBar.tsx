import React, { useState } from "react";
import { useSearch } from "@/hooks/useSearch";

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setSearchTerm } = useSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <section className="search__container">
      <input
        type="search"
        className="search__input"
        placeholder="Search for a character..."
        value={searchInput}
        onChange={handleSearch}
      />
    </section>
  );
};

export default SearchBar;
