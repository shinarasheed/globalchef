import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage";
import Navbar from "./includes/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landingpage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
