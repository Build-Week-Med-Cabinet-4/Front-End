import axios from 'axios'
export const FETCH_STRAINS_START = "FETCH_STRAINS_START";
export const FETCH_STRAINS_SUCCESS = "FETCH_STRAINS_SUCCESS";
export const FETCH_STRAINS_FAILURE = "FETCH_STRAINS_FAILURE";


export const getStrains = () => {
  return dispatch => {
    dispatch({ type: FETCH_STRAINS_START });
    axios
      .get("/strains/search/all")
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