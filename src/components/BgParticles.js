import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

export const BgParticles = (props) => {    
    const particlesInit = async (main) => { await loadFull(main); };
    
    return (
      <Particles 
          init={particlesInit}
          options={props.particles}
      />
    );
}
