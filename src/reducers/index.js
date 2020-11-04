import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import reducer from './InputReducer';

export default combineReducers({
  users: userReducer,
  reducer: reducer
});
