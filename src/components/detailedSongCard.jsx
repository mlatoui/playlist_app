import React, { useContext, useState } from 'react';
import { ResultContext } from './SearchBar';

const DetailedSongCard = () => {
  const [boxVisible, setBoxVisible] = useState(true);
  const selectedResult = useContext(ResultContext);

  const toggleBoxVisibility = () => {
    setBoxVisible(!boxVisible);
  };

  return (
    <div>
      <div className={`playlist-container ${boxVisible ? 'visible' : ''}`}>
        <h2 className="playlist-title">detailed infos</h2>
        {selectedResult?.title}
        <div className="playlist-buttons">
          <div></div>
          <button className="playlist-button" onClick={toggleBoxVisibility}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedSongCard;
