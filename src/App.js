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

                          <img src="./LootMachinaXLogo.png"></img>
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
                
                          <img src="./TheIslandLogo.png"></img>
                          <p> The Island was created within the context of a Game Development Methodology
                              class I took during my master’s degree. Me and my groupmates developed a 3D 
                              low poly game that explored the basic concepts of survival games, such as 
                              harvesting materials, hunting animals, gathering various resources, and 
                              adventuring through the map.

                              This course was structured to give students an overview of the entire game 
                              development experience, starting nearly from scratches and brainstorming with 
                              groupmates to competition and domain analysis.

                              One of the best parts of this class was the opportunity to work alongside two 
                              art students who designed specific assets for our game and helped us improve 
                              the overall look and feel of the game environment. Teaming up with people from
                               distinct background and with varied skillsets was an amazing learning experience.
                          </p>

              </HTMLContent>

              <HTMLContent 
              yPosition={-250} 
              gltfPath={"/WayOutScene.gltf"} 
              bgColor={"#312424"}
              rightSide={false}
              domContent={domContent}>
                
                          <img src="./WayOutLogo.png"></img>
                          <p> Way Out is a 3D low poly puzzle game where you play as a golem
                             who just woke up in a mysterious laboratory and is trying to figure
                              out the purpose of his existence. To do so, he has to solve puzzles
                               and challenges in a dungeon-like environment to both progress 
                              through the map and find clues about himself.

                              This game was developed as a part of my Master’s thesis about attentional 
                              skills and mental workload in games. The puzzles were designed to test
                               and map these two aspects.

                              The hidden plot is that a human scientist has become the first to
                               achieve full conscience transmutation. The puzzles the golem has
                                to solve were created by the golem himself in his human form, and
                                 are a simple way to determine if the scientist’s cognitive and 
                                 reasoning skills have remained intact in his new body.


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