import { GET_CLASS, CLASS_ERROR ,GET_CLASSBYID} from "../actions/types";

const initialState = {
  class1: null,
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

    case GET_CLASSBYID:
      return {
        ...state,
        class1: payload,
        loading: false
      }

    case CLASS_ERROR:
      return{
        ...state,
        error:payload,
        loading: false
      }
    default:
      return state;
  }
}
