import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="footer" className="container-fluid">
        <div id="footerFirstSection" className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h1>
                <Link to="/">
                  <span>Global</span>
                  <span>Chef</span>
                </Link>
              </h1>
              <p>
                core values are the fundamental beliefs of a <br /> person or
                organization. The core values are the <br /> guiding principles
                that dictate the service we <br /> provide to our partners and
                students. Global chef <br /> provides the best information about
                food
              </p>
              <ul className="social">
                <li>
                  <Link to="globalchef">
                    <img
                      src={require("../../assets/images/facebook.png")}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link to="globalchef">
                    <img
                      src={require("../../assets/images/google.png")}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link to="globalchef">
                    <img
                      src={require("../../assets/images/twitter.png")}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link to="globalchef">
                    <img
                      src={require("../../assets/images/linkedin.png")}
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h2>Contact Us</h2>
              <ul className="contact">
                <li>
                  <img
                    src={require("../../assets/images/address.png")}
                    alt=""
                  />
                  No 12, Fola Jinadu Street, Gbagada, Lagos
                </li>
                <li>
                  <img src={require("../../assets/images/phone.png")} alt="" />
                  Support: +2348089143428
                </li>
                <li>
                  <img src={require("../../assets/images/email.png")} alt="" />
                  Email: info@globalchef.com.ng
                </li>
              </ul>
              {/* <form>
                <input type="text" placeholder="Email Address" />
                <button type="submit">Subscribe</button>
              </form> */}
            </div>

            <div className="col-md-2">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/classes">Classes</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="footerSecondSection" className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <p>
                Copyrights &copy; 2020 GblobalChef Studio. All rights reserved
              </p>
              <ul>
                <li>
                  <Link to="globalchef">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="globalchef">Terms of Use</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
