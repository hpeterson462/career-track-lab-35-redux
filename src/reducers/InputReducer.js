import { TEXT_SUBMIT } from '../actions/InputActions';

export const initialState = {
  text: ''
};

export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case TEXT_SUBMIT:
      console.log(action.payload, 'redducer files')
      return { ...state, text: action.payload };
    default:
      return state;
  }
}
