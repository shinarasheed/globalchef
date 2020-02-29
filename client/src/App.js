import React, { useEffect } from "react";
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
import setAuthToken from "./utills/setAuthToken";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile/Profile";
import VideoPlayer from "./components/Classes/VideoPlayer";
import AllClasses from "./components/AllClasses/AllClasses";
import Users from "./components/Users/Users";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import CreateClass from "./components/Classes/CreateClass";
import UpdateClass from "./components/Classes/UpdateClass";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <>
      <Provider store={store}>
        <Router>
          <ThemeProvider>
            <Navbar />
            <Alert />
            <Switch>
              <Route exact path="/" component={Landingpage} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/learning" component={Learning} />
              {/* <Route exact path="/video" component={VideoPlayer} /> */}
              <Route exact path="/allclasses" component={AllClasses} />
              <Route exact path="/users" component={Users} />
              <PrivateRoute exact path="/createclass" component={CreateClass} />
              <PrivateRoute exact path="/classes/:id" component={Classes} />
              <PrivateRoute exact path="/updateClass/:id" component={UpdateClass} />
              <PrivateRoute exact path="/resources" component={Resources} />
              {/* <PrivateRoute exact path="/saved" component={Contact} /> */}
              {/* <PrivateRoute exact path="/enrolled" component={Enrolled} /> */}
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
