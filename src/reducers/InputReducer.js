import { TEXT_SUBMIT } from '../actions/InputActions';

export const initialState = {
  text: ''
};

export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case TEXT_SUBMIT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
}
