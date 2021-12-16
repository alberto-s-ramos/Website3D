import React from 'react'
import "../style/AboutMe.scss";
import { useMediaQuery } from 'react-responsive';
import Tilt from 'react-vanilla-tilt'

import * as aboutMe from "../constants/AboutMeElements";

function AboutMe() {

    return (
      <div>
          <section class="about" id="aboutsection">
            <div class="about-grid-container">
                <div class="about-grid-item about-profile-photo">
                  <Tilt>
                    <img src="./profile_pic.png"/>
                  </Tilt>
                </div>
                <h1 class="title about-grid-item about-title">About me</h1>
                <div class="about-grid-item about-description" id="style-5">
                      <p>{aboutMe.PARAGRAPH1}</p>
                      <p>{aboutMe.PARAGRAPH2}</p>
                      <p>{aboutMe.PARAGRAPH3}</p>
                </div>
                <a className="about-grid-item about-btn btn" href="./Resume.pdf" target="_blank">
                   <p>Resume</p>
                </a>
            </div>
          </section>
      </div>
     
    );
  }
  
export default AboutMe
