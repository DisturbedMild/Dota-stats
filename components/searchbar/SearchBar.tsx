"use client";

import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { useDebounce } from "@/common/hooks/useDebounce";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const searchHandler = (text: any) => {
    console.log("Searched:", text);
  };

  const debounceSearch = useDebounce(searchHandler, 1000);

  useEffect(() => {
    debounceSearch(searchValue);
  }, [searchValue]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 px-2 py-2 bg-secondary/30"
    >
      <input
        type="text"
        name="search"
        placeholder="Search heroes, players, items, teams..."
        onChange={handleChange}
        className="px-2 py-1 w-11/12 text-secondary focus:outline-none border-0"
      />
      <button
        className="bg-secondary text-white px-2 py-1 w-1/12 transition-all hover:text-teal hover:bg-white"
        disabled={isSearching}
        type="submit"
      >
        {isSearching ? "..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
