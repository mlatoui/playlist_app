import React, { useState } from 'react';

const DataFetching = () => {
  const [search, setSearch] = useState('');
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
      console.error('Error fetching data from Deezer:', error);
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
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
