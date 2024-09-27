import React, { useEffect, useState } from "react";
import { useSearch } from "@/hooks/useSearch";

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setSearchTerm } = useSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const h2 = document.querySelector(
        ".search__heading"
      ) as HTMLHeadingElement;
      if (h2) {
        h2.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="search__container">
      <h2 className="search__heading">Search for your favorite character</h2>
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
