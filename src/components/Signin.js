import React from "react";
import { Link } from "react-router-dom";
const Signin = () => {
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

            <form>
              <div className="parent_div">
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Password" />
                <div>
                  <Link to="/saved" className="login">
                    Log In
                  </Link>
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

export default Signin;
