import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Challenges from "./pages/challenges/Challenges";

const App = () => {
  return (
    <div className="App">
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/challenges" element={<Challenges />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
