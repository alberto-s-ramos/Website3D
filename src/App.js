import React, {useEffect} from "react";
import "./style/App.scss";

import Navigation from "./components/Navigation";
import { Intro } from "./sections/Intro";
import Timeline  from "./sections/Timeline";
import Footer from "./components/Footer";
import { BgParticles } from "./components/BgParticles";
import particles from "./constants/particlesConfig";

function App() {

  useEffect(()=> {
    const toAnimate = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach( entry => {
        if(entry.isIntersecting === true) {
          entry.target.classList.add('animate--trigger');
        }else{
          entry.target.classList.remove('animate--trigger');
        }
      })
    })

    toAnimate.forEach( title => {
      observer.observe(title);
    })
  })

  return (
      <main className="app">
        <Navigation/>
          <Intro/>
          <Timeline/>
          <Footer/>
        <BgParticles 
          className="particles"
          particles={particles}
        />
      </main>
  );
}

export default App;