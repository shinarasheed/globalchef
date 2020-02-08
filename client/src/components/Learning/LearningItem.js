import React from "react";
import { Link } from "react-router-dom";

const LearningItem = ({
  lesson: {
     title,
    duration,
    coverImage,
    user: { name }
  }
}) => {
  return (
    <>
      <div className="col-md-3 image_div mt-3">
          <Link to="/classes">
          <img
          src={require("../../assets/images/img5.png")}
          alt=""
          className="food_image"
        />
          </Link>
        
        <div>
          <span>300 students</span>
  <span>{duration}</span>
        </div>
        <p>
          {title}
        </p>
  <p>{name}</p>
        <p className="rating">
          <img src={require("../../assets/images/img8.png")} alt="" />
          <span> 4.5 </span>
        </p>
      </div>
    </>
  );
};

export default LearningItem;
