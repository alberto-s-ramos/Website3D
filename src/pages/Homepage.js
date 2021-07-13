import React, { Suspense } from "react";
import "../style/App.scss";
import Particles from 'react-particles-js';

// Elements
import particles from "../constants/Particles";
import gameElements from "../constants/GameElements";


//Components
import HeaderText from "../components/HeaderText";
import GameDevelopment from "./GameDevelopment";
//pages
import Timeline  from "./Timeline";
import AboutMe from "./AboutMe";


function Homepage() {
    document.body.style.backgroundImage = "radial-gradient(circle, rgb(15, 24, 29), rgb(12, 19, 22), rgb(5, 8, 8))"
    return (
          <div className="app">
            <Particles 
              className="particles"
              params={particles}
            />
            <HeaderText className="landingMessage"/>
            <AboutMe />
            <Timeline />


  
          </div>
    );
  }
  
export default Homepage