import React from "react";

const Learning = () => {
  return (
    <>
      <div id="learningFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <ul>
              <li>Catergories</li>
              <li>Deserts</li>
              <li>Main Courses</li>
              <li>Salads</li>
              <li>Snacks</li>
              <li>Side Dishes</li>
              <li>Pizza</li>
              <li>Soup and Stews</li>
              <li>Pancakes and Toppings</li>
            </ul>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <form>
                  <input
                    type="text"
                    placeholder="What would you like to learn today?"
                  />
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
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
                  Serve your breakfast like a boss <br /> and have a diet on
                </p>
                <p>Chef Manchang Wuyeng</p>
                <p className="rating">
                  <img src={require("../../assets/images/img8.png")} alt="" />
                  <span> 4.5 </span>
                </p>
              </div>
              <div className="col-md-2">
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
                  Serve your breakfast like a boss <br /> and have a diet on
                </p>
                <p>Chef Manchang Wuyeng</p>
                <p className="rating">
                  <img src={require("../../assets/images/img8.png")} alt="" />
                  <span> 4.5 </span>
                </p>
              </div>
              <div className="col-md-2">
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
                  Serve your breakfast like a boss <br /> and have a diet on
                </p>
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

export default Learning;
