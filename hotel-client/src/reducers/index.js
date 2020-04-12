import { combineReducers } from 'redux';
import isLoggedReducer from './isLogged';

const allReducers = combineReducers({ isLoggedReducer });

export default allReducers;
