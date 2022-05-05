import React, { Suspense, useEffect, useRef } from "react";
import "../style/GameDevelopment.scss";
import Particles from 'react-tsparticles';
import { Canvas } from "react-three-fiber";
import { useMediaQuery } from 'react-responsive';


//Components
import Game from "../components/Game";
import { CustomButton } from "../components/CustomButton";
import { CustomTitle } from "../components/CustomTitle";


import { Section } from "../components/section"
import state from "../components/state"
import Loader from "../components/Loader"

// Elements
import gameElements from "../constants/gameElements";
import particles from "../constants/Particles";

function GameDevelopment() {
    const domContent = useRef()
    const scrollArea = useRef()
    const onScroll = (e) => (state.top.current = e.target.scrollTop)

    useEffect( () => 
      void onScroll({target: scrollArea.current}, [])
    )

  
    const isMobile = useMediaQuery({ query: `(max-width: 900px)` });
    const canvasFov = isMobile ? 65 : 50
    const sectionFactor = isMobile ? 1.3 : 1.5

    const gameComponents = gameElements.map(element => 
        <Game 
          yPosition = {element.yPosition}
          gltfPath = {element.model}
          rightSide = {element.rightSide}
          domContent = {domContent} >
                <div className="game-content">
                  <div className="game-title">
                    <CustomTitle 
                      title={element.name}
                    /> 
                  </div>
                  <div className="game-description">
                    <p>{element.description}</p>
                  </div>
                  <div className="game-btn">
                    <CustomButton 
                      name="GitHub"
                      link={element.githubLink}
                    />
                  </div>
                </div>
             
        </Game>
      )

    return (
      <>  
        <Particles 
          className="particles"
          params={particles}
        />

        <Canvas
          colorManagement
          camera={{ position:[0, 55, 180], fov: canvasFov }}
          height={800}>
          <Suspense fallback={null}>
              <Section factor={sectionFactor} offset={1}>
                  {gameComponents}
              </Section>
          </Suspense>
        </Canvas>

        <Loader />

        <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
            <div style={{position:'sticky', top:0 }} ref={domContent}></div>
            <div style={{height: `${state.sections * 100}vh`}} ></div>
          </div>
        </>
    );
  }

 export default GameDevelopment