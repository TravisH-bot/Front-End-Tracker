import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Challenges from "./pages/challenges/Challenges";
import Footer from "./components/footer/Footer";

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
        <Footer />
      </>
    </div>
  );
};

export default App;
