import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";

const Signin = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    login(email, password);
  };

  if(isAuthenticated){
    return <Redirect to="/"/>
  }
  return (
    <>
      <div id="signupFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="clear">
              <span>Welcome Back!</span>
              <Link to="chef">
                <img
                  src={require("../assets/images/cancel-button.png")}
                  alt=""
                />
              </Link>
            </div>
            <hr className="full_line" />

            <form onSubmit={e=> onSubmit(e)}>
              <div className="parent_div">
                <input type="email" placeholder="Email" required name='email' value={email} onChange={e => onChange(e)} />
                <input type="password" placeholder="Password" required name='password' value={password} onChange={e => onChange(e)} />
                <div>
                  <button type="submit">Log In</button>
                </div>
                <h1>or</h1>

                <button type="submit" className="facebook">
                  Continue with Facebook
                </button>
                <button type="submit">Continue with Google</button>
                <h3>
                  or <span>Forgotten Password?</span>
                </h3>

                <div>
                  <hr />
                  <h3>
                    Don't have an account? <Link to="/signup">SignUp</Link>
                  </h3>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state=>({
  isAuthenticated: state.auth.isAuthenticated,
  
})

export default connect(mapStateToProps, {login})(Signin);
