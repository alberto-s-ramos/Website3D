import React from 'react'
import {CustomButton} from './CustomButton'
import {CustomTitle} from './CustomTitle'
import "../style/AboutMe.scss";


function AboutMe() {
    return (
          <section class="about">
            <img class="about__picture" src="./profile_pic.webp"/>
            <div class="about__container">
                <div class="about__title">
                  <CustomTitle title="About me"/>
                </div>
                  <p class="about__description">I’m a Software Engineer originally from Portugal, currently living in Berlin, Germany. Well-organized and hardworking person with a creativity vein and attention to detail. Always keen to improve my skills and to learn new technologies that excite me. Animal lover, huge fan of climbing, hiking and photography. Interested in the entire software development spectrum with a special passion for frontend and design.</p>
                <div className="about__btn">
                  <CustomButton name="Resume" link="./Resume.pdf"/>
                </div>
            </div>
          </section>     
    );
  }
  
export default AboutMe
