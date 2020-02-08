import { GET_CLASS, CLASS_ERROR } from "../actions/types";

const initialState = {
  class: null,
  classes: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CLASS:
      return {
        ...state,
        classes: payload,
        loading: false
      };
    default:
      return state;
  }
}
