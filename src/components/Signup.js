import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div id="signupFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="clear">
              <span>Sign Up and start Learning</span
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

                <input type="text" placeholder="Email Address" />

                <input type="text" placeholder="Phone Number" />

                <input type="text" placeholder="Password" />

                <div className="checkbox">
                  <input type="checkbox" name="checkbox" />
                  <p>
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
                <h1>or</h1>

                <button type="submit" className="facebook">
                  Continue with Facebook
                </button>
                <button type="submit">Continue with Google</button>

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

export default Signup;
