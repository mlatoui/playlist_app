import React, { useContext, useState } from "react";
import SongCard from "./SongCard";
import { SelectedContext } from "./Main";

const PlayList = () => {
  const { selectedSongs } = useContext(SelectedContext);
  const [boxVisible, setBoxVisible] = useState(false);

  const toggleBoxVisibility = () => {
    setBoxVisible(!boxVisible);
  };

  return (
    <div>
      <button className="toggle-button" onClick={toggleBoxVisibility}>
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
      <div className={`playlist-container ${boxVisible ? "visible" : ""}`}>
        <h2 className="playlist-title">
          Playlist &nbsp;<i className="fa-solid fa-sliders"></i>
        </h2>
        {selectedSongs.map((song) => (
          <SongCard key={song.id} result={song} id={song.id} />
        ))}
        <div className="playlist-buttons">
          <div></div>
          <button className="playlist-button">Save</button>
          <button className="playlist-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PlayList;
