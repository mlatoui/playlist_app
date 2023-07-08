import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SongCard from './SongCard';
import { SavedContext, SelectedContext } from '../App';

const PlayList = () => {
  const { selectedSongs, setSelectedSongs } = useContext(SelectedContext);
  const { setSavedPlaylists } = useContext(SavedContext);
  const navigate = useNavigate();

  const [boxVisible, setBoxVisible] = useState(false);
  const [showSaveMessage, setShowSaveMessage] = useState(false);

  const toggleBoxVisibility = () => {
    setBoxVisible(!boxVisible);
  };

  const handleSave = () => {
    setShowSaveMessage(true);
    const playlist = [...selectedSongs];
    setSavedPlaylists((prevSavedPlaylists) => [
      ...prevSavedPlaylists,
      playlist,
    ]);
    setSelectedSongs([]);
    navigate('/playlist');
  };

  useEffect(() => {
    let timeout;
    if (showSaveMessage) {
      timeout = setTimeout(() => {
        setShowSaveMessage(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [showSaveMessage]);

  return (
    <div>
      <button className="toggle-button" onClick={toggleBoxVisibility}>
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
      <div className={`playlist-container ${boxVisible ? 'visible' : ''}`}>
        <h2 className="playlist-title">
          Playlist &nbsp;<i className="fa-solid fa-sliders"></i>
        </h2>
        {selectedSongs.map((song) => (
          <SongCard
            key={song.id}
            result={song}
            id={song.id}
            showDeleteButton={true}
            showAllButtons={true}
          />
        ))}
        <div className="playlist-buttons">
          <div></div>
          <button className="playlist-button" onClick={handleSave}>
            Save
          </button>
          <button
            className="playlist-button"
            onClick={() => {
              setSelectedSongs([]);
            }}
          >
            Clear
          </button>
        </div>
      </div>
      {showSaveMessage && (
        <div className="save-message">
          <span>Playlist saved</span>
        </div>
      )}
    </div>
  );
};

export default PlayList;
