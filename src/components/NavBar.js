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
            <Link to="/">
              <li> <p href=''>About Me</p> </li>
            </Link>
            <Link to="/">
              <li> <p href=''>Experience</p> </li>
            </Link>
            <Link to="/games">
              <li> <p href=''>Game Development</p> </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}


export default NavBar
