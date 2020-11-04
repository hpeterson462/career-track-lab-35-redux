import { SET_USERS } from '../actions/InputActions';

const initialState = {
  users: {},
  error: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      console.log(action.payload, 'set-users');
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
