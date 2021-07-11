import React, { Suspense } from "react";
import "../style/App.scss";
import Particles from 'react-particles-js';


//Components
import HeaderText from "../components/HeaderText";
import AnimationCanvas from "../components/AnimationCanvas";
//pages
import Timeline  from "./Timeline";
import AboutMe from "./AboutMe";

function Homepage() {
    document.body.style.backgroundImage = "radial-gradient(circle, rgb(15, 24, 29), rgb(12, 19, 22), rgb(5, 8, 8))"
    return (
          <div className="app">
            <Particles className="particles"
                params={{
                    "particles": {
                        "number": {
                          "value": 200,
                          "density": {
                            "enable": true,
                            "value_area": 315
                          }
                        },
                        "color": {
                          "value": "#ffffff"
                        },
                        "shape": {
                          "type": "circle",
                          "stroke": {
                            "width": 0,
                            "color": "#000000"
                          },
                          "polygon": {
                            "nb_sides": 5
                          },
                          "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                          }
                        },
                        "opacity": {
                          "value": 0.5,
                          "random": true,
                          "anim": {
                            "enable": true,
                            "speed": 0.3,
                            "opacity_min": 0.2,
                            "sync": false
                          }
                        },
                        "size": {
                          "value": 3,
                          "random": true,
                          "anim": {
                            "enable": true,
                            "speed": 1,
                            "size_min": 0.1,
                            "sync": false
                          }
                        },
                        "line_linked": {
                          "enable": false,
                          "distance": 150,
                          "color": "#ffffff",
                          "opacity": 0.4,
                          "width": 2
                        },
                        "move": {
                          "enable": true,
                          "speed": 0.3 ,
                          "direction": "none",
                          "random": true,
                          "straight": false,
                          "out_mode": "out",
                          "bounce": false,
                          "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                          }
                        }
                      },
                      "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                          "onhover": {
                            "enable": false,
                            "mode": "repulse"
                          },
                          "onclick": {
                            "enable": true,
                            "mode": "push"
                          },
                          "resize": true
                        },
                        "modes": {
                          "grab": {
                            "distance": 800,
                            "line_linked": {
                              "opacity": 1
                            }
                          },
                          "bubble": {
                            "distance": 800,
                            "size": 80,
                            "duration": 2,
                            "opacity": 0.8,
                            "speed": 3
                          },
                          "repulse": {
                            "distance": 400,
                            "duration": 0.4
                          },
                          "push": {
                            "particles_nb": 4
                          },
                          "remove": {
                            "particles_nb": 2
                          }
                        }
                      },
                      "retina_detect": true
                }} />
            <HeaderText className="landingMessage"/>
            <AboutMe />
            <Timeline />
  
          </div>
    );
  }
  
export default Homepage