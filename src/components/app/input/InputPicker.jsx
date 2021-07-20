import React, { useReducer } from 'react';
import { textSubmit } from '../../../actions/InputActions';
import reducer, { initialState } from '../../../reducers/InputReducer';
import Input from './Input';
import Display from './Display';

const InputPicker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = ({ target }) => {
    if (target.name === 'text') dispatch(textSubmit(target.value));
  };

  return (
    <>
      <Input
        text={state.text}
        onClick={handleSubmit}
      />
      <Display text={state.text} />
    </>
  );
};

export default InputPicker;
