import React, { useContext } from "react";
import { SelectedContext } from "./Main";

const SongCard = ({ result, id }) => {
  const { title, artist, album } = result;
  const { selectedSongs, setSelectedSongs } = useContext(SelectedContext);

  const handleSelect = (e) => {
    if (selectedSongs.includes(e.target.id)) return;
    setSelectedSongs([...selectedSongs, result]);
  };

  return (
    <div className="business-card">
      <div className="image-container">
        <img src={album.cover} alt="cover" />
      </div>
      <div className="info-container">
        <h2>{title}</h2>
        <h3>{artist.name}</h3>
        <button onClick={handleSelect} id={id}>
          Select
        </button>
      </div>
    </div>
  );
};

export default SongCard;
