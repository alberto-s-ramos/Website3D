import React, { Suspense, useEffect, useRef } from "react";
import "../style/GameDevelopment.scss";
import Particles from "react-particles-js";
import { Canvas } from "react-three-fiber";
import { useMediaQuery } from 'react-responsive';


//Components
import HTMLContent from "../components/htmlContent";
import { Section } from "../components/section"
import state from "../components/state"
import Loader from "../components/Loader"

// Elements
import gameElements from "../constants/GameElements";
import particles from "../constants/Particles";

function GameDevelopment() {
    const domContent = useRef()
    const scrollArea = useRef()
    const onScroll = (e) => (state.top.current = e.target.scrollTop)

    useEffect( () => 
      void onScroll({target: scrollArea.current}, [])
    )

    document.body.style.backgroundImage = "radial-gradient(circle, rgb(15, 24, 29), rgb(12, 19, 22), rgb(5, 8, 8))"
  
    const isMobile = useMediaQuery({ query: `(max-width: 900px)` });
    const canvasFov = isMobile ? 65 : 50
    const sectionFactor = isMobile ? 1.3 : 1.5

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
                  {
                    gameElements.map(element => {
                      return(
                        <HTMLContent 
                          yPosition = {element.yPosition}
                          gltfPath = {element.model}
                          rightSide = {element.rightSide}
                          domContent = {domContent} >
                              <center>
                                <img src = {element.logo}/>
                                <p>{element.description}</p>
                                <a href={element.githubLink} class="gitHub-btn" target="_blank" data-ol-has-click-handler="">
                                    GitHub
                                </a>
                              </center>
                        </HTMLContent>
                      )
                    })
                  }
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