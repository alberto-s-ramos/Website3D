import React from "react";
import { Link } from "react-router-dom";


import "../style/NavBar.scss";

function NavBar() {
  return (
    <header className="header">
      <div className='header-inner'>
       <div className='logo'/>
        <nav>
          <ul>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <li> <p>Homepage</p> </li>
            </Link>
            <Link to="/games" style={{ textDecoration: 'none' }}>
              <li> <p>Game Development</p> </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}


export default NavBar
