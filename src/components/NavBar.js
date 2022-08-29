import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <nav>
      <NavLink to="/" exact>Home</NavLink><br></br>
      <NavLink to="/movies" exact>Movies</NavLink><br></br>
      <NavLink to="/directors" exact>Directors</NavLink><br></br>
      <NavLink to="/actors" exact>Actors</NavLink><br></br>
    </nav>;
}

export default NavBar;
