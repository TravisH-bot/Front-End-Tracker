import { NavLink } from "react-router-dom";
import "./NavBar.styles.css";

const NavBar = () => {
  return (
    <div className="nav-bar sticky">
      <ul className="nav-list">
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/about">About</NavLink>
        </div>
        <div>
          <NavLink to="/challenges">Challenges</NavLink>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
