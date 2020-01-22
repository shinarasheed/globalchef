import React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <>
      <div id="contactFirstSection" className="container-fluid">
        <div className="row row_1">
          <div className="col-md-12">
            <h4>Learn how to cook rice with fried shrimps</h4>
            <div>
              <p>
                <img src={require("../../assets/images/chefcap.png")} alt="" />
                <span>Chef Majekadegbe Fishly</span>
              </p>
              <p>
                <img src={require("../../assets/images/clock.png")} alt="" />
                <span> 1hr 30min</span>
              </p>
            </div>
          </div>
        </div>
        <div className="row row_2">
          <div className="col-md-12">
            <div id="row_2_overlay"></div>

            <img
              src={require("../../assets/images/cookingvideo_small.png")}
              alt=""
            />
          </div>
        </div>
        <div className="row row_3">
          <div className="col-md-12">
            <Link to="/about">About</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/learning">Reviews</Link>
            <Link to="/reviews">Reviews</Link>

          </div>
        </div>
      </div>
      <div id="contactSecondSection" className="container-fluid">
        <div className="row parent_row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12 about_class">
                <div>
                  <img
                    src={require("../../assets/images/feather.png")}
                    alt=""
                  />
                  <span>Resources</span>
                </div>
                <div>
                  <p>You can download the MP4 file as well as PDF file below</p>
                </div>
                <div>
                  <img src={require("../../assets/images/clip.png")} alt="" />
                  <span>
                    Learn how to cook rice spiced with fried schrimps.MP4
                  </span>
                </div>
                <div>
                  <img src={require("../../assets/images/clip.png")} alt="" />
                  <span>
                    Learn how to cook rice spiced with fried schrimps.PDF
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 food_image">
            <h2>Coming up next (Recommended)</h2>
            <div className="row">
              <div className="col-md-6">
                <img src={require("../../assets/images/img5.png")} alt="" />
              </div>
              <div className="col-md-6">
                <h5>How to make Gelato:</h5>
                <h5>Tips and recipes to</h5>
                <h5>make the italian treat</h5>
                <p>Chef Manchang Wuyep</p>
                <span>1hr 30min</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src={require("../../assets/images/img6.png")} alt="" />
              </div>
              <div className="col-md-6">
                <h5>How to make Gelato:</h5>
                <h5>Tips and recipes to</h5>
                <h5>make the italian treat</h5>
                <p>Chef Manchang Wuyep</p>
                <span>1hr 30min</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src={require("../../assets/images/img13.png")} alt="" />
              </div>
              <div className="col-md-6">
                <h5>How to make Gelato:</h5>
                <h5>Tips and recipes to</h5>
                <h5>make the italian treat</h5>
                <p>Chef Manchang Wuyep</p>
                <span>1hr 30min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
