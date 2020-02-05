import { combineReducers } from 'redux';
import { strainReducer } from './strainReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  strainReducer,
  userReducer
});