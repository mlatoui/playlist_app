import React, { useState } from "react";
import SongCard from "./SongCard";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [Results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!search) return;
    try {
      const response = await fetch(
        `http://localhost:3001/?url=https://api.deezer.com/search?q=${search}`
      );
      const data = await response.json();
      setResults(data.data);
      console.log(data.data);
    } catch (error) {
      console.error("Error fetching data from Deezer:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {Results.map((result) => (
          <SongCard key={result.id} result={result} id={result.id} />
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
