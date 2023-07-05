import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './pages/about';
import { Home } from './pages/home';
import { Playlists } from './pages/playlists';
import PlayList from './components/PlayList';
import { createContext, useState } from 'react';

export const SelectedContext = createContext();
function App() {
  const [selectedSongs, setSelectedSongs] = useState([]);
  return (
    <SelectedContext.Provider value={{ selectedSongs, setSelectedSongs }}>
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
          </div>{' '}
          <Footer />
        </div>
      </Router>
    </SelectedContext.Provider>
  );
}

export default App;
