import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_CLASS,
  CLASS_ERROR,
  GET_CLASSBYID,
  CREATE_CLASS,
  UPDATE_CLASS
} from "./types";

// get all classes

export const getclasses = () => async dispatch => {
  try {
    const res = await axios.get("/api/class");
    dispatch({
      type: GET_CLASS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CLASS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//  get class by id
export const getClassBYId = id => async dispatch => {
  try {
    const res = await axios.get(`/api/class/${id}`);
    dispatch({
      type: GET_CLASSBYID,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CLASS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//  create class
export const createClass = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/class", formData, config);
    dispatch({
      type: CREATE_CLASS,
      payload: res.data
    });
    dispatch(setAlert("Class Updated", "success"));

    history.push("/profile");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    console.log(err);

    dispatch({
      type: CLASS_ERROR,
      payload: { msg: err.response.data.errors }
    });
  }
};

// update clases

export const updateClass = (formData, history, id) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.patch(`/api/class/${id}`, formData, config);

    dispatch({
      type: UPDATE_CLASS,
      payload: res.data
    });
      dispatch(setAlert( " Class Updated" , "success" ));
      history.push("/learning")  
      
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    console.log(err);

    dispatch({
      type: CLASS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
