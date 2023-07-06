import React from "react";
import SongCard from "../components/SongCard";

export const Playlists = ({ songs }) => {
  return (
    <div>
      <h2>Playlist</h2>
      {songs.map((song) => (
        <SongCard key={song.id} result={song} showAllButtons={false} />
      ))}
    </div>
  );
};
