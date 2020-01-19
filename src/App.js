import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage";
import Navbar from "./includes/Navbar";
import Footer from "./components/Footer/Footer";
import Classes from "./components/Classes/Classes";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/classes" component={Classes} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
