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
import Loader from "../components/Loader"


function Homepage() {

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
            <Loader />

          </div>
    );
  }

export default Homepage