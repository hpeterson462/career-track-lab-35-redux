import { SET_USERS } from '../actions/userActions';

const initialState = {
  login: '',
  name: '',
  followers_url: '',
  following_url: '',
  html_url: use,
  repos_url: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
