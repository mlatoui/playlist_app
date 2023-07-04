import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div id="header-container">
        <Header />
        <Navbar />
      </div>
      <div className="content">
        <Main />
      </div>{" "}
      <Footer />
    </div>
  );
}

export default App;
