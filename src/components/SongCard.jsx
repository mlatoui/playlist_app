import React, { useContext } from "react";
import { SelectedContext } from "../App";

const SongCard = ({ result, id, showDeleteButton, onDetails }) => {
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

  const handleDetails = () => {
    onDetails(result);
  };

  return (
    <div className="song-card">
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
        <button onClick={handleDetails} className="info-button">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default SongCard;
