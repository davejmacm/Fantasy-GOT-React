import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className = "navbar">
  <ul>
    <li><Link to="/home">Home </Link> </li>
    <li><a href="/teams">League</a> </li>
    <li><a href="/characters">Characters</a> </li>
    <li><Link to="/scoring">Scoring</Link> </li>
  </ul>
</nav>
);

export default Navbar;
//should replace a href with Link to as above but the current way does make it appear in the url
