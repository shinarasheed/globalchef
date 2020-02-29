import React, { useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {createClass} from "../../actions/classes"
import Spinner from '../Spinner'
import "./CreateClass.scss";

const CreateClass = ({createClass, auth:{isAuthenticated, user, loading}, history}) => {
  
  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    aboutClass: "",
    resources: "",
    video: "",
    coverImage: ""
    
  });

  

  const [loading2, setLoading2] = useState(false);
  

  const {title, duration, aboutClass, resources, video, coverImage}= formData

  const onChange = e =>
  setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    createClass(formData, history)
  
  };

  if (loading) {
    return <Spinner/>;
  }

  const fileUpload = async e => {
    try {
      console.log(e.target.files);
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "olabanji");
      setLoading2(true);

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/obanj/image/upload",
        {
          method: "POST",
          body: data
        }
      );
      const file = await res.json();

      setFormData({
        ...formData,
        resources: file.secure_url,
        coverImage:file.secure_url
      });

      console.log(file);
      

      setLoading2(false);
    } catch (err) {
      console.log(err);
    }
  };

  const videoUpload = async e => {
    try {
      console.log(e.target.files);
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "olabanji");
      setLoading2(true);

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/obanj/video/upload",
        {
          method: "POST",
          body: data
        }
      );
      const file = await res.json();

      setFormData({
        ...formData,
        video:file.secure_url,
      });

      console.log(file);
      

      setLoading2(false);
    } catch (err) {
      console.log(err);
    }
  };
 

  return (

    <>

    {
      (user  &&  user.role === "admin" || user.role === "instructor") ? (
        <div id="createClass">
        <div id="createClassFirstSection">
          <div className="row">
            <div className="col-md-4">
              <form onSubmit={e => onSubmit(e)}>
                <div>
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={title}
                    required
                    placeholder="Enter the title for your class"
                    onChange={e => onChange(e)}
                  />
                </div>
                <div>
                  <label htmlFor="duration">Duration</label>
                  <input
                    type="text"
                    name="duration"
                    value={duration}
                    className="form-control"
                    placeholder="Enter the duration for your class"
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="aboutClass">About Your Class</label>
                  <textarea
                    name="aboutClass"
                    value={aboutClass}
                    id=""
                    cols="30"
                    rows="5"
                    required
                    className="form-control"
                    placeholder="write a descrition about your class"
                    onChange={e => onChange(e)}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="resources">
                    Upload Resources (you can Upload pdf)
                  </label>
                  <input
                    type="file"
                    name="resources"
                    id="resources"
                    className="form-control"
                    onChange={fileUpload}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="video">Upload Video</label>
                  <input
                    type="file"
                    name="video"
                    id="video"
                    className="form-control"
                    onChange={videoUpload}
                    required
                    
                  />
                </div>
                <div>
                  <label htmlFor="coverImage">
                    Upload a Cover Image for your Video
                  </label>
                  <input
                    type="file"
                    name="coverImage"
                    id="coverimage"
                    className="form-control"
                    required
                    onChange={fileUpload}
                  />
                </div>
                <button type="submit">Create Class</button>
              </form>
            </div>
          </div>
        </div>
      </div>): (
         <h1>NOT ALLOWED</h1>
        )
      
    }

    </>
   
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { createClass }) (CreateClass);
