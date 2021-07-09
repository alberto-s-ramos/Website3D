import React, { Suspense, useEffect, useRef } from "react";
import "./style/App.scss";

//Components
import Header from "./components/header";

//pages
import GameDevelopment  from "./pages/GameDevelopment";

function App() {

  return (
    <>
        <Header />
        <GameDevelopment/>
    </>
  );
}

export default App