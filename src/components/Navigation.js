import React from "react";
import "../style/Navigation.scss";

function Navigation() {
  return (
    <header className="header">
        <nav className="header__nav">
          <ul>
              <li><a  href="#Intro">About</a></li>
              <li><a href="#Timeline">Experience</a></li>
              <li><a href="#Education">Education</a></li>
          </ul>
        </nav>
    </header>
  );
}

export default Navigation
