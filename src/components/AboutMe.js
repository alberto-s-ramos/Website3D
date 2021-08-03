import React from 'react'
import "../style/AboutMe.scss";

import * as aboutMe from "../constants/AboutMeElements";

function AboutMe() {
    return (
      <div>
          <section class="about" id="aboutsection">
            <div class="about-grid-container">
                <div class="about-grid-item about-item1 about-profile-photo">
                    <img src="./profile_picture.jpg" />
                </div>
                <h1 class="title about-title about-grid-item about-item2">About me</h1>
                    <div class="about-grid-item about-item3 scrollbarAbout" id="style-5">
                        <p>{aboutMe.PARAGRAPH1}</p>
                        <p>{aboutMe.PARAGRAPH2}</p>
                        <p>{aboutMe.PARAGRAPH3}</p>
                    </div>
            </div>
          </section>
      </div>
     
    );
  }
  
export default AboutMe