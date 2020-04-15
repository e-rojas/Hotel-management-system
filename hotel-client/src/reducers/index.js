import { combineReducers } from 'redux';
import roomsReducer from './roomsReducer';

const allReducers = combineReducers({ roomsReducer });

export default allReducers;
