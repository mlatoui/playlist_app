import React, { useContext, useState } from 'react';
import SongCard from './SongCard';
import { SelectedContext } from '../App';
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
          />
        ))}
        <div className="playlist-buttons">
          <div></div>
          <button className="playlist-button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default PlayList;
