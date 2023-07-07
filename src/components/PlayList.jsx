import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SongCard from './SongCard';
import { SavedContext, SelectedContext } from '../App';

const PlayList = () => {
  const { selectedSongs } = useContext(SelectedContext);
  const { setSavedPlaylists } = useContext(SavedContext);

  const [boxVisible, setBoxVisible] = useState(false);

  const toggleBoxVisibility = () => {
    setBoxVisible(!boxVisible);
  };

  const navigate = useNavigate();
  const handleSave = () => {
    navigate('/playlist');
    const playlist = [...selectedSongs];
    setSavedPlaylists((prevSavedPlaylists) => [
      ...prevSavedPlaylists,
      playlist,
    ]);
    alert('Your playlist is saved.');
  };

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
        </div>
      </div>
    </div>
  );
};

export default PlayList;
