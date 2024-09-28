import React, { useCallback, useEffect, useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { debounce } from "@/utils";

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setSearchTerm } = useSearch();

  // Create a debounced version of setSearchTerm
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetSearchTerm = useCallback(
    debounce((value: string) => setSearchTerm(value), 300),
    [setSearchTerm]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    debouncedSetSearchTerm(value);
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
