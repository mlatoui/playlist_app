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
        <h3 className="artist-name">{artist.name}</h3>
        <h2 className="song-title">{title}</h2>
        <button onClick={handleSelect} id={id} className="add-button">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default SongCard;
