import {
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
  } from '../actions';

  const initialState = {
    user: [],
    error: '',
    isFetching: false
  };
  
  export function userReducer(state=initialState, action) {
    switch (action.type) {
      case FETCH_USER_START:
        return {
          ...state,
          error: '',
          isFetching: true
        };
      case FETCH_USER_SUCCESS:
        console.log(state);
        return {
          ...state,
          error: '',
          isFetching: false,
          user: action.payload
        };
      case FETCH_USER_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        };
      default:
        return state;
    };
  };