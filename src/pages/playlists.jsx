import React, { useContext } from 'react';
import { SavedContext } from '../App';

export const Playlists = () => {
  const { savedPlaylists } = useContext(SavedContext);

  console.log(savedPlaylists);

  return <h1>list of playlists data in array "SavedContext" to be styled</h1>;
};
