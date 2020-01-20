import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div id="signupFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div>
              <h1>Sign Up and start Learning</h1>
              <Link to="chef">x</Link>
            </div>
          </div>
          <form>
            <div>
              <input type="text" placeholder="Full Name" />
            </div>
            <div>
              <input type="text" placeholder="Email Address" />
            </div>
            <div>
              <input type="text" placeholder="Phone Number" />
            </div>
            <div>
              <input type="text" placeholder="Password" />
            </div>
            <div>
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
                By signing up you agree to our Terms of Use and Privacy Policy
              </p>
            </div>
            <div>
              <h1>Or</h1>
              <button type="submit">Continue with Facebook</button>
            </div>
            <div>
              <button type="submit">Continue with Google</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
