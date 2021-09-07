import React from 'react'
import "../style/AboutMe.scss";

import * as aboutMe from "../constants/AboutMeElements";

function AboutMe() {
    return (
      <div>
          <section class="about" id="aboutsection">
            <div class="about-grid-container">
                <div class="about-grid-item about-profile-photo">
                    <img src="./profile_pic.png" />
                </div>
                <h1 class="title about-grid-item about-title">About me</h1>
                    <div class="about-grid-item about-description" id="style-5">
                        <p>{aboutMe.PARAGRAPH1}</p>
                        <p>{aboutMe.PARAGRAPH2}</p>
                        <p>{aboutMe.PARAGRAPH3}</p>
                    </div>
                    <div class="about-grid-item about-cv-button">
                        <a href="./CurriculumVitae.pdf" class="about-btn" target="_blank"> Resume </a>
                    </div>
            </div>
          </section>
      </div>
     
    );
  }
  
export default AboutMe