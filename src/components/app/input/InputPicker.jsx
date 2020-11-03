import React, { useReducer } from 'react';
import { textSubmit } from '../../../actions/InputActions';
import Input from './Input';
import Display from './Display';

const InputPicker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = ({ target }) => {
    if (target.name === 'text') dispatch(textSubtmit(target.value));
  };

  return (
    <>
      <Input
        text={state.text}
        onSubmit={handleSubmit}
      />
      <Display text={state.text} />
    </>
  );
};

export default InputPicker;
