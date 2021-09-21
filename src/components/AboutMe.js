import React from 'react'
import "../style/AboutMe.scss";
import { useMediaQuery } from 'react-responsive';

import * as aboutMe from "../constants/AboutMeElements";

function AboutMe() {

  const aboutMeTitleFooterMobile = "</AboutMe>"
  const isMobile = useMediaQuery({ query: `(max-width: 85rem)` });

  const aboutMeTitle = isMobile ? "<AboutMe>" : "About Me"

    return (
      <div>
          <section class="about" id="aboutsection">
            <div class="about-grid-container">
                <div class="about-grid-item about-profile-photo">
                    <img src="./profile_pic.png"/>
                </div>
                <h1 class="title about-grid-item about-title"><b>{aboutMeTitle}</b></h1>
                    <div class="about-grid-item about-description" id="style-5">
                        <p>{aboutMe.PARAGRAPH1}</p>
                        <p>{aboutMe.PARAGRAPH2}</p>
                        <p>{aboutMe.PARAGRAPH3}</p>
                    </div>
                    <div class="about-grid-item about-cv-button">
                        <a href="./CurriculumVitae.pdf" class="about-btn" target="_blank"> Resume </a>
                    </div>
                <h1 class="title about-grid-item about-title-footer"><b>{aboutMeTitleFooterMobile}</b></h1>
            </div>
          </section>
      </div>
     
    );
  }
  
export default AboutMe
