import axios from "axios";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

const REQUEST = "REQUEST_SEND";
const SUCCESS = "REQUEST_SUCCESS";
const FAILED = "REQUEST_FAILED";

export const requestAction = () => ({ type: REQUEST });
export const successAction = (data) => ({ type: SUCCESS, payload: data });
export const failedAction = (error) => ({ type: FAILED, payload: error });

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, loading: true, error: "" };
    case SUCCESS:
      return { ...state, loading: false, data: action.payload, error: "" };
    case FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postReducer;

export const fetchPost = () => {
  return async (dispatch) => {
    dispatch(requestAction());
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(successAction(response.data));
    } catch (err) {
      dispatch(failedAction(err.message));
    }
  };
};
