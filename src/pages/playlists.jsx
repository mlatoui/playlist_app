import React, { useContext } from "react";
import { SavedContext } from "../App";
import SongCard from "../components/SongCard"; // Adjust the path based on your project structure

export const Playlists = () => {
  const { savedPlaylists } = useContext(SavedContext);
  const handleDetails = (song) => {
    // Handle details for the selected song
    console.log("Song details:", song);
  };
  return (
    <div>
      {savedPlaylists.map((playlist, index) => (
        <div key={index}>
          <div className="saved-playlist-container">
            <h2 className="playlist-name">Playlist {index + 1}</h2>

            <div>
              {playlist.map((song, songIndex) => (
                <SongCard
                  key={songIndex}
                  result={song}
                  showDeleteButton={false} // Set to true if needed
                  onDetails={handleDetails} // Handle details if needed
                  showAllButtons={false} // Set to true if needed
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
