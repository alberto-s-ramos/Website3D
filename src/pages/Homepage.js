import React from "react";
import "../style/App.scss";
import Particles from 'react-particles-js';

// Elements
import particles from "../constants/Particles";

//Components
import HeaderText from "../components/HeaderText";
import Timeline  from "./Timeline";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

function Homepage() {
    document.body.style.backgroundImage = "radial-gradient(circle, rgb(15, 24, 29), rgb(12, 19, 22), rgb(5, 8, 8))"

    return (
          <div className="app">
            <Particles 
              className="particles"
              params={particles}
            />
            <HeaderText/>
            <AboutMe />
            <Timeline />
            <Skills />
            <Footer />

          </div>
    );
  }

export default Homepage