import React, { useContext } from "react";
import { SelectedContext } from "./Main";

const SongCard = ({ result, id, showDeleteButton }) => {
  const { title, artist, album } = result;
  const { selectedSongs, setSelectedSongs } = useContext(SelectedContext);

  const handleSelect = () => {
    if (selectedSongs.some((song) => song.id === result.id)) {
      return;
    }
    setSelectedSongs([...selectedSongs, result]);
  };

  const handleDelete = () => {
    const newSelectedSongs = selectedSongs.filter((song) => song.id !== id);
    setSelectedSongs(newSelectedSongs);
  };

  return (
    <div className="business-card">
      <div className="image-container">
        <img src={album.cover} alt="cover" />
      </div>
      <div className="info-container">
        <h3 className="artist-name">{artist.name}</h3>
        <h2 className="song-title">{title}</h2>

        <button onClick={handleSelect} className="add-button">
          <i className="fa-solid fa-plus"></i>
        </button>
        {showDeleteButton && (
          <button onClick={handleDelete} className="add-button">
            <i className="fa-solid fa-trash"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default SongCard;
