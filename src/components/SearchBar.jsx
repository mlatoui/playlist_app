import React, { useState, createContext } from 'react';
import SongCard from './SongCard';
import DetailedSongCard from './detailedSongCard';

export const ResultContext = createContext(null);

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [resultsVisible, setResultsVisible] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const handleSearch = async () => {
    if (!search) return;
    try {
      const response = await fetch(
        `http://localhost:3001/?url=https://api.deezer.com/search?q=${search}`
      );
      const data = await response.json();
      setResults(data.data);
      setResultsVisible(true);
      console.log(data.data);
    } catch (error) {
      console.error('Error fetching data from Deezer:', error);
    }
  };

  const handleDetails = (result) => {
    setSelectedResult(result);
  };

  return (
    <ResultContext.Provider value={selectedResult}>
      <div className="music-logo">
        <i className="fa-solid fa-music"></i>
      </div>
      <div className="app-info">
        Search for your favorite tracks and create custom Deezer playlists, all
        saved to your personal profile.
      </div>
      <div id="input-container">
        <input
          id="input-field"
          placeholder="Search song"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch} id="input-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <ul id="results-container" className={resultsVisible ? 'visible' : ''}>
        {results.map((result) => (
          <SongCard
            key={result.id}
            result={result}
            id={result.id}
            showDeleteButton={false}
            onDetails={handleDetails}
          />
        ))}
      </ul>
      <DetailedSongCard />
    </ResultContext.Provider>
  );
};

export default SearchBar;
