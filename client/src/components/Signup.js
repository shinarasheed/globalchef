import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../actions/auth";

const Signup = ({ register, isAuthenticated }) => {
  const useEffect = () => {
    window.scrollTo(0, 0);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    newsLetters: false
  });

  const { name, email, password, newsLetters } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // console.log(formData);

    register({ name, email, password, newsLetters });
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div id="signupFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="clear">
              <span>Sign Up and start Learning</span>
              <Link to="/signup">
                <img
                  src={require("../assets/images/cancel-button.png")}
                  alt=""
                />
              </Link>
            </div>
            <hr className="full_line" />

            <form onSubmit={e => onSubmit(e)}>
              <div className="parent_div">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={name}
                  onChange={e => onChange(e)}
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                  required
                />

                {/* <input type="text" placeholder="Phone Number" /> */}

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={e => onChange(e)}
                  required
                />

                <div className="checkbox pt-3">
                  <p>
                    {" "}
                    <input
                      type="checkbox"
                      name="newsLetters"
                      checked={newsLetters}
                      value={newsLetters}
                      onChange={e => {
                        // e.target.name= e.target.checked
                        setFormData({ ...formData, newsLetters: !newsLetters });
                      }}
                    />{" "}
                    Yes, I want to get the most out of GlobalChef by <br />
                    recieving emails with exclusive deals, personal <br />
                    recommendations and learning tips
                  </p>
                </div>
                <div>
                  <button type="submit">Sign Up</button>
                  <p>
                    By signing up you agree to our Terms of Use and Privacy
                    Policy
                  </p>
                </div>

                <div>
                  <hr />
                  <h3>
                    Already have an account?<Link to="/signin"> Login</Link>
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Signup);
