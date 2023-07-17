import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/challenges">Challenges</NavLink>
      </ul>
    </>
  );
};

export default NavBar;
