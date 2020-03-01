import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getclasses } from "../../actions/classes";
import { connect } from "react-redux";
import LearningItem from "./LearningItem";
import Spinner from "../Spinner";

const Learning = ({
  getclasses,
  auth: { user },
  classList: { loading, classes }
}) => {
  useEffect(() => {
    getclasses();
    window.scrollTo(0, 0);

    // eslint-disable-next-line
  }, []);

  // console.log(loading, classes);
  return (
    <>
      {classes.length === 0 || loading ? (
        <Spinner />
      ) : (
        <div id="learningFirstSection" className="container-fluid">
          <div className="row parent">
            <div className="col-md-3 categories">
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
              <div className="row form_row">
                <div className="col-md-6">
                  <form>
                    <input
                      type="text"
                      placeholder="What would you like to learn today?"
                    />
                  </form>
                </div>
              </div>
              <div className="row">
                {loading === false ? (
                  classes.map(lesson => (
                    <LearningItem
                      key={lesson._id}
                      lesson={lesson}
                      user={user}
                    />
                  ))
                ) : (
                  <h2>No Classes</h2>
                )}
              </div>
              {/* end */}

              <div className="row recomended">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-12 recommended_categories">
                      <h1>What to Learn Next?</h1>
                      <h4>Recommended Categories for you</h4>
                    </div>
                  </div>
                  <div className="row learn_next">
                    <div className="col-md-3">
                      <h5>Deserts</h5>
                    </div>
                    <div className="col-md-3">
                      <h5>Side Dishes</h5>
                    </div>
                    <div className="col-md-3">
                      <h5>Soups and Stews</h5>
                    </div>
                  </div>
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
  classList: state.classList,
  auth: state.auth
});

export default connect(mapStateToProps, { getclasses })(Learning);
