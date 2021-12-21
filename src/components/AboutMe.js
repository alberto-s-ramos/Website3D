import React from 'react'
import {CustomButton} from './CustomButton'
import {CustomTitle} from './CustomTitle'
import "../style/AboutMe.scss";
import Tilt from 'react-vanilla-tilt'

import * as aboutMe from "../constants/AboutMeElements";

function AboutMe() {
    return (
          <section class="about" id="aboutsection">
            <div class="about-grid-container">
                <div class="about-grid-item about-profile-photo">
                  <Tilt>
                    <img src="./profile_pic.png"/>
                  </Tilt>
                </div>
                <div class="about-title">
                  <CustomTitle 
                    title="About me"
                  />
                </div>
                <div class="about-grid-item about-description" id="style-5">
                      <p>{aboutMe.PARAGRAPH1}</p>
                      <p>{aboutMe.PARAGRAPH2}</p>
                      <p>{aboutMe.PARAGRAPH3}</p>
                </div>
                <div className="about-btn">
                  <CustomButton 
                    name="Resume"
                    link="./Resume.pdf"
                  />
                </div>
            </div>
          </section>     
    );
  }
  
export default AboutMe
