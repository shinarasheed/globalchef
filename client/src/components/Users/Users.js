import React from "react";
import "./Users.scss";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <>
      <div id="usersFirstSection">
        <h1>Users</h1>

        <div className="users_container">
          <div className="user">
            <img
              className="user_img"
              src={require("../../assets/images/chef1.png")}
              alt=""
            />
            <p>
              <span>Name:</span> <span> Birgit Schreiner</span>
            </p>
            <p>
              <span>Location:</span> <span> china</span>
            </p>
            <p>
              <span>Email:</span> <span>birgit@gmail.com</span>
            </p>
            <p>
              <span>Phone Number:</span> <span>08065653282</span>
            </p>
            <div>
              <a href="facebook.com">
                <img
                  src={require("../../assets/images/social1.png")}
                  alt="facebook"
                />
              </a>
              <a href="twitter">
                <img
                  src={require("../../assets/images/social2.png")}
                  alt="facebook"
                />
              </a>
              <a href="instagram">
                <img
                  src={require("../../assets/images/social3.png")}
                  alt="facebook"
                />
              </a>
              <a href="pinterest">
                <img
                  src={require("../../assets/images/social4.png")}
                  alt="facebook"
                />
              </a>
            </div>
            <Link to="/users" className="update">
              Update Role
            </Link>
            <Link to="/users" className="delete">
              Delete User
            </Link>
          </div>

          <div className="user">
            <img
              className="user_img"
              src={require("../../assets/images/chef2.png")}
              alt=""
            />
            <p>
              <span>Name:</span> <span> Bernd Frey</span>
            </p>
            <p>
              <span>Location:</span> <span> France</span>
            </p>
            <p>
              <span>Email:</span> <span>bernd@gmail.com</span>
            </p>
            <p>
              <span>Phone Number:</span> <span>08065653282</span>
            </p>
            <div>
              <a href="facebook.com">
                <img
                  src={require("../../assets/images/social1.png")}
                  alt="facebook"
                />
              </a>
              <a href="twitter">
                <img
                  src={require("../../assets/images/social2.png")}
                  alt="facebook"
                />
              </a>
              <a href="instagram">
                <img
                  src={require("../../assets/images/social3.png")}
                  alt="facebook"
                />
              </a>
              <a href="pinterest">
                <img
                  src={require("../../assets/images/social4.png")}
                  alt="facebook"
                />
              </a>
            </div>
            <Link to="/users" className="update">
              Update Role
            </Link>
            <Link to="/users" className="delete">
              Delete User
            </Link>
          </div>

          <div className="user">
            <img
              className="user_img"
              src={require("../../assets/images/chef3.png")}
              alt=""
            />
            <p>
              <span>Name:</span> <span> Muyiwa Akintola</span>
            </p>
            <p>
              <span>Location:</span> <span> Nigeria</span>
            </p>
            <p>
              <span>Email:</span> <span>muyiwa@gmail.com</span>
            </p>
            <p>
              <span>Phone Number:</span> <span>09065653282</span>
            </p>
            <div>
              <a href="facebook.com">
                <img
                  src={require("../../assets/images/social1.png")}
                  alt="facebook"
                />
              </a>
              <a href="twitter">
                <img
                  src={require("../../assets/images/social2.png")}
                  alt="facebook"
                />
              </a>
              <a href="instagram">
                <img
                  src={require("../../assets/images/social3.png")}
                  alt="facebook"
                />
              </a>
              <a href="pinterest">
                <img
                  src={require("../../assets/images/social4.png")}
                  alt="facebook"
                />
              </a>
            </div>
            <Link to="/users" className="update">
              Update Role
            </Link>
            <Link to="/users" className="delete">
              Delete User
            </Link>
          </div>

          <div className="user">
            <img
              className="user_img"
              src={require("../../assets/images/chef4.png")}
              alt=""
            />
            <p>
              <span>Name:</span> <span> Jacob Zuma</span>
            </p>
            <p>
              <span>Location:</span> <span> South Africa</span>
            </p>
            <p>
              <span>Email:</span> <span>jacob@gmail.com</span>
            </p>
            <p>
              <span>Phone Number:</span> <span>07065653282</span>
            </p>
            <div>
              <a href="facebook.com">
                <img
                  src={require("../../assets/images/social1.png")}
                  alt="facebook"
                />
              </a>
              <a href="twitter">
                <img
                  src={require("../../assets/images/social2.png")}
                  alt="facebook"
                />
              </a>
              <a href="instagram">
                <img
                  src={require("../../assets/images/social3.png")}
                  alt="facebook"
                />
              </a>
              <a href="pinterest">
                <img
                  src={require("../../assets/images/social4.png")}
                  alt="facebook"
                />
              </a>
            </div>
            <Link to="/users" className="update">
              Update Role
            </Link>
            <Link to="/users" className="delete">
              Delete User
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
