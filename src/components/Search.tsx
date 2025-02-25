import type { Search } from "@/interfaces/search";
import Image from "next/image";
import { useState } from "react";

const Search = ({ onSearchChange }: Search) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearch(newValue);
    onSearchChange(newValue);
  };

  return (
    <div className="relative w-64">
      <input
        type="text"
        placeholder="Pesquisar"
        className="w-full p-2 pr-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        value={search}
        onChange={handleInputChange}
      />
      <Image
        src="/img/search.png"
        alt="Ícone de pesquisa"
        width={20}
        height={20}
        className="absolute right-3 top-2.5 w-5 h-5"
      />
    </div>
  );
};

export default Search;