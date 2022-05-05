import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";


export const Particles2 = (props) => {
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    
      return (
        <Particles 
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 100,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  number: {
                    value: 10,
                    density: {
                        enable: true,
                        value_area: 50,
                    }
                  },  
                  color: {
                    value: "#ffffff",
                  },
                  lineLinked: {
                      enable: true,
                      distance: 50,
                      color: "#ffffff",
                      opacity: 0.05,
                      width: 2
                  },
                  move: {
                    direction: "top",
                    enable: true,
                    random: true,
                    speed: 0.8,
                    straight: true,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 1,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 0.1, max: 1.2 },
                  },
                },
                detectRetina: true,
              }}
        />
      );
}  