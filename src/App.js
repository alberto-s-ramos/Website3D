import React, { Suspense, useEffect, useRef } from "react";
import "./style/App.scss";

//Components
import Header from "./components/header";

//pages
import GameDevelopment  from "./pages/GameDevelopment";
import Timeline  from "./pages/Timeline";


function App() {

  return (
    <>
        <Header />
        <Timeline />
    </>
  );
}

export default App