import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editProfile, loadUser } from "../../actions/auth";
import "./Profile.css";

const Profile = ({ auth: { user, loading }, editProfile }) => {
  // console.log(user);
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    photo: '',
    phoneNUmber: "",
    twitter: "",
    facebook: ""
  });
  const [loading2, setLoading2] = useState(false)

  useEffect(
    () => {
      loadUser()
      setFormData({
        name: loading || !user.name ? "" : user.name,
        email: loading || !user.email ? "" : user.email,
        location: loading || !user.location ? "" : user.location,
        photo: loading || !user.photo ? "" : user.photo,
        phoneNUmber: loading || !user.phoneNUmber ? "" : user.phoneNUmber,
        twitter: loading || !user.twitter ? "" : user.twitter,
        facebook: loading || !user.facebook ? "" : user.facebook
      });
      // eslint-disable-next-line
    },
    [loading]
  );

  if(loading){
    return <h1>Loading</h1>
  }

  const {
    name,
    email,
    location,
    photo,
    phoneNUmber,
    twitter,
    facebook
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    console.log(formData);
    editProfile(formData)

    e.preventDefault();
  };

  const fileUpload = async e => {
    try {
      // console.log(e.target.files[0]);
    const files = e.target.files
    const data =new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'olabanji')
    setLoading2(true)

    const res =await fetch(
      'https://api.cloudinary.com/v1_1/obanj/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
      const file = await res.json()

    setFormData({
      ...formData, 
      photo: file.secure_url
    })

    setLoading2(false)

    } catch (err) {
      console.log(err);
      
    }
    
  };

  const userPhoto = (
    <img src={photo } alt="user" className="babe_pic" />
  )

  const userDefault=(
    <img src={user.avatar} alt="user" className="babe_pic" />
  )
 
  return (

      
    <>
    {user === null && loading ? (
        <h4>Loading....</h4>
      ) : (
        <div id="profileFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-6">
              {photo ? userPhoto : userDefault} 
                <p>{user=== null ?<small>loading</small>:user.name.split(" ")[0]}</p>
                <p>{user=== null ?<small>loading</small>:user.location}</p>
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
                    <img src={require("../../assets/images/user.png")} alt="" />
                    <Link to="">Edit Profile</Link>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/images/settings.png")}
                      alt=""
                    />
                    <Link to="">Linked Accounts</Link>
                  </li>
                  <li>
                    <img
                      src={require("../../assets/images/logout.png")}
                      alt=""
                    />
                    <Link to="">Sign Out</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row parent">
              <div className="col-md-8">
                <form onSubmit={e => onSubmit(e)}>
                  <h1>My Profile</h1>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="FirstName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    {/* <div className="col">
                        <label htmlFor="LastName">Last Name</label>
                        <input type="text" className="form-control" />
                      </div> */}
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="EmailAddress">Email Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="PhoneNumber">Phone Number</label>
                      <input
                        type="number"
                        className="form-control"
                        value={phoneNUmber}
                        name="phoneNUmber"
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <label htmlFor="Location">Location</label>
                      <select
                        name="location"
                        id=""
                        className="form-control"
                        value={location}
                        onChange={e => onChange(e)}
                      >
                        <option value="Lagos, Nigeria">Lagos, Nigeria</option>
                        <option value="Accra, Ghana">Accra, Ghana</option>
                      </select>
                    </div>
                    {/* <div className="col">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          name="password"
                          id=""
                          className="form-control"
                        />
                      </div> */}
                  </div>

                  <div className="row">
                    <div className="col">
                      <label htmlFor="twitter">Twitter Username</label>
                      <input
                        type="text"
                        name="twitter"
                        id=""
                        className="form-control"
                        value={twitter}
                        onChange={e => onChange(e)}
                      />
                      <p>Input your Twitter Username (eg. SeunKayode)</p>
                    </div>
                    <div className="col">
                      <label htmlFor="facebook">Facebook Username</label>
                      <input
                        type="text"
                        name="facebook"
                        id="fb"
                        className="form-control"
                        value={facebook}
                        onChange={e => onChange(e)}
                      />
                      <p>Input your Facebook Username (e.g SeunKayode)</p>
                    </div>
                    <div className="col">
                      <label htmlFor="photo">Upload Photo</label>
                      <input
                        type="file"
                        name="photo"
                        id="fb"
                        className="form-control"
                        onChange={fileUpload}
                      />
                      {loading2 ? (<small style={{color:'red'}}> Loading....</small>):(
            <img src={photo} alt="" style={{width: '50px'}} className="round-img"/>
          )  }
                    
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

export default connect(mapStateToProps, {editProfile})(Profile);
