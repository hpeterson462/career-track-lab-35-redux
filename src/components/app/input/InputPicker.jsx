import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { textSubmit, fetchedUsers } from '../../../actions/InputActions';
import Input from './Input';
import Display from './Display';

const InputPicker = () => {
  const text = useSelector(state => state.text.text);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchedUsers(text));
  };

  const handleChange = (event) => {
    dispatch(textSubmit(event.target.value));
  };

  return (
    <>
      <Input
        text={text}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Display text={text} />
    </>
  );
};

export default InputPicker;
