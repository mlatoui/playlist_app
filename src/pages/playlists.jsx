import React, { useContext } from 'react';
import { SavedContext } from '../App';
import SongCard from '../components/SongCard';

export const Playlists = () => {
  const { savedPlaylists } = useContext(SavedContext);
  const handleDetails = (song) => {
    console.log('Song details:', song);
  };
  return (
    <div className="saved-playlists-container">
      {savedPlaylists.map((playlist, index) => (
        <div key={index}>
          <div className="saved-playlist-container">
            <h2 className="playlist-name">Playlist {index + 1}</h2>
            <div>
              {playlist.map((song, songIndex) => (
                <SongCard
                  key={songIndex}
                  result={song}
                  showDeleteButton={false}
                  onDetails={handleDetails}
                  showAllButtons={false}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
