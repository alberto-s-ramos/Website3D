import React from "react";
import "../style/Header.scss";


export default function Header() {
  return (
    <header>
      <div className='header-inner'>
       <div className='logo'></div>
        <nav>
          <ul>
            <li>
              <a href='/'>About Me</a>
            </li>
            <li>
              <a href='/'>Experience</a>
            </li>
            <li>
              <a href='/'>Game Development</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
