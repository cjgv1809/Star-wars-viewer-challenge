import React, { createContext, useState, ReactNode } from "react";
import type { SearchContextType } from "@/types";

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
