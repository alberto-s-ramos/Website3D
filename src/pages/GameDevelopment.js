import React, { Suspense, useEffect, useRef } from "react";
import "../style/GameDevelopment.scss";

//Components
import HTMLContent from "../components/htmlContent";
import Particles from "react-particles-js";
import particles from "../constants/Particles";
import { Section } from "../components/section"
import { Canvas } from "react-three-fiber";

// Elements
import gameElements from "../constants/GameElements";

// Pages
import state from "../components/state"


function GameDevelopment() {

    const domContent = useRef()
    const scrollArea = useRef()
    const onScroll = (e) => (state.top.current = e.target.scrollTop)
    useEffect( () => 
      void onScroll({target: scrollArea.current}, [])
    )
  
    return (
      <>  
        <Particles 
          className="particles"
          params={particles}
        />
        <Canvas
          colorManagement
          camera={{ position:[0, 35, 180], fov:55 }}>
  
          <Suspense fallback={null}>
              <Section factor={1.5} offset={1}>
                  {
                    gameElements.map(element => {
                      return(
                        <HTMLContent 
                          yPosition = {element.yPosition}
                          gltfPath = {element.model}
                          rightSide = {element.rightSide}
                          domContent = {domContent} >
                              <img src = {element.logo}/>
                              <p>{element.description}</p>
                              <a href={element.githubLink} class="gitHub-btn" target="_blank" data-ol-has-click-handler="">
                                <i class="fa fa-github"/>GitHub
                              </a>
                        </HTMLContent>
                      )
                    })
                  }
              </Section>
          </Suspense>
  
        </Canvas>
            <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
              <div style={{position:'sticky', top:0 }} ref={domContent}></div>
              <div style={{height: `${state.sections * 100}vh`}} ></div>
            </div>
        </>
    );
  }

 export default GameDevelopment