import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Challenges from "./pages/Challenges";

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
