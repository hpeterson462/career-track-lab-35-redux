import { TEXT_CHANGE } from '../actions/InputActions';

export const initialState = {
  text: ''
};

export default function reducer(state, action) {
  switch (action.type) {
    case TEXT_CHANGE:
      return { ...state, text: action.payload };
    default:
      return state;
  }
}
