import React, { Suspense, useEffect, useRef } from "react";
import "./App.scss";
//Components
import Header from "./components/header";
import HTMLContent from "./components/htmlContent";
import { Section } from "./components/section"
import { Canvas } from "react-three-fiber";

//pages
import state from "./components/state"


function App() {

  const domContent = useRef()
  const scrollArea = useRef()
  const onScroll = (e) => (state.top.current = e.target.scrollTop)
  useEffect( () => 
    void onScroll({target: scrollArea.current}, [])
  )

  return (
    <>
      <Header />

      <Canvas
        colorManagement
        camera={{ position:[0, 30, 180], fov:50 }}>

        <Suspense fallback={null}>
            <Section factor={1.5} offset={1}>

              <HTMLContent 
              yPosition={250} 
              gltfPath={"/WayOutScene3.gltf"}
              bgColor={"#242a31"}
              rightSide={false}
              domContent={domContent}>
                
                        <span className="title"> MachinaX </span>
                          <p> LootMachinaX was the first 3D game I developed
                              for a Game Design course. The course parameters 
                              were very broad and allowed us the freedom to create 
                              any sort of game within the theme “Ex-Lootbox”. From 
                              this starting point, I designed an exploration game 
                              where the goal was to find different loot boxes scattered
                              around the map while exploring a 3D environment. 
                              Each of the boxes contained a different augmentation 
                              (e.g. ‘super jump’, ‘rush’, ‘break crystals’) which 
                              broadened the player’s capacity to interact with the 
                              game world.
                              <br/>
                              This course and the work I put into the final project 
                              made me fall in love with game development. Many times 
                              I found myself excited to get to my desk and work on the game.
                          </p>

              </HTMLContent>

              <HTMLContent 
              yPosition={0} 
              gltfPath={"/WayOutScene2.gltf"} 
              bgColor={"#283124"}
              rightSide={true}
              domContent={domContent}>
                
                          <span className="title"> The Island </span>
                          <p> Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Integer at tellus convallis,
                                lobortis risus id, porta leo. Nam placerat sapien ex,
                                vel consectetur magna pulvinar id. In enim lorem,
                                  egestas et magna et, mollis fringilla felis. Fusce 
                                  consectetur tincidunt velit at porta. Vestibulum vel
                                  accumsan sem. Proin id sagittis ante. Mauris in lacus
                                    a urna pellentesque molestie sit amet vel metus.
                                    Quisque at dui pharetra, auctor lorem in, ultrices massa. 
                                    Aenean tellus tellus, bibendum nec mattis ut, gravida quis orci.
                          </p>

              </HTMLContent>

              <HTMLContent 
              yPosition={-250} 
              gltfPath={"/WayOutScene.gltf"} 
              bgColor={"#312424"}
              rightSide={false}
              domContent={domContent}>
                
                        <span className="title"> Way Out </span>
                          <p> Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Integer at tellus convallis,
                                lobortis risus id, porta leo. Nam placerat sapien ex,
                                vel consectetur magna pulvinar id. In enim lorem,
                                  egestas et magna et, mollis fringilla felis. Fusce 
                                  consectetur tincidunt velit at porta. Vestibulum vel
                                  accumsan sem. Proin id sagittis ante. Mauris in lacus
                                    a urna pellentesque molestie sit amet vel metus.
                                    Quisque at dui pharetra, auctor lorem in, ultrices massa. 
                                    Aenean tellus tellus, bibendum nec mattis ut, gravida quis orci.
                          </p>

              </HTMLContent>


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

export default App