import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from '../actions/auth'
const Navbar = ({logout}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
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
              <Link className="nav-link" to="/enrolled">
                Enrolled
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/learning">
                Learning
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/classes">
                Classes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/saved">
                Saved
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
              <a onClick={logout} href="#!" className="nav-link signup">
                Logout
              </a>
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

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
