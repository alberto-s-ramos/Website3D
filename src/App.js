import React from "react";
import "./style/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import NavBar from "./components/NavBar";


//pages
import Homepage  from "./pages/Homepage";
import GameDevelopment  from "./pages/GameDevelopment";


function App() {

  return (
    <Router>
      <div className="app">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/games" exact duration={1000}component={GameDevelopment} />
          </Switch>

      </div>
    </Router>
  );
}

export default App