import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import inputReducer from './InputReducer';

export default combineReducers({
  users: userReducer,
  text: inputReducer
});
