import React, {useEffect} from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import { connect } from "react-redux";
import {getClassBYId} from '../../actions/classes'
import Spinner from '../Spinner'
import VideoPlayer from '../../components/Classes/VideoPlayer'

const Classes = ({classbyId:{class1 , loading} , getClassBYId, match, auth:{user}}) => {
  useEffect(() => {
    getClassBYId(match.params.id);
    // eslint-disable-next-line
  }, [getClassBYId]);

  
  // const userPhoto = (
  //   <img src={user && user.photo } alt="user" className="babe_pic" />
  // )

  // const userDefault=(
  //   <img src={user&& user.avatar} alt="user" className="babe_pic" />
  // )

  return (
    <>
     {class1 === null || loading ? (
      <Spinner/>
     ): (
       <>
      <div id="contactFirstSection" className="container-fluid">
      <div className="row row_1">
        <div className="col-md-12">
     <h4>{class1.title}</h4>
          <div>
            <p>
              <img src={require("../../assets/images/chefcap.png")} alt="" />
     <span>Chef {class1.user.name}</span>
            </p>
            <p>
              <img src={require("../../assets/images/clock.png")} alt="" />
     <span>{class1.duration}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="row row_2">
        <div className="col-md-8 mx-auto">
          <div id="row_2_overlay"></div>

          <VideoPlayer url={class1.video}/>
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
           
            </TabList>

            <TabPanels>
              <TabPanel>
                <div className="row">
                  <div className="col-md-12 about_class">
                    <h4>About this class</h4>
                    <p>
                      {class1.aboutClass}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row tutor_row">
                      <div className="col-md-4 tutor_div">
                        <h5>About the tutor</h5>
                        <img
                          src={class1.user.photo}
                          alt=""
                          style={{width: '400px'}} className="round-img img-fluid"
                        />
                      </div>
                      <div className="col-md-8">
                        <p>{class1.user.name}</p>
                        <span>{class1.user.location}</span>
                        <p>
                          {class1.user.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row mb-3">
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
                        You can  view and download the MP4 and  PDF file
                        below
                        
                      </p>
                    </div>
                    <div>
                      <img
                        src={require("../../assets/images/clip.png")}
                        alt=""
                      />
                      <span>
                      <a href={class1.video} target="_blank" rel="noopener noreferrer" >{class1.title}.MP4</a> 
                      </span>
                    </div>
                    <div>
                      <img
                        src={require("../../assets/images/clip.png")}
                        alt=""
                      />
                      <span>
                        <a href={class1.resources} target="_blank" rel="noopener noreferrer" >{class1.title}.PDF</a> 
                      </span>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                {/* <div className="row">
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
                          src={user.photo}
                          alt=""
                        />
                      </div>
                      <div className="col-md-8">
                      <p>Chef {user.name}</p>
                        <span>{user.location}</span>
                        <p>
                          Olayemi Ibikunle has 2 years of experience working
                          in five private <br /> schools across in Nigeria.
                          She earned a B.Ed and a Masters in <br /> Teaching
                          and Learning from Harvard University
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        {/* <div className="col-md-4 food_image">
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
        </div> */}
      </div>
    </div>
    </>
     )}
    </>
  );
};

const mapStateToProps = state =>({
  classbyId: state.classList,
  auth: state.auth
})

export default connect(mapStateToProps, {getClassBYId}) (Classes);
