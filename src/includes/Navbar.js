import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = props => {
  let navbarClasses = "navbar navbar-expand-lg";
  console.log(props.location.pathname);
  if (props.location.pathname !== "/") {
    navbarClasses = "navbar navbar-expand-lg navbg";
  }
  return (
    <>
      <nav className={navbarClasses}>
        <Link className="nav-brand" to="/">
          <img src={require("../assets/images/logo.png")} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav  mt-2 mt-lg-0 links">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/classes">
                Classes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mt-2 mt-lg-0 signup">
            <li className="nav-item active">
              <Link className="nav-link signup" to="/signin">
                Sign In
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link signup"
                to="/signup"
                style={{ marginLeft: "20px" }}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Navbar);
