import React, {useEffect} from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import { connect } from "react-redux";
import {getClassBYId} from '../../actions/classes'

const Classes = ({classbyId:{class1 , loading} , getClassBYId, match}) => {
  useEffect(() => {
    getClassBYId(match.params.id);
    // eslint-disable-next-line
  }, [getClassBYId]);

  return (
    <>
     {class1 === null || loading ? (
       <h2>loading</h2>
     ): (
       <>
      <div id="contactFirstSection" className="container-fluid">
      <div className="row row_1">
        <div className="col-md-12">
          <h4>Learn how to cook rice with fried shrimps</h4>
          <div>
            <p>
              <img src={require("../../assets/images/chefcap.png")} alt="" />
              <span>Chef Majekadegbe Fishly</span>
            </p>
            <p>
              <img src={require("../../assets/images/clock.png")} alt="" />
              <span> 1hr 30min</span>
            </p>
          </div>
        </div>
      </div>
      <div className="row row_2">
        <div className="col-md-12">
          <div id="row_2_overlay"></div>

          <img
            src={require("../../assets/images/cookingvideo_small.png")}
            alt=""
          />
        </div>
      </div>
      {/* <div className="row row_3">
        <div className="col-md-12">
          <Link to="/about">About</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/reviews">Reviews</Link>
        </div>
      </div> */}
    </div>
    <div id="contactSecondSection" className="container-fluid">
      <div className="row parent_row">
        <div className="col-md-7">
          <Tabs variant="unstyled" isFitted>
            <TabList className="tab">
              <Tab
                _selected={{ color: "black", bg: "red.500" }}
                className="about"
              >
                About
              </Tab>
              <Tab>Resources</Tab>
              <Tab>Reviews</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div className="row">
                  <div className="col-md-12 about_class">
                    <h4>About this class</h4>
                    <p>
                      Bold, Delicious and packed with flavour. Who doesn't
                      love enchiladas? In this fast-paced class, geared <br />
                      towards the beginner, you'll learn the basics of making
                      green chicken enchiladas with an array of <br />
                      traditional ingredients, using the time-honored(read:
                      secret) techniques of the Mexican kitchen, from <br />
                      charring on a comal to frying sauces, on your way to
                      making luscious, deep-flavored enchiladas.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row tutor_row">
                      <div className="col-md-4 tutor_div">
                        <h5>About the tutor</h5>
                        <img
                          src={require("../../assets/images/classeschef.png")}
                          alt=""
                        />
                      </div>
                      <div className="col-md-8">
                        <p>Chef Majekadegbe Fishly</p>
                        <span>Lagos Nigeria</span>
                        <p>
                          Olayemi Ibikunle has 2 years of experience working
                          in five private <br /> schools across in Nigeria.
                          She earned a B.Ed and a Masters in <br /> Teaching
                          and Learning from Harvard University
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row">
                  <div className="col-md-12 about_class">
                    <div className="resources">
                      <img
                        src={require("../../assets/images/feather.png")}
                        alt=""
                      />
                      <span>Resources</span>
                    </div>
                    <div>
                      <p className="download">
                        You can download the MP4 file as well as PDF file
                        below
                      </p>
                    </div>
                    <div>
                      <img
                        src={require("../../assets/images/clip.png")}
                        alt=""
                      />
                      <span>
                        Learn how to cook rice spiced with fried schrimps.MP4
                      </span>
                    </div>
                    <div>
                      <img
                        src={require("../../assets/images/clip.png")}
                        alt=""
                      />
                      <span>
                        Learn how to cook rice spiced with fried schrimps.PDF
                      </span>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row">
                  <div className="col-md-12 about_class">
                    <h4>About this class</h4>
                    <p>
                      Bold, Delicious and packed with flavour. Who doesn't
                      love enchiladas? In this fast-paced class, geared <br />
                      towards the beginner, you'll learn the basics of making
                      green chicken enchiladas with an array of <br />
                      traditional ingredients, using the time-honored(read:
                      secret) techniques of the Mexican kitchen, from <br />
                      charring on a comal to frying sauces, on your way to
                      making luscious, deep-flavored enchiladas.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row tutor_row">
                      <div className="col-md-4 tutor_div">
                        <h5>About the tutor</h5>
                        <img
                          src={require("../../assets/images/classeschef.png")}
                          alt=""
                        />
                      </div>
                      <div className="col-md-8">
                        <p>Chef Majekadegbe Fishly</p>
                        <span>Lagos Nigeria</span>
                        <p>
                          Olayemi Ibikunle has 2 years of experience working
                          in five private <br /> schools across in Nigeria.
                          She earned a B.Ed and a Masters in <br /> Teaching
                          and Learning from Harvard University
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <div className="col-md-4 food_image">
          <h2>Coming up next (Recommended)</h2>
          <div className="row">
            <div className="col-md-6">
              <img src={require("../../assets/images/img5.png")} alt="" />
            </div>
            <div className="col-md-6">
              <h5>How to make Gelato:</h5>
              <h5>Tips and recipes to</h5>
              <h5>make the italian treat</h5>
              <p>Chef Manchang Wuyep</p>
              <span>1hr 30min</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={require("../../assets/images/img6.png")} alt="" />
            </div>
            <div className="col-md-6">
              <h5>How to make Gelato:</h5>
              <h5>Tips and recipes to</h5>
              <h5>make the italian treat</h5>
              <p>Chef Manchang Wuyep</p>
              <span>1hr 30min</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={require("../../assets/images/img13.png")} alt="" />
            </div>
            <div className="col-md-6">
              <h5>How to make Gelato:</h5>
              <h5>Tips and recipes to</h5>
              <h5>make the italian treat</h5>
              <p>Chef Manchang Wuyep</p>
              <span>1hr 30min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
     )}
    </>
  );
};

const mapStateToProps = state =>({
  classbyId: state.classList
})

export default connect(mapStateToProps, {getClassBYId}) (Classes);
