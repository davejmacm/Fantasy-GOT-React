import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav class = "navbar">
  <ul>
    <li><a href="/">Home</a> </li>
    <li><a href="/teams">League</a> </li>
    <li><a href="/characters">Characters</a> </li>
    <li><a href="/scoring">Scoring</a> </li>

  </ul>
</nav>
);

export default Navbar;
