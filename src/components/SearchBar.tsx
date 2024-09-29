import React, { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";
import { debounce } from "@/utils";
import { motion, useAnimation } from "framer-motion";

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setSearchTerm } = useSearch();
  const controls = useAnimation();

  // Create a debounced version of setSearchTerm
  const debouncedSetSearchTerm = useCallback(
    debounce((value: string) => setSearchTerm(value), 300),
    [setSearchTerm]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    debouncedSetSearchTerm(value);
  };

  const handleClear = () => {
    setSearchInput("");
    setSearchTerm("");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        controls.start({
          opacity: 0,
          height: 0,
          transitionEnd: { display: "none" },
        });
      } else {
        controls.start({ opacity: 1, height: "auto", display: "block" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <section className="search__container" role="region" aria-label="Search">
      <motion.h2
        className="search__heading"
        initial={{ opacity: 1, height: "auto", display: "block" }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        Search for your favorite character
      </motion.h2>
      <div className="search__input-container">
        <input
          type="search"
          className="search__input"
          placeholder="Search for a character..."
          value={searchInput}
          onChange={handleSearch}
          role="searchbox"
          aria-label="Search for a character"
        />
        {searchInput && (
          <span
            className="search__clear-button"
            onClick={handleClear}
            role="button"
          >
            <X size={24} aria-label="Clear search" />
          </span>
        )}
      </div>
    </section>
  );
};

export default SearchBar;
