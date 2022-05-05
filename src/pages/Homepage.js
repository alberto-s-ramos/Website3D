import React from "react";
import "../style/App.scss";
import Particles from 'react-tsparticles';

// Elements
import particles from "../constants/Particles";

//Components
import HeaderText from "../components/HeaderText";
import Timeline  from "./Timeline";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Loader from "../components/Loader";
import {MovingBg} from "../components/MovingBg";
import {Particles2} from "../components/Particles2";



function Homepage() {

    return (
          <div className="app">
            {/* <Particles 
              className="particles"
              params={particles}
            /> */}
            {/* <MovingBg /> */}
            <Particles2 
              className="particles"
              params={particles}/>
            <HeaderText/>
            <Timeline />
            <Footer />

          </div>
    );
  }

export default Homepage