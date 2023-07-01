import React, { createContext, useState } from "react";
import SearchBar from "./SearchBar";
import PlayList from "./PlayList";

export const SelectedContext = createContext();
const Main = () => {
  const [selectedSongs, setSelectedSongs] = useState([]);
  return (
    <SelectedContext.Provider value={{ selectedSongs, setSelectedSongs }}>
      <main className="main">
        <SearchBar />
        <PlayList />
      </main>
    </SelectedContext.Provider>
  );
};

export default Main;
