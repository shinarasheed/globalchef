import React from "react";
import "./CreateClass.scss";

const CreateClass = () => {
  return (
    <div id="createClass">
      <div id="createClassFirstSection">
        <div className="row">
          <div className="col-md-4">
            <form action="">
              <div>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the title for your class"
                />
              </div>
              <div>
                <label htmlFor="duration">Duration</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the duration for your class"
                />
              </div>
              <div>
                <label htmlFor="description">About Your Class</label>
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="5"
                  className="form-control"
                  placeholder="write a descrition about your class"
                ></textarea>
              </div>
              <div>
                <label htmlFor="resources">
                  Upload Resources (you can Upload Mp4 and/or pdf)
                </label>
                <input
                  type="file"
                  name="resources"
                  id="resources"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="video">Upload Video</label>
                <input
                  type="file"
                  name="video"
                  id="video"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="coverimage">
                  Upload a Cover Image for your Video
                </label>
                <input
                  type="file"
                  name="coverimage"
                  id="coverimage"
                  className="form-control"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateClass;
