import React from "react";
import { Link } from "react-router-dom";

const Enrolled = () => {
  return (
    <>
      <div id="enrolledFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={require("../assets/images/classes_babe.png")}
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
                      src={require("../assets/images/blackboard.png")}
                      alt=""
                    />
                    <Link to="/enrolled">Enrolled Classes</Link>
                  </li>
                  <li>
                    <img
                      src={require("../assets/images/save-icon-silhouette.png")}
                      alt=""
                    />
                    <Link to="/saved">Saved Classes</Link>
                  </li>
                  <li>
                    <img src={require("../assets/images/user.png")} alt="" />
                    <Link to="/profile">Edit Profile</Link>
                  </li>
                  <li>
                    <img
                      src={require("../assets/images/settings.png")}
                      alt=""
                    />
                    <Link to="chef">Linked Accounts</Link>
                  </li>
                  <li>
                    <img src={require("../assets/images/logout.png")} alt="" />
                    <Link to="/chef">Sign Out</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                <h1>Enrolled Classes</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-5">
                    <img src={require("../assets/images/img5.png")} alt="" />
                  </div>
                  <div className="col-md-7">
                    <h1>
                      How to make Gelato: Tips and recipes to make the Italian
                      treat
                    </h1>
                    <p>Chef Manchang Wuyep</p>
                    <div>
                      <p>1hr 30min</p>
                      <ul>
                        <li>
                          <Link to="chef">Remove</Link>
                        </li>
                        <li>
                          <Link to="chef">View</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enrolled;
