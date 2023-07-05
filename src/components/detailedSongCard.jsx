import React, { useContext, useEffect, useState, useRef } from "react";
import { ResultContext } from "./SearchBar";

const DetailedSongCard = () => {
  const [boxVisible, setBoxVisible] = useState(false);
  const [audioKey, setAudioKey] = useState(0);
  const selectedResult = useContext(ResultContext);
  const audioRef = useRef(null);

  useEffect(() => {
    setBoxVisible(true);
  }, [selectedResult]);

  const toggleBoxVisibility = () => {
    setBoxVisible(!boxVisible);
    audioRef.current.pause(); // Pause the audio when closing the box
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${minutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    setAudioKey((prevKey) => prevKey + 1);
  }, [selectedResult]);

  return (
    <div>
      <div className={`more-info-container ${boxVisible ? "visible" : ""}`}>
        <div className="title-and-close">
          <div>
            <h2 className="more-info-song-title">{selectedResult?.title}</h2>
          </div>
          <div className="playlist-buttons">
            <button
              className="close-more-info-button"
              onClick={toggleBoxVisibility}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <div>
          <p>{selectedResult?.artist.name}</p>
        </div>
        <div>
          <p>{selectedResult?.album.title}</p>
        </div>
        <div>
          <p>{formatTime(selectedResult?.duration)}</p>
        </div>
        <div className="cover-and-player">
          <div>
            <img src={selectedResult?.album?.cover} alt="Album Cover" />
          </div>
          <div>
            <audio key={audioKey} ref={audioRef} id="audioPlayer" controls>
              <source src={selectedResult?.preview} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedSongCard;
