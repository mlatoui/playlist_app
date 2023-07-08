import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './pages/about';
import { Home } from './pages/home';
import { Playlists } from './pages/playlists';
import PlayList from './components/PlayList';
import { createContext, useEffect, useState } from 'react';

export const SelectedContext = createContext();
export const SavedContext = createContext();

function App() {
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [savedPlaylists, setSavedPlaylists] = useState([]);

  useEffect(() => {
    const storedSongs = localStorage.getItem('selectedSongs');
    if (storedSongs) {
      setSelectedSongs(JSON.parse(storedSongs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedSongs', JSON.stringify(selectedSongs));
  }, [selectedSongs]);

  useEffect(() => {
    const storedPlaylists = localStorage.getItem('savedPlaylists');
    if (storedPlaylists) {
      setSavedPlaylists(JSON.parse(storedPlaylists));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedPlaylists', JSON.stringify(savedPlaylists));
  }, [savedPlaylists]);

  return (
    <SelectedContext.Provider value={{ selectedSongs, setSelectedSongs }}>
      <SavedContext.Provider value={{ savedPlaylists, setSavedPlaylists }}>
        <Router>
          <div className="App">
            <div id="header-container">
              <Header />
              <Navbar />
            </div>
            <PlayList />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/playlist" element={<Playlists />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </SavedContext.Provider>
    </SelectedContext.Provider>
  );
}

export default App;
