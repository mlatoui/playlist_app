import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './pages/about';
import { Home } from './pages/home';
import PlayList from './components/PlayList';

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
            <Route path="/about" element={<PlayList />} />
          </Routes>
        </div>{' '}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
