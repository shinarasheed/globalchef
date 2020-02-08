import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Profile.css";

const Profile = ({ auth: { user, loading } }) => {
  // console.log(user);

  return (
    <>
      {user === null || loading ? (
        <h4>Loading....</h4>
      ) : (
        <div id="profileFirstSection" className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-6">
                  <img src={user.avatar} alt="" className="babe_pic" />
                  <p>{user.name.split(' ')[0]}</p>
                  <p>{user.location}</p>
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
                      <Link to="/enrolled">Enrolled Classes</Link>
                    </li>
                    <li>
                      <img
                        src={require("../../assets/images/save-icon-silhouette.png")}
                        alt=""
                      />
                      <Link to="/saved">Saved Classes</Link>
                    </li>
                    <li>
                      <img
                        src={require("../../assets/images/user.png")}
                        alt=""
                      />
                      <Link to=''>Edit Profile</Link>
                    </li>
                    <li>
                      <img
                        src={require("../../assets/images/settings.png")}
                        alt=""
                      />
                      <Link to=''>Linked Accounts</Link>
                    </li>
                    <li>
                      <img
                        src={require("../../assets/images/logout.png")}
                        alt=""
                      />
                      <Link to=''>Sign Out</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row parent">
                <div className="col-md-8">
                  <form>
                    <h1>My Profile</h1>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="FirstName">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="FirstName"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="LastName">Last Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="EmailAddress">Email Address</label>
                        <input
                          type="text"
                          className="form-control"
                          name="EmailAddress"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="PhoneNumber">Phone Number</label>
                        <input type="phone" className="form-control" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <label htmlFor="Location">Location</label>
                        <select name="Location" id="" className="form-control">
                          <option value="Lagos, Nigeria" defaultValue>
                            Lagos, Nigeria
                          </option>
                          <option value="Accra, Ghana">Accra, Ghana</option>
                        </select>
                      </div>
                      <div className="col">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          name="password"
                          id=""
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <label htmlFor="twitter">Twitter Username</label>
                        <input
                          type="text"
                          name="twitter"
                          id=""
                          className="form-control"
                        />
                        <p>Input your Twitter Usernamename (eg. SeunKayode)</p>
                      </div>
                      <div className="col">
                        <label htmlFor="facebook">Facebook Username</label>
                        <input
                          type="text"
                          name="facebook"
                          id=""
                          className="form-control"
                        />
                        <p>Input your Facebook Username (e.g SeunKayode)</p>
                      </div>
                    </div>
                    <button type="submit">Save Changes</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(Profile);
