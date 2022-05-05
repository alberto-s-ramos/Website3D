import React from "react";
import "./style/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import { Intro } from "./sections/Intro";
import Timeline  from "./sections/Timeline";
import Footer from "./components/Footer";
import { BgParticles } from "./components/BgParticles";
import particles from "./constants/particlesConfig";

function App() {

  return (
      <main className="app">
          <Navigation/>
          <BgParticles 
            className="particles"
            particles={particles}
          />
          <Intro/>
          <Timeline/>
          <Footer/>
      </main>
  );
}

export default App;