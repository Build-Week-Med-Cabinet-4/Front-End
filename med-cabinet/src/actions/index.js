import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';
// get strains
export const FETCH_STRAINS_START = "FETCH_STRAINS_START";
export const FETCH_STRAINS_SUCCESS = "FETCH_STRAINS_SUCCESS";
export const FETCH_STRAINS_FAILURE = "FETCH_STRAINS_FAILURE";
// get user
export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const getStrains = () => {
  return dispatch => {
    dispatch({ type: FETCH_STRAINS_START });
    axios
      .get("") // wait for search endpoint
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_STRAINS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console(err);
        dispatch({ type: FETCH_STRAINS_FAILURE });  // set error to payload laters
      });
  };
};

export const getUser = () => {
  return dispatch => {
    dispatch({ type: FETCH_USER_START });
    axiosWithAuth()
      .get("/api/users")
      .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_USER_FAILURE });  // set error to payload laters
      });
  };
};