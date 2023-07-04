import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './pages/about';
import { Home } from './pages/home';
import { Playlists } from './pages/playlists';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="header-container">
          <Header />
          <Navbar />
        </div>
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
  );
}

export default App;
