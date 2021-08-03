import React, { Suspense, useEffect, useRef } from "react";
import "../style/GameDevelopment.scss";
import Particles from "react-particles-js";
import { a, useTransition } from "@react-spring/web";
import { Canvas } from "react-three-fiber";
import { useProgress } from "drei";

//Components
import HTMLContent from "../components/htmlContent";
import { Section } from "../components/section"
import state from "../components/state"

// Elements
import gameElements from "../constants/GameElements";
import particles from "../constants/Particles";

// Pages

function Loader() {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 0.8, progress: 0.5 },
    leave: { opacity: 0.2 },
    update: { progress },
  });
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className='loading' style={{ opacity }}>
          <div className='loading-bar-container'>
            <a.div className='loading-bar' style={{ width: progress }}></a.div>
          </div>
        </a.div>
      )
  );
}

function GameDevelopment() {

    const domContent = useRef()
    const scrollArea = useRef()
    const onScroll = (e) => (state.top.current = e.target.scrollTop)
    useEffect( () => 
      void onScroll({target: scrollArea.current}, [])
    )
    document.body.style.backgroundImage = "radial-gradient(circle, rgb(15, 24, 29), rgb(12, 19, 22), rgb(5, 8, 8))"
  
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
                                  GitHub
                              </a>
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