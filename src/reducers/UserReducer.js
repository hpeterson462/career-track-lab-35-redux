import { SET_USERS } from '../actions/userActions';

const initialState = {
  user: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
