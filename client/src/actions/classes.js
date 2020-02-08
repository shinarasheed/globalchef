import axios from "axios";
import { setAlert } from "./alert";
import { GET_CLASS, CLASS_ERROR } from "./types";

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
