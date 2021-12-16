import React from 'react';

import "../style/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faCodepen
} from "@fortawesome/free-brands-svg-icons";

function Footer(){
  return (
    <footer>
       <div class="social-container">
            <a href="https://github.com/albertoramos1997" className="social" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/alberto-s-ramos/" className="social" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://codepen.io/albertoramos1997" className="social" target="_blank">
                <FontAwesomeIcon icon={faCodepen} size="2x" />
            </a>
            <hr/>
            <p className="footer__text">
                © {new Date().getFullYear()} - albertosilveiramos@gmail.com
             </p>
        </div>
    </footer>
  );
};

export default Footer;
