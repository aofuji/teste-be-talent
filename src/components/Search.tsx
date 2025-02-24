import type { Search } from "@/interfaces/search";
import { useState } from "react";


const Search = ({ onSearchChange }: Search) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearch(newValue);
    onSearchChange(newValue);
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;