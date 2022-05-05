import React from "react";
import { Link } from "react-router-dom";

import "../style/NavBar.scss";

function NavBar() {
  return (
    <header className="header">
        <nav className="header__nav">
          <ul>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <li> Homepage </li>
            </Link>
            <Link to="/games" style={{ textDecoration: 'none' }}>
              <li> Games </li>
            </Link>
          </ul>
        </nav>
    </header>
  );
}

export default NavBar
