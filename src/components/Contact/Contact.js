import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div id="classesFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={require("../../assets/images/classes_babe.png")}
                  alt=""
                  className="babe_pic"
                />
                <p>Wendy Davies</p>
                <p>Lagos Nigeria</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <ul>
                  <li>
                    <img
                      src={require("../../assets/images/blackboard.png")}
                      alt=""
                    />
                    <Link to="chef">Enrolled Classes</Link>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/images/save-icon-silhouette.png")}
                      alt=""
                    />
                    <Link to="chef">Saved Classes</Link>
                  </li>
                  <li>
                    <img src={require("../../assets/images/user.png")} alt="" />
                    <Link to="chef">Edit Profile</Link>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/images/settings.png")}
                      alt=""
                    />
                    <Link to="chef">Linked Accounts</Link>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/images/logout.png")}
                      alt=""
                    />
                    <Link to="chef">Sign Out</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                <h1>Saved Classes</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <img
                  src={require("../../assets/images/img5.png")}
                  alt=""
                  className="food_image"
                />
                <div>
                  <span>300 students</span>
                  <span>1hr 40min</span>
                </div>
                <p>
                  How to make Gelato: Tips and <br /> Recipes to make the
                  Italain treat
                </p>
                <p>Chef Manchang Wuyeng</p>
                <p className="rating">
                  <img src={require("../../assets/images/img8.png")} alt="" />
                  <span> 4.5 </span>
                </p>
              </div>
              <div className="col-md-3">
                <img
                  src={require("../../assets/images/img6.png")}
                  alt=""
                  className="food_image"
                />
                <div>
                  <span>300 students</span>
                  <span>1hr 40min</span>
                </div>
                <p>
                  Master the art of grilling your <br /> barbeque like a chef
                </p>
                <p>Chef Manchang Wuyeng</p>
                <p className="rating">
                  <img src={require("../../assets/images/img8.png")} alt="" />
                  <span> 4.5 </span>
                </p>
              </div>
              <div className="col-md-3">
                <img
                  src={require("../../assets/images/img7.jpg")}
                  alt=""
                  className="food_image"
                />
                <div>
                  <span>300 students</span>
                  <span>1hr 40min</span>
                </div>
                <p>Learn to cook rice spiced with fried schrimps</p>
                <p>Chef Manchang Wuyeng</p>
                <p className="rating">
                  <img src={require("../../assets/images/img8.png")} alt="" />
                  <span> 4.5 </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
