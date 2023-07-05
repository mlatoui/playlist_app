import React, { useContext, useEffect, useState } from 'react';
import { ResultContext } from './SearchBar';

const DetailedSongCard = () => {
  const [boxVisible, setBoxVisible] = useState(false);
  const selectedResult = useContext(ResultContext);

  useEffect(() => {
    setBoxVisible(true);
  }, [selectedResult]);

  const toggleBoxVisibility = () => {
    setBoxVisible(!boxVisible);
  };

  return (
    <div>
      <div className={`playlist-container ${boxVisible ? 'visible' : ''}`}>
        <h2 className="playlist-title">detailed infos</h2>
        {selectedResult?.title}
        {/* data to display here */}
        <div className="playlist-buttons">
          <button className="playlist-button" onClick={toggleBoxVisibility}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedSongCard;
