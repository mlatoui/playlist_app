import React, { useContext } from "react";
import SongCard from "./SongCard";
import { SelectedContext } from "./Main";

const PlayList = () => {
  const { selectedSongs } = useContext(SelectedContext);
  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {selectedSongs.map((song) => (
          <SongCard key={song.id} result={song} id={song.id} />
        ))}
      </ul>
    </div>
  );
};

export default PlayList;
