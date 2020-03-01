import React from "react";
import { Link } from "react-router-dom";

const LearningItem = ({
  lesson: {
    _id,
    title,
    duration,
    coverImage,
    user: { name }
  },
  user
}) => {
  return (
    <>
      <div className="col-md-3 image_div mt-3" id="Learningitem">
        <Link to={`/classes/${_id}`}>
          <img src={coverImage} alt="" className="food_image" />
        </Link>

        <div className="p-2">
          <span>300 students</span>
          <span>{duration}</span>
        </div>
        <p>{title}</p>
        <p>{name}</p>
        <p className="rating">
          <img src={require("../../assets/images/img8.png")} alt="" />
          <span> 4.5 </span>
        </p>
        <div>
          {user && user.role === "admin" ? (
            <Link to={`/updateClass/${_id}`} className="update">
              Update Class
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default LearningItem;
