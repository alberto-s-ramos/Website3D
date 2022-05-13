import React from 'react';

import "../style/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Email} from "./Email"
import {
    faGithub,
    faLinkedin,
    faCodepen
} from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return (
    <footer id="Contact" className='footer animate'>
        <div className='footer__container'>
            <div className='footer__email'>
                <h2 className='animate'>Let's get in touch</h2>
                <Email/>
            </div>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/alberto-s-ramos/" aria-label="Linkedin" className="social" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/albertoramos1997" aria-label="Github" className="social" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://codepen.io/albertoramos1997" aria-label="CodePen" className="social" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faCodepen} size="2x" />
                </a>
            </div>
            <p className="footer__text">
                © {new Date().getFullYear()} - albertosilveiramos@gmail.com
            </p>
            </div>
    </footer>
    );
};

export default Footer;
