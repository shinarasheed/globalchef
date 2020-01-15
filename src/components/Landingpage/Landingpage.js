import React from "react";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <>
      <div id="homeFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <p>Cooking is fun! We will prove it to you</p>
            <h3>
              Get Unlimited access tio the <br /> world of food
            </h3>
            <Link to="cooking">Get Started</Link>
          </div>
        </div>
      </div>
      <div id="homeSecondSection" className="container-fluid">
        <h1>Why choose Global chef? </h1>
        <div className="row">
          <div className="col-md-3">
            <img src={require("../../assets/images/img1.png")} alt="" />
            <h4>Wide Variety of food</h4>
            <p>
              Get free access to unlimited food <br /> tutorials and get to
              enjoy the <br /> beauty of cooking
            </p>
          </div>
          <div className="col-md-3">
            <img src={require("../../assets/images/img2.png")} alt="" />
            <h4>Seasoned Chefs</h4>
            <p>
              Learn the tricks and tips from top chefs <br /> all over the world
              and impress your <br /> friends at home
            </p>
          </div>
          <div className="col-md-3">
            <img src={require("../../assets/images/img2.png")} alt="" />
            <h4>Meet and Share</h4>
            <p>
              Access good job opportunities in <br /> our partner schools
            </p>
          </div>
        </div>
      </div>
      <div id="homeThirdSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="row row-1">
              <div className="col-md-12">
                <div>
                  <h1>Top Classes</h1>
                  <p>
                    Your professional development has just gotten easier,
                    affordable and exciting with our online courses. They are
                    designed to <br /> equid you with 21st century teaching and
                    learning skills
                  </p>
                </div>
              </div>
            </div>
            <div className="row row-2">
              <div className="col-md-2">
                <img src={require("../../assets/images/img4.jpg")} alt="" />
                <div>
                  <span>300 students</span>
                  <span>1hr 40min</span>
                </div>
                <p>
                  Serve your breakfast like a boss <br /> and have a diet on
                </p>
                <p>Chef Michael Akpan</p>
                <img src={require("../../assets/images/img8.png")} alt="" />
                <span> 4.5 </span>
              </div>
              <div className="col-md-2">
                <img src={require("../../assets/images/img4.jpg")} alt="" />
                <div>
                  <span>300 students</span>
                  <span>1hr 40min</span>
                </div>
                <p>
                  Serve your breakfast like a boss <br /> and have a diet on
                </p>
                <p>Chef Michael Akpan</p>
                <img src={require("../../assets/images/img8.png")} alt="" />
                <span> 4.5 </span>
              </div>
              <div className="col-md-2">
                <img src={require("../../assets/images/img4.jpg")} alt="" />
                <div>
                  <span>300 students</span>
                  <span>1hr 40min</span>
                </div>
                <p>
                  Serve your breakfast like a boss <br /> and have a diet on
                </p>
                <p>Chef Michael Akpan</p>
                <img src={require("../../assets/images/img8.png")} alt="" />
                <span> 4.5 </span>
              </div>
              <div className="col-md-2">
                <img src={require("../../assets/images/img4.jpg")} alt="" />
                <div>
                  <span>300 students</span>
                  <span>1hr 40min</span>
                </div>
                <p>
                  Serve your breakfast like a boss <br /> and have a diet on
                </p>
                <p>Chef Michael Akpan</p>
                <img src={require("../../assets/images/img8.png")} alt="" />
                <span> 4.5 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
