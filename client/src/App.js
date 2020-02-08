import React, {useEffect}from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage";
import Navbar from "./includes/Navbar";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Classes from "./components/Classes/Classes";
import Resources from "./components/Resources/Resources";
import Learning from "./components/Learning/Learning";
import { ThemeProvider } from "@chakra-ui/core";
import Contact from "./components/Contact/Contact";
import Enrolled from "./components/Enrolled";
import Alert from "./components/Alert";
import setAuthToken from './utills/setAuthToken';
import PrivateRoute from './components/PrivateRoute';
import Profile from "./components/Profile/Profile";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";


if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {

  useEffect(()=>{
    store.dispatch(loadUser())
  })
  return (
    <>
      <Provider store={store}>
        <Router>
          <ThemeProvider>
            <Navbar />
            <Alert/>
            <Switch>
              <Route exact path="/" component={Landingpage} /> 
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/learning" component={Learning} />
              <PrivateRoute exact path="/classes" component={Classes} />
              <PrivateRoute exact path="/resources" component={Resources} />
              <PrivateRoute exact path="/saved" component={Contact} />
              <PrivateRoute exact path="/enrolled" component={Enrolled} />
              <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
            <Footer />
          </ThemeProvider>
        </Router>
      </Provider>
    </>
  );
}

export default App;
