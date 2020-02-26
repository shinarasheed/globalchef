import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const userPhoto = (
    <img
      src={user && user.photo}
      alt="user"
      style={{ width: "40px" }}
      className="round-img img-fluid"
    />
  );

  const userDefault = (
    <img
      src={user && user.avatar}
      alt="user"
      style={{ width: "40px" }}
      className="round-img"
    />
  );

  const authLinks = (
    <ul className="navbar-nav  mt-2 mt-lg-0 links">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link" to="/enrolled">
          Enrolled
        </Link>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link" to="/learning">
          Learning
        </Link>
      </li>
      
      <li className="nav-item">

        {user && user.role !== "admin" ? (''): (<Link className="nav-link" to="/createclass">
          Create Class
        </Link> ) }
        {user && user.role !== "instructor" ? (''): (<Link className="nav-link" to="/createclass">
          Create Class
        </Link> ) }
        
      </li>

      <div className="navbar-nav mt-2 mt-lg-0 signup">
        <li className="nav-item active">
          <a onClick={logout} href="#!" className="nav-link signup">
            Logout
          </a>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/profile">
            <div className="row">
              <div className="col ">
                <span className="welcome">
                  Hi, {user && user.name.split(" ")[0]}
                </span>
              </div>
              <div className="col pb-2">
                {user && user.photo ? userPhoto : userDefault}
              </div>
            </div>
          </Link>
        </li>
        <li></li>
      </div>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav  mt-2 mt-lg-0 links">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/learning">
          Learning
        </Link>
      </li>

      <div className="navbar-nav mt-2 mt-lg-0 signup">
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
      </div>
    </ul>
  );
 

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

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02 pt-3">
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
