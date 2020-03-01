import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Landingpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div id="homeFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <p>Cooking is fun! We will prove it to you</p>
            <h3>
              Get Unlimited access to the <br /> world of food
            </h3>
            <Link to="/signup">Get Started</Link>
          </div>
        </div>
      </div>
      <div id="homeSecondSection" className="container-fluid">
        <h1>Why choose Global chef? </h1>
        <div className="row">
          <div className="col-md-3">
            <img src={require("../../assets/images/img1.png")} alt="" />
            <h4>Wide Variety of food</h4>
            <p>
              Get free access to unlimited food <br /> tutorials and get to
              enjoy the <br /> beauty of cooking
            </p>
          </div>
          <div className="col-md-3">
            <img src={require("../../assets/images/img2.png")} alt="" />
            <h4>Seasoned Chefs</h4>
            <p>
              Learn the tricks and tips from top chefs <br /> all over the world
              and impress your <br /> friends at home
            </p>
          </div>
          <div className="col-md-3">
            <img src={require("../../assets/images/img2.png")} alt="" />
            <h4>Meet and Share</h4>
            <p>
              Access good job opportunities in <br /> our partner schools
            </p>
          </div>
        </div>
      </div>
      <div id="homeThirdSection" className="container-fluid">
        <div className="row parent_row">
          <div className="col-md-12">
            <div className="row row-1">
              <div className="col-md-12">
                <div>
                  <p>
                    Your professional development has just gotten easier,
                    affordable and exciting with our online courses. They are
                    designed to <br /> equid you with 21st century teaching and
                    learning skills
                  </p>
                </div>
              </div>
            </div>
            <div className="row row-2">
              <div className="col-md-2">
                <img
                  src={require("../../assets/images/img4.jpg")}
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
                <p>Chef Michael Akpan</p>
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
                  src={require("../../assets/images/img6.png")}
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
                <p>Chef Kola Ajisegiri</p>
                <p className="rating">
                  <img src={require("../../assets/images/img11.png")} alt="" />
                  <span> 5.0 </span>
                </p>
              </div>
              <div className="col-md-2">
                <img
                  src={require("../../assets/images/img7.jpg")}
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
                <p>Chef Michael Akpan</p>
                <p className="rating">
                  <img src={require("../../assets/images/img10.png")} alt="" />
                  <span> 4.0 </span>
                </p>
              </div>
            </div>
            <Link to="/learning">Explore all Classes</Link>
          </div>
        </div>
      </div>
      <div id="homeFourthSection" className="container-fluid">
        <div id="homeFourthSection_overlay"></div>
        <div className="row">
          <div className="col-md-6">
            <h1>Thoughts About Our Work</h1>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={require("../../assets/images/testimonyimg.png")}
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <p>
                  I thought about the times in my life when I coundn't even
                  afford $5 <br />
                  for a book.That's when it hit me. Wouldn't it be cool if the
                  price tag <br />
                  said, 5 jumping jacks and sit-up. Chris raised $70k to help
                  his <br /> neighbour Norma stay in her home.
                </p>
                <p>Angie Roy Barman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="homeFifthSection" className="container-fluid">
        <div className="row parent_row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <h1>Our Tutors</h1>
                <p>
                  We provide world class chefs to take classes as well as guide
                  learners on their <br /> journey through the world of food.
                  Our Tutors are fully certified chefs
                </p>
              </div>
            </div>
            <div className="row row_1">
              {/* abstract */}
              <div className="col-md-2">
                <img
                  src={require("../../assets/images/chef1.png")}
                  alt=""
                  className="chef"
                />
                <p>Birgit Schreiner</p>
                <span>China</span>
                <ul>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social1.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social2.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social3.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social4.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <img
                  src={require("../../assets/images/chef2.png")}
                  alt=""
                  className="chef"
                />
                <p>Bernd Frey</p>
                <span>France</span>
                <ul>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social1.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social2.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social3.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social4.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <img
                  src={require("../../assets/images/chef3.png")}
                  alt=""
                  className="chef"
                />
                <p>Muyiwa Akintola</p>
                <span>Nigeria</span>
                <ul>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social1.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social2.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social3.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social4.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <img
                  src={require("../../assets/images/chef4.png")}
                  alt=""
                  className="chef"
                />
                <p>Jacob Zuma</p>
                <span>South Africa</span>
                <ul>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social1.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social2.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social3.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="chefs">
                      <img
                        src={require("../../assets/images/social4.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="homeSixthSection" className="container-fluid">
        <div className="row parent_row">
          <div className="col-md-6 image_div">
            <img
              src={require("../../assets/images/contactimg.png")}
              alt=""
              className="contact_image"
            />
            <div>
              <p>
                Cooking is an <br /> art.Learn, gather <br /> and create the
                <br /> masterpiece
              </p>
              <span>Helen Kell</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
