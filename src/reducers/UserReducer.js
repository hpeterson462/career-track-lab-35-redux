import { SET_USERS } from '../actions/InputActions';

const initialState = {
  users: {},
  repos: [],
  error: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload, repos: action.payload };
    default:
      return state;
  }
};
