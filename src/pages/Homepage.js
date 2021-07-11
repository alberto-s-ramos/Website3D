import React, { Suspense } from "react";
import "../style/App.scss";

//Components
import HeaderText from "../components/HeaderText";
import AnimationCanvas from "../components/AnimationCanvas";

//pages
import Timeline  from "./Timeline";

function Homepage() {
    document.body.style.backgroundImage = "radial-gradient(circle, rgb(70, 101, 116), rgb(28, 63, 78), rgb(11, 33, 37))"
    return (
          <div className="app">
            <Suspense fallback={<div> Loading... </div>}>
              <HeaderText/>
              <AnimationCanvas/>
            </Suspense>
            <Timeline />
  
          </div>
    );
  }
  
export default Homepage